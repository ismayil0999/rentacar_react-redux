import React from 'react';
import { FooterArea } from '../style';
import { useSelector} from 'react-redux';
export default function Footer() {
    const theme=useSelector((state)=>state.cars.light)
  return (
    <div>
      <FooterArea theme={theme}>
<div>
    <p>About us</p>
    <p>Our Services</p>
    <p>Information</p>
    <p>Privacy Policy</p>
</div>
<div>
    <p>Support</p>
    <p>Contact us</p>
    <p>Typography</p>
    <p>Faq</p>
</div>
<div>
    <p>USA,Auto,King st 665087</p>
    <p>Phone: +994 77 318 41 21</p>
    <p>Email: rentacar@gmail.com</p>
    <p>2023 Auto Ltd</p>
</div>
      </FooterArea>
    </div>
  );
}
