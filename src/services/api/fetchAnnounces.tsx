import { AnnounceSchema } from "@/components/Cards/AnnounceSchema";

export const fetcherAnnounces = () =>
  fetch("/fakerBDD.json")
    .then((res) => res.json())
    .then((data) => {
      return data.announces;
    })