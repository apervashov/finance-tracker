import { ChangeEvent, useState, SyntheticEvent} from 'react';
import './App.css'
import './components/Card/Card.css'
import CardList from './components/CardList/CardList'
import Search from './components/Search/Search' 
import { CompanySearch } from './company';
import { searchCompanies } from './api';

function App() {
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string | null>(null);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(e);
  };    
  const onClick = async (e: SyntheticEvent) => {
    const result = await searchCompanies(search);
    if(typeof result == "string"){
      setServerError(result);
    }
    else if(Array.isArray(result.data)){
      setSearchResult(result.data);
    }
    console.log(searchResult);
  };
  return (
    <>
      <Search onClick={onClick} search={search} handleChange={handleChange}/>
      {serverError && <h1>{serverError}</h1>}
      <CardList searchResults={searchResult}/> 
    </>
  )
}

export default App
