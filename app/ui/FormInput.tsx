import React, { InputHTMLAttributes } from "react";
import { IconType } from "react-icons";
interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeHolder: string;
  icon?: IconType;
}

const FormInput: React.FC<FormInputProps> = ({
  name,
  placeHolder,
  icon: Icon,
  className,
  ...rest
}) => {
  return (
    <div className={"relative " + className}>
      {Icon && (
        <Icon className="absolute top-1/2 left-4 transform -translate-y-1/2 text-slate-200 text-lg" />
      )}
      <input
        type="text"
        className="pl-10 w-full p-4 border-[3px] border-stone-800 rounded-3xl placeholder:text-slate-200 bg-transparent placeholder:text-lg"
        placeholder={placeHolder}
        name={name}
        {...rest}
      />
    </div>
  );
};

export default FormInput;
