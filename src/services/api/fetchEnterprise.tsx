import { EnterpriseSchema } from "@/components/Forms/formsSchemaZod"

export const fetchEnterprise = () =>
  fetch("/fakerBDD.json")
    .then((res) => res.json())
    .then((data) => {
      return data.professionnals
    })
    .then(EnterpriseSchema.parse)