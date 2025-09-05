import React from 'react';
import BookingForm from '../components/BookingForm';

export default function BookingPage() {
  // in a real app you'd fetch provider by id
  const provider = { id: 1, name: 'Mock Provider', price: 20 };
  return (
    <div style={{ padding: 20 }}>
      <BookingForm provider={provider} />
    </div>
  );
}
