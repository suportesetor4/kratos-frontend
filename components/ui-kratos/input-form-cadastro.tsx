"use client";

import { useState, useEffect } from "react";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";

type InputFormatType = "cpf" | "cnpj" | "telefone" | "cep";

export function formatInput(value: string, type: InputFormatType) {
  value = value.replace(/\D/g, ""); // Remove caracteres não numéricos

  switch (type) {
    case "cpf":
      return value.slice(0, 11).replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    case "cnpj":
      return value.slice(0, 14).replace(/(\d{2})(\d)/, "$1.$2").replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d)/, "$1/$2").replace(/(\d{4})(\d{1,2})$/, "$1-$2");

    case "telefone":
      return value.length <= 10
        ? value.slice(0, 10).replace(/(\d{2})(\d)/, "($1) $2").replace(/(\d{4})(\d)/, "$1-$2")
        : value.slice(0, 11).replace(/(\d{2})(\d)/, "($1) $2").replace(/(\d{5})(\d)/, "$1-$2");

    case "cep":
      return value.slice(0, 8).replace(/(\d{5})(\d)/, "$1-$2");

    default:
      return value;
  }
}

interface InputFormCadastroProps {
  titulo?: string;
  tipoInput: string;
  placeholder: string;
  setInput: (value: string) => void;
  addStyleMain?: string;
  erro?: string;
  inputValue?: string;
  showPassword?: boolean;
  maskType?: InputFormatType;
  isRequired?: boolean;
  addStyleDivInput?: string;
  addStyleDivTitle?: string;
  addStylePlaceholder?: string;
}

export default function InputFormCadastro({
  titulo,
  tipoInput,
  placeholder,
  setInput,
  addStyleMain,
  erro,
  inputValue = "",
  showPassword,
  maskType,
  isRequired,
  addStyleDivInput,
  addStyleDivTitle,
  addStylePlaceholder
}: InputFormCadastroProps) {
  const [valor, setValor] = useState(inputValue);
  const [tipoInputAtual, setTipoInputAtual] = useState(tipoInput);
  const [showPass, setShowPass] = useState(true);

  useEffect(() => {
    if (maskType) {
      setValor(formatInput(inputValue, maskType));
      return
    } 
    
    setValor(inputValue);
  }, [inputValue]);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    let formattedValue = e.target.value;
    if (maskType) {
      formattedValue = formatInput(formattedValue, maskType);
    }
    setValor(formattedValue);
    setInput(formattedValue);
  }

  return (
    <div className={`flex flex-col text-sm ${addStyleMain ? addStyleMain : 'full'}`}>
      {titulo && <label className={`${addStyleDivTitle ? addStyleDivTitle: ''} tracking-wide text-2xl font-semibold mb-1`}>{titulo} {isRequired && <span className="text-red-500">*</span>}</label>}

    
      <div className={`rounded-lg px-4 py-2 flex items-center border w-full text-black ${erro ? "border-red-500" : "border-gray-600"}  ${addStyleDivInput ? addStyleDivInput: ''}  `}>
        <input
          type={tipoInputAtual}
          className={`w-full outline-none ${addStylePlaceholder ? addStylePlaceholder : ""}`}
          placeholder={placeholder}
          value={valor}
          onChange={handleInputChange}
        />

        {showPassword && (
          showPass ? (
            <RiEyeOffLine
              className="w-5 h-5 cursor-pointer"
              onClick={() => {
                setShowPass(false);
                setTipoInputAtual("text");
              }}
            />
          ) : (
            <RiEyeLine
              className="w-5 h-5 cursor-pointe"
              onClick={() => {
                setShowPass(true);
                setTipoInputAtual("password");
              }}
            />
          )
        )}
      </div>

      {erro && <p className="text-red-500 text-sm mt-1">{erro}</p>}
    </div>
  );
}
