import React from 'react';
import { useSelector } from 'react-redux';
export default function Slide() {
  const theme=useSelector((state)=>state.cars.light)
  return (
    <div className='homeslide'>
   <img src="./images/banner2.png"></img>
   <div>
     <h3>Rent a your <br></br>favorite car</h3>
   </div>
    </div>
  );
}
