import { describe, it, expect, vi } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { CartContext } from "@/context/CartContext";
import BestSellerCard from './BestSellerCard'; 


const mockAddToCart = vi.fn();


const wrapper = ({ children }) => (
    <CartContext.Provider value={{ addToCart: mockAddToCart }}>
        {children}
    </CartContext.Provider>
);

describe('BestSellerCard', () => {
    it('renders four items, each with an image', () => {
        render(<BestSellerCard />, { wrapper });

        
        const items = screen.getAllByTestId('product-item');
        expect(items).toHaveLength(4);

        
        items.forEach(item => {
            const img = within(item).getByRole('img');
            expect(img).toBeInTheDocument();
        });
    });
});
