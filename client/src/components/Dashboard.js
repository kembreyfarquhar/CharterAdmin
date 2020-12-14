import { useState, useEffect } from "react";
import axios from "axios";
import { Tab, TabList, Tabs, TabPanel } from "react-tabs";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import "react-tabs/style/react-tabs.css";

import MonthlyReport from "./MonthlyReport";
import CustomerRewards from "./CustomerRewards";

const columns = [
  {
    name: "Date",
    selector: "date",
    sortable: false,
  },
  {
    name: "Customer",
    selector: "full_name",
    sortable: false,
  },
  {
    name: "Transaction Total",
    selector: "total",
    sortable: false,
  },
  {
    name: "Rewards Points",
    selector: "rewards",
    sortable: false,
  },
];

const Dashboard = () => {
  const [report, setReport] = useState(null);
  const [tableData, setTableData] = useState();

  useEffect(() => {
    getQuarterlyReport();
  }, []);

  useEffect(() => {
    if (report) setTableData({ columns, data: report });
  }, [report]);

  const formatDate = (dt) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    const dateObj = new Date(dt);
    const date = dateObj.toLocaleDateString(undefined, options);
    const month = dateObj.getMonth() + 1;
    return { date, month };
  };

  const getQuarterlyReport = async () => {
    const response = await axios.get(
      "https://charter-admin.herokuapp.com/reports/quarterly-transactions"
    );
    const report = response.data;
    const dateFormattedReport = report.map((transaction) => {
      const { date, month } = formatDate(transaction.date);
      const rewards = calculateRewards(transaction.total);
      const full_name = `${transaction.last_name}, ${transaction.first_name}`;
      return { ...transaction, date, month, rewards, full_name };
    });
    setReport(dateFormattedReport);
  };

  const calculateRewards = (amount) => {
    const total = parseInt(amount);
    let result = 0;
    if (total <= 50) return 0;
    if (total > 50 && total <= 100) {
      result += total - 50;
      return result;
    }
    if (total > 100) {
      let over50 = 50;
      let over100 = 2 * (total - 100);
      let numToAdd = over50 + over100;
      result += numToAdd;
      return result;
    }
    return result;
  };

  const getMonthlyReport = (month) => {
    return report.filter((transaction) => transaction.month == month);
  };

  if (!report) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div className="dashboard">
        <Tabs>
          <TabList>
            <Tab>All Transactions</Tab>
            <Tab>November</Tab>
            <Tab>October</Tab>
            <Tab>September</Tab>
            <Tab>Rewards Per Customer</Tab>
          </TabList>

          <TabPanel>
            <DataTableExtensions {...tableData}>
              <DataTable columns={columns} data={report} noHeader pagination />
            </DataTableExtensions>
          </TabPanel>
          <TabPanel>
            <MonthlyReport data={getMonthlyReport(11)} columns={columns} />
          </TabPanel>
          <TabPanel>
            <MonthlyReport data={getMonthlyReport(10)} columns={columns} />
          </TabPanel>
          <TabPanel>
            <MonthlyReport data={getMonthlyReport(9)} columns={columns} />
          </TabPanel>
          <TabPanel>
            <CustomerRewards report={report} />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
};

export default Dashboard;
