import dashboardStyle from "@/components/layout/DashboardStyle";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  Divider,
  Drawer,
  List,
  ListItemIcon,
  SxProps,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MenuList } from "./MenuItem";
import MenuItem from "./menuItem";
import { sideBarStyle } from "./sidebarStyle";

type props = {
  mobileOpen: boolean;
  setMobileOpen: (params: boolean) => void;
  setViewSidebar: any;
  viewSidebar: any;
};
const drawerWidth = 240;

const Sidebar = ({
  mobileOpen,
  setMobileOpen,
  setViewSidebar,
  viewSidebar,
}: props) => {
  const classes = dashboardStyle();
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  const handleDrawerClose = () => {
    setViewSidebar((prevState: boolean) => !prevState);
  };

  return (
    <nav className={classes.drawer}>
      <Box
        sx={{
          display: {
            xs: "block",
            sm: "block",
            md: "block",
            lg: "none",
            xl: "none",
          },
        }}
      >
        <Drawer
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={() => setMobileOpen(!mobileOpen)}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Box sx={{ ...sideBarStyle } as SxProps} className={`sidebar`}>
            <Box>
              <Box className="sideBarLogoField">
                <span
                  className="closeButton"
                  onClick={() => setMobileOpen(!mobileOpen)}
                >
                  <HighlightOffIcon />
                </span>
                <Box className="sidebar-header">
                  <Box className="iflogo">
                    <Link href="/admin">
                      <Image
                        src="/assets/if.png"
                        alt="IFoundation Logo"
                        width="90"
                        height="90"
                      />
                    </Link>
                    <Typography className="mosqueTitle">
                      ইসলামিক ফাউন্ডেশন বাংলাদেশ
                    </Typography>
                  </Box>
                  <Divider color="#8a9390" />
                </Box>
              </Box>
              <Box className="sidebar-menu">
                <List
                  sx={{
                    width: "100%",
                    maxWidth: 300,
                    padding: "8px 0px 8px 15px",
                  }}
                  component="nav"
                  aria-labelledby="nested-list-subheader"
                >
                  {MenuList.map((menu) => {
                    return menu;
                  }).map((item, index) => (
                    <MenuItem
                      key={item.key}
                      item={item}
                      keyProp={index}
                      viewSidebar={viewSidebar}
                    />
                  ))}
                </List>
              </Box>
            </Box>
          </Box>
        </Drawer>
      </Box>

      <Box
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "none",
            lg: "block",
            xl: "block",
          },
        }}
      >
        {viewSidebar ? (
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
              },
            }}
            variant="persistent"
            anchor="left"
            classes={{
              paper: classes.drawerPaper,
            }}
            open={viewSidebar}
          >
            <Box sx={{ ...sideBarStyle } as SxProps} className={`sidebar`}>
              <Box className={classes.closeButton}>
                <ArrowBackIosIcon onClick={handleDrawerClose} />
              </Box>

              <Box>
                <Box className="sidebar-header">
                  <Box className="iflogo">
                    <Link href="/admin">
                      <Image
                        src="/assets/if.png"
                        alt="IFoundation Logo"
                        width="100"
                        height="100"
                      />
                    </Link>
                    <Typography className="mosqueTitle">
                      ইসলামিক ফাউন্ডেশন বাংলাদেশ
                    </Typography>
                  </Box>
                </Box>
                <Box className="sidebar-menu">
                  <List
                    sx={{
                      width: "100%",
                      maxWidth: 300,
                      padding: "8px 0px 8px 15px",
                    }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                  >
                    {MenuList.map((menu) => {
                      return menu;
                    }).map((item, index) => (
                      <MenuItem
                        key={index}
                        item={item}
                        keyProp={index}
                        viewSidebar={viewSidebar}
                      />
                    ))}
                  </List>
                </Box>
              </Box>
            </Box>
          </Drawer>
        ) : (
          <Box className={classes.viewSidebarWrapper}>
            <Drawer
              sx={{ marginRight: "50x" }}
              variant="persistent"
              anchor="left"
              open={!viewSidebar}
            >
              <Box className={classes.sidebarIconWrapper}>
                <Box
                  onClick={handleDrawerClose}
                  className={classes.closeButton}
                >
                  <ArrowForwardIosIcon />
                </Box>
                <Box className={classes.sidebarViewIconWrapper}>
                  {MenuList?.map((item: any, index) => (
                    <Box key={index}>
                      <ListItemIcon
                        className={`${classes.viewSideBarIcon} navItemSingleIcon`}
                        onMouseEnter={() => setShowSidebar(true)}
                      >
                        {item?.icon}
                      </ListItemIcon>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Drawer>

            {/* hover */}

            <Drawer
              transitionDuration={{ enter: 800, exit: 800 }}
              variant="temporary"
              anchor="left"
              open={showSidebar}
              onClose={() => setShowSidebar(false)}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <Box
                sx={{ ...sideBarStyle } as SxProps}
                className={`sidebar`}
                onMouseLeave={() => setShowSidebar(false)}
              >
                <Box>
                  <Box className="sideBarLogoField">
                    <span
                      className="closeButton"
                      onClick={() => setShowSidebar(false)}
                    >
                      <HighlightOffIcon />
                    </span>
                    <Box className="sidebar-header">
                      <Box className="iflogo">
                        <Link href="/admin">
                          <Image
                            src="/assets/if.png"
                            alt="IFoundation Logo"
                            width="90"
                            height="90"
                          />
                        </Link>

                        <Typography className="mosqueTitle">
                          ইসলামিক ফাউন্ডেশন বাংলাদেশ
                        </Typography>
                      </Box>
                      <Divider color="#8a9390" />
                    </Box>
                  </Box>
                  <Box className="sidebar-menu">
                    <List
                      sx={{
                        width: "100%",
                        maxWidth: 300,
                        padding: "8px 0px 8px 15px",
                      }}
                      component="nav"
                      aria-labelledby="nested-list-subheader"
                    >
                      {MenuList.map((menu) => {
                        return menu;
                      }).map((item, index) => (
                        <MenuItem
                          key={item.key}
                          item={item}
                          keyProp={index}
                          viewSidebar={viewSidebar}
                        />
                      ))}
                    </List>
                  </Box>
                </Box>
              </Box>
            </Drawer>
          </Box>
        )}
      </Box>
    </nav>
  );
};

export default Sidebar;
