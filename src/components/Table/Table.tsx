import { testIncomeStatementData } from "./TestData";

const data = testIncomeStatementData;
type Company = (typeof data)[0];
const configs = [
  {
    label: "Year",
    render: (company: Company) => company.acceptedDate,
  },
  {
    label: "Cost and Expenses",
    render: (company: Company) => company.costAndExpenses,
  },
];
interface Props {}
const Table = (props: Props) => {
  const renderRow = data.map((company) => {
    return (
      <tr key={company.cik}>
        {configs.map((val: any) => {
          return (
            <td className="p-4 whitespace-nowrap text-sm font-normal text-grey-900">
              {val.render(company)}
            </td>
          );
        })}
      </tr>
    );
  });
const renderedHeaders = configs.map((config:any)=>{
  return <th key={config.label} className="p-4 text-left text-xs font-medium text-fray-500 uppercase tracking-wider"></th>
})
  return <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8">
    <table>
      <thead className="min-w-full divide-y divide=gray-200 m-5">{renderedHeaders}</thead>
      <tbody>{renderRow}</tbody>
    </table>
    </div>;
};

export default Table;
