// Hooks
import { useEffect, useState } from "react";

// Library Components
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";

// Custom Components
import Card from "../customComponents/Card";

// Styling
import "react-data-table-component-extensions/dist/index.css";

// Data Table Columns
const columns = [
  {
    name: "Customer",
    selector: "full_name",
    sortable: true,
  },
  {
    name: "November",
    selector: "11",
    sortable: false,
  },
  {
    name: "October",
    selector: "10",
    sortable: false,
  },
  {
    name: "September",
    selector: "9",
    sortable: false,
  },
  {
    name: "Total",
    selector: "totalRewards",
    sortable: true,
  },
];

// EXPORTED CUSTOMERREWARDS COMPONENT
const CustomerRewards = ({ report }) => {
  const [tableData, setTableData] = useState();

  // Sets tableData, checking that report is not null or undefined
  useEffect(() => {
    if (report) {
      setTableData({ columns, data: getCustomerRewards(report) });
    }
  }, [report]);

  // Function to calculate monthly and quarterly rewards per customer
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
    <Card header="Quarterly Customer Rewards">
      <DataTableExtensions {...tableData}>
        <DataTable
          columns={columns}
          data={tableData.data}
          noHeader
          pagination
        />
      </DataTableExtensions>
    </Card>
  );
};

export default CustomerRewards;
