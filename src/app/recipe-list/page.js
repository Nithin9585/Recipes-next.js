import RecipesList from "@/components/recipe-list";
async function fetchListofrecipe(){
    try{
        const apiResponse = await fetch('https://dummyjson.com/recipes');
        const data = await apiResponse.json();
        return data?.recipes;
    }catch(error){
        throw new Error(error);
    }
}
export default async function Recipes(){
    const recipeList = await fetchListofrecipe();
   return <RecipesList recipeList = {recipeList}/>
}