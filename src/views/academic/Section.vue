<template>
<div class="row">
    <div class="col-sm-6">
        <div class="card form__card">
            <div class="card-body form__card--body">
                <div class="mb-5">
                    <h1>Add Section</h1>
                </div>
                <form class="styled-form" @submit.prevent="saveSection">
                    <div class="row">
                        <div class="col-sm-12 col-md-6">
                            <label>Section Name</label>
                            <input type="text" v-model="section.name" class="form-control">
                        </div>
                        <div class="col-sm-12 col-md-6">
                            <label>Section Code</label>
                            <input type="text" v-model="section.code" class="form-control">
                        </div>
                        
                        <div class="col-12 form-group mg-t-8">
                            <button type="submit" class="button button-lg btn--yellow">Submit</button>
                            <button type="reset" class="button button-lg btn--dark-blue">Reset</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div class="col-sm-6">
        <div class="card form__card">
            <div class="card-body form__card--body">
                <div class="mb-5">
                    <h1>All Sections</h1>
                </div>
                <ul class="list-group mb-2" v-for="section in storeSections" :key="section.id">
                    <li class="list-group-item rounded-0 upper" @dblclick="editSection(section)" v-if="!section.edit">
                        <input type="checkbox" @change="addToDelete(section, $event)"> 
                        <span class="ml-3">{{ section.name }}</span>
                        <i class="fas fa-trash-alt delete-icon"></i>
                    </li>
                    <li class="list-group-item rounded-0 lower" v-else>
                        <div class="row mb-3">
                            <div class="col-sm-6">
                            <!-- Name: -->
                            <input type="text" class="form-control rounded-0 mb-2" v-model="section.name">     
                            </div>
                            <div class="col-sm-6">
                            <!-- Code:  -->
                            <input type="text" class="form-control rounded-0 mb-2" v-model="section.code">     
                            </div>
                        </div>
                        <!-- <input type="text" class="form-control rounded-0 mb-2" @blur="doneEdit(section)" @keyup.enter="doneEdit(section)" @keyup.esc="cancelEdit(section)" v-model="section.name" v-focus>              -->
                        <!-- Name: 
                        <input type="text" class="form-control rounded-0 mb-2" v-model="section.name">     
                        Code:        
                        <input type="text" class="form-control rounded-0 mb-2" v-model="section.code"> -->
                        <button class="btn p-2 btn-danger" @click="cancelEdit(section)">Cancel</button>
                        <button class="btn p-2 btn-info mx-3" @click="doneEdit(section)">Update</button>
                    </li>
                </ul>
                <button class="btn p-3 btn-danger mt-3">Delete marked sections</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import AcademicDataService from "@/services/AcademicDataService";
import { mapActions, mapState } from 'vuex';
const { SectionDataService } = AcademicDataService;

export default {
    name: 'class',
    data(){
        return {
            section: {
                name: null,
                code: null  
            },
            sectionLoading: false,
            edit: false,
            cachedName: null,
            cachedCode: null,
            trash: []
        }
    },
    mounted(){
        this.getSections()
    },
    computed: {
        ...mapState({
            storeSections: 'sections'
        })
    },
    methods: {
        ...mapActions(['getSections']),
        saveSection() {     
            let self = this;
            this.sectionLoading = true;
            var newClass = {
                name: this.section.name,
                code: this.section.code
            };
            
            SectionDataService.create(newClass)
            .then(response => {
                console.log(response.data);
                this.$store.commit('APPEND_SECTION', response.data);                
                self.resetForm()
            })
            .catch(e => console.log(e))
            .finally(() => self.sectionLoading = false )
        },
        editSection(data){
            this.cachedName = data.name;
            this.cachedCode = data.code;
            data.edit = true;
        },
        doneEdit(data){
            if (data.name.trim() == '' || data.code.trim() == '') {
                data.name = this.cachedName;
                data.code = this.cachedCode;
            }else{
                SectionDataService.update(data.id, data)
                .then(response => {
                    console.log(response);
                })
                .catch(e => {
                    console.log(e);
                });
            }
            data.edit = false
        },
        cancelEdit(data){            
            data.name = this.cachedName;
            data.code = this.cachedCode;
            data.edit = false;
        },
        addToDelete(data, e){
            console.log(e);
            if (e.target.checked) {
                this.trash.push(data.id);
            }
            console.log(this.trash);
            
        },
        resetForm(){
            this.section.name = "";
            this.section.code = "";
        }
    }
}
</script>

<style scoped>
.upper, .lower {
    transition: all .3s;
}

</style>