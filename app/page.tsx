'use client'
import React from 'react'
import Image from 'next/image'
import backgroundImage from "@/src/images/EAT.png"
import mainimage from "@/src/images/mainpage.png"
import {NavBar} from "@/src/comps/NavBar";
import {Footer} from "@/src/comps/Footer";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Image src={backgroundImage} alt="Background" layout="responsive" width={1920} height={1080}/>
      <main>
        <Image src={mainimage} alt="Main" layout="responsive" width={1920} height={1080}/>
      </main>
      <Footer />
    </div>
  )
}
