import * as yup from 'yup';
import { playerNoteValidationSchema } from 'validationSchema/player-notes';

export const coachValidationSchema = yup.object().shape({
  user_id: yup.string().nullable().required(),
  academy_id: yup.string().nullable().required(),
  player_note: yup.array().of(playerNoteValidationSchema),
});
