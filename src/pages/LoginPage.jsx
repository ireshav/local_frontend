import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (formData.email === 'test@example.com' && formData.password === '123456') {
      navigate('/');
    } else {
      setError('Invalid email or password.');
    }
  }

  return (
    <div style={{ padding: 20, maxWidth: 420, margin: '40px auto' }}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email<br/>
          <input value={formData.email} onChange={(e)=>setFormData({...formData,email:e.target.value})} required />
        </label>
        <br/>
        <label>
          Password<br/>
          <input type="password" value={formData.password} onChange={(e)=>setFormData({...formData,password:e.target.value})} required />
        </label>
        <br/>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button style={{ marginTop: 12 }} type="submit">Login</button>
      </form>
    </div>
  );
}
