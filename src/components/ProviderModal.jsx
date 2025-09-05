import React from 'react';
import './ProviderModal.css';

export default function ProviderModal({ provider, onClose }) {
  if (!provider) return null;
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e)=>e.stopPropagation()}>
        <h2>{provider.name}</h2>
        <p>Category: {provider.category}</p>
        <p>Price: ${provider.price}</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
          <button className="btn" onClick={onClose}>Close</button>
          <a className="btn primary" href={`/book/${provider.id}`}>Proceed to Book</a>
        </div>
      </div>
    </div>
  );
}
