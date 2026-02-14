const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function apiClient(endpoint) {

    const url = `${BASE_URL}${endpoint}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error('API request error:', error);
        throw error;
    }
}