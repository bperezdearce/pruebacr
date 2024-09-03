"use client"

import { useContext } from "react"
import { CartContext } from "@/context/cartContext"
import CartItem from "../CartItem";

function Cart () {
    const {cartItems, removeFromCart, total, proceedToCheckout} = useContext(CartContext);

    return (
        <div className="flex flex-col text-center justify-between w-full">
            {cartItems.length > 0 ? (
                cartItems.map((item) => (
                    <div key={item.id}>
                        <CartItem product={item} remove={() => removeFromCart(item.id)} />
                    </div>
                ))
            ) : (
               <div className="text-lg font-myriadpro pt-8">No hay items en el carrito de compras</div> 
            )}
            {total > 0 && (
                <div className="w-full flex justify-end items-center text-lg font-myriadpro pt-5 border-t-2 border-gray-500">
                    <p className="align-middle">Total: ${total}</p>
                    <button className="bg-highlight-color text-background-color ml-4 rounder-lg p-3" onClick={proceedToCheckout}>
                        Comprar
                    </button>
                </div>
            )} 
        </div>
    )
}

export default Cart;