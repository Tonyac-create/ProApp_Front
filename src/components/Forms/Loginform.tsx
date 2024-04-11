"use client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { formLoginSchema } from "./formsSchemaZod";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
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
import eye from "../../assets/eye.svg";
import eyeOff from "../../assets/eyeOff.svg";
import fakerBDD from "../../../fakerBDD.json";

// import React from "react";

function Loginform({ setIsNoRegister, showPassword, setShowPassword }: any) {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNotValidPassword, setIsNotValidPassword] = useState(false);

  const form = useForm<z.infer<typeof formLoginSchema>>({
    resolver: zodResolver(formLoginSchema),
    defaultValues: {
      usermail: "",
      password: "",
    },
  });

  const toggleSignUpForm = () => {
    setIsNoRegister(true);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const jsonData = fakerBDD;

  const onSubmit = async (values: z.infer<typeof formLoginSchema>) => {
    const userMail: string | undefined = jsonData.users[0].email;
    const userPassword: string | undefined = jsonData.users[0].password;

    if (values.usermail === userMail && values.password === userPassword) {
      console.log("check mail ok");
      navigate("/home");
    } else {
      setIsNotValidPassword(true);
    }
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
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Mot de passe"
                    {...field}
                  />
                </FormControl>
                <img
                  className="cursor-pointer w-6 h-6 absolute top-8 right-1.5"
                  src={showPassword ? eyeOff : eye}
                  alt="oeil"
                  onClick={() => setShowPassword(!showPassword)}
                />
                <FormMessage />
              </FormItem>
            )}
          />

          <a
            className="cursor-pointer text-gray-400 hover:text-black"
            onClick={() => openModal()}
          >
            Mot de passe perdu ?
          </a>

          <br />

          <Button type="submit">Se connecter</Button>
        </form>

        <a
          href="#"
          className="text-gray-400 hover:text-black"
          onClick={toggleSignUpForm}
        >
          Inscription
        </a>

        <Modale
          isOpen={isModalOpen}
          onClose={closeModal}
          title="Modifier votre mot de passe"
          content={
            <FormField
              control={form.control}
              name="usermail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Veuillez donner votre email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          }
        />

        {isNotValidPassword && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Erreur</AlertTitle>
            <AlertDescription>Email ou mot de passe invalide</AlertDescription>
          </Alert>
        )}
      </Form>
    </div>
  );
}

export default Loginform;
