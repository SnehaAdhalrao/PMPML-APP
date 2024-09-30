import React from 'react'
import Home_review from './Home_review';
import PMPML_Bus from "../assets/PMPML_Bus.png";
import { FaStar, FaRegStar } from "react-icons/fa";
import Button from './Button';

export default function HomePageContent() {
    const totalStars = 5;
    const filledStars = 4;
  return (
    <div className="content flex">
      <div className="lefthal w-[50%] h-[450px] flex flex-col gap-4 items-center justify-center">
        <h2 className="text-3xl font-bold">PCCOER's PMPML</h2>
        <h6 className="text-[15px] tracking-tighter">Explore the City with Ease – PCCOER PMPML at Your Fingertips!</h6>
        <div className="startdiv flex gap-1">
          {Array.from({ length: totalStars }, (v, i) =>
            i < filledStars ? (
              <FaStar key={i} className="text-yellow-500" />
            ) : (
              <FaRegStar key={i} className="text-yellow-500" />
            )
          )}
        </div>

        <div>
          <span className="text-pink-800 text-sm">4.2, </span>
          <span className="text-sm tracking-tighest">23k followers</span>
        </div>
        <p className="pl-16 leading-4 text-sm">
          PCCOER offers a seamless way to explore the city's bus routes. With real-time updates, it simplifies pass
          booking, complaint submissions, and route navigation. The app is designed to enhance commuter convenience,
          ensuring a smooth public transport experience. It's a user-friendly solution tailored for easy access to
          essential PMPML services.
        </p>

        <div className="review">
          <Home_review />
        </div>
        <span className="drop-shadow-lg shadow-black-500/50">
          <Button text={"learn more"} />
        </span>
      </div>

      <div
        className="rigthalf w-[50%] h-[450px] bg-cover rounded-lg"
        style={{
          backgroundImage: `url(${PMPML_Bus})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
    </div>
  )
}
