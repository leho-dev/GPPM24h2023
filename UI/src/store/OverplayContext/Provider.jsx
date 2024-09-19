import { useState, useEffect } from 'react';
import { OverplayContext } from './Context';

/**
 * A provider component for managing the overplay state in a React application.
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components to be wrapped by the provider.
 * @returns {React.ReactElement} A context provider element that supplies the overplay state and setter to its children.
 */
function OverplayProvider({ children }) {
  const [overplay, setOverplay] = useState(false);

  return (
    <OverplayContext.Provider value={[overplay, setOverplay]}>
      {children}
    </OverplayContext.Provider>
  );
}

export default OverplayProvider;
