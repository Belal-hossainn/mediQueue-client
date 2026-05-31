export const fetchTutors = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tutor`);
    const tutors = await res.json();
    return tutors;
}

export const fetchFeaturedTutors = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/featured`);
    const tutors = await res.json();
    return tutors;
}