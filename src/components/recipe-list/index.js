import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function RecipesList({ recipeList }) {
  console.log(recipeList);
  return (
    <div>
      <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Recipes</h2>
        <Link href={"/"}         className='text-white bg-gray-500 hover:bg-gray-700 font-bold py-2 px-4 rounded '
         >Home</Link>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4" >
          {recipeList && recipeList.length > 0 ? (
            recipeList.map((r) => (
              <Link  key={r.id} href={`/recipe-list/${r.id}`}>
                
                  <Card className="border-none">
                    <CardContent className="bg-white rounded-md overflow-hidden shadow-md cursor-pointer hover:scale-[1.1] transition-all">
                        <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
                            <img
                            src={r.image}
                            alt={r.name}
                            className="h-full w-full object-over object-top"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-lg font-bold text-gray-800">{r.name}</h3>
                        </div>
                        <div className="mt-4 flex items-center flex-wrap gap-2">
                            <p className="text-lg text-gray-600">Rating: {r.rating}</p>
                            <div className="ml-auto">
                    <p className="text-lg text-gray-600 font-bold">{r.cuisine}</p>
                        </div>
                        </div>
                        
                      <CardDescription>{r.description}</CardDescription>
                    </CardContent>
                    <CardFooter>
                    </CardFooter>
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
