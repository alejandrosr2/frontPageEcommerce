import { fireEvent, render, screen } from '@testing-library/react';
import DarkMode from './DarkMode'; // Asegúrate de que la ruta es correcta.
import { describe, expect, it } from 'vitest';

describe('DarkMode', () => {
  it('should toggle theme from light to dark and vice versa', () => {
    render(<DarkMode />);
    
    // Asumiendo que el tema inicial es 'light'
    const button = screen.getByRole('button');
    expect(document.documentElement.classList.contains('light')).toBe(true);
    
    // Hacer clic en el botón para cambiar a 'dark'
    fireEvent.click(button);
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    expect(document.documentElement.classList.contains('light')).toBe(false);

    // Hacer clic en el botón nuevamente para cambiar de vuelta a 'light'
    fireEvent.click(button);
    expect(document.documentElement.classList.contains('light')).toBe(true);
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });
});
