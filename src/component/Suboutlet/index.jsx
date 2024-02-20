import style from "../Suboutlet/index.module.css";
import line from "../../assests/images/navabar/Vector3.png";
import Vector from "../../assests/images/Vector2.png";
import Frame from "../../assests/images/navabar/Frame 1000001716.png";
import ellipse from "../../assests/images/navabar/Ellipse1.png";
import GhostButton from "../../reuseables/Buttons/GhostButton/index.jsx";
import FilledButton from "../../reuseables/Buttons/FilledButton/index.jsx";
import Desktop from "../../assests/images/navabar/Desktop10.png";
import Desktop11 from "../../assests/images/navabar/Desktop11.png";
import Desktop12 from "../../assests/images/navabar/Desktop12.png";
import { data } from "./script.js";
import { deta } from "./script.js";

const Suboutlet = () => {
  return (
    <div>
      <div className={style.midSections}>
        <h1 className={style.optimize}>
          Optimize your Online Experience with our
          <br />
          Advance Some <span style={{ color: "blue" }}>URL Shortening </span>
          Solutions.
        </h1>
        <img className={style.line} src={line} alt="web logo" />

        <p className={style.personal}>
          Personalize your shortened URLs to align with your brand
          identity.Utilize custom slugs,
          <br />
          branded links, and domain customization options to reinforce your
          brand presence and
          <br />
          enhance user engagement.
        </p>

        <div className={style.butn}>
          <FilledButton text="sign up" />
          <GhostButton text="Learn more" />
        </div>

        <div className={style.mainDiv}>
          <img className={style.triangle} src={Vector} alt="web logo" />
          <div className={style.boxImage}>
            <img className={style.frame} src={Frame} alt="web logo" />
            <p className={style.text}>
              Seamlessly transform your long URLs into concise
              <br /> and shareable links with just few clicks.
            </p>
          </div>
        </div>

        <div className="Ellipse">
          <img src={ellipse} alt="web logo" />
        </div>
      </div>
      <div className={style.onestop}>
        <div>
          <h1 className="westop">
            One Stop .
            <br />
            four <span style={{ color: "blue" }}> Possiblities. </span>
          </h1>
        </div>

        <div className={style.thirtym}>
          {data.map((item, index) => (
            <div key={index}>
              <img src={item.Image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={style.whyscissors}>
        <h1>why choose scissors</h1>
        <h3>
          Scissors is the hub of everything that has to do with your link
          management. We shorten your URls
          <br />
          allow you creating custom ones for your personal, <br />
          business, event usage. Our swift QR code <br /> creation, management
          and usage tracking with <br /> advance analytics for all of these is
          second to , <br />
          none.
          <div className={style.why}>
            {deta.map((item, index) => (
              <div key={index}>
                <img src={item.Image} alt="web logo" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </h3>
      </div>

      <div className="price">
        <h1>
          I A <span style={{ color: "blue" }}> Price </span> perfect for your
          needs
        </h1>

        <p>
          From catering for your personal, business, event, socials needs, you
          can be <br /> rest assured we have you in mind in our pricing.
        </p>
      </div>

      <div className="teams">
        <img className={style.Desktop} src={Desktop} alt="web logo" />
        <img className={style.Desktop11} src={Desktop11} alt="web logo" />
        <img className={style.Desktop12} src={Desktop12} alt="web logo" />
      </div>

      <div className="selects">
        <FilledButton text="Select Pricing" />
      </div>
    </div>
  );
};
export default Suboutlet;
