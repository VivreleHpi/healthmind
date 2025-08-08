# routes/analyze.py

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

router = APIRouter(
    prefix="/analyze",
    tags=["Content Analysis"]
)

class TextToAnalyze(BaseModel):
    text: str

@router.post("/text", summary="Analyser un texte")
async def analyze_text(data: TextToAnalyze):
    """
    Accepte un texte et retourne une analyse (humeur, etc.).
    Retourne une analyse factice pour le moment.
    """
    # Logique d'analyse avec GPT-OSS-120B à implémenter ici
    return {
        "original_text": data.text,
        "analysis": {
            "mood": "neutre",
            "sentiment_score": 0.5,
            "keywords": ["factice", "analyse"]
        }
    }

@router.post("/image", summary="Analyser une image (nutrition)")
async def analyze_image_nutrition(image_url: str):
    """
    Accepte l'URL d'une image et retourne une analyse nutritionnelle.
    Utilise une API comme LogMeal.
    """
    # Logique d'appel à l'API LogMeal à implémenter ici
    return {
        "image_url": image_url,
        "nutrition_estimate": {
            "calories": 350,
            "protein": 15,
            "carbs": 40,
            "fat": 15
        }
    }
