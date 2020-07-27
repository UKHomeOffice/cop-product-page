import React, { useEffect } from "react";
import Table from "../components/table";

export const OarTables = [
    {
        id: 'transportModes',
        header: "Transport Modes",
        body: <Table tableHeaderColumn={['header 1', 'header 2']} tableHeaderRow={['row 1', 'row 2']} tableContent={['content 1', 'content 2']} />
    },
    {
        id: 'pcpImmigrationActivities',
        header: "PCP & Immigration Activities",
        body: ''
    },
    {
        id: 'customsActivities',
        header: "Customs Activities",
        body: ''
    },
    {
        id: 'searchDetectionActivities',
        header: "Search & Detection Activities",
        body: ''
    },
    {
        id: 'cyclamenActivities',
        header: "Cyclamen Activities",
        body: ''
    },
    {
        id: 'otherActivities',
        header: "Other Activities",
        body: ''
    },
];