"use client";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { formLoginSchema } from "./formsSchema";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Modale from "../Modale/Modale";


function Loginform({ setIsRegister }: any) {
  const form = useForm<z.infer<typeof formLoginSchema>>({
    resolver: zodResolver(formLoginSchema),
    defaultValues: {
      usermail: "",
      password: "",
    },
  });

  const toggleSignUpForm = () => {
    setIsRegister(true);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");

  const openModal = (title: string, content: any) => {
    setModalTitle(title);
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onSubmit = (values: z.infer<typeof formLoginSchema>) => {
    console.log("values :", values);
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="usermail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mot de passe</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Mot de passe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <a
            className="cursor-pointer text-gray-400"
            onClick={() =>
              openModal("Modifier votre mot de passe", "Contenu de ma modal")
            }
          >
            Mot de passe perdu ?
          </a>
          
          <br />
          
          <Modale
            isOpen={isModalOpen}
            onClose={closeModal}
            title={modalTitle}
            content={modalContent}
          />

          <Button type="submit">Se connecter</Button>
        </form>

        <a href="#" className="text-gray-400" onClick={toggleSignUpForm}>
          Inscription
        </a>
      </Form>
    </div>
  );
}

export default Loginform;
