import React,{useEffect} from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FoodCarousel from './components/FoodCarousel';
import MenuSection from './components/MenuSection';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import {config} from './data/config';
export default function App(){useEffect(()=>{document.title=`${config.brand} — Japanese Kitchen`;document.querySelector('meta[name="description"]').content=`Jelajahi hidangan Jepang ${config.brand}: ramen, sushi, donburi, dan matcha.`;},[]);return <><a href="#menu" className="skip-link">Lewati ke menu</a><Navbar/><main><Hero/><FoodCarousel/><MenuSection/><Gallery/><Reviews/><Contact/></main></>;}
