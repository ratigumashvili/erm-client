import { LoaderCircle } from "lucide-react";

export default function Loading() {
    return (
        <div className="w-full h-[calc(100vh-260px)] flex flex-col items-center justify-center">
            <span className="animate-spin">
                <LoaderCircle className="w-8 h-8" />
            </span>
            <span className="sr-only">Loading</span>
        </div>
    )
}