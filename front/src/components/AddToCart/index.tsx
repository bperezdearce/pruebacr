"use client";

import { useContext } from "react";
import { CartContext } from "@/context/cartContext";
import Image from "next/image";
import CartIcon from "@/assets/CartIcon.svg";
import { UserContext } from "@/context/userContext";
import addItem from "@/utils/addItem";

function AddToCart({ id }: { id: number }) {
    const { cartItems, addToCart } = useContext(CartContext);
    const { isLogged } = useContext(UserContext);

    async function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
        if (!isLogged) {
            alert("Inicia sesión para agregar items al carrito");
            return;
        }

        try {
            await addItem(cartItems, id);
            addToCart(id);
            alert("Item añadido al carrito");
        } catch (error) {
            if (error instanceof Error) {
                alert("El producto ya existe en el carrito. No se permiten productos duplicados.");
            } else {
                alert("Ocurrió un error al agregar el item al carrito.");
            }
        }
    }

    return (
        <button onClick={handleClick}>
            <Image
                src={CartIcon}
                alt="carrito"
                width={30}
                height={30}
            />
        </button>
    );
}

export default AddToCart;
