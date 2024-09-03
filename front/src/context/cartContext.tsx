"use client";

import { createContext, useEffect, useState } from "react";
import { ICartContextType, IProduct } from "@/interfaces/interfaces";
import addItem from "@/utils/addItem";
import removeItem from "@/utils/removeItem";
import { postOrder } from '@/lib/server/fetchCheckout'; 

export const CartContext = createContext<ICartContextType>({
    cartItems: [],
    addToCart: () => {},
    removeFromCart: () => {},
    total: 0,
    proceedToCheckout: () => {}
});

const checkout = async (cartItems: IProduct[]) => {
    try {
        const products = cartItems.map(item => item.id);
        const token = localStorage.getItem("token");

        if (!token) {
            throw new Error("Token no encontrado.");
        }

        await postOrder(products, token);
        alert("Compra exitosa");
        return true; 
    } catch (error) {
        console.error("Error en checkout:", error);
        alert("Error al realizar la compra. Por favor, intente nuevamente.");
        return false; 
    }
};

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cartItems, setCartItems] = useState<IProduct[]>([]);
    const [total, setTotal] = useState(0);
    
    
    const addToCart = async (product: number) => {
        try {
            const updatedCart = await addItem(cartItems, product);
            setCartItems(updatedCart);
        } catch (error) {
            console.error("Error al añadir el producto:", error);
            alert("Error al añadir el producto al carrito.");
        }
    };

    const removeFromCart = (product: number) => {
        setCartItems(removeItem(cartItems, product));
    };

    const proceedToCheckout = async () => {
        const success = await checkout(cartItems);
        if (success) {
            setCartItems([]); 
        }
    };

    useEffect(() => {
        const total = cartItems.reduce((acc, item) => acc + item.price, 0);
        setTotal(total);
    }, [cartItems]);

    return (
        <CartContext.Provider value={{ cartItems, total, addToCart, removeFromCart, proceedToCheckout }}>
            {children}
        </CartContext.Provider>
    );
};
