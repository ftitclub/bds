import Head from "next/head";
import { Fragment, useEffect } from "react";
import ImageView from "../components/popup/ImageView";
import VideoPopup from "../components/popup/VideoPopup";
import { dataBgImg, holdSection, imgToSVG } from "../utilits";
import Footer from "./Footer";
import Header from "./Header";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";
import PreLoader from "./PreLoader";
import ScrollTop from "./ScrollTop";
import Social from "./Social";
const Layout = ({ children, pageTitle }) => {
  useEffect(() => {
    holdSection();
    imgToSVG();
    dataBgImg();
  }, []);

  return (
    <Fragment>
      <Head>
        <title>$FANG | {pageTitle}</title>
      </Head>
      <ImageView />
      <VideoPopup />
      <PreLoader />
      <Navigation />
      <div className="hunterai_fn_main">
        <MobileNavigation />
        <Header />
        <div className="hunterai_fn_content">
          {children}
          <Footer />
        </div>
        <Social />
        <ScrollTop />
      </div>
    </Fragment>
  );
};
export default Layout;
