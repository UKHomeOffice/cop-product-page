import React from "react";
import BreakLine from "./Break-line"

const MinimalStandardLimitsTable = (props) => {
    return (
        <div>
            {props.table.map((value, index) => {
                return <div key={index} className="govuk-grid-row displayFlexOnDesktop">
                    <div className="govuk-grid-column-one-third minimalStandardsTable" style={{backgroundColor: 'rgba(121, 19, 185, 0.64)', margin: '1px'}}>
                        <div className="govuk-body" style={{padding: '10px', textAlign: 'left', marginTop: 'auto', marginBottom: 'auto', color: 'white'}} dangerouslySetInnerHTML={{ __html: value.column1 }} />
                    </div>
                    <div style={index === 0 ? {backgroundColor: 'rgba(121, 19, 185, 0.64)', margin: '1px'} : {backgroundColor: 'rgba(121, 19, 185, 0.33)', margin: '1px'}} className="govuk-grid-column-one-third minimalStandardsTable">
                    <div className="govuk-body" style={{padding: '10px', textAlign: 'left', marginTop: 'auto', marginBottom: 'auto'}} dangerouslySetInnerHTML={{ __html: value.column2 }} />
                    </div>
                    <div style={index === 0 ? {backgroundColor: 'rgba(121, 19, 185, 0.64)', margin: '1px'} : {backgroundColor: 'rgba(121, 19, 185, 0.33)', margin: '1px'}} className="govuk-grid-column-one-third ">
                    <div className="govuk-body" style={{padding: '10px', textAlign: 'left', marginTop: 'auto', marginBottom: 'auto'}} dangerouslySetInnerHTML={{ __html: value.column3 }} />
                    </div>
                </div>
            })}
            <BreakLine pixels={'20'} />
        </div>

    )
}

export default MinimalStandardLimitsTable;