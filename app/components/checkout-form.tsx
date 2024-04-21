"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const signUpSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(10, "Password must be 10 chars"),
    confirmedPassword: z.string(),
    address: z.string().optional(),
  })
  .refine(data => data.password === data.confirmedPassword, {
    message: "Password must match",
    path: ["confirmedPassword"],
  });

type SignUp = z.infer<typeof signUpSchema>;

function CheckoutForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SignUp>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (formData: SignUp) => {
    console.log(formData);
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Name" />
      <input
        {...register("email")}
        type="email"
        placeholder="Email"
        className="px-4 py-2 rounded"
      />
      <input type="text" placeholder="Address" />
      <input type="text" placeholder="City" />
      <input type="text" placeholder="State" />
      <input type="text" placeholder="Zip" />
      <input type="checkbox" name="" />

      <button className="bg-sky-800 text-white" type="submit">
        Submit
      </button>
    </form>
  );
}

export default CheckoutForm;
