import axios from 'axios';

export default class AdvertisementService{
    getAdvertisements(){
        return axios.get("https://human-resources-management-sys.herokuapp.com/api/jobadvertisements/getAllByDateDesc");
    }
}