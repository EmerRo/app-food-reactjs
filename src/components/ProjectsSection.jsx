import 'animate.css';
import image1 from "../assets/img/1.jpg"
import image2 from "../assets/img/2.jpg"
import image3 from "../assets/img/3.jpg"
import image4 from "../assets/img/4.jpg"
import image5 from "../assets/img/5.jpg"
import image6 from "../assets/img/6.jpg"
import image7 from "../assets/img/7.jpg"
import image8 from "../assets/img/8.png"
import image9 from "../assets/img/9.png"
import image10 from "../assets/img/10.png"
import image11 from "../assets/img/11.png"
import image12 from "../assets/img/12.png"
import image13 from "../assets/img/13.png"
import image14 from "../assets/img/14.png"
import image15 from "../assets/img/15.jpg"


export const Projects = () => {
  return(

  <  div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12 ">

    <div className='text-yellow-500  font-extrabold text-center text-5xl px-1 py-8 m-6 '>
      <h1 >Menu de comidas </h1> 
      
    </div>
  <div className="-m-1 flex flex-wrap md:-m-2 ">
    <div className="flex w-1/3 flex-wrap ">
      <div className="w-full p-1 md:p-2 hover:bg-gradient-to-t from-[#9333ea]  to-[#d946ef]">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center  "

          // image 1
          src={image1} />
      </div>
    </div>
    <div className="flex w-1/3 flex-wrap">
      <div className="w-full p-1 md:p-2 hover:bg-gradient-to-t from-emerald-400  to-teal-800">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src={image2} />
      </div>
    </div>
    <div className="flex w-1/3 flex-wrap">
      <div className="w-full p-1 md:p-2 hover:bg-gradient-to-t from-[#9333ea]  to-[#d946ef]">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src={image3} />
      </div>
    </div>
    <div className="flex w-1/3 flex-wrap">
      <div className="w-full p-1 md:p-2 hover:bg-gradient-to-t from-emerald-400  to-teal-800">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src={image4}/>
      </div>
    </div>
    <div className="flex w-1/3 flex-wrap">
      <div className="w-full p-1 md:p-2 hover:bg-gradient-to-t  from-[#9333ea]  to-[#d946ef]">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src= {image5} />
      </div>
    </div>

    <div className="flex w-1/3 flex-wrap">
      <div className="w-full p-1 md:p-2 hover:bg-gradient-to-t from-emerald-400  to-teal-800">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src={image6} />
      </div>
    </div>

    <div className="flex w-1/3 flex-wrap">
      <div className="w-full p-1 md:p-2  hover:bg-gradient-to-t  from-[#9333ea]  to-[#d946ef]">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src={image7} />
      </div>
    </div>

    <div className="flex w-1/3 flex-wrap">
      <div className="w-full p-1 md:p-2 hover:bg-gradient-to-t from-emerald-400  to-teal-800">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src={image8} />
      </div>
    </div>
    <div className="flex w-1/3 flex-wrap">
      <div className="w-full p-1 md:p-2 hover:bg-gradient-to-t  from-[#9333ea]  to-[#d946ef]">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src={image9} />
      </div>
    </div>
    <div className="flex w-1/3 flex-wrap">
      <div className="w-full p-1 md:p-2 hover:bg-gradient-to-t from-emerald-400  to-teal-800">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src={image10} />
      </div>
    </div>
    <div className="flex w-1/3 flex-wrap">
      <div className="w-full p-1 md:p-2  hover:bg-gradient-to-t  from-[#9333ea]  to-[#d946ef]">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src={image11} />
      </div>
    </div>
    <div className="flex w-1/3 flex-wrap">
      <div className="w-full p-1 md:p-2 hover:bg-gradient-to-t from-emerald-400  to-teal-800">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src={image12} />
      </div>
    </div>

    <div className="flex w-1/3 flex-wrap">
      <div className="w-full p-1 md:p-2 hover:bg-gradient-to-t  from-[#9333ea]  to-[#d946ef]">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src={image13} />
      </div>
    </div>

    <div className="flex w-1/3 flex-wrap">
      <div className="w-full p-1 md:p-2 hover:bg-gradient-to-t from-emerald-400  to-teal-800">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src={image14} />
      </div>
    </div>

    <div className="flex w-1/3 flex-wrap">
      <div className="w-full p-1 md:p-2 hover:bg-gradient-to-t  from-[#9333ea]  to-[#d946ef]">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src={image15} />
      </div>
    </div>
  </div>
</div>
  )
}
