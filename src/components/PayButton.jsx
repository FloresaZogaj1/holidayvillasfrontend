// src/components/PayButton.jsx
import { useState } from 'react';

export default function PayButton({ amount, email, meta }) {
  const API_BASE = import.meta.env.VITE_API_BASE || process.env.REACT_APP_API_BASE || 'http://localhost:4000';
  const [payload, setPayload] = useState(null);

  const start = async () => {
    const r = await fetch(`${API_BASE}/api/payments/init`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount, email, meta })
    });
    const data = await r.json();
    setPayload(data);
    // Forma do të shfaqet dhe autosubohet
  };

  if (payload) {
    const { gate, fields } = payload;
    return (
      <form id="bktForm" action={gate} method="POST">
        {Object.entries(fields).map(([k,v]) => (
          <input key={k} type="hidden" name={k} value={String(v)} />
        ))}
        <noscript>
          <button type="submit">Vazhdo te Pagesa</button>
        </noscript>
        <script dangerouslySetInnerHTML={{__html: 'document.getElementById("bktForm").submit();'}} />
      </form>
    );
  }

  return <button onClick={start} className="btn btn-primary">Paguaj</button>;
}
