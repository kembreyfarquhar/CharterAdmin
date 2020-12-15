// Hooks
import { useState, useEffect } from "react";

// HTTP Request Library
import axios from "axios";

// Library Components
import { Tab, TabList, Tabs, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

// Components
import AllTransactionsReport from "./AllTransactionsReport";
import MonthlyReport from "./MonthlyReport";
import CustomerRewards from "./CustomerRewards";

// Table Columns for All & Monthly
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
    name: "Transaction Amount",
    selector: "total",
    sortable: false,
  },
  {
    name: "Rewards Points",
    selector: "rewards",
    sortable: false,
  },
];

// EXPORTED DASHBOARD COMPONENT
const Dashboard = () => {
  const [report, setReport] = useState(null);
  const [totalRewardsPoints, setTotalRewardsPoints] = useState();
  const [totalTransactionAmount, setTotalTransactionAmount] = useState();

  // On component mount, get quarterly report
  useEffect(() => {
    getQuarterlyReport();
  }, []);

  // Formats datetime into human readable text, also returning month number
  const formatDate = (dt) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    const dateObj = new Date(dt);
    const date = dateObj.toLocaleDateString(undefined, options);
    const month = dateObj.getMonth() + 1;
    return { date, month };
  };

  // HTTP request to get quarterly report
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
    // Set report as formatted report
    setReport(dateFormattedReport);
    // Set total rewards points using function getTotalRewards
    setTotalRewardsPoints(getTotalRewards(dateFormattedReport, "rewards"));
    // Set total transaction amount using function getTotalTransactionAmount
    setTotalTransactionAmount(
      getTotalTransactionAmount(dateFormattedReport, "total")
    );
  };

  // Function to calculate rewards for a transaction
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

  // Filters report to return a monthly report, based on month provided
  const getMonthlyReport = (month) => {
    return report.filter((transaction) => transaction.month === month);
  };

  // Function that calculates total rewards
  const getTotalRewards = (arr, key) =>
    arr.reduce((acc, curr) => {
      acc += curr[key];
      return acc;
    }, 0);

  // Function that calculates total transaction amount
  const getTotalTransactionAmount = (arr, key) =>
    arr.reduce((acc, curr) => {
      acc = (parseFloat(acc) + parseFloat(curr[key])).toFixed(2);
      return acc;
    }, 0);

  if (!report) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div style={{ paddingTop: "10px", paddingBottom: "80px" }}>
        <Tabs>
          <TabList>
            <Tab>All Transactions</Tab>
            <Tab>November</Tab>
            <Tab>October</Tab>
            <Tab>September</Tab>
            <Tab>Rewards Per Customer</Tab>
          </TabList>

          <TabPanel>
            <AllTransactionsReport
              data={report}
              columns={columns}
              totalRewardsPoints={totalRewardsPoints}
              totalTransactionAmount={totalTransactionAmount}
            />
          </TabPanel>
          <TabPanel>
            <MonthlyReport
              data={getMonthlyReport(11)}
              columns={columns}
              month="November"
              getTotalRewards={getTotalRewards}
              getTotalTransactionAmount={getTotalTransactionAmount}
            />
          </TabPanel>
          <TabPanel>
            <MonthlyReport
              data={getMonthlyReport(10)}
              columns={columns}
              month="October"
              getTotalRewards={getTotalRewards}
              getTotalTransactionAmount={getTotalTransactionAmount}
            />
          </TabPanel>
          <TabPanel>
            <MonthlyReport
              data={getMonthlyReport(9)}
              columns={columns}
              month="September"
              getTotalRewards={getTotalRewards}
              getTotalTransactionAmount={getTotalTransactionAmount}
            />
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
