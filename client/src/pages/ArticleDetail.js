import React from "react";
import styled from "@emotion/styled";
import MainImage from "../assets/philips-avent-pump.png";
import ItemStatusAvailableSrc from "../assets/available.svg";
import ArrowDownSrc from "../assets/arrow-down.svg";
import Header from "../components/HeaderEdit";

function ArticleDetail() {
  return (
    <>
      <Header title={"Artikel-Details"} />
      <Container>
        <Slider>
          <img src={MainImage} alt="milk-pump" />
          <img src={MainImage} alt="milk-pump" />
        </Slider>
        <Description>
          <Status>
            <img src={ItemStatusAvailableSrc} alt="status" />
            <span>Auf Lager</span>
            <img src={ArrowDownSrc} alt="status" />
          </Status>
          <h1>Philips AVENT Komfort-Milchpumpe</h1>
          <p>8710103565840</p>
          <p>PZN 88878998</p>
          <p>Baujahr 2019</p>
          <p>
            Von der Natur inspirierte Flasche, 125 ml, 1 Loch (0m+) + Fläschchen
            Natural 125 ml 0% BPA. Die Milchpumpe Avent hat Massagekissen. Die
            Massagekissen regen den Milchfluss an und sorgen für ein angenehmes
            Gefühl. Die Kissen passen an fast alle den Mütter, aber es ist auch
            möglich größere Kissen zu kaufen. Die Milchpumpe enthält eine
            Schaube aus Silikon und ein Fläschchen der natural Sammlung Avent
            von 125 ml.
          </p>
        </Description>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1.4em;
  margin-bottom: 4em;
  margin-top: 4em;
  width: 90%;
`;

const Slider = styled.div`
  display: flex;
  padding: 20px 0;
  margin: 0;
  & img {
    min-width: 180px;
    min-height: 180px;
    align-self: center;
  }
`;

const Description = styled.div`
  min-width: 90%;
  & h1 {
    font-weight: bold;
    font-size: 1.2rem;
    padding-bottom: 14px;
  }
  & p {
    padding: 10px 0;
  }
`;

const Status = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0.8em 0;
  padding: 0.8em 1em;
  background: transparent;
  border: 1px solid #dadada;
  border-radius: 50px;
  & img:first-child {
    max-height: 1.4em;
    padding-right: 0.8em;
  }
  & img:last-child {
    max-height: 0.6em;
  }
  & span {
    color: #28beb4;
    font-size: 1.3em;
    padding-right: 0.8em;
  }
`;

export default ArticleDetail;
