import './GlobalStyles.css';

/**
 * Renders child components without applying any global styles
 * @param {React.ReactNode} children - The child components to be rendered
 * @returns {React.ReactNode} The unmodified child components
 */
function GlobalStyle({ children }) {
  return children;
}

export default GlobalStyle;
