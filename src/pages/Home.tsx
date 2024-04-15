// import React from 'react'
import AnnouncementCard from "@/components/Cards/AnnouncementCard";
import SearchAnnounce from "@/components/Forms/SearchAnnounce";
import ConnectedLayout from "@/components/Layouts/ConnectedLayout";
import { Key, useState } from "react";
import { useQuery } from "react-query";
import ReactPaginate from "react-paginate";
import { fetcherAnnounces } from "@/services/api/fetchAnnounces";

const Home = () => {
  const [page, setPage] = useState(0);
  const numberCardsOfPage = 10;
  const numberOfcardsVisited = page * numberCardsOfPage;

  const { data, isLoading, isError } = useQuery({
    queryKey: ["announces"],
    queryFn: fetcherAnnounces,
  });

  const totalPages = Math.ceil(data?.length / numberCardsOfPage);
  const changePage = ({ selected }: any) => {
    setPage(selected);
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Erreur...</p>;

  return (
    <>
      <ConnectedLayout>
        <SearchAnnounce />
        <div className="flex flex-col items-center w-4/5 lg:flex lg:flex-row lg:flex-wrap lg:w-3/4 lg:justify-center gap-5">
          {data
            ?.slice(
              numberOfcardsVisited,
              numberOfcardsVisited + numberCardsOfPage
            )
            .map(
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
                />
              )
            )}
        </div>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={totalPages}
          onPageChange={changePage}
          containerClassName={"navigationButtons"}
          previousLinkClassName={"previousButton"}
          nextLinkClassName={"nextButton"}
          disabledClassName={"navigationDisabled"}
          activeClassName={"navigationActive"}
        />
      </ConnectedLayout>
    </>
  );
};

export default Home;
