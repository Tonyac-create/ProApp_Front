// import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
//   CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Announce = {
  title: string;
  town: string;
  date_of_start: string;
  job: string;
  description: string;
}

function AnnouncementCard({title, town, date_of_start, job, description}: Announce) {

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription className="flex justify-end">{date_of_start}</CardDescription>
          <CardDescription>{town}</CardDescription>
          <CardDescription className="flex justify-end">{job}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="truncate ...">{description}</p>
        </CardContent>
      </Card>
    </>
  );
}

export default AnnouncementCard;
