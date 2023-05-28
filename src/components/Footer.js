import {
  Facebook,
  GitHub,
  LinkedIn,
  MailOutline,
  Phone,
  Room,
} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  left: 0;
  display: flex;
  gap: 180px;
  background-color: #e9cece;
  width: 100%;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
  margin-bottom: 5px;
`;
const Desc = styled.div`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  /* border-radius: 50%; */
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

export default function Footer() {
  return (
    <Container>
      <Left>
        <Logo>
          <FitnessCenterIcon fontSize="large"/> H.K Fitness Club</Logo>
        <Desc>
          This is a simple fitness/workout webapp created using basic concepts
          of REACT JS like react hooks, react router. Styling is done through
          materal UI and styled components. Thaks to RAPIDApi for providing a
          wonderful API.
        </Desc>

        <SocialContainer>
          <SocialIcon color="3B5999">
            <IconButton
              onClick={() =>
                window.open("https://www.facebook.com/hkhatiwada11/")
              }
            >
              <Facebook />
            </IconButton>
          </SocialIcon>

          <SocialIcon color="55ACEE">
            <IconButton
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/hemant-khatiwada-b76a4519a/"
                )
              }
            >
              <LinkedIn />
            </IconButton>
          </SocialIcon>
          <SocialIcon color="E60023">
            <IconButton
              onClick={() => window.open("https://github.com/hkhatiwada")}
            >
              <GitHub />
            </IconButton>
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> Bouddha Marga, Chabahil,
          Kathmandu, Nepal
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +977 9861557639
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />{" "}
          <a href="mailto:hkhatiwada99@gmail.com">hkhatiwada99@gmail.com</a>
        </ContactItem>
      </Right>
    </Container>
  );
}
