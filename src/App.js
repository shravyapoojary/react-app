
import './App.css';
import { useState } from 'react';
import RecipeWindow from './components/RecipeWindow';
function App() {
  const YOUR_APP_ID='04672091';
  const YOUR_APP_KEY='6c3d8f60cb543fd9c304ead9460d8e9e	'
  

  const [query, setQuery] = useState('')
  const[recipes,setRecipes]=useState([]);
  const url=`https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;


  const getRecipes=async()=>{
    const response=await fetch(url);
    const data =await  response.json();
    setRecipes(data.hits);
  };

  const submitHandler=function(e){
    e.preventDefault();
    getRecipes();
  }

  return (
    <div className="App">
         <h1>Search your recipe</h1>
{/* Search form */}
         <form className="form-control" onSubmit={submitHandler}>
           <input type="text" placeholder='search your main ingredient' className="input-search" value={query}
           onChange={(e)=> setQuery(e.target.value)}
           />
           <input type="submit" value="Submit" className="btn-submit"/>
         </form>
         <RecipeWindow  recipes={recipes}/>
    </div>
  );
}

export default App;
