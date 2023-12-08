import Button from "./elements/Button";
import { TypeAnimation } from "react-type-animation";


export const Banner = () => {
    return (
        
        <div className="banner w-full md:w-2/3 px-1 mx-auto relative flex items-center-justify-between ">
            <div className="banner-deescription w-full md:w-1/2 p-1  ">
                <h2 className="mb-6 text-7xl font-extrabold  text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-800">
             
        <br></br>
        <TypeAnimation 
      sequence={[
        //  La misma subcadena al inicio solo se escribirá una vez, inicialmente 
        ' 𝐇𝐚𝐜𝐞𝐫',
        1000, //espera 1 segundo antes de reemplazar "Ratones" con "Hámsters"
        'P𝐞𝐝𝐢𝐝𝐨𝐬 De',
       
        1000,
        'C𝐨𝐦𝐢𝐝𝐚 Es',
        1000,
        'Fá𝐜𝐢𝐥!',
        1000
      ]}
      wrapper="banner"
      speed={50}
      repeat={Infinity}
      
    />
                
               
                </h2>
        

                <p className="font-semibold text-lg text-white py-5">
                ¡Empiece hoy!
                </p>
                <div className="btn-container">
                    
  <a href="/menu" className=" bg-yellow-400 hover:text-orange-100 hover:bg-orange-500 border-solid px-8 py-3 rounded ... font-extrabold " >Ordenar Ahora</a>
                  
                    <a href="/album" className="text-yellow-400 hover:text-orange-500 font-bold text-decoration-line px-3">
                        Ver menu
                    </a>
                </div>
            </div>
            <div className="banner-image w-full md:w-1/2 p-3 flex justify-end">
                <img src={require("../assets/images/pizza_banner.png")} alt="banner" className="max-h-95" />
            </div>
        </div>
    )
}