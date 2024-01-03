/** @type {import('tailwindcss').Config} */

const colorClasses = [
  'bg-purple-100', 
  'text-purple-800', 
  'bg-orange-100', 
  'text-orange-800', 
	'bg-blue-100', 
  'text-blue-800', 
];


export default {
	purge: {
		safelist: [
      ...colorClasses
    ],
	},
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [],
}
