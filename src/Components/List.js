import React, { useState, useRef } from "react";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";

import "./List.css";

const List = () => {
  const dt = useRef(null);

  const localStorageRows = localStorage.getItem("rows");
  let rowsAsObject = JSON.parse(localStorageRows);
  if (!rowsAsObject) {
    rowsAsObject = [];
  }

  const [rows, setRows] = useState(rowsAsObject);

  const createNewApplication = () => {
    return {
      id: Math.random() * 100000,
      company: "",
      date: "",
      time: "",
      title: "",
      url: "",
      status: "",
    };
  };
  const addNewRow = () => {
    console.log(...rows);
    setRows((prevRows) => [...prevRows, createNewApplication()]);
  };
  const onEditorValueChange = (props, value) => {
    let updatedProducts = [...props.value];
    updatedProducts[props.rowIndex][props.field] = value;
    setRows(updatedProducts);
    localStorage.setItem("rows", JSON.stringify(rows));
  };
  const inputTextEditor = (props, field) => {
    return (
      <div className="sizes">
        <InputText
          className="p-inputtext-sm p-d-block p-mb-2"
          type="text"
          value={props.rowData[field]}
          onChange={(e) => onEditorValueChange(props, e.target.value)}
        />
      </div>
    );
  };
  const companyEditor = (props) => {
    return inputTextEditor(props, "company");
  };
  const dateEditor = (props) => {
    return inputTextEditor(props, "date");
  };
  const timeEditor = (props) => {
    return inputTextEditor(props, "time");
  };
  const titleEditor = (props) => {
    return inputTextEditor(props, "title");
  };
  const urlEditor = (props) => {
    return inputTextEditor(props, "url");
  };
  const statusEditor = (props) => {
    return inputTextEditor(props, "status");
  };
  const deleteRow = (rowData) => {
    const newRows = rows.filter((x) => x.id !== rowData.id);
    setRows([...newRows]);
    localStorage.setItem("rows", JSON.stringify(newRows));
  };
  const deleteTemplate = (rowData) => {
    return (
      <Button
        icon="pi pi-trash"
        iconPos="left"
        onClick={() => deleteRow(rowData)}
      />
    );
  };

  const exportCSV = (selectionOnly) => {
    console.log(dt.current);
    dt.current.exportCSV({ selectionOnly });
}

  const header = (
    <div className="p-d-flex p-ai-center export-buttons">
        <Button type="button" icon="pi pi-file-o" onClick={() => exportCSV(false)} className="p-mr-2" data-pr-tooltip="CSV" />
        {/* <Button type="button" icon="pi pi-file-excel" onClick={exportExcel} className="p-button-success p-mr-2" data-pr-tooltip="XLS" /> */}
        {/* <Button type="button" icon="pi pi-file-pdf" onClick={exportPdf} className="p-button-warning p-mr-2" data-pr-tooltip="PDF" /> */}
    </div>
);
 

  return (
    <div className="center">
      <div className="table">
        <DataTable value={rows} className="p-datatable-gridlines" header={header} ref={dt}>
          <Column field="company" header="Company" editor={companyEditor}></Column>
          <Column field="date" header="Date" editor={dateEditor}></Column>
          <Column field="time" header="Time" editor={timeEditor}></Column>
          <Column field="title" header="Title" editor={titleEditor}></Column>
          <Column field="url" header="Url" editor={urlEditor}></Column>
          <Column field="status" header="Status" editor={statusEditor}></Column>
          <Column field="delete" header="" body={deleteTemplate}></Column>
        </DataTable>
        <Button
          label="Add New Application"
          className="p-button-raised"
          onClick={addNewRow}
        />
      </div>
    </div>
  );
};

export default List;
