export default [
    {
        path: '/',
        component: () => import('@/layout/layout-main.vue'),
        children: [
            {
                name: 'home',
                path: '/ProDom/',
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
            {
                name: 'works',
                path: '/works',
                component: () => import('@/views/works-template.vue')
            },
            {
                name: 'turnkey',
                path: '/turnkey',
                component: () => import('@/views/turnkey-template.vue')
            },
            {
                name: 'monolitic',
                path: '/monolitic',
                component: () => import('@/views/monolitic-template.vue')
            },
            {
                name: 'walls',
                path: '/walls',
                component: () => import('@/views/walls-template.vue')
            },
            {
                name: 'roofing',
                path: '/roofing',
                component: () => import('@/views/roofing-template.vue')
            },
            {
                name: 'facades',
                path: '/facades',
                component: () => import('@/views/facades-template.vue')
            },
            {
                name: 'network',
                path: '/network',
                component: () => import('@/views/network-template.vue')
            },
            {
                name: 'finishing',
                path: '/finishing',
                component: () => import('@/views/finishing-template.vue')
            },
            {
                name: 'reconstruction',
                path: '/reconstruction',
                component: () => import('@/views/reconstruction-template.vue')
            },
            {
                name: 'scandinavia',
                path: '/scandinavia',
                component: () => import('@/views/scandinavia-template.vue')
            },
            {
                name: 'interesting',
                path: '/interesting',
                component: () => import('@/views/interesting-template.vue')
            },
        ]
    },
];