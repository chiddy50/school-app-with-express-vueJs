<template>
  <div class="row my-5">
    <div class="col-sm-12">
        <div class="card form__card">
            <div class="card-body form__card--body">
                <div class="mb-5">
                    <h1>Student Groups</h1>
                </div>
                <form class="styled-form">
                  <div class="row">
                    <div class="col-4-xxxl col-xl-3 col-lg-3 col-12 form-group">
                      <input type="text" class="form-control" placeholder="Search Name or Roll No">
                    </div>
                    <div class="col-4-xxxl col-xl-3 col-lg-3 col-12 form-group">
                      <select class="form-control">
                          <option disabled>Choose Class</option>
                          <option :value="oneClass.id" v-for="oneClass in classes" :key="oneClass.id">{{ oneClass.name }}</option>
                      </select>
                    </div>
                    <div class="col-4-xxxl col-xl-3 col-lg-3 col-12 form-group">
                      <select class="form-control">
                          <option disabled>Choose Section</option>
                          <option :value="section.id" v-for="section in sections" :key="section.id">{{ section.name }}</option>
                      </select>
                    </div>
                    <div class="col-4-xxxl col-xl-3 col-lg-3 col-12 form-group">
                      <!-- <input type="text" class="form-control"> -->
                    </div>
                  </div>
                </form>
                <table class="table table-bordered text-center">
                    <thead>
                        <tr>
                            <th>#Roll No</th>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th colspan="3"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(student, index) in students" :key="index">
                          <td>{{ student.roll_no }}</td>
                          <td>{{ student.firstname }}</td>
                          <td>{{ student.lastname }}</td>
                          <td>
                            <button class="btn btn-warning text-light">
                                <i class="fas fa-eye"></i>
                            </button>
                          </td>
                          <td>
                            <button class="btn btn-danger">
                                <i class="fas fa-trash"></i>
                            </button>
                          </td>
                          <td>
                            <button class="btn btn-success">
                                <i class="fas fa-pencil-alt"></i>
                            </button>
                          </td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'student',
  data(){
    return {}
  },
  computed: {
    ...mapState(['students', 'sections', 'classes'])
  },
  mounted(){
    this.getStudents(),
    this.getClasses(),
    this.getSections()
  },
  methods: {
    ...mapActions(['getStudents', 'getClasses', 'getSections'])
  }
  
  }
</script>

<style scoped>

</style>

