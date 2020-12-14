import axios from "axios";

const formatDate = (dt) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dt).toLocaleDateString(undefined, options);
};

const getQuarterlyReport = async () => {
  const report = await axios.get(
    "https://charter-admin.herokuapp.com/reports/quarterly-transactions"
  );
  //   const dateFormattedReport = report.map((transaction) => {
  //     const date = formatDate(transaction.date);
  //     return { ...transaction, date };
  //   });
  return report;
};

export default getQuarterlyReport;
