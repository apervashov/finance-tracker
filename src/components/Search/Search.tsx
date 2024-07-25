import { useState, MouseEvent } from "react";
interface Props {}
const Search: React.FC<Props> = (props: Props): JSX.Element => {
  const [search, setSearch] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(e);
  };
  const onClick = (e: MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e);
  };
  return (
    <div>
      <input value={search} onChange={(e) => handleChange(e)}></input>
      <button onClick={(e)=>onClick(e)} />
    </div>
  );
};
export default Search;
