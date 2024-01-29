// import React from "react";
// import { Canvas } from "@react-three/fiber";
// import { useNavigate } from "react-router-dom";
// import { CameraControls, ScrollControls } from "@react-three/drei";
// import Globe from "../../components/Stars/globe/globe";
// import { OrbitControls } from "@react-three/drei";
// import Universe from "../../components/Stars/globe/universe/universe";
// import Satellite from "../../components/Stars/globe/universe/Satellite/satellite";

// //mui
// import { styled } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Grid";

// //image files
// import techfest24 from "../../images/techfest24.png";
// import F from "../../images/F.png";

// //css file
// import "./landingPage.css";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#000000",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

// function LandingPage() {
//   const date = new Date();

//   let days = 94 - date.getDay();
//   let hours = 23 - date.getHours();
//   let mins = 60 - date.getMinutes();
//   let sec = date.getSeconds();

//   const location = {
//     lat: 40.7128, // Latitude for New York City
//     lon: -74.006, // Longitude for New York City
//   };

//   const navigate = useNavigate();
//   function navigateToDomains() {
//     console.log("satellite clicked");
//     navigate("/domains");
//   }
//   function navigateToWorkshops() {
//     console.log("satellite clicked");
//     navigate("/workshops");
//   }

//   return (
//     <>
//       <div
//         className="landingPage"
//         style={{ background: "black", width: "100vw", height: "100vh" }}
//       >
//         <nav className="header">
//           <img
//             src={techfest24}
//             alt=""
//             style={{ width: "250px", margin: 5, padding: 5 }}
//             className="header logo"
//           />
//           <button className="header login"><a href="/sign-in" style={{textDecoration:"none", color:"#000000"}}>Login</a></button>
//         </nav>

//         <div className="mainBody">
//           <Grid container spacing={2}>
//             <Grid item xs={6}>
//               <Item>
//                 <div className="main1">
//                   <section className="tagline">
//                     <img src={F} alt="" id="F" style={{ width: "9rem" }} />
//                     <div className="others">
//                       <h2
//                         style={{
//                           color: "white",
//                           marginBottom: 20,
//                           marginTop: 20,
//                         }}
//                       >
//                         uture
//                       </h2>
//                       <div className="orges">
//                         <h2 className="O"></h2>
//                         <h2>rges</h2>
//                       </div>
//                     </div>
//                     <h2 id></h2>
//                   </section>
//                   <p className="landingText">
//                     Embrace the Future of Sustainable Development through
//                     techFEST'24. Step into a world where technology and
//                     innovation redefine the boundaries of sustainability.
//                   </p>
//                   <div className="register">
//                     <div className="countdown">
//                       <div className="time">
//                         <h2 style={{ fontSize: "2rem" }}>{days}</h2>
//                         <p
//                           style={{
//                             fontSize: "1rem",
//                             position: "relative",
//                             bottom: "10%",
//                           }}
//                         >
//                           days
//                         </p>
//                       </div>
//                       <div className="time">
//                         <h2 style={{ fontSize: "2rem" }}>{hours}</h2>
//                         <p
//                           style={{
//                             fontSize: "1rem",
//                             position: "relative",
//                             bottom: "10%",
//                           }}
//                         >
//                           hours
//                         </p>
//                       </div>
//                       <div className="time">
//                         <h2 style={{ fontSize: "2rem" }}>{mins}</h2>
//                         <p
//                           style={{
//                             fontSize: "1rem",
//                             position: "relative",
//                             bottom: "10%",
//                           }}
//                         >
//                           minutes
//                         </p>
//                       </div>
//                       <div className="time">
//                         <h2 style={{ fontSize: "2rem" }}>{sec}</h2>
//                         <p
//                           style={{
//                             fontSize: "1rem",
//                             position: "relative",
//                             bottom: "10%",
//                           }}
//                         >
//                           seconds
//                         </p>
//                       </div>
//                     </div>
//                     <button id="registerBtn">
//                       {" "}
//                       <span>Register Now</span>
//                     </button>
//                   </div>
//                 </div>
//               </Item>
//             </Grid>
//             <Grid item xs={4}>
//               <Item>
//                 <div
//                   className="main2"
//                   style={{ width: "45vw", height: "100vh" }}
//                 >
//                   <Canvas>
//                     <ambientLight intensity={0.5} />
//                     <pointLight position={[10, 10, 10]} />
//                     {/* <ScrollControls pages={3} damping={0.25} /> */}
//                     <Globe position={[0, 0.4, 1]} location={location} />
//                     <Satellite onClick={navigateToWorkshops} />
//                     <Satellite onClick={navigateToDomains} />
//                   </Canvas>
//                 </div>
//               </Item>
//             </Grid>
//           </Grid>
//         </div>
//       </div>
//     </>
//   );
// }

// export default LandingPage;

import { Box, Typography, CardMedia, Button } from "@mui/material";

import StarCanvas from "./StarbackGround";
// import Hero from "./components/Hero";
import "./landingPage.css"
import NavBar from "../../components/navbar/Navbar";
import { motion } from "framer-motion";

// import { slideInFromBottom } from "./components/constants";
function App() {
  //  const CapsuleDiv = styled('div')({
  //   width: '100px',
  //   height: '50px',
  //   borderRadius: '25px',
  //   backgroundColor: 'blue',
  // });
  const capsuleDiv = {
    // width:"100px",
    // height:"50px",
    // borderRadius:"25px",
    // backgroundColor:"blue",
  };
  return (
    <>
      <StarCanvas />
      <Box
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor: "transparent",

          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "end",
          position: "relative",
        }}
      >
        <CardMedia
          autoPlay
          muted
          loop
          component="video"
          className="videoheader"
          src="/blackhole.webm"
        />
        <NavBar />
        {/* <Box
          style={{
            overflowX: "hidden",
            width: "100%",
            height: "100vh",
            backgroundColor: "#030014",
            display: "flex",
            flexDirection: "row",
            spacing: "1.2rem",
          }}
        >
          <Hero />

       
        </Box> */}
        <Box
          style={{
            width: "100%",
            height: "65%",
            zIndex: "20",
            padding: "1.2rem",
          }}
        >
          {/* <Hero /> */}
        </Box>
      </Box>

      {/* <Box
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          bottom: "4rem",
          zIndex: "25",
        }}
      >
        <Button style={{ fontSize: "" }}></Button>
      </Box> */}
      {/* <motion.div variants={slideInFromBottom(0.5)}>
        
      </motion.div> */}
    </>
  );
}

export default App;
