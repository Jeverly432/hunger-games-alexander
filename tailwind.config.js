const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  corePlugins: {
    container: false,
  },
  theme: {
    spacing: {
      ...defaultTheme.spacing,
    },
    fontFamily: {
      aeonik: ['var(--font-aeonik)', ...defaultTheme.fontFamily.sans],
      inter: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
    },
    backgroundImage: {
      'hero-gradient':
        'linear-gradient(102.21deg, rgba(109, 156, 246, 0.7) -11.46%, #FFFFFF 46.19%)',
      'input-border-gradient':
        'linear-gradient(89.65deg, #1B244F 2.52%, #273871 51.14%, #2C427F 99.7%)',
      'input-gradient':
        'linear-gradient(269.21deg, rgba(24, 38, 74, 0.8) 22.75%, rgba(15, 22, 49, 0.8) 93.35%)',
      'placeholder-gradient':
        'linear-gradient(90deg, #C8D6F2 0%, #ADC2EC 32.41%, #9EB7E8 71.97%, #97B1E6 100%)',
      'action-gradient':
        'linear-gradient(90deg, rgba(109, 156, 246, 0.7) -8.51%, rgba(195, 214, 251, 0.876516) 10.33%, #FFFFFF 51.91%, rgba(208, 223, 252, 0.90333) 87.66%, rgba(109, 156, 246, 0.7) 109.79%)',
      'solutions-gradient':
        'linear-gradient(180deg, rgba(33, 66, 136, 0.25) 0%, rgba(8, 20, 43, 0.25) 100%)',
      'about-gradient': 
        'radial-gradient(circle, rgba(0, 84, 255, 0.2) 0%, rgba(0, 84, 255, 0) 56%)', 
    },
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: '#000',
      white: '#fff',
      primary: {
        1: '#0A0812',
        2: '#0f1233',
        3: '#243BB9',
        4: '#172165',
        5: '#3F57DA',
      },
      secondary: {
        1: '',
      },
      gray: {
        1: '#BDC4D1',
        2: '#EFF1F6',
      },
      blur: {
        'hero-ellipse': 'rgba(20,28,72,0.6)',
      },
      red: {
        1: '#F04242',
      },
      green: {
        1: '#4DB29A',
      },
      pink: {
        1: '#BE6AA7',
      },
      blue: {
        1: '#172136',
      },
    }),
    screens: {
      xl: { max: '1439px' },
      lg: { max: '1279px' },
      md: { max: '1023px' },
      sm: { max: '767px' },
      xs: { max: '639px' },
      '2xs': { max: '413px' },
    },
  },
  plugins: [require('tailwindcss-safe-area')],
};
