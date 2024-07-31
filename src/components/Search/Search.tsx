import {  SyntheticEvent, ChangeEvent } from "react";
interface Props{
  onClick:(e:SyntheticEvent)=> void;
  search: string | undefined;
  handleChange:(e: ChangeEvent<HTMLInputElement>) => void;
}
const Search: React.FC<Props> = ({onClick,search,handleChange}: Props): JSX.Element => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <input className="flex-1 p-3 border-2 rounded-lg placeholder-black focus:outline-none" value={search} onChange={(e) => handleChange(e)}></input>
      <button onClick={(e)=>onClick(e)}>Search</button>
    </div>
  );
};
export default Search;
