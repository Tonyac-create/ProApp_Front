import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function InformationCard({ setIsOpenUpdateForm, filteredEnterprise }: any) {

  const toggleUpdateForm = () => {
    setIsOpenUpdateForm(true)
  };

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
