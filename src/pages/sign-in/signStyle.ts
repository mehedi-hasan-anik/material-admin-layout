import { SxProps } from "@mui/system";

export const signInStyle: SxProps = {
  ".boxWrapper": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    fontFamily: "'Roboto', sans-serif",
  },
  ".innerBoxWrapper": {
    border: "1px solid grey",
    borderRadius: "5px",
    padding: "20px 30px",
    maxWidth: "450px",
    width: "100%",
  },
  ".logoWrapper": {
    textAlign: "center",
  },
  ".headerWrapper": {
    textAlign: "center",
    "& h3": {
      fontSize: "30px",
      marginBottom: "10px",
    },
    "& p": {
      fontSize: "16px",
      marginBottom: "30px",
    },
  },
  ".textField": {
    width: "100%",
  },
  ".forgotEmailWrapper": {
    marginTop: "10px",
  },
  ".forgotEmail": {
    color: "#0076e4",
    fontWeight: 900,
  },
  ".textWrapper": {
    margin: "30px 0px",
    "& span": {
      color: "#0076e4",
      cursor: "pointer",
    },
  },
  ".bottomItem": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "30px",
    "& a": {
      color: "#0076e4",
    },
  },
};
