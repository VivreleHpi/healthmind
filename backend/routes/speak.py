# routes/speak.py

from fastapi import APIRouter
from fastapi.responses import StreamingResponse
from pydantic import BaseModel
import io

router = APIRouter(
    prefix="/speak",
    tags=["Text-to-Speech"]
)

class TextToSpeak(BaseModel):
    text: str
    language: str = 'fr'

@router.post("/", summary="Convertir du texte en parole")
async def text_to_speech(data: TextToSpeak):
    """
    Accepte du texte et retourne un fichier audio MP3.
    Utilise gTTS pour la synthèse vocale.
    """
    # Logique de synthèse avec gTTS à implémenter ici
    # Exemple factice sans gTTS pour l'instant
    
    fake_audio_bytes = b"Ceci est un faux fichier audio MP3"
    
    return StreamingResponse(io.BytesIO(fake_audio_bytes), media_type="audio/mpeg")
