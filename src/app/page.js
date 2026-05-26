


import Hero from "@/components/home/Hero";
import Footer from "@/components/shared/Footer";
import { MainNavbar } from "@/components/shared/Navbar";
import TutorCard from "@/components/home/TutorCard";
import { Button, Card } from "@heroui/react";
import WhyChooseUs from "@/components/home/WhyChoseUs";
import HowItWorks from "@/components/home/HowItWorks";

export default function HomePage() {
  return (
    <div>
      <MainNavbar/>
      <Hero />

      <main>
       

        {/* Tutors */}
        <section className="container mx-auto pb-20">
          <div className="mb-8 text-center">
            <div>
              <h2 className="text-3xl font-bold mx-auto">Popular Tutors</h2>
              <p className="text-default-500 mt-2">Learn from professionals</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <TutorCard key={item} />
            ))}
          </div>
        </section>
      </main>
      <WhyChooseUs />
      <HowItWorks />
      <Footer />
    </div>
  );
}
