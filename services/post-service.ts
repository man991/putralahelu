import axios from 'axios';

const API_BASE_URL = 'https://lahelu.com/api/post';

export const fetchData = async (endpoint: string): Promise<any> => {
    try {
        const response = await axios.get(`${API_BASE_URL}/${endpoint}`);
        return response;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};