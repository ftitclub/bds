import Link from "next/link";
const About = () => {
  return (
    <section id="about">
      <div className="fn_cs_about">
        <div className="left_part">
          <div className="img">
            <div className="img_in" data-bg-img="/img/about/1.jpg">
              <img src="/img/1x1.jpg" alt="" />
            </div>
          </div>
          <div className="bg_overlay">
            <div className="bg_color" />
            <div className="bg_image" data-bg-img="/img/about/bg.jpg" />
          </div>
        </div>
        <div className="right_part">
          <div className="right_in">
            <h3 className="fn__maintitle" data-text="Join the Alpha Pack">
              Join the Alpha Pack
            </h3>
            <div className="fn_cs_divider">
              <div className="divider">
                <span />
                <span />
              </div>
            </div>
            <div className="desc">
              <p>
                Using AI technology to make your trading strategies better, Hunter AI will make sure your assets are going in the right direction.
              </p>
              <p>
                Hunter AI - $FANG is a revolutionary cryptocurrency that enables users to access a predictive bot
                 that predicts the next upcoming cryptocurrency to buy, with additional incentives for holders of $FANG.
              </p>
              <p>
              $FANG provides an automated cryptocurrency tracking and recommendation system that 
              makes it easier and quicker for investors to indetify the best coins to purchase. 
              This innovative system uses algorithms to detect patterns and trends in the cryptocurrency market,
               making it easier than ever for crypto enthusiasts to navigate their portfolio. By holding a certain amount of $FANG, 
               users get access to Hunter AI predictive bot which indicates what cryptocurrency could be worth considering next, 
               saving them time and energy sorting through endless arrays of projects without staying up all night. With Hunter AI - $FANG, 
               you can know confidently where your investments go.

              </p>
            </div>
            <a
              href="https://discord.com/"
              className="hunterai_fn_button"
              target="_blank"
              rel="noreferrer"
            >
              <span>$FANG WHITEPAPER</span>
            </a>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="fn_cs_mint">
          <div className="left_part">
            <h3 className="fn__maintitle" data-text="How to use Hunter AI Dapp">
            How to use Hunter AI Dapp
            </h3>
            <div className="fn_cs_divider">
              <div className="divider">
                <span />
                <span />
              </div>
            </div>
            <div className="desc">
              <p>
                Hunter AI DAPP provides various insights into a token of your choice, and helps you better
                determine whether there is a possibility of making a profitable trade.
              </p>
              <p>
                To get started with the Hunter AI DAPP, you need to hold 0.3% of $FANG total supply.
                You can purchase your $FANG tokens on Uniswap, or any other DEX that supports ethereum mainnet swaps and uniswap liquidity pools.
                Once you have your $FANG tokens, simply connect your wallet to the Hunter AI DAPP and you are ready to analyze tokens.
              </p>
              <p>
                Curabitur pharetra velit eget dignissim varius. In vulputate
                elit at tortor pellentesque, non pulvinar neque consequat.
                Aenean tristique odio in libero tincidunt maximus. Nulla
                pharetra viverra dolor ut blandit. Cras finibus vel tortor eget
                lacinia. Pellentesque interdum elit non lacinia faucibus. Morbi
                nec felis auctor, tincidunt lacus sit amet, iaculis ipsum.
                Phasellus tempus sit amet justo et feugiat. Duis blandit semper
                lorem, egestas euismod ligula pharetra ac. Sed porta lorem eget
                neque bibendum, eget euismod justo mollis.
              </p>
              <p>
                Donec tristique porttitor sem, eget fermentum elit varius nec.
                Donec ut orci ipsum. Morbi efficitur felis eget dapibus
                fermentum. Phasellus sed tellus volutpat, hendrerit leo non,
                sollicitudin neque. Etiam ac lacus quam. Vivamus suscipit nisl
                tellus, at congue odio commodo at. Cras ante enim, sodales at
                pretium et, tempus at libero.
              </p>
            </div>
            <Link href="/nft-single">
              <a className="hunterai_fn_button">
                <span>YOUTUBE</span>
              </a>
            </Link>
          </div>
          <div className="right_part">
            <div className="fn_cs_steps">
              <ul>
                <li>
                  <div className="item">
                    <div className="item_in">
                      <h3 className="fn__gradient_title">01</h3>
                      <p>BUY $FANG TOKENS</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <div className="item_in">
                      <h3 className="fn__gradient_title">02</h3>
                      <p>CONNECT YOUR WALLET</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <div className="item_in">
                      <h3 className="fn__gradient_title">03</h3>
                      <p>INPUT TOKEN INFO</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <div className="item_in">
                      <h3 className="fn__gradient_title">04</h3>
                      <p>ACCESS IN-DEPTH ANALYSIS</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="fn_cs_video">
              <img src="/img/video/1.jpg" alt="" />
              <a
                className="popup-youtube"
                href="https://www.youtube.com/embed/7e90gBu4pas"
              >
                <img src="/svg/play.svg" alt="" className="fn__svg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;