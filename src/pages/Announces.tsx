// import React from 'react'

// import AnnouncementCard from "@/components/Cards/AnnouncementCard"
import EndSignUpForm from "@/components/Forms/EndSignUpForm";
import ConnectedLayout from "@/components/Layouts/ConnectedLayout";

function Announces() {
  return (
    <>
      <ConnectedLayout>
        {/* <AnnouncementCard />
                <AnnouncementCard /> */}
        <EndSignUpForm />
      </ConnectedLayout>
    </>
  );
}

export default Announces;
