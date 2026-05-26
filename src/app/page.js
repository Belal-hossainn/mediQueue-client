


import Hero from "@/components/Hero";
import Footer from "@/components/shared/Footer";
import { MainNavbar } from "@/components/shared/Navbar";
import { Button, Card } from "@heroui/react";

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
              <Card key={item}>
                <div className="p-4">
                  <img
                    src="https://i.pravatar.cc/300"
                    alt="Tutor"
                    className="rounded-xl h-60 w-full object-cover"
                  />

                  <h3 className="text-lg font-semibold mt-4">
                    John Doe
                  </h3>

                  <p className="text-default-500">Mathematics</p>

                  <p className="font-semibold mt-2">৳800/hr</p>

                  <Button color="primary" className="mt-4" fullWidth>
                    Book Session
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
