// import React from 'react'
import AnnouncementCard from "@/components/Cards/AnnouncementCard";
import SearchAnnounce from "@/components/Forms/SearchAnnounce";
import ConnectedLayout from "@/components/Layouts/ConnectedLayout";
import { useState } from "react";
import { useQuery } from "react-query";
import { AnnounceSchema } from "@/components/Cards/AnnounceSchema";

const fetchAnnounces = () =>
  fetch("/fakerBDD.json")
    .then((res) => res.json())
    .then((data) => {
      return data.announces;
    })
    .then(AnnounceSchema.parse);

const Home = () => {
  const rowsPerPage = 4;
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(rowsPerPage);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["announces"],
    queryFn: fetchAnnounces,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Erreur...</p>;

  return (
    <>
      <ConnectedLayout>
        <SearchAnnounce />
            <div className="flex flex-col items-center w-4/5 lg:flex lg:flex-row lg:flex-wrap lg:w-3/4 lg:justify-center gap-5">
              {data?.slice(startIndex, endIndex).map((announce) => (
               
                    <AnnouncementCard
                      key={announce._idAnnounce}
                      title={announce.title}
                      date_of_start={announce.date_of_start}
                      job={announce.job}
                      description={announce.description}
                    />
                 
              ))}
            </div>

        {/* <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                className={
                  startIndex === 0 ? "pointer-events-none opacity-50" : undefined
                }
                onClick={() => {
                  setStartIndex(startIndex - rowsPerPage)
                  setEndIndex(endIndex - rowsPerPage)
                }}
              />
            </PaginationItem>

            <PaginationItem>
              <PaginationNext
                className={
                  endIndex === 16 ? "pointer-events-none opacity-50" : undefined
                }
                onClick={() => {
                  setStartIndex(startIndex + rowsPerPage)
                  setEndIndex(endIndex + rowsPerPage)
                }}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination> */}

        {/* <div className="flex flex-col items-center w-4/5 lg:flex lg:flex-row lg:flex-wrap lg:w-3/4 lg:justify-center gap-5">
          {data?.map((announce) => (
            <AnnouncementCard
              key={announce._idAnnounce}
              title={announce.title}
              date_of_start={announce.date_of_start}
              job={announce.job}
              description={announce.description}
            />
          ))}
        </div> */}
      </ConnectedLayout>
    </>
  );
};

export default Home;
