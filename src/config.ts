export type ConfigProps = {
	Sidebar_drawer: any;
	Customizer_drawer: boolean;
	mini_sidebar: boolean;
	setHorizontalLayout: boolean;
	setRTLLayout: boolean;
	actTheme: string;
	inputBg: string;
	boxed: boolean;
	setBorderCard: boolean;
};

const config: ConfigProps = {
	Sidebar_drawer: null,
	Customizer_drawer: false,
	mini_sidebar: false,
	setHorizontalLayout: false, // Horizontal layout
	actTheme: 'GREEN_THEME',
	inputBg: 'GREEN_THEME',
	setRTLLayout: false, // RTL layout
	boxed: true,
	setBorderCard: false,
};

export default config;
