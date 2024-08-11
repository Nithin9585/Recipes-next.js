import Link from 'next/link';

export default function RecipeDetailsItem({ getrDetails }) {
    console.log(getrDetails);
    return (
        <div>
            <div className='bg-black-900 p-4'>
    <Link 
        href="/recipe-list" 
        className='text-white bg-gray-500 hover:bg-gray-700 font-bold py-2 px-4 rounded'
    >
        Back
    </Link>
</div>
            <div className="p-6 lg-max-w-6xl max-w-2xl mx-auto">
                <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
                    <div className="w-full  top-0 sm:flex gap-2">
                        <img
                            src={getrDetails?.image}
                            name={getrDetails?.name}
                            className="w-4/5 rounded object-cover"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-extrabold text-purple-500">{getrDetails?.name}</h2>
                    </div>
                    <div className="gap-4 mt-5">
                        <p className="text-2xl text-white">{getrDetails?.mealType[0]}</p>
                    </div>
                    <div className="gap-4 mt-5">
                        <p className="text-xl text-gray-400">{getrDetails?.cuisine}</p>
                    </div>
                    <div className="mt-5">
                        <h3 className="text-lg font-bold text-white">Ingredients</h3>
                        <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-400">
                            {getrDetails?.ingredients.map((i, index) => (
                                <li key={index}>{i}</li>
                            ))}
                        </ul>
                        
                    </div>
                    
                    
                </div>
                <div className="gap-4 mt-5 border w-full  p-3 rounded rounded-sm text-white ">
                        <h3 className="text-lg font-bold text-white">Instructions</h3>

                        <p className="text-xl text-gray-400">{getrDetails?.instructions}</p>
                    </div>
            </div>
        </div>
    );
}
