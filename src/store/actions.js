import AcademicDataService from '../services/AcademicDataService';
import OtherDataService from '../services/OtherDataService';
import ParentDataService from '../services/ParentDataService';
import StudentDataService from '../services/StudentDataService';

export default {

  getClasses({ commit }){
      const { ClassDataService } = AcademicDataService;
      ClassDataService.getAll()
      .then(response => {
          commit('SET_CLASSES', response.data);
        })
      .catch(err => console.log(err))
      .finally(() => console.log())
  },
  getSections({ commit }){
      const { SectionDataService } = AcademicDataService;
      SectionDataService.getAll()
      .then(response => {
          commit('SET_SECTIONS', response.data);
        })
      .catch(err => console.log(err))
      .finally(() => console.log())
  },
  getStudentGroups({ commit }){
    const { GroupDataService } = AcademicDataService;
    GroupDataService.getAll()
    .then(response => {
        commit('SET_GROUPS', response.data);
      })
    .catch(err => console.log(err))
    .finally(() => console.log())
  },
  getGenders({ commit }){
    const { GenderDataService } = OtherDataService;
    GenderDataService.getAll()
    .then(response => {
        console.log(response.data);
        
        commit('SET_GENDERS', response.data);
      })
    .catch(err => console.log(err))
    .finally(() => console.log())
  },
  getParents({ commit }){
    ParentDataService.getAll()
    .then(response => {
        commit('SET_PARENTS', response.data);
      })
    .catch(err => console.log(err))
    .finally(() => console.log())
  },
  getStudents({ commit }){
    StudentDataService.getAll()
    .then(response => {
        commit('SET_STUDENTS', response.data);
      })
    .catch(err => console.log(err))
    .finally(() => console.log())
  }

}