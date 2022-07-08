import * as React from 'react';
import '../style.css';

import '../App.css'

import Background from '../images/hand-painted-watercolor-background-with-sky-clouds-shape.jpg';

// import { NavLink } from 'reactstrap';
import { NavLink, Routes, Route, Link, useNavigate } from 'react-router-dom';

import {
  Button,
  CardGroup,
  Card,
  CardImg,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Container,
  Breadcrumb,
  BreadcrumbItem,
} from 'reactstrap';

import Login from '../LoginPage/Login';
import Signup from '../SignupPage/Signup'
import Constellation from '../ConstellationPage/Constellation';
import House from '../HousePage/House';
import Aspect from '../AspectPage/Aspect';


export default function App() {
	// 導覽
  const navigate = useNavigate();

 //  const background = {
 //    backgroundImage: `url(${Background})`,
 //    height: "100%",
 //    width: "100%",
 //    backgroundPosition: "center",
 //    backgroundRepeat: "no-repeat",
 //    backgroundSize: "cover",
	// };

	// 背景圖片
	const background = {
    backgroundImage: `url(${Background})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height:"100vh",
    width:"100vw",
};
  
    const loginPage = () => {
      // navigate.push("/Login")
      navigate("../Login", { replace: true });
    }

    const signupPage = () => {
      // navigate.push("/Signup")
      navigate("../Signup", { replace: true });
    }

    const constellationPage = () => {
      // navigate.push("/Constellation")
      navigate("../Constellation", { replace: true });
    }

    const housePage = () => {
      // navigate.push("/House")
      navigate("../House", { replace: true });
    }

    const aspectPage = () => {
      // navigate.push("/Aspect")
      navigate("../Aspect", { replace: true });
    }

  // function Home() {
  //   const navigate = useNavigate;

  //   return (
  //     // <div>
  //     //   <h1>Home</h1>
  //     //   <nav>
  //     //     <Link to="/">Home</Link> |{" "}
  //     //     <Link to="/Login"><Login /></Link>
  //     //   </nav>
  //     // </div>
  //     // console.log("home() invoked..")

  //     navigate('/App')
  //   );
  // }

  // function Login() {
  //   const navigate = useNavigate;

  //   return (
  //     // <div>
  //     //   <h1>Home</h1>
  //     //   <nav>
  //     //     <Link to="/">Home</Link> |{" "}
  //     //     <Link to="/Login"><Login /></Link>
  //     //   </nav>
  //     // </div>
  //     // console.log("home() invoked..")

  //     navigate('/Login')
  //   );
  // }

  return (
		// 容器＋背景圖片
    <Container style = { background }>

      <h1 className="row justify-content-center">Astrology 占星網</h1>
      <p className="row justify-content-center">
        Wellcome to Astrology Website :)
      </p>



      <NavLink to="/App">首頁</NavLink>｜<NavLink to="/Signup">註冊</NavLink>｜
      <NavLink to="/Login">登入</NavLink>
      <p></p>
      <NavLink to="/Constellation">星座資訊</NavLink>｜<NavLink to="/House">宮位資訊</NavLink>｜<NavLink to="/Aspect">相位資訊</NavLink>
      <Routes>
        {/* <Route path="/App" element={<App />} /> */}
        <Route path="/Login" element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Constellation' element={<Constellation />} />
        <Route path='/House' element={<House />} />
        <Route path='/Aspect' element={<Aspect />} />
        
            {/* <Route path='/About' element={<About />} />
            <Route path='/videos' element={<Results />} /> */}
      </Routes>
      {/* 麵包屑 */}
      <Breadcrumb>
        <BreadcrumbItem>
          {/* <button onClick={<App />}>首頁</button> */}
          <a href="/">首頁</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="#">占星</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>首頁</BreadcrumbItem>
      </Breadcrumb>
      {/* Card 群組 */}
      {/* <CardGroup>
        <Card>
          <CardImg
            alt="Card image cap"
            src="https://picsum.photos/318/180"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">星座資訊</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              介紹星座相關資訊
            </CardSubtitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>

            <button className="btn btn-success" onClick={loginPage}>詳細介紹
 </button>

          </CardBody>
        </Card>
        
      </CardGroup> */}
    </Container>
  );
}
