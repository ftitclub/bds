import Link from "next/link";
import { Fragment, useState } from "react";
import { connect } from "react-redux";
import { navigationToggle } from "../redux/actions/siteSettings";
const Navigation = ({ navigation, navigationToggle }) => {
  const [subMenu, setSubMenu] = useState(null);
  return (
    <Fragment>
      <div
        onClick={() => navigationToggle(false)}
        className={`hunterai_fn_leftnav_closer ${navigation ? "active" : ""}`}
      />
      <div className={`hunterai_fn_leftnav ${navigation ? "active" : ""}`}>
        <a
          href="#"
          className="fn__closer"
          onClick={() => navigationToggle(false)}
        >
          <span />
        </a>
        <div className="navbox">
          <div className="list_holder">
            <ul className="hunterai_fn_items">
              <li>
                <div className="item">
                  <a
                    href="https://t.me/"
                    target="_blank"
                    rel="noreferrer"
                  />
                  <span className="icon">
                    <img src="/img/market/telegram.png" alt="" />
                  </span>
                  <span className="text">Telegram</span>
                </div>
              </li>
              <li>
                <div className="item">
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                  />
                  <span className="icon">
                    <img src="/img/market/twitter.png" alt="" />
                  </span>
                  <span className="text">Twitter</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="nav_holder">
            {/* For JS */}
            <span className="icon">
              <img src="/svg/down.svg" alt="" className="fn__svg" />
            </span>
            {/* For JS */}
            <ul
              style={{
                transform: `translateX(${subMenu !== null ? "-100" : "0"}%)`,
              }}
            >
              <li>
                <ul className="creative_link">
                  <li>
                    <Link href="/">
                      <a onClick={() => navigationToggle(false)}>
                        <span className="creative_link">Home</span>
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/">
                  <a onClick={() => navigationToggle(false)}>
                    <span className="creative_link">Whitepaper</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a onClick={() => navigationToggle(false)}>
                    <span className="creative_link">Blog</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://dextools.io">
                  <a onClick={() => navigationToggle(false)}>
                    <span className="creative_link">Dextools</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://etherscan.io">
                  <a onClick={() => navigationToggle(false)}>
                    <span className="creative_link">Etherscan</span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  navigation: state.site.navigation,
});
export default connect(mapStateToProps, { navigationToggle })(Navigation);
