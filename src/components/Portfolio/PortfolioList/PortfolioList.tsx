import * as React from 'react';
import CardPortfolio from '../CardPortfolio/CardPortfolio';
import { SyntheticEvent } from 'react';

interface Props {
    portfolioValues: string[];
    onPortfolioDelete: (e:SyntheticEvent) => void;
}

const PortfolioList = ({portfolioValues, onPortfolioDelete}: Props) => {
    return (
        <>
        <h3>My portfolio</h3>
        <ul>
            {portfolioValues && portfolioValues.map((portfolioValue)=>{return <CardPortfolio portfolioValue={portfolioValue} onPortfolioDelete={onPortfolioDelete}/>})}
        </ul>
        </>
    )
};

export default PortfolioList;


