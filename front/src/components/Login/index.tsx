"use client"

import { validateLogin } from "@/utils/validation";
import { useState, useContext } from "react";
import { UserContext } from "@/context/userContext";

function Login() {
    const [loginValues, setLoginValues] = useState({
        email: "",
        password: "",  
    });
    const [errors, setErrors] = useState({} as {[key: string]: string});
    const {login} = useContext(UserContext)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setLoginValues({...loginValues, [name]:value})
        setErrors(validateLogin({...loginValues, [name]: value}));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const success = await login(loginValues);
        if (success) alert("Ingreso Exitoso")
        if (!success) alert ("Usuario inválido")
    };

    return (     
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
                <label className="mb-1.5 block text-xl font-garamondregular text-background-color" htmlFor="email">Correo Electrónico </label>
                <input onChange={handleChange} name="email" id="email" type="email" placeholder="" className="w-full rounded-md border border-blue-800 bg-background-color py-3 px-6 text-base font-medium outline-none focus:shadow-md" required/>
                {errors.email && (<span className="text-red-500">{errors.email}</span>)}
            </div>
            <div className="space-y-2">
                <label className="mb-1.5 block text-xl font-garamondregular text-background-color" htmlFor="password">Contraseña </label>
                <input onChange={handleChange} name="password" id="password" type="password" className="w-full rounded-md border border-blue-800 bg-background-color py-3 px-6 text-base font-medium outline-none focus:shadow-md" required/>
                {errors.password && (<span className="text-red-500">{errors.password}</span>)}
            </div>
            <button className="px-6 py-3 font-garamondregular text-xl text-highlight-color bg-background-color hover:bg-blue-800 focus:outline-none rounded-lg text-center">Iniciar Sesión</button>
        </form>
    );
}

export default Login;