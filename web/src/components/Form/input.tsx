import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{} //para receber tudas as propriedades html do input

export function Input( props: InputProps) {
     return (
          <input 
               {...props}
               className='bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500' 
          />
     )
}