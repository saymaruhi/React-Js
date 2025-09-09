import { useState } from "react";

function ArrMethod() {
  const [array, setArray] = useState([
    "Bloomberg",
    "Google",
    "IBM",
    "Apple",
    "Microsoft",
  ]);

  const [addName, setAddName] = useState("");

  const AddCompany = () => {
    if (addName.trim() !== "") { //if condition is use for if click on add button it will not store empty //
      setArray([...array, addName]);
      setAddName("");
    }
  };

  const DelCompany = (companyName) => {
    setArray(array.filter((company) => company !== companyName));
  };

  return (
    <div>
      <h4>Using Array</h4>

      <input
        type="text"
        value={addName}
        placeholder="Add Company"
        onChange={(e) => setAddName(e.target.value)}
      />
      <button onClick={AddCompany}>Add Company</button>

      <ul>
        {array.map((company, index) => (
          <li key={index}>
            <h4>{company}</h4>

            <button onClick={() => DelCompany(company)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ArrMethod;
