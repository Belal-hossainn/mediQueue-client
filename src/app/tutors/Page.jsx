import TutorCard from "@/components/home/TutorCard";
import { fetchTutors } from "@/lib/tutors/data";

export default async function  Tutors() {
    const tutors = await fetchTutors();
   
    return (
        <div>
            <h1 className="text-3xl font-bold text-center mt-10">Tutors Page</h1>
            <div className="container mx-auto py-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tutors.map((tutor) => 
                    <TutorCard key={tutor._id} tutor={tutor} />
                )}
            </div>
        </div>
    );
}