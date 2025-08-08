# main.py : Point d'entrée de l'API FastAPI pour HealthMind

from fastapi import FastAPI
from dotenv import load_dotenv
import os

# Charger les variables d'environnement depuis le fichier .env
load_dotenv()

# Importer les routeurs
from routes import transcribe, analyze, speak, progress

app = FastAPI(
    title="HealthMind API",
    description="API pour l'agent intelligent de suivi de santé mentale et de régime.",
    version="0.1.0"
)

# Inclure les routeurs dans l'application principale
app.include_router(transcribe.router)
app.include_router(analyze.router)
app.include_router(speak.router)
app.include_router(progress.router)

@app.get("/", tags=["Root"], summary="Point de terminaison racine de l'API")
def read_root():
    """
    Retourne un message de bienvenue.
    """
    return {"message": "Bienvenue sur l'API HealthMind !"}

# Pour un développement local, vous pouvez ajouter ceci pour démarrer le serveur :
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
