import createTheme from "../../../createTheme";

const colors = {
  primary: "white",
  secondary: "#00619e", // medium blue
  altSecondary: '#183558', // dark blue
  tertiary: "#00aed9", // light blue
  quaternary: "#feb948", // golden yellow
  quinary: "#79787d" // light grey
};

const theme = createTheme(colors, {
    primary: "'Roboto', sans-serif",
    secondary: "Montserrat"
  }, {
    progress: {
      pacmanTop: {
        background: colors.quaternary
      },
      pacmanBottom: {
        background: colors.quaternary
      },
      point: {
        borderColor: colors.quaternary
      }
    },
    components: {
      heading: {
        h1: {
          fontSize: '4rem',
          textTransform: 'uppercase'
        },
        h2: {
          fontSize: '3.5rem',
          textTransform: 'uppercase'
        },
        h3: {
          fontSize: '3rem',
          textTransform: 'uppercase'
        },
        h4: {
          fontSize: '2.5rem',
          textTransform: 'uppercase'
        },
        h5: {
          fontSize: '2rem',
          textTransform: 'uppercase'
        },
        h6: {
          fontSize: '1.5rem',
          textTransform: 'uppercase'
        }
      },
      codePane: {
        fontSize: '2rem'
      }
    }
  });

export default theme;