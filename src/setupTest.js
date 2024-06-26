import "@testing-library/jest-dom"

window.matchMedia = window.matchMedia || function() {
    return {
        matches: false,
        addListener: function() {},
        removeListener: function() {},
        dispatchEvent: function() {}  // Añade esta línea si es necesaria para tus pruebas
    };
};

// Mock simple para IntersectionObserver
window.IntersectionObserver = class IntersectionObserver {
  constructor(callback) {
    this.callback = callback;
  }

  observe() {
    this.callback([{ isIntersecting: true }], this); // Simula un elemento siempre visible
  }

  unobserve() {
    // No hacer nada.
  }

  disconnect() {
    // No hacer nada.
  }
};