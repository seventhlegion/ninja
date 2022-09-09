import axios from "axios";

const getNames = async<T extends string[] | string>() => {
    const { data } = await axios.get<T>('http://localhost:3000/api/health-check');

    return data;
}

export default getNames;