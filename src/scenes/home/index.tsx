import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import { SelectedPage } from "@/shared/types";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1024px)");
  return (
    <section id="home" className="bg-grey-20 gap-16 py-10 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <div>
        {/** MAIN HEADER */}
        <div>
          {/** HEADINGS */}
          <div>
            <div>
              <div>
                <img src={HomePageText} alt="hom-page-text" />
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              vitae magni voluptatum, rerum explicabo, nostrum pariatur, odit
              nemo nihil saepe nam natus earum dolore blanditiis dolores quos
              aliquid odio fuga.
            </p>
          </div>
          {/** ACTIONS */}
          <div>
            <ActionButton setSelectedPage={setSelectedPage}>
              Join now
            </ActionButton>
            <AnchorLink className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
            onClick = {() => setSelectedPage(SelectedPage.ContactUs)}
            href={`#${SelectedPage.ContactUs}`}
            >
                <p>Learn More</p>
            </AnchorLink>
          </div>
        </div>
        {/** IMAGE */}
        <div>
            <img src={HomePageGraphic} alt="home-pageGraphic" />
        </div>
      </div>

      {/** SPONSORS */}
      {isAboveMediumScreens && (
        <div>
            <div>
                <div>
                    <img src={SponsorRedBull} alt="redbull-sponsor" />
                    <img src={SponsorFortune} alt="fortune-sponsor" />
                    <img src={SponsorForbes} alt="forbes-sponsor" />
                </div>
            </div>
        </div>
      )}
    </section>
  );
};

export default Home;
