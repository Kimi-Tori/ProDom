export default [
    {
        path: '/',
        component: () => import('@/layout/layout-main.vue'),
        children: [
            {
                name: 'home',
                path: '',
                component: () => import('@/views/home-template.vue')
            },
        ]
    },
    
   /*  {
        name: 'side-template',
        path: '/side-template',
        component: () => import('@/views/side-template.vue')
    } */
];