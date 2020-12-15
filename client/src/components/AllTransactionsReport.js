// Library Components
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";

// Styling
import "react-data-table-component-extensions/dist/index.css";

// EXPORTED ALLTRANSACTIONSREPORT COMPONENT
const AllTransactionsReport = ({ columns, data }) => {
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

export default AllTransactionsReport;
