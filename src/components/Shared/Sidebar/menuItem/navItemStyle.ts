import { SxProps } from "@mui/system";

export const navItemStyle: SxProps = {
  "& .sidebar-menu": {},

  ".menuSingleItemIcon": {
    width: "20px",
  },

  ".navItemSingleIcon p": {
    color: "green",
  },

  "& .navItemContent": {
    borderBottom: "2px solid #133b3f",
    borderRadius: "10px",
    color: "#fff",
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    span: {
      fontSize: "14px",
      fontWeight: "400",
      fontFamily: "solaimanlipi",
    },
  },

  "& .navItemContent:hover": {
    color: "#1f5c4d",
    backgroundColor: "#c2dcd1",
  },
  "& .navItemContent:hover .dropdownItemIcon": {
    fontWeight: "bold",
    filter:
      "invert(0.62) sepia(0.86) saturate(12.68) hue-rotate(117deg) brightness(0.99) contrast(0.99)",
  },

  ".dropdownItemIcon": {
    minWidth: "27px",
  },
  ".dropdownItemIcon svg": {
    color: "#b0bec5",
  },

  // subdropdown
  ".subMenuDropdown": {
    marginLeft: "15px",
  },

  ".navItemSingleIcon svg": {
    color: "#b0bec5",
  },

  "& .subMenuDropdown a": {
    width: "100%",
    borderRadius: "15px 0px 0px 15px",
    "& p": {
      fontSize: "15px",
    },
  },
  "& .subMenuDropdown a:hover": {
    backgroundColor: "#c2dcd1",
    // color: "#1f5c4d",
    // "& img": {
    //   filter: "invert(0.62) sepia(0.86) saturate(12.68) hue-rotate(117deg) brightness(0.99) contrast(0.99)",
    // }
  },

  ".navItemSingleIcon": {
    minWidth: "27px",
    padding: "8px 0px",
  },
};
