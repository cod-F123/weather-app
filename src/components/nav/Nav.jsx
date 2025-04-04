import styled from "./nav.module.css";
import logo from "../../assets/images/weather.png";

function Nav() {

    const toggle = (e) => {
        const body = document.getElementById("body").ariaValueText ;
        
        if (body === "light"){
            document.getElementById("body").style.backgroundColor = "#7A1CAC";
            document.getElementById("toggle").style.backgroundColor = "#fff" ;
            document.getElementById("toggle").style.transform = "translateX(77px)";
            document.getElementById("body").ariaValueText = "dark";
            document.getElementById("body").style.color = "#fff";
        }else{
            document.getElementById("body").style.backgroundColor = "#fff";
            document.getElementById("toggle").style.backgroundColor = "#bbb" 
            document.getElementById("toggle").style.transform = "translateX(0px)";
            document.getElementById("body").ariaValueText = "light";
            document.getElementById("body").style.color = "#000";
        }
    }

    return (
        <div className={styled.navWrapper}>
            <img id="logo" src={logo} alt="dddd" />
            <div className={styled.toggle}><span id="toggle" onClick={toggle}></span ></div>
        </div>
    );
}

export default Nav;