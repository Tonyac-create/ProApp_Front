import { z } from "zod";

export const AnnounceSchema = z.array(
  z.object({
    _idAnnounce: z.string(),
    title: z.string(),
    date_of_start: z.string(),
    job: z.string(),
    description: z.string(),
  })
);
