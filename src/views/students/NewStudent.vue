<template>
    <div class="card form__card">
        <div class="card-body form__card--body">
            <div class="mb-5">
                <h1>Admission Form</h1>
            </div>
            <form class="styled-form" @submit.prevent="saveStudent">
                <div class="row">
                    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                        <label>Firstname</label>
                        <input type="text" v-model="student.firstname" class="form-control">
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                        <label>Lastname</label>
                        <input type="text" v-model="student.lastname" class="form-control">
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                        <label>Gender</label>
                        <select class="form-control" v-model="student.gender">
                            <option disabled>Choose Gender</option>
                            <option :value="gender.id" v-for="gender in genders" :key="gender.id">{{ gender.name }}</option>
                        </select>
                        <!-- <multiselect v-model="student.gender" :options="genders.name" :valueKeys="genders.id" :searchable="false" :close-on-select="false" :show-labels="false" placeholder="Pick a value"></multiselect> -->
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                        <label>Date Of Birth</label>
                        <input type="date" v-model="student.dob" class="form-control">
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                        <label>Roll</label>
                        <input type="text" v-model="student.rollNo" class="form-control">
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                        <label>Student Group</label>
                        <select class="form-control" v-model="student.group">
                            <option disabled>Choose Student Group</option>
                            <option :value="group.id" v-for="group in groups" :key="group.id">{{ group.name }}</option>
                        </select>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                        <label>Parent</label>
                        <select class="form-control" v-model="student.parent">
                            <option disabled>Choose Parent</option>
                            <option :value="parent.id" v-for="parent in parents" :key="parent.id">{{ parent.fullname }}</option>
                        </select>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                        <label>Email</label>
                        <input type="email" v-model="student.email" class="form-control">
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                        <label>Class</label>
                        <select class="form-control" v-model="student.class">
                            <option disabled>Choose Class</option>
                            <option :value="oneClass.id" v-for="oneClass in classes" :key="oneClass.id">{{ oneClass.name }}</option>
                        </select>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                        <label>Section</label>
                        <select class="form-control" v-model="student.section">
                            <option disabled>Choose Section</option>
                            <option :value="section.id" v-for="section in sections" :key="section.id">{{ section.name }}</option>
                        </select>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                        <label>Admission Date</label>
                        <input type="date" v-model="student.doa" class="form-control">
                    </div>
                    <div class="col-12 form-group mg-t-8">
                        <button class="button button-lg btn--yellow">Submit</button>
                        <button class="button button-lg btn--dark-blue">Reset</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
// import Multiselect from 'vue-multiselect'
import StudentDataService from "@/services/StudentDataService";

import { mapActions, mapState } from 'vuex'

export default {
    name: 'newSTtudent',
    components: { 
        // Multiselect
    },
    data(){
        return {
            student: {
                firstname: null,
                lastname: null,
                gender: null,
                email: null,
                doa: null,
                dob: null,
                class: null,
                section: null,
                parent: null,
                group: null,
                rollNo: null
            },
            options: ['list', 'of', 'optios']
        }
    },
    computed: {
        // ...mapGetters(['filterGenders']),
        ...mapState(['genders', 'parents', 'classes', 'sections', 'groups'])

    },
    beforeMount(){
        this.getGenders(),
        this.getParents(),
        this.getClasses(),
        this.getSections(),
        this.getStudentGroups()
    },
    methods: {
        ...mapActions(['getGenders', 'getParents', 'getClasses', 'getSections', 'getStudentGroups']),

        saveStudent(){
            var data = {
                firstname: this.student.firstname,
                lastname: this.student.lastname,
                email: this.student.email,
                rollNo: this.student.rollNo,
                doa: this.student.doa,
                dob: this.student.dob,
                class: this.student.class,
                section: this.student.section,
                parent: this.student.parent,
                group: this.student.group,
                gender: this.student.gender,
            };
        
            this.studentLoading = true;
            StudentDataService.create(data)
            .then(response => {
                //   this.tutorial.id = response.data.id;
                console.log(response.data);
                // this.submitted = true;
                // this.resetForm()
            })
            .catch(e => {
                console.log(e);
            })
            .finally(() => this.studentLoading = false )
        }
    }
}
</script>

<style scoped>


@media (max-width: 800px) {
    
}
</style>