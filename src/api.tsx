import axios from "axios";
import { CompanyIncomeStatement, CompanyProfile, CompanySearch } from "./company";

interface SearchResponse {
  data: CompanySearch[];
}
export const searchCompanies = async (query: string) => {
  try {
    const data = await axios.get<SearchResponse>(
      `https://financialmodelingprep.com/api/v3/search?query=${query}&limit=10&exchange=NASDAQ&apikey=PofiOsVr1Q63MEDnzoOJqDJIgQd8pucI`
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An expected error has occured.";
    }
  }
};

export const getCompanyProfile = async (query: string) => {
  try {
    const data = await axios.get<CompanyProfile[]>(
      `https://financialmodelingprep.com/api/v3/profile/${query}?apikey=PofiOsVr1Q63MEDnzoOJqDJIgQd8pucI`
    );
    return data;
  } catch (error: any) {
    console.log("error from an API: ", error.message);
  }
};
export const getKeyMetrics = async (query: string) => {
  try {
    const data = await axios.get<CompanyProfile[]>(
      `https://financialmodelingprep.com/api/v3/key-metrics-ttm/${query}?apikey=PofiOsVr1Q63MEDnzoOJqDJIgQd8pucI`
    );
    return data;
  } catch (error: any) {
    console.log("error message: ", error.message);
  }
};
export const getIncomeStatement = async (query: string) => {
  try {
    const data = await axios.get<CompanyIncomeStatement[]>(
      `https://financialmodelingprep.com/api/v3/income-statement/${query}?limit=40&apikey=PofiOsVr1Q63MEDnzoOJqDJIgQd8pucI`
    );
    return data;
  } catch (error: any) {
    console.log("error message: ", error.message);
  }
};
