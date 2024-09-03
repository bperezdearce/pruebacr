import { ILoginUser, IRegisterUser } from "@/interfaces/interfaces";

export const postRegister = async (user: IRegisterUser) => {
    const response = await fetch("http://localhost:3000/users/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    });
    const data = await response.json();
    return data;
};

export const postLogin = async (credentials: ILoginUser) => {
    const response = await fetch("http://localhost:3000/users/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
    });
    const data = await response.json();
    return data;
};