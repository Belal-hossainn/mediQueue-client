


import Hero from "@/components/home/Hero";
import Footer from "@/components/shared/Footer";
import { MainNavbar } from "@/components/shared/Navbar";
import TutorCard from "@/components/home/TutorCard";
import { Button, Card } from "@heroui/react";
import WhyChooseUs from "@/components/home/WhyChoseUs";
import HowItWorks from "@/components/home/HowItWorks";

import FeaturedTutors from "@/components/home/FeaturedTutors";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <FeaturedTutors />
      <WhyChooseUs />
      <HowItWorks />
    </div>
  );
}
