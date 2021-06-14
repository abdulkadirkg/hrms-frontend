import axios from 'axios'

export default class JobTypeService {
    getJobTypes() {
        return axios.get("https://human-resources-management-sys.herokuapp.com/api/job-types/getAll")
    }
    getJobTypesByCount(count) {
        return axios.get("https://human-resources-management-sys.herokuapp.com/api/job-types/getAllByPage?pageNo=1&pageSize=" + count)
    }
}