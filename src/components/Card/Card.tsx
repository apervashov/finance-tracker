import { CompanySearch } from "../../company";

interface Props {
    id: string;
    searchResult: CompanySearch;
}
const Card : React.FC<Props> = ({id, searchResult}: Props):JSX.Element => {
    return(
        <div className="card">
            <img src="https://picsum.photos/100/100" alt="company logo" />
            <div className="details">
                <h2>{searchResult.name} ({searchResult.symbol})</h2>
                <p>{searchResult.currency}</p>
            </div>
            <p className="info">
                {searchResult.exchangeShortName} - {searchResult.stockExchange}
            </p>
        </div>
    );
}

export default Card;