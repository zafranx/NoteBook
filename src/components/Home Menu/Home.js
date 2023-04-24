// import React,{useState,useEffect} from "react";
import React from "react";
import "./style.css";
// import axios from "axios"
// import FootMenu from "./FootMenu";
// import Members from "./Members";
import AboutUs from "./AboutUs";
// import Slider from "./Slider";
// import Footer from "./Footer";
// import Progressmenu from "./Progressmenu"
import OurTeam from "./OurTeam";
// import OurBlogs from "./OurBlogs";
export default function Home() {
  // const now = new Date().toLocaleTimeString();
  // const [time, setTime] = useState(now);
  // function updateTime() {
  //   const newTime = new Date().toLocaleTimeString();
  //   setTime(newTime);
  // }
  // setInterval(updateTime, 1000)
  // const [coins,setCoins]=useState([]);

  //   const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false'

  //  useEffect(() => {
  //   axios.get(url).then((response) => {
  //     setCoins(response.data)
  //     // console.log(response.data[0])
  //   }).catch((error) => {
  //     console.log(error)
  //   })
  // }, [])

  return (
    <div className="">
      {/* <h2 className="container">{time}</h2> */}
      <div className="bgimg">
        <h3 class="hero-text ">
          In this blog we publish educational blogs, Web3 related blogs and
          about all cryptocurrencies like bitcoin Ethereum and fear and greed
          index of investers and traders. Users can add notes after login or
          signup and store for a long time.
        </h3>
        {/* <img src="./Images/proxy (5).jpeg"
        alt="" 
        // style={{ width: "1500px", height: "1500px" }}
        /> */}
        {/* <img
          src="./Images/c5a929e0-0d89-4966-a0b7-ec505541723b.png"
          className="img-fluid"
          alt=""
          style={{ width: "1500px", height: "650px" }}
        ></img> */}
      </div>
      <section class="hero" id="home">
        <div class="container">
          <h2 class="h1 text-info">Welcome To Webereum</h2>

          <p class="hero-text">
            In this blog we publish educational blogs, Web3 related blogs and
            about all cryptocurrencies like bitcoin Ethereum and fear and greed
            index of investers and traders. Users can add notes after login or
            signup and store for a long time.
          </p>

          <div class="btn-group">
            <button class="btn btn-outline-info rounded">Learn more</button>

            <button class="btn btn-outline-info rounded">Join Us</button>
          </div>
        </div>
      </section>
                                                           {/* coins */}
      {/* <div>
        {" "}
        {coins.map((coins) => {
          return <p>{coins.name}</p>;
        })}
      </div> */}
      {/* <div className=" container border-radius:1px " style={{ width: "max" }}>
        <hr className="text-info" />
        <h2 className="text-center text-white">Welcome To Webereum</h2>
        <hr className="text-info" />
        <h2 className=" text-white text-center">
          In this blog we publish educational blogs, Web3 related blogs and
          about all cryptocurrencies like bitcoin Ethereum and fear and greed
          index of investers and traders. Users can add notes after login or
          signup and store for a long time.
   
          <br />
          <br />
          Web 3.0 is a new internet breed that aspires to be a decentralised
          version of the virtual world. It aims for transparency, and users will
          access a limitless amount of resources, content, and agreements in the
          future.
        </h2>
        <hr className="text-info" />
      </div> */}

      {/* <br/>
      <br /> */}
      {/* <img
        src="./Images/8b8880e7-282b-4fc0-8186-452c98fe0b94.png"
        className="img-fluid"
        alt=""
        style={{ width: "1500px", height: "700px" }}
      ></img> */}
      <br />

      {/* <div
        className="homeD1 container border-radius:1px "
        style={{ width: "max" }}
      > */}
      {/* <h2 className="bgimg text-white">
          We Publish Best And Unique Content In Our Website In Our Website We
          Will Provide Articles And Also Provide Secure Personal Notes Storage
          You Can Login And Add your Personal Notes. We Provide Best Service To
          Our Users
        </h2> */}
      {/* </div> */}
      <br />
      <br />
      <div
        // style ={{height: "200px"}}
        className=""
      >
        {/* <Members/> */}
        <AboutUs />
        {/* <Slider/> */}
        {/* <Progressmenu/> */}
        <OurTeam />
        {/* <OurBlogs /> */}
        {/* <div><FootMenu /></div> */}
        {/* <Footer /> */}
      </div>

      {/* <div className="homeD2 container">
        <br />
        <br />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/2uYuWiICCM0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <br />
        <br />
      </div> */}
      {/* <h2>{time}</h2> */}
      <br />
      <br />
    </div>
  );
}
