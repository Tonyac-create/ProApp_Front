// import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { Announce } from "./AnnounceType";

function AnnouncementCard({
  title,
  town,
  date_of_start,
  job,
  description,
  isAnnouncePage,
}: Announce) {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription className="flex justify-end">
            {date_of_start}
          </CardDescription>
          <CardDescription>{town}</CardDescription>
          <CardDescription className="flex justify-end">{job}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="truncate ...">{description}</p>
        </CardContent>
        {isAnnouncePage && (
          <CardFooter className="flex justify-between">
          <Button variant="destructive">Supprimer</Button>
          <Button >Modifier</Button>
        </CardFooter>
        )}
      </Card>
    </>
  );
}

export default AnnouncementCard;
