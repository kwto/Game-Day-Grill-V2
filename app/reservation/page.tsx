'use client'
import { Footer } from "@/src/comps/Footer";
import { NavBar } from "@/src/comps/NavBar";
import Calendar from "@/src/imgs/webParts/Calendar.png";
import Reservations from "@/src/imgs/webParts/webParts/Reservations.png";
import Image from 'next/image';


export default function Home() {
  return (
      <div className="relative">
          <Image
              src={Reservations}
              alt="Background"
              layout="responsive"
              width={1920}
              height={1080}
              className="w-full h-auto scale-50 p-48"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-opacity-50 px-6">
              <NavBar/>
          </div>
          <div className="flex flex-row">
            <div className="basis-1/2">
                <div className="pt-96 p-60 pl-68">
                <p className="text-3xl pb-6 ">Reservations can be made by calling us at +1 (972)  </p>
                <p className="text-3xl pb-6 ">922-4866. Reservations are only required for parties   </p>
                <p className="text-3xl pb-6 ">of twelve or greater. Reservations must be made at   </p>
                <p className="text-3xl pb-6 ">least four hours in advance. Seating is not guaranteed  </p>
                <p className="text-3xl pb-6 ">for guests without reservations.</p>
                </div>
            </div>
                <div className="basis-1/2">
                    <div className="text-center pt-32">
                        <p className="text-6xl font-bold">AVAILABILITY CALENDAR</p>
                    </div>
                    <div className="pb-32">
                    <Image
                        src={Calendar}
                        alt="Background"
                        layout="responsive"
                        width={1920}
                        height={1080}
                        className="w-full h-auto rounded-3xl"
                        />   
                    </div>
                </div>
            </div>
          <Footer/>
      </div>
  )
}
