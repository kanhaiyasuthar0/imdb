import React, { useContext } from 'react';
import styled from 'styled-components';import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
// import { AuthContext } from '../../Context/AuthContext';
import  style from '../Home/UpNextCardBoxes.module.css';

function UpNextBox({img_url,title,time,discription}) {
//   const {handleSearch} = useContext(AuthContext);
  return (
    <div className={style.container}>

        <div className={style.imageBox}>
          <img src={`${img_url}`} alt="" />
        </div>

        <div className={style.detailsBox}>
            <div className={style.icons}>
              <PlayCircleOutlineIcon style={{ fontSize: "5vh"}} className={style.playBtn}/>
              <span className={style.timing}>{time}</span>
              
            </div>
            <div className={style.titles}>
              <p>{title}</p>
            </div>
        </div>

    </div>
  )
}

export default UpNextBox