import axios from "axios";

const baseUrl = 'http://127.0.0.1:8000/api/pharmacies';

const getPharmacies = async () => {
    const response = await axios.get(baseUrl);
    return response.data
}

const searchPharmacies = async (input) => {
    const response = await axios.get(`${baseUrl}/search/${input}`)
    return response.data
}

const pharmacyService = { getPharmacies, searchPharmacies }

export default pharmacyService