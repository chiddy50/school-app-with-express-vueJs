import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path: "/students",
      name: "students",
      component: () => import("@/views/students/Students")
    },
    {
      path: "/add-student",
      name: "newStudent",
      component: () => import("@/views/students/NewStudent")
    },
    {
      path: "/class",
      name: "class",
      component: () => import("@/views/academic/Classes.vue")
    },
    {
      path: "/section",
      name: "section",
      component: () => import("@/views/academic/Section.vue")
    },
    {
      path: "/student-group",
      name: "studentGroup",
      component: () => import("@/views/academic/StudentGroup.vue")
    },
    {
      path: "/add-parent",
      name: "addParent",
      component: () => import("@/views/parents/NewParent.vue")
    },
    {
      path: "/",
      alias: "/tutorials",
      name: "tutorials",
      component: () => import("@/views/TutorialsList")
    },
    {
      path: "/tutorials/:id",
      name: "tutorial-details",
      component: () => import("@/views/Tutorial")
    },
    {
      path: "/add",
      name: "add",
      component: () => import("@/views/AddTutorial")
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
