import { z } from "zod";

export const formLoginSchema = z.object({
  usermail: z.string().email({
    message: "Email invalide",
  }),
  password: z.string().regex(/^.*(?=.{5,})(?=.*\d).*$/, {
    message: "Min. 5 caractères, dont au moins un chiffre",
  }),
});

export const formSignUpSchema = z
  .object({
    usermail: z.string().email({
      message: "Email invalide",
    }),
    password: z.string().regex(/^.*(?=.{5,})(?=.*\d).*$/, {
      message: "Min. 5 caractères, dont au moins un chiffre",
    }),
    repeatPassword: z.string().regex(/^.*(?=.{5,})(?=.*\d).*$/),
  })
  .superRefine((value, ctx) => {
    if (value.password !== value.repeatPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["repeatPassword"],
        message: "Les mots de passe ne correspondent pas",
      });
    }
  });

export const EnterpriseSchema = z.array(
  z.object({
    _idEnterprise: z.string(),
    enterprise_name: z.string(),
    address: z.string(),
    zip_code: z.number(),
    town: z.string(),
    siret: z.number(),
    phone: z.string(),
    categories: z.string(),
    type: z.string(),
    announce_id: z.array(z.string())
  })
);


