import React from "react";
import "./app.scss";

import MainHeader from "../main-header";
import ModernStudio from "../modern-studio";
import Partners from "../partners";
import About from "../about";
import Statistics from "../statistics";
import HowWeWork from "../how-we-work";
import VideoReel from "../video-reel";
import Features from "../features";
import FeaturesList from "../features-list";
import Service from "../service";
import ServiceList from "../service-list";
import Portfolio from "../portfolio";
import GetStarted from "../get-started";
import Events from "../events";
import OurTeam from "../our-team";
import FounderWords from "../founder-words";
import Testimonials from "../testimonials";
import Pricing from "../pricing";
import Faq from "../faq";
import OurAwards from "../our-awards";
import OurBlog from "../our-blog";
import Newsletter from "../newsletter";
import Contacts from "../contacts";
import ContactUs from "../contact-us";
import MainFooter from "../main-footer";

const App = () =>{
  return (
    <div className="app">
      <MainHeader/>
      <main className="app-main">
        <ModernStudio></ModernStudio>
        <Partners></Partners>
        <About></About>
        <Statistics></Statistics>
        <HowWeWork></HowWeWork>
        <VideoReel></VideoReel>
        <Features></Features>
        <FeaturesList></FeaturesList>
        <Service></Service>
        <ServiceList></ServiceList>
        <Portfolio></Portfolio>
        <GetStarted></GetStarted>
        <Events></Events>
        <OurTeam></OurTeam>
        <FounderWords></FounderWords>
        <Testimonials></Testimonials>
        <Pricing></Pricing>
        <Faq></Faq>
        <OurAwards></OurAwards>
        <OurBlog></OurBlog>
        <Newsletter></Newsletter>
        <Contacts></Contacts>
        <ContactUs></ContactUs>
      </main>
      <MainFooter></MainFooter>
    </div>
  )
}

export default App;