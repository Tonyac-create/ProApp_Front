// import React from 'react'

import { AnnounceSchema } from "@/components/Cards/AnnounceSchema";
import AnnouncementCard from "@/components/Cards/AnnouncementCard";
import { EnterpriseSchema } from "@/components/Forms/formsSchemaZod";
import ConnectedLayout from "@/components/Layouts/ConnectedLayout";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

const fetcherProfessionnalById = () =>
  fetch("/fakerBDD.json")
    .then((res) => res.json())
    .then((data) => {
      return data.professionnals;
    })
    .then(EnterpriseSchema.parse);

const fetcherAnnounces = () =>
  fetch("/fakerBDD.json")
    .then((res) => res.json())
    .then((data) => {
      return data.announces;
    })
    .then(AnnounceSchema.parse);

function Announces() {
  const [announcesId, setAnnouncesId] = useState<string[]>([]);
  const { data: professionnalsData, isLoading: isProfessionnalsLoading, isError: isProfessionnalsError } = useQuery({
    queryKey: ["professionnals"],
    queryFn: fetcherProfessionnalById,
  });

  const { data: announcesData, isLoading: isAnnouncesLoading, isError: isAnnouncesError } = useQuery({
    queryKey: ["announces"],
    queryFn: fetcherAnnounces,
  });

  useEffect(() => {
    if (!isProfessionnalsLoading && !isProfessionnalsError && professionnalsData) {
      const updatedAnnouncesId = professionnalsData.reduce((acc, professional) => {
        if (professional._idEnterprise === "lkdso45") {
          acc.push(...professional.announce_id);
        }
        return acc;
      }, [] as string[]);
      setAnnouncesId(updatedAnnouncesId);
    }
  }, [professionnalsData, isProfessionnalsLoading, isProfessionnalsError]);

  const filteredAnnounces = announcesData?.filter((announce) =>
    announcesId?.includes(announce._idAnnounce)
  );

  if (isProfessionnalsLoading || isAnnouncesLoading) return <p>Loading...</p>;
  if (isProfessionnalsError || isAnnouncesError) return <p>Erreur...</p>;

  return (
    <>
      <ConnectedLayout>
        {filteredAnnounces?.map((announce) => (
          <AnnouncementCard
            key={announce._idAnnounce}
            title={announce.title}
            town={announce.town}
            date_of_start={announce.date_of_start}
            job={announce.job}
            description={announce.description}
          />
        ))}
      </ConnectedLayout>
    </>
  );
}

export default Announces;
