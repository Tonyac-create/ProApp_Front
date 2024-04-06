// import React from 'react'
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
//   CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import fakerBDD from "../Forms/fakerBDD";

function InformationCard() {
  const information = fakerBDD
  console.log("🚀 ~ InformationCard ~ information:", information)
  
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Entreprise</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Adresse</p>
          <p>Code Postal Ville</p>
          <p>SIRET</p>
          <p>Téléphone</p>
          <p>Catégories Professionnelles</p>
          <p>Précision</p>
        </CardContent>
        <CardFooter className="flex justify-between">
        <Button variant="outline">Supprimer</Button>
        <Button>Modifier</Button>
        </CardFooter>
      </Card>
    </>
  );
}

export default InformationCard;
