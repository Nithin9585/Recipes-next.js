import RecipeDetailsItem from "@/components/recipe-details";

async function FetchRecipeDetails(currentrecipeId){
    try{
        const apiResponse = await fetch(`https://dummyjson.com/recipes/${currentrecipeId}`);
        const data = await apiResponse.json();
        return data;
        
    }catch(error){
        throw new Error(error);
    }
}
export default async function ReciprDetails({params}){
    const getRecipedetails = await FetchRecipeDetails(params?.details);

    return <RecipeDetailsItem getrDetails={getRecipedetails} />;
}