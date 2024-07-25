interface Props {
    companyName: string;
    ticker: string;
    price: number;
}
const Card : React.FC<Props> = ({companyName, ticker, price}: Props):JSX.Element => {
    return(
        <div className="card">
            <img src="https://picsum.photos/100/100" alt="" />
            <div className="details">
                <h2>{companyName} ({ticker})</h2>
                <p>{price}</p>
            </div>
            <p className="info">
                Lorem ipsum dolor
            </p>
        </div>
    );
}

export default Card;