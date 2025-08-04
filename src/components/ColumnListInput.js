import { useState } from "react";
import Badge from "./Badge";
import FormInput from "./FormInput";

const ColumnListInput = ({ initVals = [], updateAtom = () => {} }) => {
  const [listElems, setListElems] = useState(initVals);
  const [listElement, setListElement] = useState("");

  const removeElem = (elem) => {
    if (listElems.includes(elem)) {
      setListElems((currentData) => ({
        ...currentData.filter((item) => item !== elem),
      }));
    }
  };

  const addNewElement = (element) => {
    if (!listElems.includes(element)) {
      setListElems((currentData) => {
        updateAtom && updateAtom([...currentData, element]);
        return [...currentData, element];
      });

      setListElement("");
    }
  };
  return (
    <div>
      <FormInput
        label="Add Entry"
        inputname="listElem"
        value={listElement}
        onChange={(e) => setListElement(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && listElement) {
            e.preventDefault();
            addNewElement(listElement);
          }
        }}
      />
      <div className="grid grid-cols-5">
        {listElems.map((elem) => (
          <Badge label={elem} key={elem} onClose={() => removeElem(elem)} />
        ))}
      </div>
    </div>
  );
};

export default ColumnListInput;
