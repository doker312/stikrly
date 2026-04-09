import { useEffect } from 'react';

interface MetaData {
  title: string;
  description: string;
}

export const useMeta = ({ title, description }: MetaData) => {
  useEffect(() => {
    document.title = title;
    
    // Check if meta description exists, create it if not
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);
    
    // Also update og:title and og:description
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);
    
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);
    
  }, [title, description]);
};
