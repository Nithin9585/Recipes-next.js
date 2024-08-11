import Link from 'next/link';

export default function Home() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center h-screen w-full bg-gray-900 text-white p-4">
      <h1 className="text-3xl font-bold mb-4">Find Famous Dishes Around the World</h1>
      <Link
        href="/recipe-list"
        className="text-white mt-10 bg-gray-800 border border-purple-500 hover:bg-gray-700 font-bold py-2 px-4 rounded transition-colors"
      >
        Explore Recipes
      </Link>
    </div>
  );
}
