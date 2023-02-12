import Link from "next/link";
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";
const Blog = () => {
  return (
    <Layout pageTitle={"Blog"}>
      <PageBanner pageName={"Blog Articles"} />

      <div className="hunterai_fn_bloglist">
        <div className="container small">
          <div className="bloglist">
            <ul className="fn-isotope">
              <li className="isotope-item">
                <div className="blog__item">
                  <div className="counter">
                    <span className="cc">
                      <span>01</span>
                    </span>
                  </div>
                  <div className="meta">
                    <p>August 09, 2022 / MetaVerse</p>
                  </div>
                  <div className="title">
                    <h3>
                      <Link href="/blog-single">
                        <a>Reasons Why People Use Discord</a>
                      </Link>
                    </h3>
                  </div>
                  <div className="image">
                    <Link href="/blog-single">
                      <a>
                        <img src="/img/blog/1.jpg" alt="" />
                      </a>
                    </Link>
                  </div>
                  <div className="read_more">
                    <Link href="/blog-single">
                      <a>
                        <span>Read More</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </li>
              <li className="isotope-item">
                <div className="blog__item">
                  <div className="counter">
                    <span className="cc">
                      <span>02</span>
                    </span>
                  </div>
                  <div className="meta">
                    <p>August 09, 2022 / MetaVerse</p>
                  </div>
                  <div className="title">
                    <h3>
                      <Link href="/blog-single-1">
                        <a>Rewards for the Zoidster NFTs</a>
                      </Link>
                    </h3>
                  </div>
                  <div className="image">
                    <Link href="/blog-single-1">
                      <a>
                        <img src="/img/blog/2.jpg" alt="" />
                      </a>
                    </Link>
                  </div>
                  <div className="read_more">
                    <Link href="/blog-single-1">
                      <a>
                        <span>Read More</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </li>
              <li className="isotope-item">
                <div className="blog__item">
                  <div className="counter">
                    <span className="cc">
                      <span>03</span>
                    </span>
                  </div>
                  <div className="meta">
                    <p>August 09, 2022 / MetaVerse</p>
                  </div>
                  <div className="title">
                    <h3>
                      <Link href="/blog-single-2">
                        <a>
                          A Behind-the-Scenes Look: How the BRAWL-O-SEUM NFT Was
                          Created
                        </a>
                      </Link>
                    </h3>
                  </div>
                  <div className="image">
                    <Link href="/blog-single-2">
                      <a>
                        <img src="/img/blog/3.jpg" alt="" />
                      </a>
                    </Link>
                  </div>
                  <div className="read_more">
                    <Link href="/blog-single-2">
                      <a>
                        <span>Read More</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Blog;
