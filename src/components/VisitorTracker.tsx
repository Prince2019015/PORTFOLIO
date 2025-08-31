import React from 'react';
import { useLocation } from 'react-router-dom';
import { useVisitorTracking } from '../hooks/useVisitorTracking';

const VisitorTracker: React.FC = () => {
  const location = useLocation();

  // Get page name from current route
  const getPageName = (pathname: string) => {
    switch (pathname) {
      case '/':
        return 'Home';
      case '/about':
        return 'About';
      case '/projects':
        return 'Projects';
      case '/contact':
        return 'Contact';
      default:
        return `Page: ${pathname}`;
    }
  };

  const pageName = getPageName(location.pathname);
  useVisitorTracking(pageName);

  return null; // This component doesn't render anything
};

export default VisitorTracker;
