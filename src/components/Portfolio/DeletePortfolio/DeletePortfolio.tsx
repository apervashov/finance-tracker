import { SyntheticEvent } from "react";

interface Props {
  onPortfolioDelete: (e: SyntheticEvent) => void;
  portfolioValue: string;
}

const CardPortfolio = ({ onPortfolioDelete, portfolioValue }: Props) => {
  return (
    <>
      <form onSubmit={onPortfolioDelete}>
        <input hidden={true} value={portfolioValue} />
        <button>x</button>
      </form>
    </>
  );
};

export default CardPortfolio;
