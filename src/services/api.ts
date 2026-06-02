import axios from 'axios';

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL as string | undefined;

if (!apiBaseUrl) {
  // Fail fast in dev/CI so deployment misconfiguration is obvious.
  throw new Error('Missing required env var: VITE_API_BASE_URL');
}

// Enforce HTTPS for non-local deployments.
const isLocal =
  apiBaseUrl.startsWith('http://localhost:') ||
  apiBaseUrl.startsWith('https://localhost:') ||
  apiBaseUrl.includes('localhost');

if (!isLocal && apiBaseUrl.startsWith('http://')) {
  throw new Error('VITE_API_BASE_URL must use HTTPS in non-local environments');
}

const api = axios.create({
  baseURL: apiBaseUrl,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');

    if (token && token !== 'null' && token !== 'undefined') {
      config.headers = config.headers ?? {};
      config.headers.Authorization = `Bearer ${token}`;
      config.headers['Content-Type'] = 'application/json';
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default api
