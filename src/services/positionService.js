import axios from 'axios'

export default class PositionService {
    getPositions() {
        return axios.get("https://human-resources-management-sys.herokuapp.com/api/positions/getAll")
    }
}