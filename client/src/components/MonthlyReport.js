import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";

const MonthlyReport = ({ columns, data }) => {
  const tableData = {
    columns,
    data,
  };
  return (
    <DataTableExtensions {...tableData}>
      <DataTable columns={columns} data={data} noHeader pagination />
    </DataTableExtensions>
  );
};

export default MonthlyReport;
