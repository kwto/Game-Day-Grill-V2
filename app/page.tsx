'use client'
import React from 'react'
import Image from 'next/image'
import backgroundImage from "@/src/images/EAT.png"
import {NavBar} from "@/src/comps/NavBar";
import {Footer} from "@/src/comps/Footer";
import mainPageBurger from "@/src/imagesBetter/mainPageBurger.png";
import HappyGuyMainPage from "@/src/imagesBetter/HappyGuyMainPage.png";
import BestOfTheBest from "@/src/imagesBetter/BestOfTheBest.png";
import TravellersChoice from "@/src/imagesBetter/TravellersChoice.png";

export default function Home() {
  return (
      <div className="relative">
          <Image
              src={backgroundImage}
              alt="Background"
              layout="responsive"
              width={1920}
              height={1080}
              className="w-full h-auto"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-opacity-50 px-6">
              <NavBar />
          </div>
          <div className="flex flex-row">
            <div className="basis-1/2">
                <div className="p-28">
                <Image
                  src={mainPageBurger}
                  alt="Background"
                  layout="responsive"
                  width={697}
                  height={573}
                  className="w-full h-auto rounded-3xl"
              />
                </div>
            </div>
                <div className="basis-1/3">
                    <div className="p-20">
                        <p className="text-6xl font-bold pb-8">DELICIOUS FOOD IN A</p>
                        <p className="text-6xl font-bold pb-8">FUN ATMOSPHERE</p>
                        <p className="text-3xl pb-6">At Gameday Grill, we welcome you to</p>
                        <p className="text-3xl pb-6">every sports fan’s dream! As you enter our</p>
                        <p className="text-3xl pb-6">restaurant, you will immediately be in awe</p>
                        <p className="text-3xl pb-6">of our 20 flat-screen TVs, each displaying</p>
                        <p className="text-3xl pb-6">a different game of our customers’ choice</p>
                        <p className="text-3xl pb-6">(on a first-come, first-serve basis). Bite</p>
                        <p className="text-3xl pb-6">down into our award winning burgers as</p>
                        <p className="text-3xl pb-6">you cheer on your favorite team with your </p>
                        <p className="text-3xl pb-6">fellow fans! If you’re looking for a spot to</p>
                        <p className="text-3xl pb-6">eat good food, find good friends, and </p>
                        <p className="text-3xl pb-6">watch great games, you’ve found the </p>
                        <p className="text-3xl pb-6">perfect place!</p>
                    </div>
                </div>
                 <div className="basis-1/6">
                    <div className="scale 150 ">
                        <Image
                    src={BestOfTheBest}
                    alt="Background"
                    layout="responsive"
                    width={697}
                    height={573}
                    className="w-full h-auto rounded-3xl"
                    />               
                    </div>
                    <div>
                        <Image
                    src={TravellersChoice}
                    alt="Background"
                    layout="responsive"
                    width={697}
                    height={573}
                    className="w-full h-auto rounded-3xl"
                    />               
                    </div>
                </div>
            </div>
            
                <div className="flex flex-row">
                <div className="basis-1/3">
                    <div className="pl-48 pt-52">
                    <p className="text-8xl font-bold pb-10 text-red-600">PEOPLE.</p>
                    <p className="text-6xl font-bold pb-10 ">OUR TOP PRIORITY</p>
                    <p className="text-3xl pb-6 ">At Gameday Grill, we pride ourselves on our </p>
                    <p className="text-3xl pb-6 ">dedication to utmost hospitality. We make </p>
                    <p className="text-3xl pb-6 ">sure every guest is treated with patience and </p>
                    <p className="text-3xl pb-6 ">kindness, no matter the situation. It is our goal  </p>
                    <p className="text-3xl pb-6 ">to ensure every single person who enters </p>
                    <p className="text-3xl pb-6 ">this establishment enjoys the experience. </p>
                    </div>
                </div>
                <div className="basis-2/3">
                    <div className="pb-28 pr-20 scale-75">
                    <Image
                        src={HappyGuyMainPage}
                        alt="Background"
                        layout="responsive"
                        width={729}
                        height={493}
                        className="w-full h-auto rounded-3xl"
                    />
                    </div> 
                </div> 
            </div>                        
          <Footer />
      </div>

  )
}