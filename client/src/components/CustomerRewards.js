import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";

const columns = [
  {
    name: "Customer",
    selector: "full_name",
    sortable: true,
  },
  {
    name: "November",
    selector: "11",
    sortable: true,
  },
  {
    name: "October",
    selector: "10",
    sortable: true,
  },
  {
    name: "September",
    selector: "9",
    sortable: true,
  },
  {
    name: "Total",
    selector: "totalRewards",
    sortable: true,
  },
];

const MonthlyReport = ({ report }) => {
  const [tableData, setTableData] = useState();

  useEffect(() => {
    if (report) {
      setTableData({ columns, data: getCustomerRewards(report) });
    }
    console.log(getCustomerRewards(report));
  }, [report]);

  function getCustomerRewards(report) {
    return report.reduce((acc, curr) => {
      const found = acc.find((a) => a.full_name === curr.full_name);
      const month = curr.month.toString();
      if (!found) {
        acc.push({
          full_name: curr.full_name,
          totalRewards: curr.rewards,
          [month]: curr.rewards,
        });
      } else {
        found.totalRewards += curr.rewards;
        if (found[month]) {
          found[month] += curr.rewards;
        } else {
          found[month] = curr.rewards;
        }
      }
      return acc;
    }, []);
  }

  if (!tableData) return null;
  return (
    <DataTableExtensions {...tableData}>
      <DataTable columns={columns} data={tableData.data} noHeader pagination />
    </DataTableExtensions>
  );
};

export default MonthlyReport;
