import axios from 'axios';

let baseUrl = "https://human-resources-management-sys.herokuapp.com/api/";
export default class AdvertisementService {
    getAdvertisements() {
        return axios.get(baseUrl + "jobadvertisements/getAllByDateDesc");
    }
    getAdvertisementsByPage(page, count) {
        return axios.get(baseUrl + "jobadvertisements/getAllByPage?pageNo=" + page + "+&pageSize=" + count);
    }
    getAdvertisementsConfirmedByStaff() {
        return axios.get(baseUrl + "jobadvertisements/getAllByConfirmedByStaff");
    }
    getAdvertisment(id) {
        return axios.get(baseUrl + "jobadvertisements/get?Id=" + id);
    }
}