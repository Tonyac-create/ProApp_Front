// import React from 'react'

import AnnouncementCard from "@/components/Cards/AnnouncementCard";
import { EnterpriseSchema } from "@/components/Forms/formsSchemaZod";
import ConnectedLayout from "@/components/Layouts/ConnectedLayout";
import { useQuery } from "react-query";

const fetcherProfessionnalById = () =>
  fetch("/fakerBDD.json")
    .then((res) => res.json())
    .then((data) => {
      return data.professionnals;
    })
    .then(EnterpriseSchema.parse);

function Announces() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["professionnals"],
    queryFn: fetcherProfessionnalById,
  });

  const filteredProfessionnals = data?.filter(
    (professionnal) => professionnal._idEnterprise === "lkdso45"
  );

  if (filteredProfessionnals) {
    // Accédez aux éléments de filteredProfessionnals
    filteredProfessionnals.forEach((professional) => {
      const annouces_id = professional.announce_id
      console.log("🚀 ~ filteredProfessionnals.forEach ~ annouces_id:", annouces_id)
      return annouces_id
    });
  }

  

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Erreur...</p>;

  return (
    <>
      <ConnectedLayout>{/* <AnnouncementCard /> */}</ConnectedLayout>
    </>
  );
}

export default Announces;
