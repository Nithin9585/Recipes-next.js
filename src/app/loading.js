import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <div className="w-full min-h-screen bg-gray-800">
            <Skeleton />
        </div>
    );
}
