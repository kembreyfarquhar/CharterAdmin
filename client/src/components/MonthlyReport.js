// Library Components
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";

// Custom Components
import Card from "../customComponents/Card";
import Text from "../customComponents/Text";

// Styling
import "react-data-table-component-extensions/dist/index.css";

// EXPORTED MONTHLYREPORT COMPONENT
const MonthlyReport = ({
  columns,
  data,
  month,
  getTotalRewards,
  getTotalTransactionAmount,
}) => {
  const tableData = {
    columns,
    data,
  };

  const totalRewardsPoints = getTotalRewards(data, "rewards");
  const totalTransactionAmount = getTotalTransactionAmount(data, "total");

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-evenly",
        }}
      >
        <Card header="Transactions" style={{ width: "200px" }}>
          <Text type="headline" style={{ textAlign: "center" }}>
            {data.length}
          </Text>
        </Card>
        <Card header="Income" style={{ width: "200px" }}>
          <Text type="headline" style={{ textAlign: "center" }}>
            ${totalTransactionAmount}
          </Text>
        </Card>
        <Card header="Rewards" style={{ width: "200px" }}>
          <Text type="headline" style={{ textAlign: "center" }}>
            {totalRewardsPoints}
          </Text>
        </Card>
      </div>
      <Card header={`${month} Transactions`} style={{ marginTop: 0 }}>
        <DataTableExtensions {...tableData}>
          <DataTable columns={columns} data={data} noHeader pagination />
        </DataTableExtensions>
      </Card>
    </div>
  );
};

export default MonthlyReport;
