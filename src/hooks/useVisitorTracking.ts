import { useEffect } from 'react';
import { sendVisitorNotification } from '../services/emailService';

interface VisitorData {
  timestamp: string;
  userAgent: string;
  referrer: string;
  ip: string;
  page: string;
}

export const useVisitorTracking = (pageName: string) => {
  useEffect(() => {
    const trackVisitor = async () => {
      try {
        // Get visitor's IP address
        let visitorIP = 'Unknown';
        try {
          const ipResponse = await fetch('https://api.ipify.org?format=json');
          const ipData = await ipResponse.json();
          visitorIP = ipData.ip;
        } catch (ipError) {
          console.warn('Could not get IP address:', ipError);
        }

        // Get visitor information
        const visitorData: VisitorData = {
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
          referrer: document.referrer,
          ip: visitorIP,
          page: pageName,
        };

        // Send email notification
        const success = await sendVisitorNotification(visitorData);

        if (success) {
          console.log('Visitor notification sent successfully');
        } else {
          console.warn('Failed to send visitor notification');
        }
      } catch (error) {
        console.warn('Error tracking visitor:', error);
      }
    };

    // Track visitor after a short delay to ensure page is loaded
    const timer = setTimeout(trackVisitor, 2000);

    return () => clearTimeout(timer);
  }, [pageName]);
};
