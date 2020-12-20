import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import React, { useState } from 'react'
import 'ag-grid-enterprise';

export const Statement = () => {
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);
    const [rowData, setRowData] = useState(null);

    const data = [
        {
            "date": "11/30/2020",
            "expiry_date": "-",
            "service": "Website Development",
            "owner": "Karthick",
            "project": "Bump Up",
            "estimation": 5000,
            "paid": 1000,
            "status": "Work in Progress",
            "spent": 0,
            "pending": 4000,
            "profit": 1000,
            "days": 2872421
        },
        {
            "date": "11/30/2020",
            "expiry_date": "-",
            "service": "Website Development",
            "owner": "GoSocio",
            "project": "The Hair Expert",
            "estimation": 2000,
            "paid": 2000,
            "status": "Completed",
            "spent": 0,
            "pending": 0,
            "profit": 2000,
            "days": 2872421
        },
        {
            "date": "11/30/2020",
            "expiry_date": "11/30/2021",
            "service": "Website Maintainance",
            "owner": "GoSocio",
            "project": "The Hair Expert",
            "estimation": 5000,
            "paid": 5000,
            "status": "No Changes",
            "spent": 0,
            "pending": 0,
            "profit": 5000,
            "days": 341
        },
        {
            "date": "11/30/2020",
            "expiry_date": "1/18/2021",
            "service": "SSL",
            "owner": "GoSocio",
            "project": "The Hair Expert",
            "estimation": 2000,
            "paid": 2000,
            "status": "Completed",
            "spent": 0,
            "pending": 0,
            "profit": 2000,
            "days": 29
        },
        {
            "date": "11/30/2020",
            "expiry_date": "-",
            "service": "Website Development",
            "owner": "GoSocio",
            "project": "GoSocio",
            "estimation": 3000,
            "paid": 3000,
            "status": "Completed",
            "spent": 0,
            "pending": 0,
            "profit": 3000,
            "days": 2872421
        }
    ]

    const onGridReady = (params) => {
        setGridApi(params.api)
        setGridColumnApi(params.columnApi)

        setRowData(data)
    }

    return (
        <section className="statement" id="statement">
            <div className="ag-theme-alpine statement__table">
                <AgGridReact 
                    defaultColDef={{width: 170, sortable: true, editable: true, resizable: true}}
                    onGridReady={onGridReady}
                    // domLayout="autoHeight"
                    rowData={rowData}
                >
                    <AgGridColumn field="date" comparator={dateComparator} />
                    <AgGridColumn 
                        field="expiry_date" 
                        headerName="Expiry Date"
                        comparator={dateComparator}
                    />
                    <AgGridColumn 
                        field="service" 
                        cellEditor="agRichSelectCellEditor"
                        cellEditorParams={{ values: ['Website Development','Website Maintainance', 'SSL', 'Mobile App Development'] }}
                    />
                    <AgGridColumn field="owner" />
                    <AgGridColumn field="project" />
                    <AgGridColumn field="estimation" />
                    <AgGridColumn field="paid" />
                    <AgGridColumn 
                        field="status" 
                        cellEditor="agRichSelectCellEditor"
                        cellEditorParams={{ values: ['Pending','Work in Progress', 'No Changes', 'Completed'] }}
                    />
                    <AgGridColumn field="spent" />
                    <AgGridColumn 
                        field="pending"
                        valueGetter={pendingValueGetter} 
                    />
                    <AgGridColumn 
                        field="profit" 
                        valueGetter={profitValueGetter}
                    />
                    <AgGridColumn 
                        field="days" 
                        valueGetter={daysValueGetter} 
                        cellStyle={cellStyle}
                    />
                </AgGridReact>
            </div>
        </section>
    )
}

const cellStyle = (params) => {
    if(params.value < 30) {
        return {color: "#fff", backgroundColor: "#cc0000"}
    }
    return null;
  }

const pendingValueGetter = (params) => {
    return params.data.estimation - params.data.paid;
}

const profitValueGetter = (params) => {
    return params.data.paid - params.data.spent;
}

const daysValueGetter = (params) => {
    const expiryDate = new Date(params.data.expiry_date);
    if(params.data.expiry_date === "-") return "-";
    const todaysDate = new Date()
    const diffDate = expiryDate.getTime() - todaysDate.getTime();
    const noOfDays = Math.round(Math.abs(diffDate / (24 * 60 * 60 * 1000)))
    return noOfDays;
}

function dateComparator(date1, date2) {
    var date1Number = monthToComparableNumber(date1);
    var date2Number = monthToComparableNumber(date2);
    if (date1Number === null && date2Number === null) {
      return 0;
    }
    if (date1Number === null) {
      return -1;
    }
    if (date2Number === null) {
      return 1;
    }
    return date1Number - date2Number;
}
function monthToComparableNumber(date) {
    if (date === undefined || date === null || date.length !== 10) {
        return null;
    }
    var yearNumber = date.substring(6, 10);
    var monthNumber = date.substring(3, 5);
    var dayNumber = date.substring(0, 2);
    var result = yearNumber * 10000 + monthNumber * 100 + dayNumber;
    return result;
}