'use client'
import React from 'react'
import Image from 'next/image'
import mainimage from "@/src/images/res.png";
import {Footer} from "@/src/comps/Footer";
import {NavBar} from "@/src/comps/NavBar";




export default function Home() {
  return (
      <div className="relative">
          <Image
              src={mainimage}
              alt="Background"
              layout="responsive"
              width={1920}
              height={1080}
              className="w-full h-auto"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-opacity-50 px-6">
              <NavBar/>
          </div>

          <Footer/>
      </div>
  )
}
