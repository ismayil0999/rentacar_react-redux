import React from 'react';
import {useParams} from "react-router";
import { useSelector,useDispatch} from 'react-redux';
import { CarInfo,InfoHead } from '../style';
import CloseIcon from '@mui/icons-material/Close';
import { closeInfo } from '../redux/state';
export default function Info() {
    const car=useSelector((state)=>state.cars.value)
    const theme=useSelector(state=>state.cars.light)
    const info=useSelector(state=>state.cars.info)
    const params=useParams()
    const item=car.find(cars=>cars.id==params.id)
    const dispatch=useDispatch()
  return (
  <CarInfo info={info} theme={theme}>
     <InfoHead>
         <h3>{item.name}</h3>
         <CloseIcon id="close" onClick={()=>{dispatch(closeInfo())}}/>
     </InfoHead>
     <div className='scroll'>
     <img src={item.img}></img>
     <div id='info-box'>
         <h4 id="price">{item.price}</h4>
         <h4>City:</h4>
         <h4>Year:</h4>
         <h4>Color:</h4>
     </div>
     </div>
      </CarInfo>
  );
}
