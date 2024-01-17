import { ENDPOINTS } from '../endpoints';
import data from '../data.json';
import { Transcription } from '../types';

/**
 * This function is not fetching from the endpoint because it has some formatting issue on the JSON
 * So I've decided to emulate a API response with the payload expected by following this section
 * on the Readme file:
 * "Using Mocky should produce no cross origin errors and should work fine for this challenge.
 * If you do find issues, it's OK to copy the JSON into your preferred method to then provide the data to the app."
 */
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

export async function postTranscriptions(payload: Transcription[]) {
  await fetch(ENDPOINTS.TRANSCRIPTIONS, {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}
