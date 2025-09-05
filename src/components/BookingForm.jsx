import React, { useState } from 'react';

export default function BookingForm({ provider }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Booked ${provider.name} for ${name} (${phone}) — this is a demo.`);
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 480, margin: '0 auto' }}>
      <h3>Book {provider?.name}</h3>
      <label>
        Your name
        <input value={name} onChange={(e)=>setName(e.target.value)} required />
      </label>
      <label>
        Phone
        <input value={phone} onChange={(e)=>setPhone(e.target.value)} required />
      </label>
      <div style={{ marginTop: 12 }}>
        <button className="btn primary" type="submit">Confirm Booking</button>
      </div>
    </form>
  );
}
