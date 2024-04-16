import React from "react";
// import Footer from "./Footer";
// import Header from "./Header";
import ResponsiveAppBar from "../../pages/NavBar/ResponsiveAppBar";
import SearchAppBar from "../../pages/NavBar/SearchAppBar";
import BasicTabs from "../../pages/Appbar/Tabs";
import ListedText from "../../pages/ListedText/ListedText";
import StickyFooter from "../../pages/Footer/StickyFooter";
import Footer from "../../pages/Footer/Footer";

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
