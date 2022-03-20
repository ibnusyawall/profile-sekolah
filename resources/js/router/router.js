import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
    mode: "history",
    base: process.env.BASE_URL,

    routes: [
        {
            path: "/dashboard",
            component: () => import("./../layouts/full-layout/FullLayout"),
            meta: { requireAuth: true },
            children: [
                {
                    name: "user-dashboard",
                    path: "/dashboard",
                    component: () => import("./../views/Admin/Dashboard"),
                },
            ]
        },
        {
            name: 'Profile',
            path: '/',
            component: () => import("./../views/Profile/Dashboard")
        },
        {
            name: 'Login',
            path: '/login',
            component: () => import("./../views/Auth/Login")
        },
        {
            name: 'NotFound',
            path: '*',
            component: () => import("./../views/404")
        },
    ],
});

router.beforeEach(async (to, from, next) => {
    var token = localStorage.getItem('token')
    var user = JSON.parse(localStorage.getItem('user'))
    console.log('user', user)

    try {
        var checkLogin = await check()
        var isAuth = to.matched.some(record => record.meta.requireAuth)

        var cek = !!checkLogin
        if (isAuth && !cek) {
            next({
                name: 'Login',
                query: {
                    redirect: to.fullPath
                }
            })
        }
        next()
    } catch (e) {
        console.log(e)
    }
})

function check() {
    return new Promise(resolve => {
        axios.get('/api/user')
            .then(res => {
                var user = JSON.stringify(res.data)
                localStorage.setItem('user', user)
                console.log(res?.data)
                resolve(true)
            }).catch(e => {
                console.log(e)
                resolve(false)
            })
    })
}

export default router;
