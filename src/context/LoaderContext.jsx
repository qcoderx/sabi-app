import React, { createContext, useState, useContext } from 'react';

const LoaderContext = createContext();

export const useLoader = () => useContext(LoaderContext);

export const LoaderProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  // This function will show the loader
  const showLoader = () => setIsLoading(true);

  // This function will hide the loader
  const hideLoader = () => setIsLoading(false);

  // This simulates a process: show loader, run action, then hide loader
  const performAction = async (action) => {
    showLoader();
    try {
      // Wait for the action (e.g., an API call) to complete
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulates a 1-sec action
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