import axios from "axios";

const getNames = async () => {
    const { data } = await axios.get('http://localhost:3000/api/health-check');

    return data;
}

export default getNames;