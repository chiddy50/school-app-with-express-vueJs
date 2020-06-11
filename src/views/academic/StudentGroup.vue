<template>
<div>
    <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
            <div class="card form__card">
                <div class="card-body form__card--body">
                    <div class="mb-5">
                        <h1>Add Student Group</h1>
                    </div>
                    <form class="styled-form" @submit.prevent="saveGroup">
                        <div class="row">
                            <div class="col-sm-12">
                                <label>Group Name</label>
                                <input type="text" v-model="group.name" class="form-control">
                            </div>
                            
                            <div class="col-12 form-group mg-t-8">
                                <button type="submit" v-if="!edit" :disabled="groupLoading" class="button button-lg btn--yellow">Submit</button>
                                <button type="submit" @click.prevent="updateGroup" :disabled="updateLoading" v-else class="button button-lg btn-success">Edit</button>
                                <button type="reset" @click="reset" class="button button-lg btn--dark-blue">
                                    {{ edit ? 'Cancel Edit' : 'Reset' }}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div class="row my-5">
        <div class="col-sm-12">
            <div class="card form__card">
                <div class="card-body form__card--body">
                    <div class="mb-5">
                        <h1>Student Groups</h1>
                    </div>
                    
                    <table class="table table-bordered text-center">
                        <thead>
                            <tr>
                                <th>Group Name</th>
                                <th colspan="4"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="group in studentGroups" :key="group.id">
                                <td>{{ group.name }}</td>
                                <td>
                                    <button class="btn btn-danger">
                                        <i class="fas fa-trash"></i>
                                    </button>
                                </td>
                                <td>
                                    <button class="btn btn-success" @click="editGroup(group)">
                                        <i class="fas fa-pencil-alt"></i>
                                    </button>
                                </td>
                                <td>
                                    <button type="submit" class="button button-sm btn--dark-blue">View Subjects</button>
                                </td>
                                <td>
                                    <button type="submit" class="button button-sm btn-primary">Add Subjects</button>
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import AcademicDataService from "@/services/AcademicDataService";
import { mapActions, mapState } from 'vuex';
const { GroupDataService } = AcademicDataService;

export default {
    name: 'studentGroup',
    data(){
        return {
            group: {
                id: null,
                name: null
            },
            groupLoading: false,
            updateLoading: false,
            edit: false,
            cachedName: null,
            trash: []
        }
    },
    computed: {
        ...mapState({
            studentGroups: 'groups'
        })
    },
    mounted(){
        this.getStudentGroups()
    },
    methods: {
        ...mapActions(['getStudentGroups']),

        saveGroup() {     
            let self = this;
            this.groupLoading = true;
            var group = {
                name: this.group.name,
            };
            
            GroupDataService.create(group)
            .then(response => {
                console.log(response.data);
                this.$store.commit('APPEND_GROUP', response.data);                
                self.resetForm()
            })
            .catch(e => console.log(e))
            .finally(() => self.groupLoading = false )
        },
        updateGroup(){
            this.updateLoading = true;
            GroupDataService.update(this.group.id, this.group)
            .then(response => {
                console.log(response.data);
                this.$store.commit('UPDATE_GROUP', this.group);
            })
            .catch(e => {
                console.log(e);
            })
            .finally(() => {
                this.reset();
                this.updateLoading = false;
            })
        },
        editGroup(group){
            this.group.name = group.name;
            this.group.id = group.id;
            this.edit = true;
        },
        resetForm(){
            this.group.name = "";
        },
        reset(){
            this.edit = false
            this.resetForm()
        }
    }
}
</script>

<style scoped>
/* div.form__card li.list-group-item {
    padding: 1.5rem;
    font-size: 1.5rem;
}

th, td {
    padding: 1rem;
    font-size: 1.5rem;
} */

</style>