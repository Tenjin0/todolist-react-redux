import axios from "axios";
import { ITodo } from "../constants/interfaces";

export default class Api {

    async get(endpoint: string, data?: any): Promise<ITodo[]> {
        if (!data) {
            data = {};
        }
        return await this.send("GET", endpoint, data);
    }

    async send(method: string, endpoint: string, data: any): Promise<ITodo[]> {
        const opts = {
            method,
            url: `${process.env.API_URL}/${endpoint}`
        };

        if (data) {
            return await axios(opts).then((response) => {
                return response.data.data;
            });
        }
        return Promise.resolve([]);
    }
}
