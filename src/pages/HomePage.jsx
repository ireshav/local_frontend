import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import FilterPanel from '../components/FilterPanel';
import ProviderCard from '../components/ProviderCard';
import ProviderModal from '../components/ProviderModal';

const mockProviders = [
  { id: 1, name: 'Sparkle Cleaners', category: 'Cleaning', price: 25 },
  { id: 2, name: 'QuickFix Plumbing', category: 'Plumbing', price: 50 },
  { id: 3, name: 'Bright Tutors', category: 'Education', price: 30 },
  { id: 4, name: 'Handy Helpers', category: 'Handyman', price: 40 },
];

export default function HomePage() {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(null);
  const filtered = mockProviders.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="page">
      <div className="hero">
        <div className="hero-card">
          <h1>Find Local Service Providers</h1>
          <p>Search trusted local professionals nearby.</p>
          <SearchBar value={query} onChange={setQuery} />
        </div>
      </div>

      <div className="content">
        <aside className="sidebar">
          <FilterPanel />
        </aside>

        <section className="list">
          {filtered.map(p => (
            <ProviderCard key={p.id} provider={p} onClick={(prov)=>setSelected(prov)} />
          ))}
        </section>
      </div>

      {selected && <ProviderModal provider={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
