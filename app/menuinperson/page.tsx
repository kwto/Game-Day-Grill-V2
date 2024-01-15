'use client'
import React from 'react'
import Image from 'next/image'
import logo from "@/src/images/logo.png"
import mainimage from "@/src/images/menuIP.png";
import {Footer} from "@/src/comps/Footer";
import {NavBar} from "@/src/comps/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <main>
        <Image src={mainimage} alt="Main" layout="responsive" width={1920} height={1080}/>
      </main>
      <Footer />
    </div>
  )
}
