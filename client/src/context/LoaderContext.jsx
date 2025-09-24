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
      await new Promise(resolve => setTimeout(resolve, 1000));
      action();
    } finally {
      hideLoader();
    }
  };

  const value = { isLoading, showLoader, hideLoader, performAction };

  return (
    <LoaderContext.Provider value={value}>
      {children}
    </LoaderContext.Provider>
  );
};