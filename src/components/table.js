import React from "react";

const Table = (props) => {
    return (
        <table className="govuk-table">
            <thead className="govuk-table__head">
                <tr className="govuk-table__row">
                    {props.tableHeaderColumn.map((value, index) => {
                        return <th key={index} scope="col" className="govuk-table__header">{value}</th>
                    })}
                </tr>
            </thead>
            <tbody className="govuk-table__body">
                <tr className="govuk-table__row">
                    {props.tableHeaderRow.map((value, index) => {
                        return <th key={index} scope="row" className="govuk-table__header">{value}</th>
                    })}

                    {props.tableContent.map((value, index) => {
                        return <td key={index} className="govuk-table__cell">{value}</td>
                    })}
                </tr>

            </tbody>
        </table>
    )
}

export default Table;