import createTheme from "../../../createTheme";

const colors = {
  primary: "#f8f8ff",
  secondary: "#f37321", // peach
  altSecondary: '#ed1a36', // apple red
  tertiary: "#22772d", // sprouts green
  quaternary: "#e8f000", // banana yellow
  quinary: "#f8f8ff", // off white - forest green = #1e772d
  last: "#a62022" // wine red
};

const theme = createTheme(colors, {
    primary: "'Raleway', sans-serif;",
    secondary: "'Mukta', sans-serif;"
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
        },
        h2: {
          fontSize: '3.5rem',
        },
        h3: {
          fontSize: '3rem',
        },
        h4: {
          fontSize: '2.5rem',
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