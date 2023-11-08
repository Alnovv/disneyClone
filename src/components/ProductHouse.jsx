import { disney,marvel,nationalG,pixar,starwar } from "../assets/Images"
import { disneyV,marvelV,nationalGv,pixarV,starwarV } from "../assets/Videos"


function ProductHouse() {
  const productionHouseList=[
    {
        id:1,
        image:disney,
        video:disneyV
    },
    {
        id:2,
        image:pixar,
        video:pixarV
    },
    {
        id:3,
        image:marvel,
        video:marvelV
    },
    {
        id:4,
        image:starwar,
        video:starwarV
    },
    {
        id:5,
        image:nationalG,
        video:nationalGv
    },
  ]
  return (
    
    <div className="flex justify-center items-center gap-2 md:gap-5 p-2 px-5 md:px-16" >
      {productionHouseList.map((item)=>(
        <div key={item} className="border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out
         cursor-pointer relative shadow-xl shadow-gray-800" >
          <video src={item.video}  autoPlay loop playsInline muted
          className=" absolute top-0 rounded-md z-0 opacity-0 w-full
          hover:opacity-50"/>
          <img src={item.image} className="w-full z-[1] " />
          
        </div>
      ))}
    </div>
  )
}

export default ProductHouse
