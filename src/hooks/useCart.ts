import { useState, useEffect } from 'react'
import type { CartItem } from '../types'

export const useCart = () => {

    const initialCart = (): CartItem[] => {
        const localStorageCart = localStorage.getItem('cart')
        return localStorageCart ? JSON.parse(localStorageCart) : []
    }

    // const MIN_ITEMS = 1
    // const MAX_ITEMS = 5
    const [cart, setCart] = useState(initialCart)



    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    function clearCart() {
        setCart([])
    }

    // State Derivado


    return {
        cart,
        clearCart,

    }
}