import axios from "axios";
import {getProductName, getPriceTotal, getProductImage, getProductDescription} from "@/src/comps/items";

export default function Home({ price }) {

    const handleSubscription = async (e) => {
        e.preventDefault();
        const { data } = await axios.post('/api/payment',
        {
          priceId: price.id
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
        );
        window.location.assign(data)
      }
    

      const imageNames = [
        'ChipsandQueso.png',
        'MozzarellaSticks.png',
        'GamedayWings.png',
        'FriedCalamari.png',
        'GamedayBurger.png',
        'ChickenTenders.png',
        'ChickenSandwich.png',
        'GrilledChickenSandwich.png',
        'Veganburger.png',
        'Theclassic.png',
        'Icecreamsundae.png',
        'cheesecake.png',
        'tiramisu.png',
        'applepie.png',
        'Cocacola.png',
        'StrawberrySmoothies.png',
        'ChocolateShake.png',
        'OrangeJuice.png'
      ];

    return (
        <div>
            {price.product && (
                <div className="relative">
                    {/* <div className=" w-full h-72 rounded-lg">
                        <image
                            src={getProductImage(price.product)}
                            alt={getProductDescription(price.product)}
                            className="w-full h-full object-center object-cover"
                        />
                    </div> */}
                    <div className="relative mt-4">
                        <h3 className="text-sm font-medium ">{getProductName(price.product)}</h3>
                    </div>
                    <div className="absolute top-0 inset-x-0 h-full rounded-lg p-4 flex items-end justify-end overflow-hidden">
                        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50" />
                        <h4 className="text-lg font-bold text-white">
  {price.nickname}
  {imageNames.map((name, index) => (
    <image key={index} src={`../images/${name}`} alt="Product" />
  ))}
</h4>
                        <btn className="btn ml-5 mr-4 mb-4" onClick={handleSubscription}>
                             Add To Cart {price.metadata.price} -  ${getPriceTotal(price)}
                        </btn>
                    </div>
                </div>
            )}
        </div>
    );
}