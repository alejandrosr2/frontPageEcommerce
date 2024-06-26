import { fireEvent, render, screen } from '@testing-library/react';
import DarkMode from './DarkMode'; 
import { describe, expect, it } from 'vitest';

describe('DarkMode', () => {
  it('should toggle theme from light to dark and vice versa', () => {
    render(<DarkMode />);
    
    
    const button = screen.getByRole('button');
    expect(document.documentElement.classList.contains('light')).toBe(true);
    
    
    fireEvent.click(button);
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    expect(document.documentElement.classList.contains('light')).toBe(false);

    
    fireEvent.click(button);
    expect(document.documentElement.classList.contains('light')).toBe(true);
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });
});
