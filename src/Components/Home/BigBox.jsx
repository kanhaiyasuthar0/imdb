import React, { useState } from 'react';
import styled from 'styled-components';
import  style from '../Home/BigBox.module.css';
import images from './slidingImg';
import UpNextBox from './UpNextBox';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
const Container = styled.div`
   display:flex;
   width:100%;
   height:550px;
  //  border:1px solid white;

`
// const Slider = styled.div`
//   background-color:yellow;
//   width:67%;
//   height:100%;
// `
const UpNext = styled.div`
  // background-color:black;
  width:33%;
  height:500px;
`;




function BigBox() {

 const [index,setIndex] = useState(0);

  const arr1 = [
    {
       image_url:"https://m.media-amazon.com/images/M/MV5BOWYzN2Q0NTYtODEzMi00YWMxLWE3MDMtZGUwNGM4NjMxMzQ4XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_QL75_UX280_CR0,0,280,414_.jpg",
       title:`"Runway 34"  Stars Answer Our Bruning Questions`,
       time:"3:59",
    },
    {
       image_url:"https://m.media-amazon.com/images/M/MV5BZmQ1NDZjMTktMjFhZC00ZGY5LWEyMTMtNDhkOWM4NmMyZjI0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL75_UX280_CR0,14,280,414_.jpg",
       title:`Andrew Garfild & Dalsy Edgar ansk Each Other Anything`,
       time:"3:06",
    },
    {
       image_url:"https://m.media-amazon.com/images/M/MV5BN2JjNjIwNDgtNTgxNy00OTViLTk0YWUtMTI0OWYwZWNmMDJmXkEyXkFqcGdeQXVyNDYzNjU3ODM@._V1_QL75_UX280_CR0,0,280,414_.jpg",
       title:`The "Halo" Cast Answer Our Burning Questions`,
       time:"2:29",
    },
  ]
  const arr2 = [
    {
       image_url:"https://m.media-amazon.com/images/M/MV5BYzhlOTkzZDMtNDYxYS00NTY2LWJjZDEtNjI3NmE3MTI2NGU2XkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_QL75_UX280_CR0,0,280,414_.jpg",
       title:`Tom Hiddleston in "The Essex Serpent" `,
       time:"3:29",
    },
    {
       image_url:"https://m.media-amazon.com/images/M/MV5BN2M2MTNkMmEtYjRjOC00ZGNjLTlmZjItOWI4MWY1YTBiMDFkXkEyXkFqcGdeQXVyMTQxMzg4NjQy._V1_QL75_UX280_CR0,8,280,414_.jpg",
       title:`The Rise of Andrew Garfield`,
       time:"4:11",
    },
    {
       image_url:"https://m.media-amazon.com/images/M/MV5BOWVmNTBiYTUtZWQ3Yi00ZDlhLTgyYjUtNzBhZjM3YjRiNGRkXkEyXkFqcGdeQXVyNzYyOTM1ODI@._V1_QL75_UX280_CR0,42,280,414_.jpg",
       title:`How Well Deows Ayushmann Khurrana Know His IMDB Page?`,
       time:"2:59",
    },
  ]
  const arr3 = [
    {
       image_url:"https://m.media-amazon.com/images/M/MV5BMDA3MmM4MDEtM2YwYS00NzliLWFlNzctYTBmZGE1NjFiM2U1XkEyXkFqcGdeQXVyODQ4Mjc2NDM@._V1_QL75_UX280_CR0,0,280,414_.jpg",
       title:`Dr.Strange VS. Gargantos !!`,
       time:"2:24",
    },
    {
       image_url:"https://m.media-amazon.com/images/M/MV5BZmQ1NDZjMTktMjFhZC00ZGY5LWEyMTMtNDhkOWM4NmMyZjI0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL75_UX280_CR0,14,280,414_.jpg",
       title:`On the Count of Three`,
       time:"4:33",
    },
    {
       image_url:"https://m.media-amazon.com/images/M/MV5BN2JjNjIwNDgtNTgxNy00OTViLTk0YWUtMTI0OWYwZWNmMDJmXkEyXkFqcGdeQXVyNDYzNjU3ODM@._V1_QL75_UX280_CR0,0,280,414_.jpg",
       title:`The Best Look from 2022 Gala`,
       time:"3:55",
    },
  ];



  const allArrays = [arr1,arr2,arr3];


function previous(){
  if (index <= 0){
    setIndex(images.length-1)
  }else{
    setIndex(index-1);
  }
}
function next(){
  if (index >= images.length-1){
    setIndex(0)
  }else{
    setIndex(index+1)
  }
}

  return (
    <Container>
        <div className={style.Slider}>
               <div className={style.sliderImage}>
                   <img src={images[index].MainImageurl} alt="" />
               </div>
                 <img src={images[index].subTitleImg} alt="" className={style.subTitleImage}/>
               <div className={style.subTitleDiv}>
                 <PlayCircleOutlineIcon className={style.playBtn} style={{ fontSize: "12vh", marginTop:"2vh", marginLeft:"30vh" }}/>
                 <p className={style.subTitleText}>{images[index].SubTitleText}</p>
               </div>
               <button onClick={previous} className={`${style.btn} ${style.prev}`}> <ArrowBackIosNewIcon style={{ fontSize: "6vh"}} />  </button>
               <button onClick={next} className={`${style.btn} ${style.next}`}> <ArrowForwardIosIcon style={{ fontSize: "6vh"}} /></button>
        </div>

        <UpNext className={style.upnextDiv}>
          <h5 className={style.UpNextTitle}>Up next</h5>
          <UpNextBox img_url={allArrays[index][0].image_url} title={allArrays[index][0].title} time={allArrays[index][0].time} discription='A woman discovers she has a new relationship with time, after surviving a car accident that almost killed her.'/>
          <UpNextBox img_url={allArrays[index][1].image_url} title={allArrays[index][1].title} time={allArrays[index][1].time} discription='A woman discovers she has a new relationship with time, after surviving a car accident that almost killed her.'/>
          <UpNextBox img_url={allArrays[index][2].image_url} title={allArrays[index][2].title} time={allArrays[index][2].time} discription='A woman discovers she has a new relationship with time, after surviving a car accident that almost killed her.'/>
          <h4 className={style.browserTrailer}>Browse Trailer</h4>
        </UpNext>

    </Container>
  )
}

export default BigBox