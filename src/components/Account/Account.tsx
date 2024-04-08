// import React from 'react'
import InformationCard from "../Cards/InformationCard";
import ConnectedLayout from "../Layouts/ConnectedLayout";
import { Button } from "../ui/button";

const Account = () => {
  return (
    <>
      <ConnectedLayout>
          <InformationCard />
          <div className="flex flex-col items-start">
            <a href="">Créer une autre entreprise</a>
            <a href="">Modifier mon mail ou mot de passe</a>
            <p>Vous ne voulez plus être dans l'application</p>
            <Button>Se désinscrire</Button>
          </div>
      </ConnectedLayout>
    </>
  );
};

export default Account;
