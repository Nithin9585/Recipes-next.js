import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative h-screen">
    <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/Cream Illustrative Healthy Food Recipes YouTube Intro Video.mp4" autoPlay loop muted />

<div className="absolute inset-0 flex items-center justify-center h-screen w-full text-white">
  <Link
    href="/recipe-list"
    className="text-white bg-orange-900 hover:bg-red-700 font-bold py-2 px-4 rounded" 
  >
    Explore Recipes
  </Link>
</div>


    </div>
  );
}
