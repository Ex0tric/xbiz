import "./App.css";
import DynamicForm from "./components/DynamicForm";

const fieldData = [
  {
    id: "1434",
    field_id: "contractid",
    field_name: "Contract ID / Reference Number",
    control_type: "TEXT_INPUT",
    required: "1",
    maxlength: "100",
  },
  {
    id: "1435",
    field_id: "contractname",
    field_name: "Contract Name",
    control_type: "TEXT_INPUT",
    required: "1",
    maxlength: "100",
  },
  {
    id: "1436",
    field_id: "vendorname",
    field_name: "Vendor Name",
    control_type: "SELECT",
    required: "1",
    DropdownValues:
      '[{"Key":"1","Value":"Vendor A"},{"Key":"2","Value":"Vendor B"}]',
  },
  {
    id: "1437",
    field_id: "contracttype",
    field_name: "Contract Type",
    control_type: "SELECT",
    required: "1",
    DropdownValues:
      '[{"Key":"1","Value":"Type A"},{"Key":"2","Value":"Type B"}]',
  },
  {
    id: "1438",
    field_id: "startdate",
    field_name: "Start Date",
    control_type: "DATE_PICKER",
    required: "1",
  },
  {
    id: "1439",
    field_id: "enddate",
    field_name: "End Date",
    control_type: "DATE_PICKER",
    required: "1",
  },
  {
    id: "1440",
    field_id: "contractowner",
    field_name: "Contract Owner / Manager",
    control_type: "TEXT_INPUT",
    required: "",
    maxlength: "100",
  },
];

function App() {
  return (
    <div className="container">
      <div className="form-wrapper py-20">
        <h1 className="text-3xl text-center mb-6">Vendor Form</h1>
        <DynamicForm fields={fieldData} />
      </div>
    </div>
  );
}

export default App;
