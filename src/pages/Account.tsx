// import React from 'react'
import { useState } from "react";
import InformationCard from "../components/Cards/InformationCard";
import ConnectedLayout from "../components/Layouts/ConnectedLayout";
import { Button } from "../components/ui/button";
import EndSignUpForm from "@/components/Forms/EndSignUpForm";
import { useQuery } from "react-query";
import { EnterpriseSchema } from "@/components/Forms/formsSchemaZod";

const fetchEnterprise = () =>
  fetch("/fakerBDD.json")
    .then((res) => res.json())
    .then((data) => {
      return data.professionnals
    })
    .then(EnterpriseSchema.parse)

const Account = () => {
  const [isOpenUpdateForm, setIsOpenUpdateForm] = useState(false)

  const { data, isLoading, isError } = useQuery({
    queryKey: ["professionnals"],
    queryFn: fetchEnterprise,
  });

  const filteredEnterprise = data?.find(
    (enterprise) => enterprise._idEnterprise === "lkdso45"
  );

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Erreur...</p>

  return (
    <>
      <ConnectedLayout>
        {!isOpenUpdateForm ? (
          <div className=" flex flex-col items-center gap-4 w-3/4">
            <InformationCard
              filteredEnterprise={filteredEnterprise}
              isOpenUpdateForm={isOpenUpdateForm}
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
          <EndSignUpForm
            filteredEnterprise={filteredEnterprise}
            isOpenUpdateForm={isOpenUpdateForm}
          />
        )}
      </ConnectedLayout>
    </>
  );
};

export default Account;
