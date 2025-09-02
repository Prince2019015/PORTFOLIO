import { sendCVDownloadNotification } from '../services/emailService';

interface DownloadData {
  timestamp: string;
  userAgent: string;
  referrer: string;
  ip: string;
  page: string;
}

export const useCVDownloadTracking = () => {
  const trackCVDownload = async (pageName: string) => {
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

      // Get download information
      const downloadData: DownloadData = {
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        referrer: document.referrer,
        ip: visitorIP,
        page: pageName,
      };

      // Send email notification
      const success = await sendCVDownloadNotification(downloadData);

      if (success) {
        console.log('CV download notification sent successfully');
      } else {
        console.warn('Failed to send CV download notification');
      }
    } catch (error) {
      console.warn('Error tracking CV download:', error);
    }
  };

  return { trackCVDownload };
};
