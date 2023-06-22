import Footer from "@/components/Shared/Footer";
import Skeletons from "@/components/common/Skeletons";
import { Box, Grid, Paper } from "@mui/material";
import React, { Suspense, useEffect, useState } from "react";
import dashboardStyle from "../DashboardStyle";
const Sidebar = React.lazy(() => import("@/components/Shared/Sidebar"));
const Header = React.lazy(() => import("@/components/Shared/Header/Header"));

type PropType = {
  children: React.ReactNode;
};

const WithAuth = ({ children }: PropType) => {
  const classes = dashboardStyle();
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [viewSidebar, setViewSidebar] = useState<boolean>(true);
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }
  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

  useEffect(() => {
    if (screenSize?.width <= 1200) {
      setViewSidebar(false);
    }
  }, [screenSize]);

  return (
    <Grid container>
      <Suspense fallback={<Skeletons />}>
        <Header
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
          setViewSidebar={setViewSidebar}
          viewSidebar={viewSidebar}
        />
      </Suspense>

      <Suspense fallback={<Skeletons />}>
        <Sidebar
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
          setViewSidebar={setViewSidebar}
          viewSidebar={viewSidebar}
        />
      </Suspense>

      <Box
        className={classes.contentWrapper}
        sx={{
          width:
            viewSidebar && !mobileOpen
              ? "calc(100% - 260px)"
              : screenSize?.width <= 1200
              ? "100%"
              : "calc(100% - 50px)",
          marginLeft:
            viewSidebar && !mobileOpen
              ? "260px"
              : screenSize?.width <= 1200
              ? "0px"
              : "50px",
          transition: ".5s",
        }}
      >
        <main className={classes.content}>
          <Box className={classes.toolbar} />
          <Paper>
            <Box p={1}>
              {children}
              <Footer />
            </Box>
          </Paper>
        </main>
      </Box>
    </Grid>
  );
};

export default WithAuth;
