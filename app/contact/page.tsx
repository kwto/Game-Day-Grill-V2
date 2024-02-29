'use client'
import React from 'react'
import Image from 'next/image'
import mainimage from "@/src/images/about.png";
import {Footer} from "@/src/comps/Footer";
import {NavBar} from "@/src/comps/NavBar";
import Tradition from "@/src/imagesBetter/Tradition.png";
import Woman from "@/src/imagesBetter/Woman.png";



export default function Home() {
  return (
      <div className="relative">
          <Image
              src={Woman}
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
                <div className="p-36 pl-60 pt-52">
                <p className="text-8xl font-bold pb-16 text-red-600 ">A TRADITION OF</p>
                <p className="text-8xl font-bold pb-10">EXCELLENCE</p>
                <p className="text-3xl pb-6 ">Gameday Grill is a sports bar specializing in </p>
                <p className="text-3xl pb-6 ">American cuisine. We pride ourselves on our  </p>
                <p className="text-3xl pb-6 ">atmosphere of friendliness. We make sure every  </p>
                <p className="text-3xl pb-6 ">patron feels welcome. Our cozy seating and  </p>
                <p className="text-3xl pb-6 ">communal bar encourage conversation among</p>
                <p className="text-3xl pb-6 ">parties. Our top priority is the experience of </p>
                <p className="text-3xl pb-6 ">everyone. </p>
                </div>
            </div>
                <div className="basis-1/2">
                    <div className="p-20 pt-32 pr-32">
                    <Image
                        src={Tradition}
                        alt="Background"
                        layout="responsive"
                        width={1920}
                        height={1080}
                        className="w-full h-auto rounded-3xl"
                        />   
                    </div>
                </div>
            </div>
            <div className="flex flex-row">
                <div className="basis-1/2">
                    <div className="p-36 pl-60">
                        <p className="text-9xl font-bold pb-20">QUESTIONS? </p>
                        <p className="text-9xl font-bold pb-20 text-red-600">COMMENTS? </p>
                        <p className="text-9xl font-bold pb-20">CONCERNS? </p>
                    </div>
                </div>
                <div className="basis-1/2">
                <div className="p-36 pr-36">
                        <p className="text-7xl font-bold pb-20 text-red-600 text-center">CONTACT US! </p>
                        <p className="text-5xl pb-20 text-center">Phone: +1 (972) 922-4866</p>
                        <p className="text-5xl pb-20 text-left">Email: customerservice@gamedaygrill.com</p>
                        <p className="text-5xl pb-24 text-center">Address: 1720 Southlake Blvd. Southlake, TX. 76092</p>
                    </div>
                </div>
            </div>
          <Footer/>
      </div>
  )
}
