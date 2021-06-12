import axios from 'axios';

let baseUrl = "https://human-resources-management-sys.herokuapp.com/api/";
export default class AdvertisementService {
    getAdvertisements() {
        return axios.get(baseUrl + "jobadvertisements/getAllByDateDesc");
    }
    getAdvertisment(id) {
        return axios.get(baseUrl + "jobadvertisements/get?Id=" + id);
    }
}