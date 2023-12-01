import React from "react";
import { styled } from "styled-components";
import databiz from "./../images/client-databiz.svg";
import audio from "./../images/client-audiophile.svg";
import meet from "./../images/client-meet.svg";
import maker from "./../images/client-maker.svg";
import background from "./../images/image-hero-desktop.png";

import { mobile } from "./responsive";
const MainContent = () => {
  const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 50px;
    margin: 20px 20px 0 170px;
    ${mobile({
      flexDirection: "column-reverse",
      textAlign: "center",
      margin: "0",
    })}
  `;
  const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 40px;
    height: 100%;
    width: 50%;
    ${mobile({
      alignItems: "center",
      width: "100%",
    })}
  `;
  const H2 = styled.h2`
    font-size: 90px;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 10px;
    ${mobile({
      fontSize: "40px",
    })}
  `;
  const P = styled.p`
    color: hsl(0, 0%, 41%);
    width: 70%;
    letter-spacing: 1px;
  `;
  const Span = styled.span`
    padding: 20px 30px;
    display: block;
    width: fit-content;
    border-radius: 20px;
    cursor: pointer;
    background-color: black;
    color: white;
    border: 1px solid black;
    transition: all 0.3s;
    &:hover {
      background-color: transparent;
      color: black;
    }
  `;
  const Icons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({
      gap: "10px",
    })}
  `;
  const Icon = styled.img`
    width: 80px;
  `;
  const Image = styled.img`
    width: 40%;
    ${mobile({
      width: "100%",
    })}
  `;

  return (
    <Wrapper>
      <Content>
        <H2>Make remote work</H2>
        <P>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </P>
        <Span>Learn more</Span>
        <Icons>
          <Icon src={databiz} />
          <Icon src={audio} />
          <Icon src={meet} />
          <Icon src={maker} />
        </Icons>
      </Content>
      <Image src={background} />
    </Wrapper>
  );
};

export default MainContent;
