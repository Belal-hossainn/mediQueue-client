import { Button, Chip } from "@heroui/react";
import { BookOpen, Clock, UserStar } from "lucide-react";
import Image from "next/image";

const TutorCard = () => {
    return (
        <div
            className="group flex flex-col bg-white rounded-4xl border border-slate-200 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
            <div className="relative overflow-hidden aspect-16/10">
                <Image
                    alt="Course Image"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    src='https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600'

                    fill
                />
                <div className="absolute top-4 right-4">
                    <Chip
                        color="primary"
                        variant="solid"
                        className="font-bold shadow-lg shadow-blue-600/20"
                    >
                        <UserStar className="w-4 h-4 text-yellow-500 mr-1" />
                   4.7<span className="text-xs  text-gray-700 font-medium">/5.0</span>
                    </Chip>
                </div>
            </div>
            <div className="p-8 flex flex-col grow space-y-4">
                <div className="space-y-2">
                    <h3 className="text-xl font-bold leading-tight line-clamp-2 hover:text-blue-600 transition-colors">
                        John Doe
                    </h3>
                    <p className="text-sm text-slate-500 font-medium flex items-center gap-1">
                      Mathematics
                    </p>
                </div>

                <div className="flex  flex-col items-start gap-4 text-xs text-slate-500 font-bold">
                    <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> Available: 10am - 6pm
                    </span>
                    <span className="flex items-center gap-1">
                        <BookOpen className="w-3.5 h-3.5" /> Sessions Start Date: 1st Jun 2026
                    </span>
                    <span className="text-xl font-bold">Fee: $80.00</span>
                </div>

                <div className="pt-2 mt-auto">
                    

                    <Button
                        variant="flat"
                        className="font-bold w-full bg-blue-600 text-white rounded-xl px-6"
                    >
                        Book Session
                    </Button>

                </div>
            </div>
        </div>
    );
};

export default TutorCard;