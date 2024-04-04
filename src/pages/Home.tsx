// import React from 'react'

import AnnouncementCard from "@/components/Announcement/AnnouncementCard";
import SearchAnnounce from "@/components/Forms/SearchAnnounce";
import NavBar from "@/components/Layouts/NavBar";

function Home() {
  return (
    <>
      <NavBar />
      <SearchAnnounce />
      <section className="flex flex-col justify-center gap-5 items-center md:flex md:flex-row md:flex-wrap pt-12">
        <AnnouncementCard />
        <AnnouncementCard />
        <AnnouncementCard />
        <AnnouncementCard />
        <AnnouncementCard />
      </section>
    </>
  );
}

export default Home;
