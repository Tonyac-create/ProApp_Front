// import React from 'react'
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";

function EndSignUpForm() {
  return (
    <form className="flex flex-col gap-5 w-1/2">
      <Input required type="text" placeholder="Nom de l'entreprise *" />
      <Input required type="text" placeholder="Adresse *" />
      <Input type="text" placeholder="Adresse" />
      <Input required type="number" placeholder="Code postal *" />
      <Input required type="text" placeholder="Ville *" />
      <Input type="text" placeholder="N° SIRET" />
      <Input required type="text" placeholder="Téléphone *" />
      <Select>
        <SelectTrigger className="w-2/4">
          <SelectValue placeholder="Catégories Professionnelles *" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="BTP">BTP</SelectItem>
          <SelectItem value="Service à la personne">Service à la personne</SelectItem>
          <SelectItem value="Santé et Bien-etre">Santé et Bien-etre</SelectItem>
          <SelectItem value="Hôtellerie et Restauration">Hôtellerie et Restauration</SelectItem>
          <SelectItem value="Artisanat et Création">Artisanat et Création</SelectItem>
          <SelectItem value="Mécanique">Mécanique</SelectItem>
          <SelectItem value="Métiers du numériques/Informatique">
            Métiers du numériques/Informatique
          </SelectItem>
          <SelectItem value="Autre">Autre</SelectItem>
        </SelectContent>
      </Select>
      <Input type="text" placeholder="Précision: Garage moto, Macon, etc... *" />
      <Button type="submit">Valider ses informations</Button>
    </form>
  );
}

export default EndSignUpForm;
