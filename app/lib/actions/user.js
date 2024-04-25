"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { connectToDB } from "../utils";
import { User } from "../models/user";
import { signIn } from "@/auth";

export const addUser = async (formData) => {
  const { username, email, password } = Object.fromEntries(formData);
  try {
    connectToDB();

    const newUser = {
      username,
      email,
      password,
    };
    await User.create(newUser);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create user!");
  }

  revalidatePath("/Finance");
  redirect("/Finance");
};

export const getUser = async (id) => {
  try {
    connectToDB();

    const user = await User.findById(id).populate("transactions");

    return user;
  } catch (error) {
    console.log(error);
  }
};

export const authenticate = async (prevState, formData) => {
  // console.log(formData);
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    if (err.message.includes("CredentialsSignin")) {
      return "Wrong Credentials";
    }
    throw err;
  }
};
