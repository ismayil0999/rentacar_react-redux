import React from 'react';
import { useSelector } from 'react-redux';
import { Homeslide } from '../style';
export default function Slide() {
  const theme=useSelector((state)=>state.cars.light)
  return (
   <Homeslide theme={theme}>
   <img src="./images/banner2.png"></img>
   <div>
     <h3>Rent a your <br></br>favorite car</h3>
   </div>
   </Homeslide>
  );
}
