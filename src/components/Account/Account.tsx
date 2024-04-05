// import React from 'react'
import EnterpriseCard from "../Cards/EnterpriseCard";
import { Button } from "../ui/button";

function Account() {
  return (
    <div className="flex flex-col items-start">
      <EnterpriseCard />
      <div className="flex flex-col items-start">
        <a href="">Créer une autre entreprise</a>
        <a href="">Modifier mon mail ou mot de passe</a>
        <p>Vous ne voulez plus être dans l'application</p>
        <Button>Se désinscrire</Button>
      </div>
    </div>
  );
}

export default Account;
