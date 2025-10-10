"use client";

import { useEffect } from "react";

export function useScrollbarFix() {
  useEffect(() => {
    // Force scrollbars to be visible after component mounts
    const forceScrollbarsVisible = () => {
      const selectContents = document.querySelectorAll('[data-radix-select-viewport]');
      selectContents.forEach(content => {
        if (content) {
          // Force the scrollbar to be visible by setting explicit styles
          const htmlContent = content as HTMLElement;
          htmlContent.style.maxHeight = '250px';
          htmlContent.style.overflowY = 'auto';
          htmlContent.style.scrollbarWidth = 'thin';
          
          // Add class for our custom styling
          htmlContent.classList.add('select-dropdown-with-scrollbar');
        }
      });
    };

    // Apply immediately
    forceScrollbarsVisible();
    
    // And also after a small delay to ensure it works after any animations
    setTimeout(forceScrollbarsVisible, 100);
    
    // Create a mutation observer to detect when new select dropdowns are added
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
          setTimeout(forceScrollbarsVisible, 50);
        }
      });
    });
    
    // Start observing the document body for DOM changes
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  return null;
}