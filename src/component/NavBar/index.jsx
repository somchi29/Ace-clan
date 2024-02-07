import logo from "../../assests/images/navabar/Logo.svg"
import FilledButton from "../../reuseables/Buttons/FilledButton";
import GhostButton from "../../reuseables/Buttons/GhostButton";
import style from "./index.module.css"
const NavBar = () => {
  return(
      <div className={style.mainContainer}>
        <div>
            <img src={logo} alt="web logo"/>
        </div>

        <div className={style.midSection}>
            <p>My URLs</p>
            <p>Features</p>
            <p>Pricing</p>
            <p>Analytics</p>
            <p>FAQs</p>
        </div>

        <div className={style.btn}>
            <GhostButton text="Log in"/>
            <FilledButton text="Try for free"/>
        </div>
      </div>
  );
}
export default NavBar;