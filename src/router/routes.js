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
            }
        ]
    },
    
    
];