import Header from "./comp/layout/header";
 import Slider from "./comp/layout/slider";
import Learn from "./comp/layout/learn";
import ProductList from "./comp/layout/productGrid";
import Explore from "./comp/layout/explore";
import Footer from "./comp/layout/footer";
import {products } from "./comp/data";

export default function Home(){
    return(<>
     {/**  Home */}
         <Header/>
         <Slider/>
         <Learn/>
         <ProductList seeAll={false} viewall={true} heading="New Arrival"products={products} />
         <Explore/>
         <Footer/> 
    </>
 
    )
  }
 
  