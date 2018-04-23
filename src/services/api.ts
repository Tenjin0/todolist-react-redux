import axios from 'axios';
import {iTodo} from '../constants/interfaces';
   
export default class Api {
    
    constructor() {
    }

    async get(endpoint : string, data?: any) : Promise<iTodo[]> {
        if (!data) {
            data = {}
        }
        return await this.send('GET', endpoint, data)
    }

    async send(method: string, endpoint: string , data: any) : Promise<iTodo[]>{
        let opts = {
            method: method,
            url: `${process.env.API_URL}/${endpoint}`
        }
        
        if(data) {
            return await axios(opts).then((response) => {
                return response.data.data
            })
        }
        return Promise.resolve([])
    }
}
