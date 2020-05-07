const lightTheme = {
  primary: "#151221",
  secondary: "#45b346",
  text: "#45b346",
  background: "#523874",
  success: "#518604",
  danger: "#721717",
  fontSizeTitle: "21px",
  linkColor: "#cccccc",
  linkColorHover: "#dc7c68",
  white: "#fff",
};

const darkTheme = {
  primary: "#523874",
  secondary: "#523874",
  text: "#cec1c1",
  background: "#151221",
  success: "#92c673",
  danger: "#ff8888",
  fontSizeTitle: "21px",
  linkColor: "#cccccc",
  linkColorHover: "#8d3f3f",
  white: "#fff",
};
const theme = (mode) => (mode === "dark" ? darkTheme : lightTheme);

export default theme;
