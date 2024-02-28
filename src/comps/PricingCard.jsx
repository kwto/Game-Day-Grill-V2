import axios from "axios"
import Link from "next/link"
import {AiFillCheckCircle} from 'react-icons/ai'
import {getPriceTotal, getProductImage, getProductName} from "@/src/comps/computed"

export default function Home({price}) {


    return (
        <div>
            <div className="relative">
                <div className=" w-full h-72 rounded-lg">
                    <img
                        src={getProductImage(price.product)}
                        className="w-full h-full object-center object-cover"
                    />
                </div>
                <div className="relative mt-4">
                    <h3 className="text-sm font-medium ">{getProductName(price.product)}</h3>
                </div>
                <div
                    className="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
                    <div
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                    />
                    <p className="relative text-lg font-semibold ">
                        ${getPriceTotal(price)}
                    </p>
                </div>
            </div>
            <div className="mt-6">
                {/*<button*/}
                {/*    onClick={() => addToCart(price)}*/}
                {/*    className="relative w-full flex bg-gray-200 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-200"*/}
                {/*>*/}
                {/*    Add to bag<span className="sr-only">, {getProductName(price.product)}</span>*/}
                {/*</button>*/}
            </div>
        </div>
    )
}
