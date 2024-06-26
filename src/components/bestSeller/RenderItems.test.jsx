import { describe, it, expect, vi } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { CartContext } from "@/context/CartContext";
import BestSellerCard from './BestSellerCard'; // Asegúrate de que la ruta es correcta.

// Simula la función addToCart
const mockAddToCart = vi.fn();

// Define el contexto de prueba
const wrapper = ({ children }) => (
    <CartContext.Provider value={{ addToCart: mockAddToCart }}>
        {children}
    </CartContext.Provider>
);

describe('BestSellerCard', () => {
    it('renders four items, each with an image', () => {
        render(<BestSellerCard />, { wrapper });

        // Suponiendo que cada tarjeta de producto es un div con cierta clase o role, como 'group'
        const items = screen.getAllByTestId('product-item');
        expect(items).toHaveLength(4);

        // Verificar que cada item contiene una imagen
        items.forEach(item => {
            const img = within(item).getByRole('img');
            expect(img).toBeInTheDocument();
        });
    });
});
