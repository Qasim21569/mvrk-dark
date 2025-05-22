// Google Analytics utility functions

// Type definition for Google Analytics
interface Window {
  dataLayer: any[];
  gtag: (...args: any[]) => void;
}

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-NR0763PX8Y', {
      page_path: url,
    });
  }
};

// Track events (e.g. button clicks, form submissions)
export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Initialize scroll depth tracking
// Tracks when users scroll to 25%, 50%, 75%, and 100% of the page
export const initScrollDepthTracking = () => {
  if (typeof window === 'undefined') return;
  
  const scrollDepths = [25, 50, 75, 100];
  const scrollDepthReached: { [key: number]: boolean } = {};
  
  // Initialize all depths as not reached
  scrollDepths.forEach(depth => {
    scrollDepthReached[depth] = false;
  });
  
  const handleScroll = () => {
    // Calculate how far down the page the user has scrolled
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    );
    
    if (documentHeight <= windowHeight) return; // No scrolling needed
    
    // Calculate scroll percentage
    const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
    
    // Check each depth threshold
    scrollDepths.forEach(depth => {
      if (!scrollDepthReached[depth] && scrollPercent >= depth) {
        // Mark this depth as reached
        scrollDepthReached[depth] = true;
        
        // Send the event to GA
        event({
          action: 'scroll_depth',
          category: 'engagement',
          label: `Scrolled ${depth}%`,
          value: depth
        });
      }
    });
  };
  
  // Throttle function to avoid too many events
  const throttle = (callback: Function, delay: number) => {
    let previousCall = 0;
    return function() {
      const now = new Date().getTime();
      if (now - previousCall >= delay) {
        previousCall = now;
        callback();
      }
    };
  };
  
  // Add scroll event listener with throttling
  window.addEventListener('scroll', throttle(handleScroll, 500));
}; 