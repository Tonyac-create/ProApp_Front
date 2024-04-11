// import React from 'react'
import AnnouncementCard from "@/components/Cards/AnnouncementCard";
import SearchAnnounce from "@/components/Forms/SearchAnnounce";
import ConnectedLayout from "@/components/Layouts/ConnectedLayout";
import { useState } from "react";
import { useQuery } from "react-query";
import { AnnounceSchema } from "@/components/Cards/AnnounceSchema";
import ReactPaginate from "react-paginate";

const fetchAnnounces = () =>
  fetch("/fakerBDD.json")
    .then((res) => res.json())
    .then((data) => {
      return data.announces;
    })
    .then(AnnounceSchema.parse);

const Home = () => {
  const [page, setPage] = useState(0);
  const numberCardsOfPage = 10;
  const numberOfcardsVisited = page * numberCardsOfPage;

  const { data, isLoading, isError } = useQuery({
    queryKey: ["announces"],
    queryFn: fetchAnnounces,
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
            .map((announce) => (
              <AnnouncementCard
                key={announce._idAnnounce}
                title={announce.title}
                date_of_start={announce.date_of_start}
                job={announce.job}
                description={announce.description}
              />
            ))}
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
