import axios from 'axios';
let baseUrl = "https://human-resources-management-sys.herokuapp.com/api/";
export default class EmployerService {
    registerEmployer(employer) {
        let result = axios.post(baseUrl + "employers/register", employer);
        return result;
    }
}