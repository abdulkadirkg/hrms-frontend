import axios from 'axios';
let baseUrl = "https://human-resources-management-sys.herokuapp.com/api/";
export default class ResumeService {
    async getAllResumes() {
        let resumes = await axios.get(baseUrl + "resumes/getAll");
        return resumes;
    }
    async updateResume(resume) {
        let update = await axios.post(baseUrl + "resumes/update", resume);
        return update;
    }
}
