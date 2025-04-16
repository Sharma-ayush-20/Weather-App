
const baseUrl = 'https://api.weatherapi.com/v1/current.json?key=8bbf5c862fb7439cb2b80512251604';

export const fetchApi = async (city) => {
    const response = fetch(`${baseUrl}&q=${city}&aqi=yes`)
    return (await response).json()
}

export const getCurrentUserLocation = async (lat, lon) => {
    const response = fetch(`${baseUrl}&q=${lat},${lon}&aqi=yes`)
    return (await response).json()
}