import React, { createContext, useState, useContext, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { Product } from './Product';



export interface CartItem {
    _id: string;
    name: string;
    price: number;
    image: string;
    cant: number;
}

export interface CartTools {
    cart: CartItem[];
    addToCart: (producto: Product) => void;
    restToCart: (productId: string) => void;
    clearCart:() => void;
}

export const CartContext = createContext<CartTools | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const iniciarCarrito = () => {

        const carrito = localStorage.getItem("cart")

        if (carrito) {

           return JSON.parse(carrito)

        } else {

            return []

        }

    };
    
    const [cart, setCart] = useState<CartItem[]>(iniciarCarrito);

    const addToCart = (producto: Product) => {
        const itemEncontrado = cart.find(item => item._id === producto._id);

        if (itemEncontrado) {
            const carritoActualizado = cart.map((item) => {
                if (item._id === producto._id) {
                    return { ...item, cant: item.cant + 1 };
                } else {
                    return item;
                }
            });
            setCart(carritoActualizado);
        } else {
            const nuevoItem: CartItem = {
                _id: producto._id,
                name: producto.name,
                price: producto.price,
                image: producto.image,
                cant: 1
            };
            setCart([...cart, nuevoItem]);

        }
    };

    const restToCart = (productId: string) => {
        const itemEncontrado = cart.find(item => item._id === productId);

        if (!itemEncontrado) return;


        if (itemEncontrado.cant > 1) {

            const carritoActualizado = cart.map((item) => {
                if (item._id === productId) {
                    return { ...item, cant: item.cant - 1 };
                } else {
                    return item;
                }
            });
            setCart(carritoActualizado)

        } else {

            const carritoFiltrado = cart.filter(item => item._id !== productId);
            setCart(carritoFiltrado);

        }
    };

    const clearCart = () => {
        setCart([])
    };



    useEffect(() => {

        localStorage.setItem('cart', JSON.stringify(cart))

    },[cart])

    return (
        <CartContext.Provider value={{ cart, addToCart, restToCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart debe ser usado dentro de un CartProvider");
    }
    return context;
};