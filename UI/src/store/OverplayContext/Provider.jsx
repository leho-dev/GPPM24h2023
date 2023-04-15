import { useState, useEffect } from 'react';
import { OverplayContext } from './Context';

function OverplayProvider({ children }) {
  const [overplay, setOverplay] = useState(false);

  return (
    <OverplayContext.Provider value={[overplay, setOverplay]}>
      {children}
    </OverplayContext.Provider>
  );
}

export default OverplayProvider;
