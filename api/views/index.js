import { kv } from '@vercel/kv';

// This function runs on Vercel's standard Node.js runtime.
export default async function handler(request, response) {
  // Set CORS headers to allow requests from any origin
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests sent by browsers
  if (request.method === 'OPTIONS') {
    return response.status(204).end();
  }

  try {
    const key = 'portfolio-views';
    
    if (request.method === 'POST') {
      // If it's a new visit, increment the counter
      const count = await kv.incr(key);
      return response.status(200).json({ count });
    } else { 
      // For any other request, just get the current count
      const count = await kv.get(key) || 0;
      return response.status(200).json({ count: Number(count) });
    }
  } catch (error) {
    console.error('KV Error:', error);
    return response.status(500).json({ error: 'Internal Server Error' });
  }
}