import { Banner } from "../../components/Banner";
import { About } from "../../components/About";
import { ProductsPreview } from "../../components/ProductsPreview";
import {Projects} from "../../components/ProjectsSection";

const Home = () => {
    return (
        <div>
            <Banner />
            <ProductsPreview />
            <About />
                <Projects />
            
        </div>
    )
}

export default Home;