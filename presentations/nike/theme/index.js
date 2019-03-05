import createTheme from "../../../createTheme";

const colors = {
  primary: "white",
  secondary: "#00000", // black
  altSecondary: '#0083c3', // light blue
  tertiary: "#fd9134", // coral orange
  quaternary: "#e2e0e0", // smoke white
  quinary: "#191919" // dark grey
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