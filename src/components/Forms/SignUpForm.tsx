"use client";
// import React from 'react'
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { formSignUpSchema } from "./formsSchemaZod";

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
import eye from "../../assets/eye.svg"
import eyeOff from "../../assets/eyeOff.svg"
import { useState } from "react";

function SignUpForm({showPassword, setShowPassword}:any) {
  const [showRepeatPassword, setShowRepeatPassword] = useState(false)

  const form = useForm<z.infer<typeof formSignUpSchema>>({
    resolver: zodResolver(formSignUpSchema),
    defaultValues: {
      usermail: "",
      password: "",
      repeatPassword: "",
    },
  });  

  const onSubmit = (values: z.infer<typeof formSignUpSchema>) => {
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
          <FormField
            control={form.control}
            name="repeatPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Répétez le mot de passe</FormLabel>
                <FormControl>
                  <Input type={showRepeatPassword ? "text" : "password"} placeholder="Répétez le mot de passe" {...field} />
                </FormControl>
                <img
                  className="cursor-pointer w-6 h-6 absolute top-8 right-1.5"
                  src={showRepeatPassword ? eyeOff : eye} alt="oeil"
                  onClick={() => setShowRepeatPassword(!showRepeatPassword)}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Valider</Button>
        </form>
      </Form>
    </div>
  );
}

export default SignUpForm;
