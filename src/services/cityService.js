import axios from 'axios'

export default class CityService{
    getCities(){
        return axios.get("https://human-resources-management-sys.herokuapp.com//api/cities/getAll")
    }
}