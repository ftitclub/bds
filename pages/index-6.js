import { Swiper, SwiperSlide } from "swiper/react";
import About, { About2 } from "../src/components/About";
import Collection from "../src/components/Collection";
import Contact from "../src/components/Contact";
import Faq from "../src/components/Faq";
import FunFacts from "../src/components/FunFacts";
import News from "../src/components/News";
import RoadMapSlider from "../src/components/RoadMapStep";
import SectionDivider from "../src/components/SectionDivider";
import Layout from "../src/layout/Layout";
import { hero6Slider } from "../src/sliderProps";
const Index6 = () => {
  return (
    <Layout pageTitle={"Home #6"}>
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
      {/* !Home Section #2 */}
      {/* Section About #2 */}
      <FunFacts />
      {/* !Section About #2 */}
      {/* Section Divider */}
      <SectionDivider />
      {/* !Section Divider */}
      {/* Collection Section */}
      <About />
      {/* !Collection Section */}
      {/* Section Divider */}
      <SectionDivider />
      {/* !Section Divider */}
      {/* Section FAQ */}
      <RoadMapSlider />
      {/* !Section FAQ */}
      {/* Section Divider */}
      <SectionDivider />
      <Faq />
      {/* !Section Divider */}
      {/* Section RoadMap */}
      {/* !Section RoadMap */}
      {/* Section Divider */}
      <SectionDivider />
      {/* !Section Divider */}
      {/* Section News */}
      <News />
      {/* !Section News */}
      {/* Section Divider */}
      <SectionDivider />
    </Layout>
  );
};
export default Index6;
