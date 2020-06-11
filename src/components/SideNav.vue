<template>
  <div class="sidebar" id="sidebar-wrapper">
        <div class="sidebar-heading">CODEWELL</div>
        <div class="links">
          <a class="accordion active" href="#home"><i class="fas fa-home nav-icon"></i>  Home</a>
          <a class="accordion dropdown" href="#"><i class="fas fa-tachometer-alt nav-icon"></i>  Dashboard</a>
          <ul class="panel">
            <li>
              <a href="#" class="inner-dropdown">Class</a>
            </li>
            <li>
              <a href="#" class="inner-dropdown">Section</a>
            </li>
            <li>
              <a href="#" class="inner-dropdown">Terms</a>
            </li>
          </ul>
          <a class="accordion dropdown" href="#"><i class="fas fa-users nav-icon"></i>  Students</a>
          <ul class="panel">
            <li>
              <router-link to="/students" class="inner-dropdown">All Students</router-link>
            </li>
            <li>
              <router-link to="/add-student" class="inner-dropdown">Admission Form</router-link>
            </li>
            <li>
              <a href="#" class="inner-dropdown">Terms</a>
            </li>
          </ul>
          <a class="accordion dropdown" href="#"><i class="fas fa-school nav-icon"></i>  Academic</a>
          <ul class="panel">
            <li>
              <router-link to="/class" class="inner-dropdown">Class</router-link>
            </li>
            <li>
              <router-link to="/section" class="inner-dropdown">Section</router-link>
            </li>
            <li>
              <router-link to="/student-group" class="inner-dropdown">Group</router-link>
            </li>
          </ul>
          <a class="accordion dropdown" href="#"><i class="fas fa-people-carry nav-icon"></i>  Parents</a>
          <ul class="panel">
            <li>
              <router-link to="/add-parent" class="inner-dropdown">Add Parent</router-link>
            </li>
            <li>
              <router-link to="/parents" class="inner-dropdown">All Parents</router-link>
            </li>          
          </ul>
        </div>
      </div>
</template>

<script>
export default {
  name: 'sideNav',
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
