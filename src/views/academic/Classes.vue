<template>
<div class="row">
    <div class="col-sm-6">
        <div class="card form__card">
            <div class="card-body form__card--body">
                <div class="mb-5">
                    <h1>Add Class</h1>
                </div>
                <form class="styled-form" @submit.prevent="saveClass">
                    <div class="row">
                        <div class="col-sm-12">
                            <label>Class Name</label>
                            <input type="text" v-model="className" name="class_name" class="form-control">
                        </div>
                        
                        <div class="col-12 form-group mg-t-8">
                            <button class="button button-lg btn--yellow">Submit</button>
                            <button class="button button-lg btn--dark-blue">Reset</button>
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
                    <h1>All Classes</h1>
                </div>
                <ul class="list-group mb-2" v-for="oneClass in storeClasses" :key="oneClass.id">
                    <li class="list-group-item rounded-0" @dblclick="editClass(oneClass)" v-if="!oneClass.edit">
                        <input type="checkbox" @change="addToDelete(oneClass, $event)" v-model="oneClass.delete"> 
                        <span class="ml-3">{{ oneClass.name }}</span>
                        <i class="fas fa-trash-alt delete-icon"></i>
                    </li>
                    <li class="list-group-item rounded-0" v-else>
                        <input type="text" class="form-control rounded-0" @blur="doneEdit(oneClass)" @keyup.enter="doneEdit(oneClass)" @keyup.esc="cancelEdit(oneClass)" v-model="oneClass.name" v-focus>             
                        <span class="message" style="font-size: 10px; color: orangered;">Press Esc key to cancel edit</span>
                    </li>
                </ul>
                <label><input type="checkbox" @change="checkAll" :checked="allChecked"> Check All</label>

                <button class="btn p-3 btn-danger mt-3 ml-5">Delete marked classes</button>

            </div>
        </div>
    </div>
</div>
</template>

<script>
import AcademicDataService from "@/services/AcademicDataService";
import { mapActions, mapState } from 'vuex';
const { ClassDataService } = AcademicDataService;

export default {
    name: 'class',
    data(){
        return {
            className: null,
            classLoading: false,
            edit: false,
            cachedName: null,
            trash: []
        }
    },
    mounted(){
        this.getClasses()
    },
    directives:{
        focus:{
            inserted: function(el){
                el.focus()
            }
        }
    },
    computed: {
        ...mapState({
            storeClasses: 'classes'
        }),

        amountToDelete(){
            return this.$store.state.classes.filter(oneClass => oneClass.delete).length;
        },
        allChecked(){
            return this.amountToDelete === this.storeClasses.length ? true : false;
        }
    },
    methods: {
        ...mapActions(['getClasses']),
        saveClass() {     
            let self = this;
            this.classLoading = true;
            var newClass = {
                name: this.className,
            };
            
            ClassDataService.create(newClass)
            .then(response => {
                //   this.tutorial.id = response.data.id;
                console.log(response.data);
                this.$store.commit('APPEND_CLASS', response.data);                
                self.resetForm()
            })
            .catch(e => console.log(e))
            .finally(() => self.classLoading = false )
        },
        editClass(data){
            this.cachedName = data.name;
            data.edit = true;
        },
        doneEdit(data){
            if (data.name.trim() == '') {
                data.name = this.cachedName;
            }else{
                ClassDataService.update(data.id, data)
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
            data.edit = false;
        },
        addToDelete(data, e){
            console.log(this.$store);
            console.log(e);
            if (e.target.checked) {
                this.trash.push(data.id);
            }
            console.log(this.trash);
            
        },
        resetForm(){
            this.className = "";
        },
        checkAll(){
            this.$store.state.classes.forEach((oneClass) => oneClass.delete = event.target.checked)
        },
    }
}
</script>

<style scoped>

</style>