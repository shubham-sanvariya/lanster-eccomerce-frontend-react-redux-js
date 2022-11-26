import axios from "axios";


const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDU0NmVhODMxYmZmZjg3Nzg4OTAzZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2Njc5NDI5NywiZXhwIjoxNjY3MDUzNDk3fQ.o2mhvWO3irGY4Qfiq-xgNFgMeOh4pKzhgjDz35NTmuo";

export const publicRequest = axios.create({
    baseURL:BASE_URL,
});
export const userRequest = axios.create({
    baseURL:BASE_URL,
    headers:{token: `Bearer ${TOKEN}`},
});