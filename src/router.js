import Vue from 'vue'
import Router from 'vue-router'
import SignUp from "./views/SignUp";
import Login from "./views/Login";
import NewRole from "./views/NewRole";

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: "/registro",
            name: "signup",
            component: SignUp
        },
        {
            path: "/login",
            name: "login",
            component: Login
        },
        {
            path: "/newrole",
            name: "newrole",
            component: NewRole
        }
    ]
})