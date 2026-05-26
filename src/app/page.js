


import { MainNavbar } from "@/components/shared/Navbar";
import { Button, Card } from "@heroui/react";

export default function HomePage() {
  return (
    <div>
      <MainNavbar/>

      <main>
        {/* HERO */}
        <section className="container mx-auto py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <p className="text-primary font-medium mb-2 uppercase tracking-wide">
                Learn smarter online
              </p>

              <h1 className="text-6xl font-bold leading-tight">
                Book expert tutors in minutes.
              </h1>

              <p className="mt-4 text-default-500 text-lg">
                Connect with top tutors and schedule sessions effortlessly.
              </p>

              <div className="flex gap-4 mt-8">
                <Button color="primary" size="lg">
                  Browse Tutors
                </Button>

                <Button variant="bordered" size="lg">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Right */}
            <div>
              <img
                src="https://i.ibb.co/XzKyYKS/student.jpg"
                alt="student"
                className="rounded-3xl"
              />
            </div>
          </div>
        </section>

        {/* Tutors */}
        <section className="container mx-auto pb-20">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold">Popular Tutors</h2>
              <p className="text-default-500 mt-2">Learn from professionals</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
    </div>
  );
}
