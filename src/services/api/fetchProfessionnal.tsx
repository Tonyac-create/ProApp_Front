import { EnterpriseSchema } from "@/components/Forms/formsSchemaZod";

export const fetcherProfessionnalById = () =>
fetch("/fakerBDD.json")
  .then((res) => res.json())
  .then((data) => {
    return data.professionnals;
  })
  .then(EnterpriseSchema.parse);