import React, { Component, useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Slider from "react-slick";
import MovieSliderCard from "./MovieSliderCard";
import styled from 'styled-components';
import style from './Responsive.module.css'
import { AuthContext } from "../../Context/AuthContext";







// const Rate = styled.div`
// width:600px;
// height:300px;
// margin:auto;
// background:#1f1f1f;
// border-radius:3vh;
// position:absolute;
// left:30%;
// z-index:${props => props.rateFlag ? '1' : '-11'}
// `
// z-index:-1;
// z-index: ${{rateFlag} ? '1' : '0'};











function Responsive ({api_url}){


  const dispatch = useDispatch();
  const{rateFlag,setRateFlag} = useContext(AuthContext)
  console.log('rate btn clicked from parent page',rateFlag);
  useEffect(()=>{
  },[])

   const handleRateBox=()=>{
    // setRateFlag(!rateFlag);
    // console.log(rateFlag,'from responsive')
   }
 
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 6,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };


    const [data,setData] = useState([]);

    useEffect(()=>{
        fetch(api_url)
        .then((res)=>res.json())
        .then((res)=>setData(res.results))
    },[])


    return (
      <div className={style.container}>
       

        <Slider {...settings}>
           {
           
          // console.log(data)// poster_path ,,vote_average
            data.map((item)=>{
              return (
                <MovieSliderCard key={item.id} dispatch = {dispatch} item={item} name={!item.title?item.name:item.title} poster ={item.poster_path} rate = {item.vote_average} /> 
              )
              
            })
           }
        </Slider>
      </div>
    );
  
}

export default Responsive;