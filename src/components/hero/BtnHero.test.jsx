// CardHero.test.jsx
import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import { CartContext } from '@/context/CartContext';
import CardHero from './CardHero';  // Asegúrate de que la ruta es correcta

describe('CardHero', () => {
  it('calls handleAddToCart when the "Compra ahora" button is clicked', () => {
    const mockAddToCart = vi.fn(); // Mock de la función addToCart

    // Proveedor de contexto con la función mock
    const wrapper = ({ children }) => (
      <CartContext.Provider value={{ addToCart: mockAddToCart }}>
        {children}
      </CartContext.Provider>
    );

    // Renderiza el componente CardHero con el proveedor de contexto
    render(<CardHero />, { wrapper });

    // Encuentra el botón y simula un clic
    const button = screen.getByRole('button', { name: 'Compra ahora' });
    fireEvent.click(button);

    // Verifica que la función mock fue llamada
    expect(mockAddToCart).toHaveBeenCalled();
  });
});
