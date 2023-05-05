import axios from "axios";

const baseUrl = 'http://127.0.0.1:8000/api/medicines';

const getMedicines = async () => {
    const response = await axios.get(baseUrl);
    return response.data
}

const medicineService = { getMedicines }

export default medicineService