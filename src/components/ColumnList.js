const ColumnList = ({ listElems }) => {
  return (
    <ul className="grid grid-cols-2  list-disc list-inside text-sm">
      {listElems.map((listElem) => (
        <li key={listElem}> {listElem}</li>
      ))}
    </ul>
  );
};

export default ColumnList;
