module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
	  extend: {
		  colors: {
			  background: '#333333',
			  textLight: '#E2E2E2',
			  logoColor: '#059BFF',
		  },
		  backgroundImage: {
			  'vape1': "url('/assets/vape1.png')",
			  'closeup': "url('/assets/Closeup2.jpg')",
			  'cocktail': "url('/assets/cocktail.jpg')",
			  'outside': "url('/assets/outside.jpg')",
			  'shisha_light': "url('/assets/shisha_light.jpg')",
			  'smoke1': "url('/assets/smoke1.png')",
			  'smoke2': "url('/assets/smoke2.png')",
			  'woman_shisha': "url('/assets/woman_shisha.jpg')",
			  'smoke_exhale': "url('/assets/smoke_exhale.jgp')",
			  'logo': "url('/assets/logo.png')",
		  }
	  },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
