import React from 'react';
import './ProviderCard.css';

export default function ProviderCard({ provider, onClick }) {
  return (
    <article className="provider-card" onClick={() => onClick && onClick(provider)}>
      <div className="provider-thumb">{provider.name.charAt(0)}</div>
      <div className="provider-body">
        <h3>{provider.name}</h3>
        <p className="meta">{provider.category} · ${provider.price}</p>
      </div>
      <div className="provider-action">
        <button className="btn" onClick={(e) => { e.stopPropagation(); onClick && onClick(provider); }}>Book</button>
      </div>
    </article>
  );
}
