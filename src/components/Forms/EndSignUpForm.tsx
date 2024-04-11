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
import { useState } from "react";

function EndSignUpForm({ filteredEnterprise, isOpenUpdateForm }: any) {
  const [formData, setFormData] = useState({
    enterpriseName: isOpenUpdateForm ? filteredEnterprise.enterprise_name : "",
    addressRequired: isOpenUpdateForm ? filteredEnterprise.address : "",
    address: isOpenUpdateForm ? filteredEnterprise.address : "",
    zipCode: isOpenUpdateForm ? filteredEnterprise.zip_code : "",
    town: isOpenUpdateForm ? filteredEnterprise.town : "",
    siret: isOpenUpdateForm ? filteredEnterprise.siret : "",
    phone: isOpenUpdateForm ? filteredEnterprise.phone : "",
    type: isOpenUpdateForm ? filteredEnterprise.type : "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form className="flex flex-col gap-5 w-1/2">
      <Input
        required
        type="text"
        name="enterpriseName"
        placeholder="Nom de l'entreprise *"
        value={formData.enterpriseName}
        onChange={(e) => handleInputChange(e)}
      />
      <Input
        required
        type="text"
        name="addressRequired"
        placeholder="Adresse *"
        value={formData.addressRequired}
        onChange={(e) => handleInputChange(e)}
      />
      <Input
        type="text"
        name="address"
        placeholder="Adresse"
        value={formData.addressRequired}
        onChange={(e) => handleInputChange(e)}
      />
      <Input
        required
        type="number"
        name="zipcode"
        placeholder="Code Postal *"
        value={formData.zipCode}
        onChange={(e) => handleInputChange(e)}
      />
      <Input
        required
        type="text"
        name="town"
        placeholder="ville *"
        value={formData.town}
        onChange={(e) => handleInputChange(e)}
      />
      <Input
        type="text"
        name="town"
        placeholder="SIRET"
        value={formData.town}
        onChange={(e) => handleInputChange(e)}
      />
      <Input
        required
        type="text"
        name="phone"
        placeholder="Téléphone *"
        value={formData.phone}
        onChange={(e) => handleInputChange(e)}
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
        name="phone"
        placeholder="Précision: Garage moto, Macon, etc... *"
        value={formData.type}
        onChange={(e) => handleInputChange(e)}
      />
      <Button className="w-1/2" type="submit">
        Valider ses informations
      </Button>
      {isOpenUpdateForm ? <Button className="w-1/2">Annuler</Button> : ""}
    </form>
  );
}

export default EndSignUpForm;
