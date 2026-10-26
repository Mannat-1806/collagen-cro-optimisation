import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isPrototypeModalOpen, setIsPrototypeModalOpen] = useState(false);
  const [lastAddedItem, setLastAddedItem] = useState(null);

  const addToCart = (pack, quantity = 1) => {
    setItems(prevItems => {
      const existingIndex = prevItems.findIndex(item => item.packId === pack.id);
      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [
          ...prevItems,
          {
            packId: pack.id,
            name: pack.name,
            weightGrams: pack.weightGrams,
            servings: pack.servings,
            price: pack.price,
            mrp: pack.mrp,
            quantity: quantity,
          }
        ];
      }
    });

    setLastAddedItem({ ...pack, quantity });
    setIsCartOpen(true);
  };

  const updateQuantity = (packId, newQty) => {
    if (newQty <= 0) {
      removeFromCart(packId);
      return;
    }
    setItems(prevItems =>
      prevItems.map(item =>
        item.packId === packId ? { ...item, quantity: newQty } : item
      )
    );
  };

  const removeFromCart = (packId) => {
    setItems(prevItems => prevItems.filter(item => item.packId !== packId));
  };

  const totalItemsCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        isCartOpen,
        setIsCartOpen,
        isPrototypeModalOpen,
        setIsPrototypeModalOpen,
        lastAddedItem,
        addToCart,
        updateQuantity,
        removeFromCart,
        totalItemsCount,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
