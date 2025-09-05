import React from 'react';
import { useParams } from 'react-router-dom';

export default function ProviderPage() {
  const { id } = useParams();
  return (
    <div style={{ padding: 20 }}>
      <h2>Provider {id}</h2>
      <p>Details about provider {id} would appear here.</p>
    </div>
  );
}
