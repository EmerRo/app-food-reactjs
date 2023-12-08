import aboutImage from "../assets/images/about-image.png";
import ProjectsSection from "./ProjectsSection";

export const About = () => {

    return (
        <div className="bg-white">
            <div className="p-24 grid grid-cols-2">
                <div className="">
                    <h2 className="text-2xl font-serif">Sobre Nosotros</h2>
                    <p  className="text-lg justify-content-center " >
                                                                     
                    ¡Bienvenidos a nuestra deliciosa esquina culinaria! En DELICIUS KITCHEN, 
                    nos enorgullece ofrecer una experiencia gastronómica única que deleitará tus sentidos y satisfará tus antojos más exigentes. Somos más que un simple destino para alimentar el cuerpo; somos un viaje apasionante a través de sabores extraordinarios y momentos inolvidables.

                    En el corazón de nuestra filosofía culinaria se encuentra un compromiso inquebrantable con la frescura y la calidad. Trabajamos incansablemente para seleccionar los ingredientes más frescos y auténticos, asegurándonos de que cada bocado sea una explosión de sabor que te transporte a lugares lejanos y emociones indescriptibles.
                    </p>
                </div>
                <div className="flex items-center justify-center">
                    <img src={aboutImage} alt="" className="w-[400px] h-[400px] object-cover" />
                </div>
                
            </div>
        </div>
    )
}