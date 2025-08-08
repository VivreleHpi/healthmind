# routes/transcribe.py

from fastapi import APIRouter, UploadFile, File, HTTPException

router = APIRouter(
    prefix="/transcribe",
    tags=["Audio Transcription"]
)

@router.post("/", summary="Transcrire un fichier audio")
async def transcribe_audio(file: UploadFile = File(...)):
    """
    Accepte un fichier audio et retourne sa transcription.
    Pour l'instant, retourne un texte factice.
    """
    if not file.content_type.startswith('audio/'):
        raise HTTPException(status_code=400, detail="Le fichier doit être un fichier audio.")

    # Logique de transcription avec Whisper à implémenter ici
    # Par exemple: contents = await file.read()
    # transcription = whisper.transcribe(contents)

    return {
        "filename": file.filename,
        "content_type": file.content_type,
        "transcription": "Ceci est une transcription factice de votre fichier audio."
    }
