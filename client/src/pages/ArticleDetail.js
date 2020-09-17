import React from "react";
import styled from "@emotion/styled";
import MainImage from "../assets/philips-avent-pump.png";
import ItemStatusAvailable from "../assets/available.svg";

const Slider = styled.div`
  display: flex;
  padding: 20px 0;
  margin: 0;
`;

const Image = styled.img`
  min-width: 180px;
  min-height: 180px;
  align-self: center;
`;

const Container = styled.div`
  min-width: 90%;
`;

const Status = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 20px 0;
`;

const StatusIcon = styled.img`
  min-width: 15px;
  min-height: 15px;
  padding-right: 10px;
`;

const StatusText = styled.span`
  color: #28beb4;
`;

const Header = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  padding-bottom: 14px;
`;

function ArticleDetail() {
  return (
    <>
      <Slider>
        <Image src={MainImage} alt="milk-pump" />
        <Image src={MainImage} alt="milk-pump" />
      </Slider>
      <Container>
        <Status>
          <StatusIcon src={ItemStatusAvailable} alt="status" />
          <StatusText>Auf Lager</StatusText>
        </Status>
        <Header>Philips AVENT Komfort-Milchpumpe</Header>
        <serialNo>8710103565840</serialNo>
      </Container>
    </>
  );
}

export default ArticleDetail;
