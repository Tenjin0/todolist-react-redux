export default class Api {
    
    constructor() {
    }

    get(endpoint : string, data : any) {
        return this.send('GET', endpoint, data)
    }

    send(method: string, endpoint: string , data: any) {
        let opts = {
            method: method,
            // url: `${API_URL}/${endpoint}`
        }
        
        if(data) {
            
        }
    }
}