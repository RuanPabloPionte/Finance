"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { connectToDB } from "../utils";
import { IUser, User } from "../models/user";
import { signIn } from "@/auth";
import { HydratedDocument } from "mongoose";

export const addUser = async (formData: FormData) => {
  const { username, email, password } = Object.fromEntries(formData);
  try {
    connectToDB();

    const newUser = {
      username,
      email,
      password,
    };
    const user: HydratedDocument<IUser> = await User.create(newUser);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create user!");
  }

  revalidatePath("/Finance");
  redirect("/Finance");
};

export const getUser = async (id: string) => {
  try {
    connectToDB();

    const user = await User.findById(id).populate("transactions");
    return user;
  } catch (error) {
    console.log(error);
  }
};

export const authenticate = async (_prevState: any, formData: FormData) => {
  // console.log(formData);
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    //
    console.log(err);
  }
};
