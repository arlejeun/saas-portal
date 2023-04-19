const AuthRoutes = {
	path: '/auth',
	component: () => import('@/layouts/blank/BlankLayout.vue'),
	meta: {
		requiresAuth: false,
	},
	children: [
		{
			name: 'Welcome',
			path: '/',
			component: () => import('@/views/index.vue'),
		},
		{
			name: 'Side Login',
			path: '/auth/login',
			component: () => import('@/views/authentication/SideLogin.vue'),
		},
		{
			name: 'Error',
			path: '/auth/404',
			component: () => import('@/views/authentication/Error.vue'),
		},
	],
};

export default AuthRoutes;
