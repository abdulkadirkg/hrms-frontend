import axios from 'axios'

export default class PositionService {
    getPositions() {
        return axios.get("https://human-resources-management-sys.herokuapp.com/api/positions/getAll")
    }
    getPositionsByCount(count) {
        return axios.get("https://human-resources-management-sys.herokuapp.com/api/positions/getAllByPage?pageNo=1&pageSize=" + count)
    }
}