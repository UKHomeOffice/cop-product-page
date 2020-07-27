import React from "react";

const OarTable = (props) => {
    return (
        <div>
            {props.table.map((value, index) => {
                return <div key={index} style={{marginBottom: '2px'}} className="govuk-grid-row">
                    <div style={{backgroundColor: 'rgba(0, 53, 168, 0.69)'}} className="govuk-grid-column-one-third">
                        <div className="govuk-body" style={{padding: '10px', textAlign: 'left', marginTop: 'auto', marginBottom: 'auto', color: 'white'}}>{value.rowHeader}</div>
                    </div>
                    <div style={{backgroundColor: '#eef2f9'}} className="govuk-grid-column-two-thirds">
                    <div className="govuk-body" style={{padding: '10px', textAlign: 'left', marginTop: 'auto', marginBottom: 'auto'}} dangerouslySetInnerHTML={{ __html: value.rowContent }} />
                    </div>
                </div>
            })}
        </div>
    )
}

export default OarTable;