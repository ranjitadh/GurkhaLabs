// MapEmbed.tsx
import React from 'react';

const MapEmbed = ({ location = '37.7749,-122.4194' }) => {
  // Ensure the location string is properly formatted for parsing
  const coordinates = location.replace(/\s/g, '');
  
  const simpleEmbedUrl = `https://maps.google.com/maps?q=${coordinates}&t=m&z=15&output=embed&iwloc=near`;

  return (
    <iframe
      className="w-full h-[360px] rounded-lg border-none"
      src={simpleEmbedUrl}
      height="580"
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Map"
    />
  );
};

export default MapEmbed;