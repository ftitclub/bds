import { Swiper, SwiperSlide } from "swiper/react";
import About from "../src/components/About";
import Faq from "../src/components/Faq";
import FunFacts from "../src/components/FunFacts";
import News from "../src/components/News";
import RoadMapSlider from "../src/components/RoadMapStep";
import SectionDivider from "../src/components/SectionDivider";
import Layout from "../src/layout/Layout";
const Index = () => {
  return (
    <Layout pageTitle={"Home"}>
      <section id="full_slider">
        <div className="fn_cs_full_slider">
          <Swiper className="swiper-container">
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="bg_overlay" />
                <div className="abs_img" data-bg-img="/img/full_slider/1.jpg" />
                <h3 className="fn__maintitle big" data-text="HUNTER AI $FANG">
                  HUNTER AI $FANG
                </h3>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </section>
      <FunFacts />
      <SectionDivider />
      <About />
      <SectionDivider />
      <RoadMapSlider />
      <SectionDivider />
      <Faq />
      <SectionDivider />
      <News />
      <SectionDivider />
    </Layout>
  );
};
export default Index;
