"use client";

import { useState, useEffect } from "react";

type InputFormatType = "cpf" | "cnpj" | "telefone" | "cep";

export function formatInput(value: string, type: InputFormatType) {
  value = value.replace(/\D/g, ""); // Remove caracteres não numéricos

  switch (type) {
    case "cpf":
      return value
        .slice(0, 11)
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    case "cnpj":
      return value
        .slice(0, 14)
        .replace(/(\d{2})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1/$2")
        .replace(/(\d{4})(\d{1,2})$/, "$1-$2");

    case "telefone":
      return value.length <= 10
        ? value
            .slice(0, 10)
            .replace(/(\d{2})(\d)/, "($1) $2")
            .replace(/(\d{4})(\d)/, "$1-$2")
        : value
            .slice(0, 11)
            .replace(/(\d{2})(\d)/, "($1) $2")
            .replace(/(\d{5})(\d)/, "$1-$2");

    case "cep":
      return value.slice(0, 8).replace(/(\d{5})(\d)/, "$1-$2");

    default:
      return value;
  }
}

interface TextareaFormCadastroProps {
  titulo?: string;
  placeholder: string;
  setInput: (value: string) => void;
  addStyleMain?: string;
  erro?: string;
  inputValue?: string;
  maskType?: InputFormatType;
  isRequired?: boolean;
  addStyleDivInput?: string;
  addStyleDivTitle?: string;
  addStylePlaceholder?: string;
  rows?: number;
}

export default function TextareaFormCadastro({
  titulo,
  placeholder,
  setInput,
  addStyleMain,
  erro,
  inputValue = "",
  maskType,
  isRequired,
  addStyleDivInput,
  addStyleDivTitle,
  addStylePlaceholder,
  rows = 4,
}: TextareaFormCadastroProps) {
  const [valor, setValor] = useState(inputValue);

  useEffect(() => {
    if (maskType) {
      setValor(formatInput(inputValue, maskType));
      return;
    }

    setValor(inputValue);
  }, [inputValue]);

  function handleInputChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    let formattedValue = e.target.value;
    if (maskType) {
      formattedValue = formatInput(formattedValue, maskType);
    }
    setValor(formattedValue);
    setInput(formattedValue);
  }

  return (
    <div className={`flex flex-col text-sm ${addStyleMain ? addStyleMain : "full"}`}>
      {titulo && (
        <label
          className={`${
            addStyleDivTitle ? addStyleDivTitle : ""
          } tracking-wide text-2xl font-semibold mb-1`}
        >
          {titulo} {isRequired && <span className="text-red-500">*</span>}
        </label>
      )}

      <div
        className={`rounded-lg px-4 py-2 flex border w-full text-black ${
          erro ? "border-red-500" : "border-gray-600"
        } ${addStyleDivInput ? addStyleDivInput : ""}`}
      >
        <textarea
          rows={rows}
          className={`w-full outline-none resize-none ${addStylePlaceholder ? addStylePlaceholder : ""}`}
          placeholder={placeholder}
          value={valor}
          onChange={handleInputChange}
        />
      </div>

      {erro && <p className="text-red-500 text-sm mt-1">{erro}</p>}
    </div>
  );
}
