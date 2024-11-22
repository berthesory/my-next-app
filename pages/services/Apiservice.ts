// services/apiService.ts
import axios from 'axios';

// Crée une interface pour les données de connexion
interface LoginCredentials {
  username: string;
  password: string;
}

// Crée l'instance axios
const api = axios.create({
  baseURL: 'https://votre-api-url.com',
});

// Fonction pour effectuer la connexion
export const loginUser = async (credentials: LoginCredentials) => {
  return await api.post('/login', credentials);
};

// Export des autres fonctions
export const fetchDeliveries = async () => await api.get('/deliveries');
export const fetchAnalytics = async () => await api.get('/analytics');
export const fetchStock = async () => await api.get('/stock');
export const fetchOrders = async () => await api.get('/orders');
export const fetchUsers = async () => await api.get('/users');

export default api;
