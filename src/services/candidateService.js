import axios from 'axios';

let baseUrl = "https://human-resources-management-sys.herokuapp.com/api/";
export default class CandidateService {
    getCandidates() {
        return axios.get(baseUrl + "candidates/getAllByDateDesc");
    }
    getCandidatesByPage(page, count) {
        return axios.get(baseUrl + "candidates/getAllByPage?pageNo=" + page + "+&pageSize=" + count);
    }
    getCandidatesConfirmedByStaff() {
        return axios.get(baseUrl + "candidates/getAllByConfirmedByStaff");
    }
    getCandidate(id) {
        return axios.get(baseUrl + "candidates/getDetailedCandidate?id=" + id);
    }
    registerCandidate(candidate){
        let result = axios.post(baseUrl + "candidates/register", candidate);
        return result;
    }
}