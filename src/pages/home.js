import React from "react";
import { Facebook, Instagram } from "@mui/icons-material";
import {
  FbImage,
  IgImage,
  Social,
  SocialMedia,
  GridFb,
  GridIg,
  Text,
  TextDiv,
} from "./styles";
import { Divider } from "@material-ui/core";

export default function Home() {
  const facebook = () => {
    window.open("https://www.facebook.com/bulichu.dosbichos.7");
  };

  const instagram = () => {
    window.open("https://www.instagram.com/bulichudosbichos/");
  };

  return (
    <div>
      <p style={{ fontSize: 20, margin: 20 }}>
        Aqui você encontra tudo o que precisar para o seu pet!
      </p>
      <Divider />
      <Social elevation={3}>
        <SocialMedia onClick={facebook}>
          <GridFb elevation={2}>
            <FbImage alt="Facebook" src="../../assets/facebook.png" />
            <TextDiv>
              <Facebook fontSize="large" />
              <Text>CONHEÇA NOSSO FACEBOOK!</Text>
            </TextDiv>
          </GridFb>
        </SocialMedia>
        <SocialMedia onClick={instagram}>
          <GridIg elevation={2}>
            <IgImage src="../../assets/instagram.png" alt="Instagram" />
            <TextDiv>
              <Instagram fontSize="large" />
              <Text>CONHEÇA NOSSO INSTAGRAM!</Text>
            </TextDiv>
          </GridIg>
        </SocialMedia>
      </Social>
      <Divider />
    </div>
  );
}
