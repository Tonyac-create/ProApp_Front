// import React from 'react'
import InformationCard from "../Cards/InformationCard";
import NavBar from "../Layouts/NavBar copy";
import { Button } from "../ui/button";

const Account = () => {
  return (
    <>
    <NavBar />
    <div className="flex flex-col items-center">
      <InformationCard />
      <div className="flex flex-col items-start">
        <a href="">Créer une autre entreprise</a>
        <a href="">Modifier mon mail ou mot de passe</a>
        <p>Vous ne voulez plus être dans l'application</p>
        <Button>Se désinscrire</Button>
      </div>
    </div>
    </>
  );
}

export default Account;
