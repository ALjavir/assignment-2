import NavBar from "~/navBar/nab-bar";
import type { Route } from "./+types/home";
import TopAddBar from "~/topAddBar/top-add-bar";
import HeroSection from "~/page/home/heroSection/hero-section";
import Footer from "~/footer/footer";
import BottomBar from "~/bottomBar/bottom-bar";
import Category from "~/page/home/categorySection/category-section";
import FlashDeal from "~/page/home/flashDealSection/fleshdeal-section";
import "./home-style.css"
import Home2column from "~/page/home/home-2columnSection/home-2column-section";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="home-container">
      <TopAddBar />
      <NavBar />
      <BottomBar/>
      <main className="main-section">
        <HeroSection />
        <Category />
        <FlashDeal />
        <Home2column/>
      </main>
      <Footer/>
      
      
    </div>

  );
}
