// import React from 'react'
import AnnouncementCard from "@/components/Cards/AnnouncementCard";
import SearchAnnounce from "@/components/Forms/SearchAnnounce";
import ConnectedLayout from "@/components/Layouts/ConnectedLayout";

const Home = () => {
  return (
    <>
      <ConnectedLayout>
        <SearchAnnounce />
        {/* <div className="flex flex-col justify-center gap-5 items-center lg:flex lg:flex-row lg:flex-wrap pt-12"> */}
        <div className="flex flex-col items-center w-4/5 lg:flex lg:flex-row lg:flex-wrap lg:w-3/4 lg:justify-center gap-5">
          <AnnouncementCard />
          <AnnouncementCard />
          <AnnouncementCard />
          <AnnouncementCard />
          <AnnouncementCard />
        </div>
        {/* </div> */}
      </ConnectedLayout>
    </>
  );
};

export default Home;
