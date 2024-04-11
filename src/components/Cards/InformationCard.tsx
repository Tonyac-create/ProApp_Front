import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useQuery } from "react-query";
import { EnterpriseSchema } from "../Forms/formsSchemaZod";

const fetchEnterprise = () =>
  fetch("/fakerBDD.json")
    .then((res) => res.json())
    .then((data) => {
      return data.professionnals;
    })
    .then(EnterpriseSchema.parse);

function InformationCard({ setIsOpenUpdateForm }: any) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["professionnals"],
    queryFn: fetchEnterprise,
  });

  const filteredEnterprise = data?.find(
    (enterprise) => enterprise._idEnterprise === "lkdso45"
  );

  const toggleUpdateForm = () => {
    setIsOpenUpdateForm(true);
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Erreur...</p>;

  return (
    <>
      <Card key={filteredEnterprise?._idEnterprise}>
        <CardHeader>
          <CardTitle>{filteredEnterprise?.enterprise_name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{filteredEnterprise?.address}</p>
          <p>{`${filteredEnterprise?.zip_code} ${filteredEnterprise?.town}`}</p>
          <p>SIRET : {filteredEnterprise?.siret}</p>
          <p>Téléphone : {filteredEnterprise?.phone}</p>
          <p>Catégorie : {filteredEnterprise?.categories}</p>
          <p>Précision : {filteredEnterprise?.type}</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="destructive">Supprimer</Button>
          <Button onClick={toggleUpdateForm}>Modifier</Button>
        </CardFooter>
      </Card>
    </>
  );
}

export default InformationCard;
