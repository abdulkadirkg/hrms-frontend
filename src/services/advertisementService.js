import axios from 'axios';

export default class AdvertisementService{
    getAdvertisements(){
        return axios.get("http://localhost:8080/api/jobadvertisements/getAll");
    }
}