
const fetchTutorById = async (id) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tutors/${id}`);
        const tutor = await res.json();
        return tutor;
    } catch (error) {
        console.error("Error fetching tutor by ID:", error);
        return null;
    }
};

const TutorDetailsPage = async ({ params }) => {
  const { id } = await params;
  const tutor = await fetchTutorById(id);
  const { name, subject } = tutor || {};
  console.log("Tutor Data:", tutor); // Debugging log to check the tutor data
    return (
        <div>
            <h1 className="text-3xl font-bold text-center mt-10">Tutor Details Page - {id}</h1>
            <p className="text-center mt-4 text-gray-600">Tutor Name: {name}</p>
            <p className="text-center mt-2 text-gray-600">Subject: {subject}</p>
        </div>
    );
}

export default TutorDetailsPage;