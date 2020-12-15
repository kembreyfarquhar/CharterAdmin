// Hooks and Context
import { createContext, useState, useEffect, useContext } from "react";

// Create Viewport Context Object
const viewportContext = createContext({});

// Export Viewport Context Provider
export const ViewportProvider = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  // Listen for window resize, set width & height values
  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <viewportContext.Provider value={{ width, height }}>
      {children}
    </viewportContext.Provider>
  );
};

// export useViewport hook to access width and height values
export const useViewport = () => {
  const { width, height } = useContext(viewportContext);
  return { width, height };
};
