# routes/progress.py

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List

router = APIRouter(
    prefix="/progress",
    tags=["Progress Tracking"]
)

class ProgressData(BaseModel):
    metric: str
    value: float

@router.post("/", summary="Enregistrer une nouvelle donnée de progression")
async def record_progress(data: ProgressData):
    """
    Enregistre une nouvelle métrique pour l'utilisateur connecté.
    (Nécessite l'intégration de l'authentification Supabase)
    """
    # Logique d'insertion dans la table `progress` de Supabase à implémenter
    return {
        "status": "success",
        "message": f"Donnée pour '{data.metric}' enregistrée avec la valeur {data.value}."
    }

@router.get("/{metric}", summary="Obtenir l'historique d'une métrique")
async def get_progress_history(metric: str):
    """
    Récupère l'historique des données pour une métrique spécifique.
    """
    # Logique de récupération depuis Supabase à implémenter
    return {
        "metric": metric,
        "history": [
            {"date": "2025-08-07T10:00:00Z", "value": 70.5},
            {"date": "2025-08-08T10:15:00Z", "value": 70.2}
        ]
    }
