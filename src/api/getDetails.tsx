import axiosInstance from "../Axios/axiosInstance";

const getDetails = async <T extends number | string>(id: T) => {
    const { data } = await axiosInstance.get('Users/' + id);

    return data;
}

export default getDetails