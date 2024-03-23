import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    position: "relative",
  },
  line: {
    // display: 'block',
    borderTop: "1px solid grey",
    minHeight: "1px",
    // position: 'absolute',
    top: "9px", // Adjust as necessary
    left: "calc(50% - 20px)", // Adjust as necessary
    width: "40px", // Adjust as necessary,
  },
  lineVertical: {
    height: "4rem",
    width: "2px",
    background: "grey",
    marginRight: "2.5rem",
    position: "absolute",
    top: "2.5rem",
    left: "26.8rem",
  },
  lineHorizontal: {
    position: "absolute",
    top: "0.8rem",
    left: "5rem",
  },
  lineHorizontal2: {
    left: "10.2rem",
  },
}));

export default useStyles;
