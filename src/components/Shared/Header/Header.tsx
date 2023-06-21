import dashboardStyle from "@/components/layout/DashboardStyle";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { AppBar, Avatar, Badge, IconButton, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";

type props = {
  mobileOpen: boolean;
  setMobileOpen: (params: boolean) => void;
  setViewSidebar: any;
  viewSidebar: any;
};

const Header = ({
  mobileOpen,
  setMobileOpen,
  setViewSidebar,
  viewSidebar,
}: props) => {
  const classes = dashboardStyle();

  return (
    <Box
      sx={{
        width: viewSidebar ? "calc(100% - 260px)" : "100%",
        marginLeft: viewSidebar ? "260px" : "0px",
      }}
    >
      <AppBar position="fixed" className={classes.AppBar}>
        <Toolbar>
          <IconButton
            onClick={() => setMobileOpen(!mobileOpen)}
            color="inherit"
            edge="start"
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>

          <Box
            className={classes.headerWrapper}
            sx={{
              width:
                viewSidebar && !mobileOpen
                  ? "calc(100% - 260px)"
                  : "calc(100% - 100px)",
              marginLeft: viewSidebar && !mobileOpen ? "260px" : "100px",
              transition: ".5s",
            }}
          >
            <Box className={classes.headTitle}>
              Mosque-based children and mass education programs
            </Box>

            <Box className={classes.headerLogoWrapper}>
              <Image
                src="/assets/if.png"
                alt="IFoundation Logo"
                width="50"
                height="50"
              />
            </Box>
            <Box className={classes.headerRight}>
              <Box
                sx={{
                  display: {
                    xs: "block",
                    sm: "block",
                    md: "block",
                    lg: "block",
                    xl: "block",
                  },
                }}
              >
                <Badge
                  badgeContent={3}
                  color="error"
                  sx={{ mr: 4, cursor: "pointer" }}
                >
                  <NotificationsIcon fontSize="small" className="messageIcon" />
                </Badge>
              </Box>

              <Box className="allProfileBtn">
                <Avatar
                  src={
                    "https://img.freepik.com/premium-photo/modern-business-man-formal-suit-standing-with-crossed-arms-isolated-grey-background-businesspeople-concept_533057-1641.jpg"
                  }
                  alt="Tareq"
                  sizes="small"
                  sx={{
                    bgcolor: "transparent",
                    border: "1px solid #fff",
                    width: "30px",
                    height: "30px",
                    cursor: "pointer",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
