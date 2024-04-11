// import React from 'react'
import { useState } from "react";
import InformationCard from "../components/Cards/InformationCard";
import ConnectedLayout from "../components/Layouts/ConnectedLayout";
import { Button } from "../components/ui/button";
import EndSignUpForm from "@/components/Forms/EndSignUpForm";

const Account = ({ filteredEnterprise }: any) => {
  console.log("🚀 ~ Account ~ filteredEnterprise:", filteredEnterprise);

  const [isOpenUpdateForm, setIsOpenUpdateForm] = useState(false);

  return (
    <>
      <ConnectedLayout>
        {!isOpenUpdateForm ? (
          <div className=" flex flex-col items-center gap-4 w-3/4">
            <InformationCard
              filteredEnterprise={filteredEnterprise}
              setIsOpenUpdateForm={setIsOpenUpdateForm}
            />
            <a
              className="cursor-pointer text-gray-400 hover:text-black"
              href=""
            >
              Créer une autre entreprise
            </a>
            <a
              className="cursor-pointer text-gray-400 hover:text-black"
              href=""
            >
              Modifier mon mail ou mot de passe
            </a>
            <Button variant="destructive">Se désinscrire</Button>
          </div>
        ) : (
          <EndSignUpForm />
        )}
      </ConnectedLayout>
    </>
  );
};

export default Account;
