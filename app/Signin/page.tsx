import FormInput from "../ui/FormInput";
import Link from "next/link";
import { addUser } from "@/app/lib/actions/user";

function Signin() {
  return (
    <section className="flex justify-center items-center m-4 h-[90vh]">
      <form
        action={addUser}
        className="bg-gradient-to-tr from-[#5eabc3] to-[#0c697d] rounded-3xl p-8 grid gap-5"
      >
        <h1 className="text-3xl text-center font-bold tracking-widest">
          CADASTRAR
        </h1>
        <FormInput type="text" name="username" placeHolder="Username" />
        <FormInput type="email" name="email" placeHolder="Email" />
        <FormInput type="password" name="password" placeHolder="Password" />

        <button className="border-2 border-black bg-stone-900 rounded-3xl p-3 tracking-widest text-lg font-semibold my-3">
          ENVIAR
        </button>
      </form>
    </section>
  );
}

export default Signin;
