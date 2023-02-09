import Link from "next/link";
const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer">
          <div className="left_part">
            <p>
              Copyright 2023 - Hunter AI $FANG
            </p>
          </div>
          <div className="right_part">
            <ul>
              <li>
                <Link href="https://dextools.io">
                  <a className="creative_link">Dextools</a>
                </Link>
              </li>
              <li>
                <Link href="https://t.me/">
                  <a className="creative_link">Telegram</a>
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com">
                  <a className="creative_link">Twitter</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
