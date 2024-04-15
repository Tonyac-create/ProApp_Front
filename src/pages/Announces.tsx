// import React from 'react'
import AnnouncementCard from "@/components/Cards/AnnouncementCard";
import ConnectedLayout from "@/components/Layouts/ConnectedLayout";
import { fetcherAnnounces } from "@/services/api/fetchAnnounces";
import { fetcherProfessionnalById } from "@/services/api/fetchProfessionnal";
import { Key, useEffect, useState } from "react";
import { useQuery } from "react-query";

function Announces() {
  const [isAnnouncePage, _setIsAnnouncePage] = useState(true);
  const [announcesId, setAnnouncesId] = useState<string[]>([]);
  const {
    data: professionnalsData,
    isLoading: isProfessionnalsLoading,
    isError: isProfessionnalsError,
  } = useQuery({
    queryKey: ["professionnals"],
    queryFn: fetcherProfessionnalById,
  });

  const {
    data: announcesData,
    isLoading: isAnnouncesLoading,
    isError: isAnnouncesError,
  } = useQuery({
    queryKey: ["announces"],
    queryFn: fetcherAnnounces,
  });

  useEffect(() => {
    if (
      !isProfessionnalsLoading &&
      !isProfessionnalsError &&
      professionnalsData
    ) {
      const updatedAnnouncesId = professionnalsData.reduce(
        (acc, professional) => {
          if (professional._idEnterprise === "lkdso45") {
            acc.push(...professional.announce_id);
          }
          return acc;
        },
        [] as string[]
      );
      setAnnouncesId(updatedAnnouncesId);
    }
  }, [professionnalsData, isProfessionnalsLoading, isProfessionnalsError]);

  const filteredAnnounces = announcesData?.filter(
    (announce: { _idAnnounce: string }) =>
      announcesId?.includes(announce._idAnnounce)
  );

  if (isProfessionnalsLoading || isAnnouncesLoading) return <p>Loading...</p>;
  if (isProfessionnalsError || isAnnouncesError) return <p>Erreur...</p>;

  return (
    <>
      <ConnectedLayout>
        {filteredAnnounces?.map(
          (announce: {
            _idAnnounce: Key | null | undefined;
            title: string;
            town: string;
            date_of_start: string;
            job: string;
            description: string;
          }) => (
            <AnnouncementCard
              key={announce._idAnnounce}
              title={announce.title}
              town={announce.town}
              date_of_start={announce.date_of_start}
              job={announce.job}
              description={announce.description}
              isAnnouncePage={isAnnouncePage}
            />
          )
        )}
      </ConnectedLayout>
    </>
  );
}

export default Announces;
