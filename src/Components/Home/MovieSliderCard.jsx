import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import StarIcon from "@material-ui/icons/Star";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import AddIcon from "@material-ui/icons/Add";
import "./MovieSliderCard.css";
import DoneIcon from "@material-ui/icons/Done";
import { updateWatchList } from "../../Redux/Laxmi/action";
import { AuthContext } from "../../Context/AuthContext";
import { handleAdd } from "../../Redux/Laxmi/action";
import style from "../Home/MovieSliderCard.module.css";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Paper from "@mui/material/Paper";
import Draggable from "react-draggable";




import Rating from '@mui/material/Rating';




const Box = styled.div`
  width: 199px;
  height: 500px;
  // border: 1px solid yellow;
`;

const PictureDiv = styled.div`
  height: 60%;
  width: 100%;
  position: relative;
`;
const TitleDiv = styled.div`
  height: 40%;
  width: 100%;
  background: #1a1a1a;
  text-align: center;
`;
const ImgTag = styled.img`
  width: 100%;
  height: 100%;
`;

const Rate = styled.div`
  width: 80%;
  height: 30px;
  display: flex;
  // border:1px solid yellow;
  padding: 7px;
  // text-align:center;
  // justify-content: space-around;
`;

const Title = styled.div`
  height: 59px;
  padding-top: 1vh;
  padding-bottom: 1vh;
  // border:1px solid white;
  text-align: center;
  margin: auto;
  & > p:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const WatchNowButton = styled.button`
  width: 90%;
  height: 40px;
  margin: auto;
  border: none;
  background-color: #2c2c2c;
  color: #5594e5;
  padding: 5px;
`;

const TrailerDiv = styled.div`
  height: 50px;
  //  border:1px solid yellow;
  diplay: flex;
  justify-content: space-between;
`;

const TrailerButton = styled.button`
  background: #1a1a1a;
  color: white;
  font-weight: bold;
  border: 0px;
  padding: 4px;
  margin-top: 5px;
  border-radius: 5px;

  &:hover {
    background: #2c2c2c;
  }
`;

const RatePopUp = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  background: #1f1f1f;
  border-radius: 3vh;
  z-index: 1;
`;
// z-index:${props => props.rateFlag ? '1' : '-11'}

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

function MovieSliderCard({ name, poster, rate, dispatch, item }) {
  // const store = useSelector((store)=>store.watchList.watchList);

  const [open, setOpen] = React.useState(false);

  const [value, setValue] = useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { rateFlag, setRateFlag } = useContext(AuthContext);
  const {
    vId,
    WatchTrailerData,
    setWatchTrailerData,
    handleSearch,
    base_url,
    popup,
    setPopup,
  } = useContext(AuthContext);

  const handleAdd1 = (item) => {
    dispatch(handleAdd(item));
  };

  function takeRateValue(){
    console.log(value)
  }
  // function rateBtnFun() {
  //   setRateFlag(!rateFlag);
  //   console.log("rate btn clicked", rateFlag);
  // }

  return (
    <Box>
      <PictureDiv>
        <ImgTag src={`${base_url}${poster}`} />
        <div className="AddToWatchList">
          <AddIcon onClick={() => handleAdd1(item)} />
        </div>
      </PictureDiv>

      {/* title div */}
      <TitleDiv>
        <Rate>
          <p>
            {" "}
            <StarIcon style={{ color: "#f5c516", fontSize: "17px" }} /> {rate}
          </p>
          &nbsp;&nbsp; &nbsp;&nbsp;
          <div className={style.rateBox}>
            {/* <StarBorderOutlinedIcon
            style={{ color: "#5594e5", fontSize: "17px" }}
            onClick={rateBtnFun}
          /> */}

            <div>
              <Button
                variant="outlined"
                onClick={handleClickOpen}
                style={{ border: "none",width:"4px"}}
              >
                <StarBorderOutlinedIcon
                  style={{ color: "#5594e5", fontSize: "17px" , width:"100%"}}
                />
              </Button>
              <Dialog
                open={open}
                onClose={handleClose}
                PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title"
              >
                
                <DialogContent style={{background:"#1f1f1f", width:"600px", height:"400px", textAlign:"center"}}>
                  
                <RatePopUp>
                     

                      <StarIcon
                        style={{
                          fontSize: "26vh",
                          zIndex: "2",
                          color: "#5594e5",
                        }}
                      />
                      <h6
                        style={{
                          color: "yellow",
                          marginTop: "2vh",
                          textAlign: "center",
                        }}
                      >
                        RATE THIS
                      </h6>
                        <Rating name="customized-10"     getLabelText={(value) => console.log(value,'rateValue')} defaultValue={0} max={10} style={{color:"#5594e5"}}/>
                        <br />
                      <button
                        style={{
                          marginTop: "1vh",
                          marginLeft: "4vh",
                          height: "40px",
                          width: "300px",
                          backgroundColor: "#575757",
                          border: "0px",
                          borderRadius: "1vh",
                          color: "white",
                        }}
                        onClick={handleClose}
                      >
                        Rate
                      </button>
                    </RatePopUp>
{/*                     
                  <DialogContentText>
                  </DialogContentText>
                  <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                      Cancel
                    </Button>
                    <Button onClick={handleClose}>Subscribe</Button>
                  </DialogActions> */}
                </DialogContent>

                {/* 
        <RatePopUp>
         <button style={{backgroundColor:"transparent", fontSize:"5vh", color:"white", border:"0px", position:"absolute",right:"2px", top:"-45px"}}>X</button>
       <StarIcon style={{fontSize:"26vh",position:"absolute" , top:"-60", zIndex:"2", left:"35%",  color: "#5594e5"}}/>
       <h6 style={{color:"yellow",marginTop:"16vh", textAlign:"center", }}>RATE THIS</h6>
        
        <button style={{marginTop:"16vh", marginLeft:"24vh",height:"40px", width:"300px", backgroundColor:"#575757", border:"0px", borderRadius:"1vh", color:"white"}}>Rate</button>
       </RatePopUp> */}
              </Dialog>
            </div>
          </div>
        </Rate>

        <Title>
          <p onClick={() => handleSearch(name)}>{name}</p>
        </Title>

        <WatchNowButton>Watch now</WatchNowButton>

        <TrailerDiv>
          <TrailerButton onClick={() => handleSearch(name)}>
            <PlayArrowIcon /> Trailer
          </TrailerButton>
          &nbsp;&nbsp;
          <InfoOutlinedIcon />
        </TrailerDiv>
      </TitleDiv>
    </Box>
  );
}

export default MovieSliderCard;
