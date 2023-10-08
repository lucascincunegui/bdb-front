import React from "react";
import { Facebook, Instagram } from "@mui/icons-material";
import { Divider } from "@material-ui/core";
import "../css/style.css";

export default function Home() {
  const facebook = () => {
    window.open("https://www.facebook.com/bulichu.dosbichos.7");
  };

  const instagram = () => {
    window.open("https://www.instagram.com/bulichudosbichos/");
  };

  return (
    <div>
      <p className="p">
        Aqui você encontra tudo o que precisar para o seu pet!aaaaaaaaaaaaaaa
      </p>
      <Divider />
      <div className="social">
        <div className="social-media" onClick={facebook}>
          <div className="facebook">
            <img
              style={{ width: 500 }}
              alt="Facebook"
              src="../../assets/facebook.png"
            />
            <div className="text-div">
              <Facebook fontSize="large" />
              <h1 className="text">CONHEÇA NOSSO FACEBOOK!</h1>
            </div>
          </div>
        </div>
        <div className="social-media" onClick={instagram}>
          <div className="instagram">
            <img
              style={{ width: 518 }}
              src="../../assets/instagram.png"
              alt="Instagram"
            />
            <div className="text-div">
              <Instagram fontSize="large" />
              <h1 className="text">CONHEÇA NOSSO INSTAGRAM!</h1>
            </div>
          </div>
        </div>
      </div>
      <Divider />
    </div>
  );
}
