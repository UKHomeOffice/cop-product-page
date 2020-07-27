import React, { useEffect } from "react";
import OarTable from "../components/oar-table";

const tableContent = {
    transportModes: [
        { rowHeader: 'Air Freight', rowContent: 'Commercial air freight' },
        { rowHeader: 'Air Passenger', rowContent: 'Airlines carrying passengers' },
        { rowHeader: 'Commercial Maritime', rowContent: 'Work with freight-carrying large ships e.g. container ships etc.' },
        { rowHeader: 'Container', rowContent: 'Containers either accompanied or unaccompanied (excluding RoRo see below)' },
        { rowHeader: 'Cruise', rowContent: 'Cruise ship passengers and crew' },
        { rowHeader: 'Fast Parcels', rowContent: '' },
        { rowHeader: 'General Aviation', rowContent: 'Work with private or charter aircraft including drones etc. at small airports and other locations' },
        { rowHeader: 'General Maritime', rowContent: 'Generally carried out with private or small marine craft e.g. at marinas and small ports' },
        { rowHeader: 'International Trade', rowContent: 'Search activities conducted to check that goods comply with trade rules and restrictions and have appropriate documentation, including an accurate description of the goods' },
        { rowHeader: 'Post', rowContent: '' },
        { rowHeader: 'Rail Freight', rowContent: 'Commercial freight carried on trains' },
        { rowHeader: 'Rail Passenger', rowContent: 'Eurostar and other commercial train operators' },
        { rowHeader: 'RoRo Freight', rowContent: 'Commercial freight handling vehicles handled by roll on roll off ferries. Please make it clear whether this applies to accompanied or unaccompanied freight (towed from RoRo to Port)' },
        { rowHeader: 'RoRo Tourist', rowContent: 'Private vehicles and foot passengers handled by roll on roll off ferries' }
    ],
    PCPImmigrationActivities: [
        { rowHeader: 'Record work arising from Primary Control Point (PCP) and Immigration procedures', rowContent: 'Guidelines for recording PCP and Immigration Activities'},
        { rowHeader: 'General Primary Control Point (PCP)', rowContent: '<p>To include all activity involving processing of EEA and Non EEA nationals up to the point of it becoming a case and being entered onto CID all subsequent work is entered into casework (see activity below).</p> <ul class="govuk-list govuk-list--bullet"><li>PCP at airports and seaports.</li> <li>It may also include CTA work activity, the processing of crew, work on cruise liners, by the duty officer at small ports, by teams working at small airfields, on freight or any other area where EEA and Non EEA nationals are cleared.</li></ul> e-Gates - This is to include all officers involved in the processing of passengers through e-Passport Gates.' },
        { rowHeader: 'Immigration Casework', rowContent: '<p>Total hours spent on casework types including:</p><strong>LTE</strong><br><p>Cases recorded on CID that result in LTE (Leave to Enter).</p><strong>TA/DET</strong><br><p>Cases that remain unresolved and result in Temporary Admission (TA) or Detention pending further enquiries.</p><strong>RLE</strong><br><p>Non Visa Cases - Non Visa cases that result in Refusal of Leave to Enter (RLE).</p><strong>RLE Visa Case</strong><br><p>Visa cases that result in RLE.</p><strong>Other Case-Working Duties</strong><br><p>The total number of hours staff are deployed to other case-working duties. This will include any casework Border Force Higher Officers (BFHOs), coordinators or any other officers coordinating, continuing or concluding casework not accounted for in the previous casework sections (for example cases that have been bought back from Temporary Admission or detention to be concluded, and work relating to absconders and removal work activity that is not covered by any of the other casework sections.)</p>'},
        { rowHeader: 'Other Immigration', rowContent: '<p>Deportation Orders, Medical Emergencies.</p><p><strong>Record actual examinations searches and results under ‘Detection/Search’ activities.</strong></p>' },
        { rowHeader: 'National Security (NS) formerly ‘Counter Terrorism’ referrals', rowContent: 'May include passengers or contents of freight, fast parcels and post.' },
        { rowHeader: 'Safeguarding', rowContent: 'Including safeguarding patrols.' },
        { rowHeader: 'Forgery', rowContent: '<p>Further examination of potential forgery cases and use of specialist forgery detection equipment where appropriate.</p><p>Subsequent actions taken with passengers, documents etc. where forgery is detected.</p>' },
        { rowHeader: 'Asylum casework', rowContent: 'Casework for Asylum seekers.' },
        { rowHeader: 'COVID Compliance Checks', rowContent: 'Amount of time spent conducting spot and other checks on people entering the UK to ensure they have completed the necessary declarations and to process any subsequent reports and casework' },
    ]
}

export const OarTables = [
    {
        id: 'transportModes',
        header: "Transport Modes",
        body: <OarTable table={tableContent.transportModes}/>
    },
    {
        id: 'pcpImmigrationActivities',
        header: "PCP & Immigration Activities",
        body: <OarTable table={tableContent.PCPImmigrationActivities}/>
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