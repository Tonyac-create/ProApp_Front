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
import { useEffect, useState } from "react";

function InformationCard() {
  const [informationOfEnterprise, setInformationOfEnterprise] = useState([{}])
  const [informationOfStudent, setInformationOfStudent] = useState([{}])

  const information = fakerBDD
  // console.log("🚀 ~ InformationCard ~ information:", information)
  useEffect(() => {

    setInformationOfEnterprise(information.professionnals)
    setInformationOfStudent(information.students)
  }, [])
  // console.log("🚀 ~ InformationCard ~ informationOfStudent:", informationOfStudent)
  // console.log("🚀 ~ InformationCard ~ informationOfEnterprise:", informationOfEnterprise)
  informationOfEnterprise.map((enterprise) => {
    console.log(enterprise);

  })

  return (
    <>
      {informationOfEnterprise.map((enterprise, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{ }</CardTitle>
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
      ))}

    </>
  );
}

export default InformationCard;
