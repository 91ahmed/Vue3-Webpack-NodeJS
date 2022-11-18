import { createApp } from 'vue'
import * as VueRouter from 'vue-router'

// Import components and view
import Home from '@/src/views/Home.vue'
import LoginComponent from '@/src/components/LoginComponent.vue'
import RegisterComponent from '@/src/components/RegisterComponent.vue'

// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: Home },
  { path: '/login', component: LoginComponent },
  { path: '/register', component: RegisterComponent },
]

// Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = VueRouter.createRouter({
	// 4. Provide the history implementation to use. We are using the hash history for simplicity here.
	history: VueRouter.createWebHistory(), //VueRouter.createWebHashHistory(),
	routes, // short for `routes: routes`
})

// Create and mount the root instance.
const app = createApp({})

// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router)

// amount function should be at the end of the script.
app.mount('#app')