import Link from "next/link";
import Layout from "../src/layout/Layout";
const BlogSingle = () => {
  return (
    <Layout pageTitle={"Blog Single"}>
      <div className="hunterai_fn_blog_single">
        <div className="container small">
          <div className="hunterai_fn_breadcrumbs">
            <p>
              <Link href="/">
                <a>Home</a>
              </Link>
              <span className="separator">/</span>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
              <span className="separator">/</span>
              <span className="current">
                Blog 2
              </span>
            </p>
          </div>
          <div className="single_img">
            <img src="/img/blog/single.jpg" alt="" />
          </div>
          <div className="hunterai_fn_minis">
            <div className="m_item">
              <a href="#">June 01, 2022</a>
            </div>
            <div className="m_item">
              <span>
                By <a href="#">Abs</a>
              </span>
            </div>
          </div>
          {/* Sidebar */}
          <div className="hunterai_fn_wsidebar">
            {/* Left Sidebar */}
            <div className="sidebar_left">
              {/* Single Title */}
              <div className="single_title">
                <h3
                  className="fn__maintitle"
                  data-text="hunterai’s NFT Goes Public In Nod To Crypto Adoption"
                  data-align="left"
                >
                Blog 2
                </h3>
                <div className="categories">
                  <a href="#">Tokens</a>, <a href="#">NFTs</a>,{" "}
                  <a href="#">Crypto</a>
                </div>
              </div>
              {/* !Single Title */}
              {/* Single Description */}
              <div className="single_desc">
                <p>
                  Suspendisse eu velit est. Cras nec vestibulum quam. Donec
                  tincidunt purus nec enim tincidunt, sit amet facilisis massa
                  laoreet. Integer mollis nec sapien eu lacinia. Nunc eu massa
                  dictum, vulputate neque ac, porta mauris. Sed sollicitudin
                  nisi augue, a gravida turpis elementum vel. Curabitur sagittis
                  quis diam et rhoncus. Nam pellentesque imperdiet aliquet. Sed
                  non ante malesuada, ultrices sem at, tempus libero.
                </p>
                <p>
                  Duis eu lorem ut mauris pulvinar auctor. Maecenas et dapibus
                  orci, eleifend euismod justo. Quisque luctus turpis eu
                  tristique feugiat. Praesent ac magna feugiat, interdum lacus
                  ac, interdum dui. Pellentesque id quam quis enim malesuada
                  rutrum. Orci varius natoque penatibus et magnis dis parturient
                  montes, nascetur ridiculus mus. Nulla vel neque et ex
                  vestibulum elementum at sed lacus. Fusce imperdiet mauris ac
                  mi viverra viverra. Maecenas pharetra nibh non arcu finibus,
                  vel ultrices arcu porttitor. Quisque ac nisl id lectus
                  faucibus pulvinar nec ut nisl. Duis ultricies ut lacus sed
                  rutrum.
                </p>
                <p>
                  Duis eu lorem ut mauris pulvinar auctor. Maecenas et dapibus
                  orci, eleifend euismod justo. Quisque luctus turpis eu
                  tristique feugiat. Praesent ac magna feugiat, interdum lacus
                  ac, interdum dui. Pellentesque id quam quis enim malesuada
                  rutrum. Orci varius natoque penatibus et magnis dis parturient
                  montes, nascetur ridiculus mus. Nulla vel neque et ex
                  vestibulum elementum at sed lacus. Fusce imperdiet mauris ac
                  mi viverra viverra. Maecenas pharetra nibh non arcu finibus,
                  vel ultrices arcu porttitor. Quisque ac nisl id lectus
                  faucibus pulvinar nec ut nisl. Duis ultricies ut lacus sed
                  rutrum.
                </p>
                <p>
                  Suspendisse dignissim ultricies iaculis. Suspendisse ultrices
                  turpis mi, non tincidunt orci interdum tempor. Praesent
                  venenatis, lorem egestas consequat tempor, nunc neque
                  venenatis risus, vitae interdum ipsum ipsum eget purus. Proin
                  ac leo non est imperdiet commodo. Donec dictum augue ut odio
                  feugiat vulputate. Pellentesque ultricies augue in posuere
                  ornare. Pellentesque pretium non nunc ac sodales.
                </p>
                <p>
                  Nam et malesuada ante, in convallis libero. Aenean
                  sollicitudin egestas ante, eget porttitor leo fringilla sit
                  amet. Nam cursus neque ligula, in egestas elit porttitor vel.
                  Vestibulum ultricies tempus orci a auctor. Curabitur sed
                  pretium lacus, eget cursus dui. Aliquam at ex sit amet urna
                  interdum dignissim vel non dolor. Pellentesque mi nibh,
                  sollicitudin at neque id, tincidunt molestie lorem. Nulla
                  facilisi. Phasellus viverra mi ut sapien efficitur, sit amet
                  suscipit lorem commodo. Interdum et malesuada fames ac ante
                  ipsum primis in faucibus.
                </p>
              </div>
             
              <div className="hunterai_fn_tags">
                <h4 className="label">Tags:</h4>
                <a href="#">Tokens</a>
                <span>,</span>
                <a href="#">NFT</a>
                <span>,</span>
                <a href="#">Featured</a>
                <span>,</span>
                <a href="#">Insights</a>
              </div>
              {/* !Tags */}
            </div>
            {/* !Left Sidebar */}
            {/* Right Sidebar */}
            <div className="sidebar_right">
              {/* Widget (Top Articles) */}
              <div className="widget widget-articles">
                <div className="wid-title">
                  <span className="text">Other Articles</span>
                  <span className="icon" />
                </div>
                <div className="hunterai_fn_widget_articles">
                  <ul>
                    <li>
                      
                      <Link href="/blog-single">
                      <div className="item">
                        <a href="#" className="full_link" />
                        <h3 className="fn_title">
                          Use social media to jump-start your creative career.
                        </h3>
                        <p className="fn_date">
                          <span className="post_date">June 22, 2022</span>
                        </p>
                        <span className="count">1</span>
                      </div>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog-single-2">
                      <div className="item">
                        <a href="#" className="full_link" />
                        <h3 className="fn_title">
                          Staying at the Knickerbocker Mansion in Big Bear
                        </h3>
                        <p className="fn_date">
                          <span className="post_date">June 22, 2022</span>
                        </p>
                        <span className="count">2</span>
                      </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
             
            </div>
            {/* !Right Sidebar */}
          </div>
          {/* !Sidebar */}
        </div>
       </div>
    </Layout>
  );
};
export default BlogSingle;
