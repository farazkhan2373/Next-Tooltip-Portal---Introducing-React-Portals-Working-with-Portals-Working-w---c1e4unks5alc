import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

const portalRoot = typeof document !== 'undefined' ? document.getElementById('tooltip-portal') : null;

function TooltipPortal({ children }) {
 const portalElement = document.createElement('div');

  useEffect(() => {
    if (portalRoot) {
      portalRoot.appendChild(portalElement);
    }

    return () => {
      if (portalRoot) {
        portalRoot.removeChild(portalElement);
      }
    };
  }, []);

  return ReactDOM.createPortal(children, portalElement);
}

export default TooltipPortal;
