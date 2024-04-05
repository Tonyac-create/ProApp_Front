// import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
//   CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function AnnouncementCard() {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Titre de l'annonce</CardTitle>
          <CardDescription className="flex justify-end">31/03/2024</CardDescription>
          <CardDescription>Secteur(ville)</CardDescription>
          <CardDescription className="flex justify-end">Poste</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="truncate ...">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil consequuntur placeat quis. Cupiditate, iste. Odit quas officiis facere sequi corporis ullam? Unde quo autem cumque asperiores voluptate nobis sint corrupti?
          Rem et repudiandae, minima incidunt optio neque deserunt exercitationem maiores unde odio. Aut quisquam consequatur fugit quas tempore, tempora aperiam numquam doloremque nulla delectus eligendi possimus a, hic ex in.
          Minima vel repellendus, in ut aliquid corrupti vero deleniti libero totam ab velit ratione nemo animi ad ea ipsum omnis architecto, aut natus sunt assumenda rerum. Quasi voluptates quidem culpa.
          Eius quos, beatae veritatis obcaecati, iusto facilis sed, aut facere enim sunt nihil ut quasi fugiat esse laboriosam a distinctio quidem? Voluptas, exercitationem nisi! Sunt earum reiciendis consequuntur modi rem.
          Eius quos veritatis dicta hic? Quod similique corrupti eum dicta eaque, ipsam iusto architecto nam quo maiores id accusamus ullam dignissimos cupiditate consectetur itaque ratione distinctio minima assumenda molestiae quibusdam?</p>
        </CardContent>
      </Card>
    </>
  );
}

export default AnnouncementCard;
