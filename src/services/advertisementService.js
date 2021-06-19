import axios from 'axios';

let baseUrl = "https://human-resources-management-sys.herokuapp.com/api/";
export default class AdvertisementService {
    getAdvertisements() {
        let advertisements = axios.get(baseUrl + "jobadvertisements/getAllByDateDesc");
        return advertisements;
    }
    getAdvertisementsByPage(page, count) {
        let advertisements = axios.get(baseUrl + "jobadvertisements/getAllByPage?pageNo=" + page + "+&pageSize=" + count);
        return advertisements;
    }
    getAdvertisementsConfirmedByStaff() {
        let advertisements = axios.get(baseUrl + "jobadvertisements/getAllByConfirmedByStaff");
        return advertisements;
    }
    getAdvertisment(id) {
        let advertisements = axios.get(baseUrl + "jobadvertisements/get?Id=" + id);
        return advertisements;
    }
    saveAdvertisement(advertisement) {
        let advertisements = axios.post(baseUrl + "jobadvertisements/add", advertisement);
        return advertisements;
    }
}