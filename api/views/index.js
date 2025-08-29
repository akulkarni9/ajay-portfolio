import { kv } from '@vercel/kv';

export const config = {
  runtime: 'edge',
};

// Define allowed origins for CORS
const allowedOrigins = [
  'https://ajay-portfolio-navy.vercel.app',
  'http://localhost:5173', // Your local development environment
];

export default async function handler(request) {
  const origin = request.headers.get('origin');
  const headers = new Headers();
  headers.set('Content-Type', 'application/json');
  
  // Set CORS headers dynamically based on the request origin
  if (origin && allowedOrigins.includes(origin)) {
    headers.set('Access-Control-Allow-Origin', origin);
  }
  
  headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  headers.set('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight OPTIONS requests for CORS
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204, // No Content
      headers: headers,
    });
  }

  try {
    const key = 'portfolio-views';
    
    if (request.method === 'POST') {
      const count = await kv.incr(key);
      return new Response(JSON.stringify({ count }), {
        status: 200,
        headers: headers,
      });
    } else { // This handles GET requests
      const count = (await kv.get(key)) || 0;
      return new Response(JSON.stringify({ count: Number(count) }), {
        status: 200,
        headers: headers,
      });
    }
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: headers,
    });
  }
}