import { ElementType } from "react";

// ** Next Imports
import Link from "next/link";
import { useRouter } from "next/router";

// ** MUI Imports
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton, {
  ListItemButtonProps,
} from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

interface Props {
  item: any;
  viewSidebar: any;
}

// ** Styled Components
const MenuNavLink = styled(ListItemButton)<
  ListItemButtonProps & {
    component?: ElementType;
    target?: "_blank" | undefined;
  }
>(({ theme }) => ({
  borderBottom: "2px solid #133b3f",
  borderRadius: "10px",
  color: "#fff",
  span: {
    fontSize: "16px",
    fontWeight: "400",
    fontFamily: "solaimanlipi",
  },
  "&.inactive:hover": {
    backgroundColor: "#c2dcd1",
    color: "#1f5c4d",
  },

  "&.active, &.active:hover": {
    backgroundColor: "#c2dcd1",
    color: "#1f5c4d",
  },
  "&.active .MuiTypography-root, &.active .MuiSvgIcon-root": {
    color: "#1f5c4d",
  },
  "&.active .MuiTypography-root, &.active img": {
    color: "#1f5c4d",
    filter:
      "invert(0.62) sepia(0.86) saturate(60.68) hue-rotate(85deg) brightness(0.99) contrast(0.99)",
  },
}));

export const SingleLevel = ({ item, viewSidebar }: Props) => {
  const router = useRouter();

  const isNavLinkActive = () => {
    if (
      router.pathname === item.path ||
      router.pathname.includes(`/${item?.pathTitle?.toLowerCase()}/`)
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Box>
      <ListItem
        disablePadding
        className="nav-link"
        disabled={item.disabled || false}
      >
        <Link passHref href={item.path === undefined ? "/" : `${item.path}`}>
          <MenuNavLink
            // component={"a"}
            className={isNavLinkActive() ? "active" : "inactive"}
            {...(item.openInNewTab ? { target: "_blank" } : null)}
            onClick={(e) => {
              if (item.path === undefined) {
                e.preventDefault();
                e.stopPropagation();
              }
              localStorage.removeItem("selectedName");
              localStorage.removeItem("selectedPath");
            }}
            sx={{
              width: "100%",
              ...(item.disabled
                ? { pointerEvents: "none" }
                : { cursor: "pointer" }),
            }}
          >
            <ListItemIcon className="navItemSingleIcon">
              {item.icon}
            </ListItemIcon>
            <Typography>{item.title}</Typography>
          </MenuNavLink>
        </Link>
      </ListItem>
    </Box>
  );
};
