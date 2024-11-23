import axios from "axios";

export const axiosPublic = axios.create({
    baseURL: 'https://shop-nest-quest-server.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;