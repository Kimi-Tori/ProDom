export default [
    {
        path: '/',
        component: () => import('@/layout/layout-main.vue'),
        children: [
            {
                name: 'home',
                path: '/',
                component: () => import('@/views/home-template.vue')
            },
            {
                name: 'about-us',
                path: '/about-us',
                component: () => import('@/views/about-us.vue')
            },
            {
                name: 'designed',
                path: '/designed',
                component: () => import('@/views/designed-template.vue')
            },
            {
                name: 'footing',
                path: '/footing',
                component: () => import('@/views/the-footing-template.vue')
            },
            {
                name: 'ready-made',
                path: '/ready-made',
                component: () => import('@/views/ready-made-template.vue')
            },
            {
                name: 'mortgage',
                path: '/mortgage',
                component: () => import('@/views/mortgage-template.vue')
            },
            {
                name: 'villas',
                path: '/villas',
                component: () => import('@/views/villas-template.vue')
            },
            {
                name: 'mini-houses',
                path: '/mini-houses',
                component: () => import('@/views/mini-houses-template.vue')
            },
            {
                name: 'contacts',
                path: '/contacts',
                component: () => import('@/views/contacts-template.vue')
            },
        ]
    },
    
    
];