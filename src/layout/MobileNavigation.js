import Link from "next/link";
import { Fragment, useState } from "react";
import { connect } from "react-redux";
import { navigationToggle, walletToggle } from "../redux/actions/siteSettings";
const MobileNavigation = ({ walletToggle, navigationToggle }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <Fragment>
      <div className="hunterai_fn_mobnav">
        <div className="mob_top">
          <div className="social_trigger">
            <div className="trigger" onClick={() => navigationToggle(true)}>
              <span />
            </div>
            <div className="social">
              <ul>
                <li>
                  <a
                    href="https://t.me/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Tg.
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Tw.
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.dextools.io"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Dx.
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="wallet">
            <a
              href="https://app.uniswap.org" target="_blank"
                    rel="noreferrer"
              className="hunterai_fn_button wallet_opener"
            >
              <span>BUY $FANG</span>
            </a>
          </div>
        </div>
        <div className="mob_mid">
          <div className="logo">
            <Link href="/">
              <span style={{fontWeight: 'bolder', color: 'white', fontStyle: 'italic'}} >
                HUNTER<br/>AI
              </span>
            </Link>
          </div>
          <div
            className={`trigger ${toggle ? "active" : ""}`}
            onClick={() => setToggle(!toggle)}
          >
            <span />
          </div>
        </div>
        <div className="mob_bot" style={{ display: toggle ? "block" : "none" }}>
          <ul>
            <li>
              <a className="creative_link" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="creative_link" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="creative_link" href="#collection">
                Roadmap
              </a>
            </li>
            <li>
              <a className="creative_link" href="#news">
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  navigation: state.site.navigation,
});

export default connect(mapStateToProps, { walletToggle, navigationToggle })(
  MobileNavigation
);
