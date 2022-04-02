import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import Login from '../views/Login.vue'
// import LoginBar from '../components/LoginBar.vue'
// import Home from '../views/Home.vue'
// import UserBar from '../components/UserBar.vue'
// import Admin from '../views/Admin.vue'
// import AdminBar from '../components/AdminBar.vue'
// Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/',
//     component: Login,
//     name: 'Login',
//     children: [
//       {
//         path: '',
//         component: LoginBar
//       }
//     ]
//   },
//   {
//     path: '/user',
//     component: Home,
//     name: 'User',
//     children: [
//       {
//         path: '',
//         component: UserBar
//       }
//     ]
//   },
//   {
//     path: '/admin',
//     component: Admin,
//     name: 'Admin',
//     children: [
//       {
//         path: '',
//         component: AdminBar
//       }
//     ]
//   }
// ]

// const router = new VueRouter({
//   routes,
//   mode: "history"
// });


// export default router

