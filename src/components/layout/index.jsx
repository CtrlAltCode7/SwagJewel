import React from "react";
import ResponsiveAppBar from "../../pages/navBar/responsiveAppBar";
import SearchAppBar from "../../pages/navBar/searchAppBar";
import BasicTabs from "../../pages/appbar/tabs";
import ListedText from "../../pages/listedText/index";
import StickyFooter from "../../pages/footer/stickyFooter";
import Footer from "../../pages/footer/footer";

const Layout = ({ children }) => {
  const tabLabels = ["Engagement Rings", "Item Two", "Item Three"];

  return (
    <>
      <ResponsiveAppBar />
      <SearchAppBar />
      <BasicTabs tabLabels={tabLabels} />
      <div>{children}</div>
      <ListedText />
      <Footer />
      <StickyFooter />
    </>
  );
};

export default Layout;
