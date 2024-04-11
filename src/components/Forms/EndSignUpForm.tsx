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

function EndSignUpForm({ filteredEnterprise, isOpenUpdateForm }: any) {
  return (
    <form className="flex flex-col gap-5 w-1/2">
      <Input
        required
        type="text"
        placeholder="Nom de l'entreprise *"
        value={isOpenUpdateForm ? filteredEnterprise.enterprise_name : ""}
      />
      <Input
        required
        type="text"
        placeholder="Adresse *"
        value={isOpenUpdateForm ? filteredEnterprise.address : ""}
      />
      <Input
        type="text"
        placeholder="Adresse"
        value={isOpenUpdateForm ? filteredEnterprise.address : ""}
      />
      <Input
        required
        type="number"
        placeholder="Code Postal *"
        value={isOpenUpdateForm ? filteredEnterprise.zip_code : ""}
      />
      <Input
        required
        type="text"
        placeholder="ville *"
        value={isOpenUpdateForm ? filteredEnterprise.town : ""}
      />
      <Input
        type="text"
        placeholder="SIRET"
        value={isOpenUpdateForm ? filteredEnterprise.siret : ""}
      />
      <Input
        required
        type="text"
        placeholder="Téléphone *"
        value={isOpenUpdateForm ? filteredEnterprise.phone : ""}
      />
      <Select>
        <SelectTrigger className="w-2/4">
          <SelectValue placeholder="Catégories Professionnelles *" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="BTP">BTP</SelectItem>
          <SelectItem value="Service à la personne">
            Service à la personne
          </SelectItem>
          <SelectItem value="Santé et Bien-etre">Santé et Bien-etre</SelectItem>
          <SelectItem value="Hôtellerie et Restauration">
            Hôtellerie et Restauration
          </SelectItem>
          <SelectItem value="Artisanat et Création">
            Artisanat et Création
          </SelectItem>
          <SelectItem value="Mécanique">Mécanique</SelectItem>
          <SelectItem value="Métiers du numériques/Informatique">
            Métiers du numériques/Informatique
          </SelectItem>
          <SelectItem value="Autre">Autre</SelectItem>
        </SelectContent>
      </Select>
      <Input
        type="text"
        placeholder="Précision: Garage moto, Macon, etc... *"
        value={isOpenUpdateForm ? filteredEnterprise.type : ""}
      />
      <Button type="submit">Valider ses informations</Button>
      {isOpenUpdateForm ? <Button>Annuler</Button> : ""}
    </form>
  );
}

export default EndSignUpForm;
