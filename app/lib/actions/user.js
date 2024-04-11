"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { connectToDB } from "../utils";
import { User } from "../models/user";

export const addUser = async (formData) => {
  const { username, email, password } = Object.fromEntries(formData);

  // console.log(username, email, password);

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
