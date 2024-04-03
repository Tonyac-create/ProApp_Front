"use client";
import { useState } from "react";
import { useNavigate } from "react-router-dom"
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
import eye from "../../assets/eye.svg"
import eyeOff from "../../assets/eyeOff.svg"
// import React from "react";

function Loginform({ setIsRegister, showPassword, setShowPassword }: any) {
  const navigate = useNavigate()

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");

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
    navigate("/home")
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
                  <Input type={showPassword ? "text" : "password"} placeholder="Mot de passe" {...field} />
                </FormControl>
                <img
                  className="cursor-pointer w-6 h-6 absolute top-8 right-1.5"
                  src={showPassword ? eyeOff : eye} alt="oeil"
                  onClick={() => setShowPassword(!showPassword)}
                />
                <FormMessage />
              </FormItem>
            )}
          />

          <a
            className="cursor-pointer text-gray-400 hover:text-black"
            onClick={() =>
              openModal("Modifier votre mot de passe", "Input pr mettre mail pour recevoir un mail pour modifier le mdp")
            }
          >
            Mot de passe perdu ?
          </a>

          <br />

          <Button type="submit">Se connecter</Button>
        </form>

        <a href="#" className="text-gray-400 hover:text-black" onClick={toggleSignUpForm}>
          Inscription
        </a>

        <Modale
          isOpen={isModalOpen}
          onClose={closeModal}
          title={modalTitle}
          content={modalContent}
        />
      </Form>
    </div>
  );
}

export default Loginform;
