import { SxProps } from "@mui/system";

export const sideBarStyle: SxProps = {
  "& .sidebar-menu": {
    fontFamily: "solaimanlipi",
    height: "calc(100vh - 155px)",
    overflowY: "auto",
  },

  "@media only screen and (width: 1024px) and (height: 1366px)": {
    "& .sidebar-menu": {
      hight: "auto",
      maxHeight: "calc(100vh - 900px)",
    },
  },

  // scroll bar
  ".sidebar-menu::-webkit-scrollbar": {
    width: "10px",
    color: "green",
    display: "inline-block",
  },
  /* Track */
  ".sidebar-menu::-webkit-scrollbar-track": {
    background: "#f1f1f1",
  },

  /* Handle */
  ".sidebar-menu::-webkit-scrollbar-thumb": {
    background: "#888",
  },

  /* Handle on hover */
  ".sidebar-menu::-webkit-scrollbar-thumb:hover": {
    background: "#555",
  },

  "& .closeButton": {
    position: "absolute",
    right: 0,
    top: 0,
  },
  "& .closeButton svg": {
    color: "#fff",
    fontSize: "30px",
    cursor: "pointer",
  },
  "& .iflogo": {
    display: "grid",
    justifyItems: "center",
    alignContent: "center",
  },

  "& .mosqueTitle": {
    fontWeight: "bold",
    color: "#fff",
    fontFamily: "solaimanlipi",
    fontSize: "16px",
  },

  "@media (max-width: 375px)": {
    "& .sidebar-menu": {
      height: "calc(100vh - 190px)",
    },
    "& .iflogo": {
      margin: "20px",
    },
    ".closeButton svg": {
      color: "#fff",
      fontSize: "30px",
      background: "#18463b",
      borderRadius: "2px 2px 2px 8px",
    },
  },
};
