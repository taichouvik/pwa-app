import axios from 'axios';
import { ApiResponse } from '../apiresponse/ApiResponse';

const instance = axios.create(
    {
        baseURL: "http://localhost:8080/",
        withCredentials: false,
        headers: {
            'Content-Type': 'application/json'
        }

    })
const post = async (url: string, body: {}): Promise<{ "ok": boolean, "result": unknown | ApiResponse}> => {
    var response;
    try {
        response = await instance.post(url, body);
        var responseBody = response.data as ApiResponse;
        return { "ok": true, "result": responseBody };
    }

    catch (err) {
        console.log(err);
        return { "ok": false, "result": err };
    }
}

export { post };