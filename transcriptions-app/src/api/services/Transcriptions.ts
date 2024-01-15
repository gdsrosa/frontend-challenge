import { ENDPOINTS } from '../endpoints';
import data from '../data.json';
import { Transcription } from '../types';

export async function getTranscriptions(): Promise<Transcription[]> {
  return new Promise<Transcription[]>((resolve, reject) => {
    if (!data) {
      return reject(
        'Unable to fetch transcriptions. Check with your infrastructure team.',
      );
    }
    setTimeout(() => {
      return resolve(data);
    }, 1000);
  });
}

export async function postTranscriptions(payload: Transcription) {
  await fetch(ENDPOINTS.TRANSCRIPTIONS, {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}
