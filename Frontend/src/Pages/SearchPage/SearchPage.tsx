import { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import { CompanySearch } from "../../company";
import { searchCompanies } from "../../api";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Search from "../../components/Search/Search";
import CardList from "../../components/CardList/CardList";
import PortfolioList from "../../components/Portfolio/PortfolioList/PortfolioList";
import { PortfolioGet } from "../../Models/Portfolio";
import { toast } from "react-toastify";
import { portfolioAddAPI, portfolioDeleteAPI, portfolioGetAPI } from "../../Services/PortfolioService";

interface Props{}
const SearchPage = (props:Props) => {
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string | null>(null);
  const [portfolioValues, setPortfolioValues] = useState<PortfolioGet[] | null>([]);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  useEffect(()=>{
    getPortfolio();
  },[]
  );
  const getPortfolio = () => {
    portfolioGetAPI().then((res)=>{
      if(res?.data)
      {
        setPortfolioValues(res?.data);
      }
    }).catch((e)=>{
      toast.warning("Can't get portfolio values.")
    })
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onPortfolioCreate = (e: any) => {
    e.preventDefault();
    portfolioAddAPI(e.target[0].value).then((res)=>{
      if(res?.status === 204)
      {
        toast.success("Stock added to portfolio.")
        getPortfolio();
      }
    }).catch((e)=>{
      toast.warning("Can't create portfolio item.")
    })
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onPortfolioDelete = (e: any) => {
    e.preventDefault();
    portfolioDeleteAPI(e.target[0].value).then((res)=>{
      if(res?.status == 200)
      {
        toast.success("Stock deleted from portfolio.");
        getPortfolio();
      }
    })
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onClick = async (e: SyntheticEvent) => {
    const result = await searchCompanies(search);
    if (typeof result == "string") {
      setServerError(result);
    } else if (Array.isArray(result.data)) {
      setSearchResult(result.data);
    }
    console.log(searchResult);
  };
  return (
    <>
      <Search onClick={onClick} search={search} handleChange={handleChange} />
      {serverError && <h1>{serverError}</h1>}
      <CardList
        searchResults={searchResult}
        onPortfolioCreate={onPortfolioCreate}
      />
      <PortfolioList portfolioValues={portfolioValues!} onPortfolioDelete={onPortfolioDelete} />
    </>
  )
};

export default SearchPage;