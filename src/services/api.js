import axios from 'axios';

const API_URL = 'your_api_endpoint';

export const searchInvoice = async (invoiceNumber) => {
  try {
    const response = await axios.get(`${API_URL}/invoices/${invoiceNumber}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
