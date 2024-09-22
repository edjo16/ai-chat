import { Link } from "react-router-dom";
import "./homePage.css";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

const Homepage = () => {
  const [typingStatus, setTypingStatus] = useState("human1");

  return (
    <div className="homepage">
      <img src="/orbital.png" alt="" className="orbital" />
      <div className="left">
        <h1>EP AI</h1>
        <h2>Productividad y Creatividad</h2>
        <h3>
          Proyecto creado con el fin de tener tu propio CHAT-GPT
        </h3>
        <Link to="/dashboard">Get Started</Link>
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src="/bot.png" alt="" className="bot" />
          <div className="chat">
            <img
              src={
                typingStatus === "human1"
                  ? "/human1.jpeg"
                  : typingStatus === "human2"
                  ? "/human2.jpeg"
                  : "bot.png"
              }
              alt=""
            />
            <TypeAnimation
              sequence={[
                "Human:Donde queda Panamá?",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "Bot: En la parte central del continente americano",
                2000,
                () => {
                  setTypingStatus("human2");
                },
                "Human2:El sancocho es un plato Panameño?",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "Bot:El sancocho en efecto es un plato nacional Panameño",
                2000,
                () => {
                  setTypingStatus("human1");
                },
              ]}
              wrapper="span"
              repeat={Infinity}
              cursor={true}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>
      <div className="terms">
         <img src="/logo.png" alt="" /> Desarrollado Por Edgardo Pinto
        <div className="links">
          <Link to="/">Terms of Service</Link>
          <span>|</span>
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;