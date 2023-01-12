import styled from "styled-components";
const Headers=styled.div`
width:100%;
height:70px;
background:${props=>props.theme===true ? "black" : "rgb(206, 4, 4) "};
margin:0;
color:white;
display:flex;
align-items:center;
justify-content:space-between;
padding-left:3%;
box-sizing:border-box;
padding-right:3%;
#sort{
  display:none;
}
@media screen and (max-width:915px){
#sort{
  display:block;
}
}
`
const Select=styled.select`
width:90%;
height:40px;
border:1px solid black;
outline:none;
`
const PriceRangeBox=styled.div`
width:90%;
display:flex;
justify-content:space-between;
gap:5px;
`
const PriceInput=styled.input`
width:45%;
height:35px;
border:1px solid black;
padding-left:10px;
font-size:14px;
color:grey;
outline:none;
`
const FindButton=styled.button`
width:90%;
padding:10px;
color:white;
background:rgb(206, 4, 4);
border:none;
outline:none;
`
//Styles on cars component item
const Container=styled.div`
display:flex;
gap:20px;
flex-wrap: wrap;
flex-shrink: 0;
width:70%;
justify-content:center;
align-items:flex-start;
@media screen and (max-width:915px){
   width:100%;
}
`
const HeadContainer=styled.div`
width:100%;
display:flex;
box-sizing: border-box;
padding-top:60px;
padding-bottom:90px;
background:${props=>props.theme===true ? "#111111" : "rgb(243, 243, 243)"};
`
const Box=styled.div`
width:200px;
height:280px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
padding:0;
position:relative;
background:${props=>props.theme===true ? "#000000 " : "white"};
border:${props=>props.theme===true ? "1px solid #333333" : "none"}
margin-top:10px;
box-shadow: 0 5px 20px 5px rgb(0 0 0 / 12%);
//border:${props=>props.theme===true ? "1px solid white" : "none"};
  button{
  background:rgb(206, 4, 4);
  border:none;
  outline:none;
  width:100%;
  padding:4px;
  color:white;
  height:30px;
}
a{
  width:50% !important;
  padding:0;
  text-decoration:none;
  background:blue;
  display:flex;
  justify-content:flex-start;
}
h3{
  color:grey;
  width:100%;
  background:rgb(206, 4, 4);
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  padding-left:13px;
  text-align:start;
  box-sizing:border-box;
  color:white;
  padding:7px;
margin-top:-0px;
height:50px !important;
}
@media screen and (max-width:423px){
    width:90%;
 }
 h4{
  display:flex;
  align-items:center;
  justify-content:flex-start;
  width:100%;
  color:rgb(206, 4, 4);
  padding-bottom:18px;
  padding-left:10px;
}
`
const Image=styled.img`
width:195px;
height:140px;
`
const Price=styled.div`
display:flex;
justify-content:space-between;
align-items:center;
width:100%;
box-sizing:border-box;
gap:5px;
position:absolute;
bottom:0;
`
const SearchArea=styled.div`
width:30%;
flex-direction: column;
display:flex;
align-items: center;
gap:20px;
padding-right: 20px;
height:620px;
box-sizing: border-box;
padding-top:10px;
@media screen and (max-width:915px){
    position:absolute;
    width:100%;
    top:0%;
    left:${props=>props.search===true ? "0%" : "-100%"};
    background:${props=>props.theme===true ? "#111111" : "rgb(243, 243, 243)"};
    height:100%;
    padding-top:30px;
}
`
const OurBenefits=styled.div`
display:flex;
width:100%;
justify-content:center;
flex-wrap:nowrap;
flex-shrink:0 !important;
align-items:center;
gap:50px;
overflow-x:scroll;
div{
  display:flex;
  flex-direction:column;
  align-items:center;
  min-width:200px;
  background:white;
  box-shadow: 0 5px 20px 5px rgb(0 0 0 / 12%);
}
`
const CarInfo=styled.div`
width:50%;
height:auto;
padding-bottom:20px;
position:fixed;
top:50%;
left:50%;
transform:translate(-50%,-50%);
display:${props=>props.info===true ? "flex" : "none"};
flex-direction:column;
align-items:center;
background:${props=>props.theme===true ? "black" : "rgb(243, 243, 243)"};
color:${props=>props.theme===true ? "white" : "black"};
overflow-y:hidden;
img{
  width:60% !important;
}
::-webkit-scrollbar{
  display:none;
}
@media screen and (max-width:511px){
  width:90%;
}
#info-box{
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  width:100%;
}
#price{
  background:rgb(206, 4, 4);
  color:white;
  padding:5px;
  width:120px;
}
h4{
  padding-left:10px;
  width:100%;
  text-align:start;
  box-sizing:border-box;
  display:flex;
  align-items:center;
  gap:10px;
}
.col{
  width:15px;
  height:5px;
}
.scroll{
  height:100%;
  overflow-y:scroll;
  width:100%;
}
.scroll::-webkit-scrollbar{
  display:none;
}
details{
  width:100%;
  text-align:start;
  padding-left:10px;
}
`
const InfoHead=styled.div`
width:100%;
height:60px;
color:white;
display:flex;
flex-direction:row;
justify-content:space-between;
padding-left:10px;
padding-right:10px;
box-sizing:border-box;
background:#17A2B8;
align-items:center;
`
const Homeslide=styled.div`
width:100%;
height:400px;
display: flex;
align-items: center;
justify-content: center;
background:${props=>props.theme===true ? "#111111" : "rgb(243, 243, 243)"};
position: relative;
img{
  width:60%;
  height:60%;
}
@media screen and (max-width:827px){
 height:300px;
}
@media screen and (max-width:645px){
  height:250px;
}
div{
  position: absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  display:flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  background: rgba(0, 0, 0, 0.253);
  color:white;
  padding-left: 50px;
  box-sizing: border-box;
}
@media screen and (max-width:495px){
    height:200px;
 div{
    font-size: 30px;
    padding-left: 20px;
  }
}
`
const RentInfo=styled.div`
width:50%;
height:90%;
position:fixed;
transition:0.5s ease;
left:50%;
top:50%;
gap:20px;
transform:translate(-50%,-50%);
display:${props=>props.rent===true ? "flex" : "none"};
flex-direction:column;
align-items:center;
background:${props=>props.theme===true ? "black" : "rgb(243, 243, 243)"};
color:${props=>props.theme===true ? "white" : "black"};
overflow-y:hidden;
padding-bottom:10px;
::-webkit-scrollbar{
  display:none;
}
input{
  width:90%;
  height:30px;
  outline:none;
}
select{
  width:91%;
  height:32px;
  outline:none;
}
label{
  width:90%;
  text-align:start;
}
button{
  width:90%;
  padding:10px;
  background:rgb(206, 4, 4) ;
  border:none;
  outline:none;
  color:white;
  font-weight:bolder;
}
@media screen and (max-width:511px){
  width:90%;
}
#info-box{
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  width:100%;
}
.scroll{
  height:100vh;
  overflow-y:scroll;
  width:100%;
display:flex;
flex-direction:column;
align-items:center;
gap:5px;
}
.scroll::-webkit-scrollbar{
  display:none;
}
.rentbtn{
  margin-top:30px;
}
h3{
  width:90%;
  height:0px;
}
`
const Background=styled.div`
width:100%;
height:100%;
background:rgba(0, 0, 0, 0.863);
z-index:10000;
top:0;
left:0;
position:fixed;
display:${props=>props.info===true ? "flex" : "none"};
`
const BackgroundRent=styled.div`
width:100%;
height:100%;
background:rgba(0, 0, 0, 0.863);
z-index:10000;
top:0;
left:0;
position:fixed;
display:${props=>props.rent===true ? "flex" : "none"};
`
const FooterArea=styled.div`
width:100%;
height:auto;
padding-bottom:10px;
display:flex;
flex-wrap:wrap;
justify-content:space-between;
padding-left:20px;
padding-right:20px;
box-sizing:border-box;
background:${props=>props.theme===true ? "#111111" : "rgb(243, 243, 243)"};
color:${props=>props.theme===true ? "white" : "black"};
div{
  display:flex;
  flex-direction:column;
  align-items:flex-start;
}
p{
  width:100%;
  text-align:start;
}
`
export {FooterArea,BackgroundRent,Background,RentInfo,Homeslide,CarInfo,InfoHead,Headers,Select,PriceRangeBox,PriceInput,FindButton,Price,Image,Box,SearchArea,Container,HeadContainer,OurBenefits}