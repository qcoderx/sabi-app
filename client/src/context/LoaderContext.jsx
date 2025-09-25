import React, { createContext, useState, useContext } from 'react';

const LoaderContext = createContext();

export const useLoader = () => useContext(LoaderContext);

export const LoaderProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const showLoader = () => setIsLoading(true);

  const hideLoader = () => setIsLoading(false);

  const performAction = async (action) => {
    showLoader();
    try {
      // The delay gives the animation time to show
      await new Promise(resolve => setTimeout(resolve, 600)); 
      action();
    } finally {
      // Hide loader after a short delay to feel smoother
      setTimeout(() => hideLoader(), 400); 
    }
  };

  const value = { isLoading, showLoader, hideLoader, performAction };

  return (
    <LoaderContext.Provider value={value}>
      {children}
    </LoaderContext.Provider>
  );
};