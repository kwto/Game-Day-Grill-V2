'use client'
import React from 'react'
import Image from 'next/image'
import mainimage from "@/src/images/catering.png";
import {Footer} from "@/src/comps/Footer";
import {NavBar} from "@/src/comps/NavBar";
import Catering from "@/src/imagesBetter/Catering.png";
import Food from "@/src/imagesBetter/Food.png";
import Champagne from "@/src/imagesBetter/Champagne.png";


export default function Home() {
  return (
      <div className="relative">
          <Image
              src={Catering}
              alt="Background"
              layout="responsive"
              width={1920}
              height={1080}
              className="w-full h-auto"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-opacity-50 px-6">
              <NavBar/>
          </div>
          <div className="flex flex-row">
            <div className="basis-1/2">
                <div className="p-28">
                <Image
                  src={Food}
                  alt="Background"
                  layout="responsive"
                  width={697}
                  height={573}
                  className="w-full h-auto rounded-3xl"
              />
                </div>
            </div>
                <div className="basis-1/2">
                    <div className="p-36 pt-48">
                        <p className="text-6xl font-bold pb-12">WE WILL BRING THE FOOD</p>
                        <p className="text-6xl font-bold pb-10 text-red-600">TO YOU</p>
                        <p className="text-3xl pb-6">We would be honored if you allowed us to be a </p>
                        <p className="text-3xl pb-6">part of your special event. We offer catering for </p>
                        <p className="text-3xl pb-6">parties up to 100 people within a 20 mile radius</p>
                        <p className="text-3xl pb-6">of our restaurant. We can cater for birthdays, </p>
                        <p className="text-3xl pb-6">weddings, holidays, or any other celebration </p>
                        <p className="text-3xl pb-6">you need food for.</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-row">
                <div className="basis-1/2">
                    <div className="pl-60 pt-52">
                    <p className="text-7xl font-bold pb-10 text-red-600">EVENTS</p>
                    <p className="text-6xl font-bold pb-12 ">AT GAMEDAY GRILL</p>
                    <p className="text-3xl pb-6 ">Gameday Grill is equipped to host all kinds of  </p>
                    <p className="text-3xl pb-6 ">events. We have a special event room that can  </p>
                    <p className="text-3xl pb-6 ">seat up to 50 guests, and it has its very own TV  </p>
                    <p className="text-3xl pb-6 ">for watching any game you want. We would be</p>
                    <p className="text-3xl pb-6 ">overjoyed if you chose to host your even with us.   </p>
                    <p className="text-3xl pb-6 ">Reservations required at at least 10 days in  </p>
                    <p className="text-3xl pb-6 ">advance for parties of 12 or more. </p>
                    </div>
                </div>
                <div className="basis-1/2">
                    <div className="pb-28 pr-24 ">
                    <Image
                        src={Champagne}
                        alt="Background"
                        layout="responsive"
                        width={729}
                        height={493}
                        className="w-full h-auto rounded-3xl"
                    />
                    </div> 
                </div> 
            </div>      
          <Footer/>
      </div>
  )
}
