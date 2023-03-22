import ProductCategories from "./Category";
import ProductHero from "./HeroPage";
import ProductHowItWorks from "./HowItWork";
import ProductCTA from "./ProductCTA";
import ProductValues from "./ProductValue";
import ProductSmokingHero from "./Smoking";

export default function LandingPage(){

    return (
        <div>
             <ProductHero />
             <ProductValues />
             <ProductCategories />
             <ProductHowItWorks />
             <ProductCTA />
             <ProductSmokingHero />
             
        </div>
    )
}