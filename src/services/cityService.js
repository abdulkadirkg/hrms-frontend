import axios from 'axios'

export default class CityService{
    async getCities(){
        return await axios.get("https://human-resources-management-sys.herokuapp.com/api/cities/getAll")
    }
    async getCitiesByCount(count) {
        return await axios.get("https://human-resources-management-sys.herokuapp.com/api/cities/getAllByPage?pageNo=1&pageSize="+count)
    }
}