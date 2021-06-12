import axios from 'axios'

export default class JobTypeService {
    getJobTypes() {
        return axios.get("https://human-resources-management-sys.herokuapp.com/api/job-types/getAll")
    }
}