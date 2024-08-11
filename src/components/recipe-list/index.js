"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Searchbar from "../searchbar/page";

export default function RecipesList({ recipeList }) {
  const [filteredRecipes, setFilteredRecipes] = useState(recipeList);

  const handleSearch = (query) => {
    const lowercasedQuery = query.toLowerCase();
    const filtered = recipeList.filter((r) =>
      r.name.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredRecipes(filtered);
  };

  return (
    <div>
      <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
        <div className="flex justify-between items-center">
          <h2 className="text-4xl font-bold text-purple-500 mb-12">Recipes</h2>
          <Searchbar onSearch={handleSearch} />
        </div>
        <Link
          href={"/"}
          className="text-white bg-purple-500 hover:bg-purple-700 font-bold py-2 px-4 rounded "
        >
          Home
        </Link>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
          {filteredRecipes && filteredRecipes.length > 0 ? (
            filteredRecipes.map((r) => (
              <Link key={r.id} href={`/recipe-list/${r.id}`}>
                <Card className="relative border-none group transition duration-300 ease-in-out shadow-md cursor-pointer hover:shadow-lg hover:shadow-purple-800">
                  <CardContent className="bg-gray rounded-md overflow-hidden">
                    <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
                      <img
                        src={r.image}
                        alt={r.name}
                        className="h-full w-full object-cover object-top rounded-lg shadow-lg mt-6 transform hover:scale-105 transition-all duration-300 ease-in-out"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-800 group-hover:text-white transition duration-300 ease-in-out">
                        {r.name}
                      </h3>
                      <div className="mt-4 flex items-center gap-2">
                        <p className="flex items-center text-lg text-gray-600 group-hover:text-yellow-500 transition duration-300 ease-in-out">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6 mr-1"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {r.rating}
                        </p>
                        <div className="ml-auto">
                          <p className="text-lg text-gray-600 font-bold group-hover:text-gray-300 transition duration-300 ease-in-out">
                            {r.cuisine}
                          </p>
                        </div>
                      </div>
                      <CardDescription className="group-hover:text-gray-300 transition duration-300 ease-in-out">
                        {r.description}
                      </CardDescription>
                    </div>
                  </CardContent>
                  <CardFooter />
                </Card>
              </Link>
            ))
          ) : (
            <p>No recipes available.</p>
          )}
        </div>
      </div>
    </div>
  );
}
