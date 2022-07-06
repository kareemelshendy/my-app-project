import { createContext } from 'react';
import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type CartItem = { id: number; name: string; size: string; color: string };

interface CartState {
	carts: CartItem[];
	addToCart: (item: CartItem) => void;
	removeFromCart: (id: number) => void;
}

export const useStore = create<CartState>()(
	devtools(
		persist(
			(set) => ({
				carts: [
					{ id: 1, name: 'T-shirt', size: 'L', color: '#fefefe' },
					{ id: 2, name: 'Pants', size: 'L', color: '#fefefe' },
					{ id: 3, name: 'Shoes', size: 'L', color: '#fefefe' },
				],
				addToCart: (item: CartItem) =>
					set((state) => ({
						carts: [...state.carts, item],
					})),
				removeFromCart: (id: number) =>
					set((state) => ({
						carts: state.carts.filter((cart) => cart.id !== id),
					})),
			}),
			{
				name: 'cart',
			}
		)
	)
);
