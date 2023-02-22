import { Component } from "react";
import { Carousel } from "../components/Home/Carousel";
import { Footer } from "../components/Home/Footer";
import { Menubar } from "../components/Home/Menubar";
import { Navbar } from "../components/Home/Navbar";





export class Home extends Component{
    render(){
        return(
            <div>
               <Navbar />
               <Menubar />
               <Carousel />
               <Footer />
            </div>
        );
    }
    
    
}