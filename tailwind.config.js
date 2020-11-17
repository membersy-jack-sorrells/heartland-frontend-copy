module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: {
          '100': '#d7ebd5',
          '200': '#bcdeb9',
          '300': '#aed7ab',
          '400': '#93c98f',
          '500': '#86c381',
          '600': '#78bc73',
          '700': '#6ca968',
          '800': '#548541',
          '900': '#3c5e3a',
        },
        blue: {
          '100': '#c0cbe2',
          '200': '#96a8ce',
          '300': '#8097c4',
          '400': '#5674b1',
          '500': '#4162a7',
          '600': '#2c519d',
          '700': '#28498d',
          '800': '#1f396e',
          '900': '#16294f',
        },
        teal: {
          '100': '#bcecef',
          '200': '#8fdfe5',
          '300': '#79d8e0',
          '400': '#4ccbd5',
          '500': '#35c5d0',
          '600': '#1fbecb',
          '700': '#1cabb7',
          '800': '#16858e',
          '900': '#105f66',
        },
      },
      screens: {
        '2xl': '1440px',
        '3xl': '1920px',
        '4xl': '2400px'
      },
      // colors: {
      //   "dark-blue": "#2c519d",
      //   "bright-teal": "#1fbecb",
      //   "bright-green": "#78bc73",
      //   "light-gray": "#d2d3d4",
      //   "dark-gray": "#606e7a"
      // },
      fontSize: {
        '7xl': '5rem',
        '8xl': '6rem'
      },
      zIndex: {
        "-10": "-10"
      },
      width: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
        '1/16': '6.25%',
        '2/16': '12.5%',
        '3/16': '18.75%',
        '4/16': '25%',
        '5/16': '31.25%',
        '6/16': '37.5%',
        '7/16': '43.75%',
        '8/16': '50%',
        '9/16': '56.25%',
        '10/16': '62.5%',
        '11/16': '68.75%',
        '12/16': '75%',
        '13/16': '81.25%',
        '14/16': '87.5%',
        '15/16': '93.75%',
      },
      maxWidth: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
        '1/16': '6.25%',
        '2/16': '12.5%',
        '3/16': '18.75%',
        '4/16': '25%',
        '5/16': '31.25%',
        '6/16': '37.5%',
        '7/16': '43.75%',
        '8/16': '50%',
        '9/16': '56.25%',
        '10/16': '62.5%',
        '11/16': '68.75%',
        '12/16': '75%',
        '13/16': '81.25%',
        '14/16': '87.5%',
        '15/16': '93.75%',
      },
      padding: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
        '1/16': '6.25%',
        '2/16': '12.5%',
        '3/16': '18.75%',
        '4/16': '25%',
        '5/16': '31.25%',
        '6/16': '37.5%',
        '7/16': '43.75%',
        '8/16': '50%',
        '9/16': '56.25%',
        '10/16': '62.5%',
        '11/16': '68.75%',
        '12/16': '75%',
        '13/16': '81.25%',
        '14/16': '87.5%',
        '15/16': '93.75%',
      },
      height: {
        '1/4': '25vh',
        '1/2': '50vh',
        '3/4': '75vh',
        '1/5': '20vh',
        '2/5': '40vh',
        '3/5': '60vh',
        '4/5': '80vh',
        '1/6': '16.666667vh',
        '5/6': '83.333333vh',
      },
      minHeight: {
        '1/4': '25vh',
        '1/2': '50vh',
        '3/4': '75vh',
        '1/5': '20vh',
        '2/5': '40vh',
        '3/5': '60vh',
        '4/5': '80vh',
        '1/6': '16.666667vh',
        '5/6': '83.333333vh',
      },
      maxHeight: {
        '1/4': '25vh',
        '1/2': '50vh',
        '3/4': '75vh',
        '1/5': '20vh',
        '2/5': '40vh',
        '3/5': '60vh',
        '4/5': '80vh',
        '1/6': '16.666667vh',
        '5/6': '83.333333vh',
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
  ]
};
