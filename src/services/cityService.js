import axios from 'axios'

export default class CityService{
    getCities(){
        return axios.get("https://human-resources-management-sys.herokuapp.com/api/cities/getAll")
    }
    getCitiesByCount(count) {
        return axios.get("https://human-resources-management-sys.herokuapp.com/api/cities/getAllByPage?pageNo=1&pageSize="+count)
    }
}