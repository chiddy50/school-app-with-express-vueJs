<template>
    <div class="card form__card">
        <div class="card-body form__card--body">
            <div class="mb-5">
                <h1>Add Parent</h1>
            </div>
            <form class="styled-form">
                <div class="row">
                    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-4">
                        <label>Fullname</label>
                        <input type="text" v-model="parent.fullname" name="name" class="form-control">
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-4">
                        <label>Email</label>
                        <input type="email" v-model="parent.email" name="email" class="form-control">
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-4">
                        <label>Gender</label>
                         <multiselect v-model="parent.gender" :options="genders" :searchable="false" :close-on-select="false" :show-labels="false" placeholder="Pick a value"></multiselect>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-4">
                        <label>Address</label>
                        <textarea name="address" v-model="parent.address" class="form-control" cols="30" rows="5"></textarea>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-4">
                        <label>Phone</label>
                        <input type="phone" v-model="parent.phone" name="phone" class="form-control">
                    </div>
                    <div class="col-12 form-group mt-5">
                        <button @click.prevent="saveParent" :disabled="parentLoading" class="button button-lg btn--yellow">Submit</button>
                        <button class="button button-lg btn--dark-blue">Reset</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
import ParentDataService from "@/services/ParentDataService";
import Vue from 'vue';

// register globally
Vue.component('multiselect', Multiselect);

export default {
    name: 'newParent',
    components: { Multiselect },
    data() {
    return {
      parent: {
        fullname: null,
        phone: null,
        email: null,
        address: null,
        gender: null
      },
      parentLoading: false,
      submitted: false,
      genders: ['male', 'female']
    };
  },
  methods: {
    saveParent() {     
        var data = {
            fullname: this.parent.fullname,
            phone: this.parent.phone,
            email: this.parent.email,
            address: this.parent.address,
            gender: this.parent.gender
        };
        
        this.parentLoading = true;
        ParentDataService.create(data)
            .then(response => {
                //   this.tutorial.id = response.data.id;
                console.log(response.data);
                this.submitted = true;
                this.resetForm()
            })
            .catch(e => {
            console.log(e);
            })
            .finally(() => this.parentLoading = false )
    },
    resetForm(){
        this.parent.fullname = "";
        this.parent.phone = "";
        this.parent.email = "";
        this.parent.address = "";
        this.parent.gende = "";
    }
    
    // newTutorial() {
    //   this.submitted = false;
    //   this.tutorial = {};
    // }
  }
}
</script>

<style scoped>


@media (max-width: 800px) {
    
}
</style>