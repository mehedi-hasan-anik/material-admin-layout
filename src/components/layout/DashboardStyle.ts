import { makeStyles } from "@material-ui/core";

const drawerWidth = 260;
const drawerWidthmd = 260;
const dashboardStyle = makeStyles((theme) => ({
  menuButton: {
    root: {
      display: "flex",
    },
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
  viewSidebarWrapper: {
    "&:hover": {
      test: {
        display: "block",
      },
    },
  },

  sidebarIconWrapper: {
    background: "red",
    width: "50px",
    height: "100vh",
    backgroundImage: "url(/assets/sideBarBg.jpg)",
  },
  viewSideBarIcon: {
    padding: "10px 0px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& svg": {
      color: "white",
      cursor: "pointer",
    },
  },

  sidebarViewIconWrapper: {
    marginTop: "26px",
    borderTop: "1px solid white",
    display: "flex",
    flexDirection: "column",
  },

  AppBar: {
    background: "url('/assets/headerBg.jpg')",
    [theme.breakpoints.up("lg")]: {
      // width: `calc(100% - ${drawerWidth}px)`,
    },
    [theme.breakpoints.up("md")]: {
      // width: `calc(100% - ${drawerWidthmd}px)`,
    },
  },
  closeButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "10px",
    "& svg": {
      color: "white",
      cursor: "pointer",
    },
  },
  headerWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    flexWrap: "wrap",
  },
  headerLogoWrapper: {
    display: "none",
  },
  headerRight: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
  },
  headTitle: {
    fontFamily: "solaimanlipi",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "25px",
    paddingLeft: "10px",
  },
  langUl: {
    listStyle: "none",
    display: "flex",
    marginRight: "20px",
    backgroundColor: "#1F5C4D",
    color: "white",
    borderTopLeftRadius: "20px",
    borderTopRightRadius: "20px",
    borderBottomLeftRadius: "20px",
    borderBottomRightRadius: "20px",
    border: "1px solid #fff",
    padding: "0px",
    "& .langLi": {
      cursor: "pointer",
      padding: "5px 15px",
      borderColor: "white",
    },
    "& .langBg": {
      backgroundColor: "white",
      color: "#1F5C4D",
      padding: "5px 20px",
      borderTopLeftRadius: "20px",
      borderTopRightRadius: "20px",
      borderBottomLeftRadius: "20px",
      borderBottomRightRadius: "20px",
    },
  },

  content: {
    flexGrow: 1,
    // padding: theme.spacing(2),
    [theme.breakpoints.up("lg")]: {
      // width: `calc(100% - ${drawerWidth}px)`,
      // marginLeft: drawerWidth,
    },
    // maxHeight: "calc(100vh - 104px)",
    height: "calc(100vh)",
    width: "100%",
    overflowY: "hidden",
    margin: "0",
    padding: "0",
  },

  drawer: {
    [theme.breakpoints.up("lg")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
    "& ::-webkit-scrollbar": {
      display: "none",
    },
    textAlign: "center",
    color: "#fff",
  },
  ".mosqueTitle": {
    color: "#fff",
  },

  drawerPaper: {
    width: drawerWidth,
  },

  // header style start

  ".profileModal": {
    background: "green",
  },
  // header style end

  "@media (min-width: 0px) and (max-width: 375px)": {
    langUl: {
      marginRight: "5px",
    },
  },
  contentWrapper: {
    "@media (max-width: 1200px)": {
      width: "100%",
      marginLeft: "0",
    },
  },

  "@media (min-width: 600px) and (max-width: 1024px)": {
    headerWrapper: {
      justifyContent: "center",
      flexWrap: "wrap",
    },
  },

  "@media (max-width: 1400px)": {
    headTitle: {
      fontSize: "20px",
    },
    headerLogoWrapper: {},
  },
  "@media (max-width: 1300px)": {
    headTitle: {
      fontSize: "16px",
    },
  },
  "@media (max-width: 1279px)": {
    headerWrapper: {
      marginLeft: "224px",
    },
  },
  "@media (max-width: 1200px)": {
    headerWrapper: {
      marginLeft: "0px",
    },
  },
  "@media (max-width: 1024px)": {
    headTitle: {
      display: "none",
    },
    headerWrapper: {
      justifyContent: "space-between",
      // justifyContent: 'center',
    },
    headerLogoWrapper: {
      display: "block",
    },
  },
  toolbar: theme.mixins.toolbar,
}));

export default dashboardStyle;
