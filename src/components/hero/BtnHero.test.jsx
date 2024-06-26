// CardHero.test.jsx
import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import { CartContext } from '@/context/CartContext';
import CardHero from './CardHero';  

describe('CardHero', () => {
  it('calls handleAddToCart when the "Compra ahora" button is clicked', () => {
    const mockAddToCart = vi.fn(); 
    
    const wrapper = ({ children }) => (
      <CartContext.Provider value={{ addToCart: mockAddToCart }}>
        {children}
      </CartContext.Provider>
    );

    
    render(<CardHero />, { wrapper });

    
    const button = screen.getByRole('button', { name: 'Compra ahora' });
    fireEvent.click(button);

    
    expect(mockAddToCart).toHaveBeenCalled();
  });
});
