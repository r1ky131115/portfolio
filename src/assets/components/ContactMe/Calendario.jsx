import React, { useEffect } from 'react';

export const Calendario = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="calendly-inline-widget mb-10" 
    data-url="https://calendly.com/ricardo_aguirre/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=0f0f0f&text_color=f8faff&primary_color=4b69a5" 
    style={{ width: '400px', height: '600px' }} />

  );
};
