import React from "react";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

const ImageDiv = styled.div`
  height: 70%;
  width: 100%;
  position: relative;

  & > ${PlayCircleOutlineIcon}:hover {
    color: yellow;
    background:yellow;
  }
`;
const TitleOfSlide = styled.div`
  color: white;
  position: relative;
  top: 5px;
  padding: 4px;
  margin: 0;
  
  &:hover {
    text-decoration: underline;
    cursor:pointer;
  }
`;

function RelatedVideoSlider() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div
      style={{
        color: "black",
        background: "black",
        width: "100%",
        margin: "auto",
        marginTop: "2vh",
      }}
    >


      <Carousel responsive={responsive}>
        {/* first card */}
        <div
          style={{
            height: "300px",
            margin: "auto",
            width: "90%",
          }}
        >
          {/* image */}
          <ImageDiv>
            <img
              src="https://m.media-amazon.com/images/M/MV5BNGZhMjBiMDMtYTIyMS00OTRlLThhZWItYThjNTRkZWEyNjIzXkEyXkFqcGdeQWpnYW1i._V1_QL40_QL75_UX1000_CR0,0,1000,563_.jpg"
              alt=""
              height={"100%"}
              width={"100%"}
              style={{ margin: "0px", padding: "0" }}
            />
            <PlayCircleOutlineIcon
              style={{
                color: "white",
                position: "fixed",
                bottom: "100",
                left: "26",
                fontSize: "5vh",
                
              }}
            ></PlayCircleOutlineIcon>
          </ImageDiv>

          {/* text */}
          <div style={{ height: "30%", width: "100%" }}>
            <TitleOfSlide>Netflix 2021 Film Preview</TitleOfSlide>
            <p
              style={{
                color: "white",
                position: "relative",
                top: "5px",
                padding: "4px",
                marginTop: "1vh",
              }}
            >
              Malcolm Marie
            </p>
          </div>
        </div>

        {/* second card */}
        <div
          style={{
            height: "300px",
            margin: "auto",
            width: "90%",
          }}
        >
          {/* image */}
          <ImageDiv>
            <img
              src="https://m.media-amazon.com/images/M/MV5BZDMxMDc3ZmItMWRjMi00YWU4LTg3ZGQtNGE1MDc2YzliZWU0XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_QL75_UX760_CR0,0,760,428_.jpg"
              alt=""
              height={"100%"}
              width={"100%"}
              style={{ margin: "0px", padding: "0" }}
            />
            <PlayCircleOutlineIcon
              style={{
                color: "white",
                position: "fixed",
                bottom: "100",
                left: "26",
                fontSize: "5vh",
              }}
            ></PlayCircleOutlineIcon>
          </ImageDiv>

          {/* text */}
          <div style={{ height: "30%", width: "100%" }}>
            <TitleOfSlide>Netflix 2021 Film Preview</TitleOfSlide>
            <p
              style={{
                color: "white",
                position: "relative",
                top: "5px",
                padding: "4px",
                marginTop: "1vh",
              }}
            >
              Malcolm Marie
            </p>
          </div>
        </div>

        {/* third div */}

        <div
          style={{
            height: "300px",
            margin: "auto",
            width: "90%",
          }}
        >
          {/* image */}
          <ImageDiv>
            <img
              src="https://m.media-amazon.com/images/M/MV5BYzJjYzY5MDUtMDNmNi00NjY2LTljNzEtNTM5ZWNjNTUzMmNiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL75_UX760_CR0,0,760,428_.jpg"
              alt=""
              height={"100%"}
              width={"100%"}
              style={{ margin: "0px", padding: "0" }}
            />
            <PlayCircleOutlineIcon
              style={{
                color: "white",
                position: "fixed",
                bottom: "100",
                left: "26",
                fontSize: "5vh",
              }}
            ></PlayCircleOutlineIcon>
          </ImageDiv>

          {/* text */}
          <div style={{ height: "30%", width: "100%" }}>
            <TitleOfSlide>Netflix 2021 Film Preview</TitleOfSlide>
            <p
              style={{
                color: "white",
                position: "relative",
                top: "5px",
                padding: "4px",
                marginTop: "1vh",
              }}
            >
              Malcolm Marie
            </p>
          </div>
        </div>

        {/* fourth card */}

        <div
          style={{
            height: "300px",
            margin: "auto",
            width: "90%",
          }}
        >
          {/* image */}
          <ImageDiv>
            <img
              src="https://m.media-amazon.com/images/M/MV5BNGZhMjBiMDMtYTIyMS00OTRlLThhZWItYThjNTRkZWEyNjIzXkEyXkFqcGdeQWpnYW1i._V1_QL40_QL75_UX1000_CR0,0,1000,563_.jpg"
              alt=""
              height={"100%"}
              width={"100%"}
              style={{ margin: "0px", padding: "0" }}
            />
            <PlayCircleOutlineIcon
              style={{
                color: "white",
                position: "fixed",
                bottom: "100",
                left: "26",
                fontSize: "5vh",
              }}
            ></PlayCircleOutlineIcon>
          </ImageDiv>

          {/* text */}
          <div style={{ height: "30%", width: "100%" }}>
            <TitleOfSlide>Netflix 2021 Film Preview</TitleOfSlide>
            <p
              style={{
                color: "white",
                position: "relative",
                top: "5px",
                padding: "4px",
                marginTop: "1vh",
              }}
            >
              Malcolm Marie
            </p>
          </div>
        </div>

      </Carousel>
    </div>
  );
}

export default RelatedVideoSlider;