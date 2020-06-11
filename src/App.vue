<template>
  <div id="app">
    <div id="wrapper">
      <side-nav></side-nav>
      
      <div class="content" id="main-content">
        <div class="top-nav">
            <i class="fas fa-bars" id="menu-toggle"></i>
          <a class="active" href="#home">Home</a>
          <a href="#news">Login</a>
        </div>
        <div class="page-content container-fluid">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideNav from '@/components/SideNav';

export default {
  components: {
    SideNav
  }
}
</script>


<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>


<style>

.form__card{
  border: none;
}
.form__card--body {
  box-shadow: 0px 10px 20px 0px rgba(229, 229, 229, 0.75);
  padding: 3rem;
}

form.styled-form input, 
form.styled-form select{
  display: block;
  width: 100%;
  height: 5rem;
  padding: .5rem 1.5rem;
  margin: 0 0 2rem;
}

input:focus, 
textarea:focus, 
select:focus {
  outline: 0 !important;
  box-shadow: none !important;
  background-color: #f0f1f3 !important;
}

textarea, input, select{
  background-color: #f0f1f3 !important;
  border: none !important;
  outline: none;
  font-size: 1.4rem !important;
}

form.styled-form  label{
  font-size: 1.5rem;
  display: block;
  margin: 0 0 1rem;
  font-weight: 400;
  color: #343a40;
}

div.form__card li.list-group-item {
  padding: 1.5rem;
  font-size: 1.5rem;
}

.delete-icon{
  float: right;
  cursor: pointer;
  transition: all .3s;
}

.delete-icon:hover{
  color: orangered;
}

div.form__card li.list-group-item {
  padding: 1.5rem;
  font-size: 1.5rem;
}

th, td {
  padding: 1rem;
  font-size: 1.5rem;
}
</style>
