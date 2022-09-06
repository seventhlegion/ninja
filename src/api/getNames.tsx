import axiosInstance from "../Axios/axiosInstance";

const getNames = async () => {
    const { data } = await axiosInstance.get('users');

    return data;
}

export default getNames;