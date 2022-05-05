import React, { useContext, useEffect ,useState} from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AuthContext } from "../../Context/AuthContext";
import styled from 'styled-components';

const Titles = styled.h6`
  color : white;
 position : relative;
 top : 5px;
 padding : 0;
 margin : 0;

 &:hover{
   text-decoration :underline;
   cursor: pointer;
 }
`;

function FeaturesToday({threeSliderApiKey}) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 6000, min: 4000 },
      items: 3,
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


  
  const API_KEY = 'cd1b752287267fcdd91d7693d2fb5336';

  const [data,setData] = useState([]);
  const {base_url,handleSearch} = useContext(AuthContext)

  useEffect(()=>{
    fetch(threeSliderApiKey)
    .then((res)=>res.json())
    .then((res)=>setData(res.results))
  },[])




  return (
    <div style={{ color: "white", background:"black",width:"100%",margin:"auto", }}>
    
  <Carousel  responsive={responsive}>
    
    {
      data.map((item)=>{
        return (
          <div onClick={()=>handleSearch(!item.title  ? item.name : item.title)} style={{height : "300px", margin:"auto", width : "87%",}} > 
              <img src={`${base_url}${item.poster_path}`} alt="" height={"85%"} width={"350px"} style={{margin:"auto"}}  /> 
              <Titles >{!item.title  ? item.name : item.title}</Titles>
          </div>
        )
      })
    }

   
  </Carousel>
    </div>
  );
}

export default FeaturesToday;
