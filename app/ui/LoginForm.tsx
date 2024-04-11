import { FaUser, FaLock } from "react-icons/fa";
import FormInput from "./FormInput";
import Link from "next/link";

function LoginForm() {
  return (
    <form
      action=""
      className="bg-gradient-to-tr from-[#5eabc3] to-[#0c697d] rounded-3xl p-8 grid gap-5"
    >
      <h1 className="text-3xl text-center font-bold">LOGIN</h1>
      <FormInput
        type="text"
        name="username"
        placeHolder="Username"
        icon={FaUser}
      />
      <FormInput
        type="password"
        name="password"
        placeHolder="Password"
        icon={FaLock}
      />
      <div className="flex gap-2 items-center">
        <input type="checkbox" id="remeberMeCheckbox" className="w-4 h-4" />
        <label htmlFor="remeberMeCheckbox" className="cursor-pointer">
          Lembrar de mim
        </label>
        <span className="text-blue-900">Esqueceu a senha</span>
      </div>
      <button className="border-2 border-black bg-stone-900 rounded-3xl p-3 tracking-widest text-lg font-semibold my-3">
        ENTRAR
      </button>
      <p>
        Não possui uma conta?{" "}
        <span className="text-blue-900 hover:text-red-500 hover:border-b-2 transition-all duration-100">
          <Link href="/Signin">Sign in</Link>{" "}
        </span>
      </p>
    </form>
  );
}

export default LoginForm;
