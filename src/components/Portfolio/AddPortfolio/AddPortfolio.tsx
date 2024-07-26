import {SyntheticEvent } from 'react';

interface Props {
    onPortfolioCreate: (e:SyntheticEvent) => void;
    symbol: string
}

const AddPortfolio = ({symbol,onPortfolioCreate}:Props) => {
    return (
        <form onSubmit={onPortfolioCreate}>
            <input readOnly={true} hidden={true} value={symbol} />
            <button type="submit">Add</button>
        </form>
    )
}
export default AddPortfolio;
