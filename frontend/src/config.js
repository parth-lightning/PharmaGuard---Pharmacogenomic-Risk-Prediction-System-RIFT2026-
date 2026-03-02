// Central place to configure the API base URL.
// In production, set VITE_API_URL (e.g. https://your-backend.com/api).
// In development, this falls back to the local FastAPI server.
export const API_BASE_URL =
  import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

