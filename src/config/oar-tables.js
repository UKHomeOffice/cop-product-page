import React, { useEffect } from "react";
import OarTable from "../components/oar-table";

const tableContent = {
    transportModes: [
        { rowHeader: 'Air Freight', rowContent: 'Commercial air freight' },
        { rowHeader: 'Air Passenger', rowContent: 'Airlines carrying passengers' },
        { rowHeader: 'Commercial Maritime', rowContent: 'Work with freight-carrying large ships e.g. container ships etc.' },
        { rowHeader: 'Container', rowContent: 'Containers either accompanied or unaccompanied (excluding RoRo see below)' },
        { rowHeader: 'Cruise', rowContent: 'Cruise ship passengers and crew' },
        { rowHeader: 'Fast Parcels', rowContent: '&nbsp;' },
        { rowHeader: 'General Aviation', rowContent: 'Work with private or charter aircraft including drones etc. at small airports and other locations' },
        { rowHeader: 'General Maritime', rowContent: 'Generally carried out with private or small marine craft e.g. at marinas and small ports' },
        { rowHeader: 'International Trade', rowContent: 'Search activities conducted to check that goods comply with trade rules and restrictions and have appropriate documentation, including an accurate description of the goods' },
        { rowHeader: 'Post', rowContent: '&nbsp;' },
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
    ],
    customActivities: [
        { rowHeader: 'Custom Activities', rowContent: 'Guidelines for recording Customs Activities' },
        { rowHeader: 'Channel', rowContent: '<p>Also known as ‘Secondary’.</p><p>Include Stop and Question (S&Q) and BDI/profiling</p><p><strong>Record examinations searches and results under ‘Detection/Search’ activities.</strong></p><p>Anti-smuggling checks in the Green Channel (“Nothing to Declare”) and for taking any required further action in line with current customs operational guidance such as making any necessary referrals for civil penalties or for further investigation to HMRC/NCA and making any necessary arrests.</p><p><strong>Record actual search time and results (positive and negative) under ‘Detection/Search’ activities.</strong></p><p>Any resulting activity of recording and processing a positive result (e.g. after a commodity seizure) should be recorded using the appropriate activities available in OAR see ‘Other Activities’ below.</p>' },
        { rowHeader: 'International trade checks', rowContent: '<p>Regulatory international trade controls on goods entering or leaving the EU via the UK to ensure compliance with international, EU and domestic regulatory requirements.</p><p>Checking and endorsement of all international trade documentation requiring a customs stamp at the border to evidence import and export movements and compliance with any relevant customs clearance legal requirements.</p><p>Any other compliance checks to ensure that operators are complying with the conditions of relevant customs procedures governing the movement of cargo within the confines of a port / airport, including movements to temporary storage locations.</p>' },
        { rowHeader: 'Other customs duties', rowContent: '<p>All other customs procedures and paperwork conducted outside of Channel and not included in International Trade Checks as above.</p><p>Investigation of collusion in customs fraud abetted by staff working for port or carriers</p><p><strong>Record examination search time and results under ‘Detection/Search’ activities</strong></p>' },
        { rowHeader: 'Declared goods', rowContent: 'Assess and collect at the border any taxes, duties or other charges liable to be paid on goods from passengers and crew that have declared goods in the Red Channel or at a Red Point facility (“Goods to Declare”).' },
        { rowHeader: 'VAT returns', rowContent: 'Checking and endorsement of VAT refund claims.' },
        { rowHeader: 'Firearms management', rowContent: '<p>Handling weapons for Air Marshals etc..</p><p>All ‘Make Safe’ procedures when clearing declared firearms or with seized firearms.</p><p><strong>Search and detection time where firearms are targetted or found are recorded as ‘Detection/Search’ Activities.</strong></p>' },
    ],
    searchDetectionActivities: [
        { rowHeader: 'Record Detection/Search Activities against each target type – includes all search and detection for Clandestine Immigrants, Victims of Modern Slavery etc. as well as all types of Commodities', rowContent: 'Guidelines for recording Search & Detection Activities'},
        { rowHeader: 'Self-selection', rowContent: 'For example as a result of Stop and Question (S&Q), observation, dog detection etc. including self selected baggage under S159 – (Power to Examine Goods (Passenger Baggage)) searches '},
        { rowHeader: 'A category target', rowContent: '&nbsp;'},
        { rowHeader: 'B category target', rowContent: '&nbsp;'},
        { rowHeader: 'C category target', rowContent: '&nbsp;'},
        { rowHeader: 'Intelligence and third party referrals', rowContent: 'Including airport security, ship security officers and other agencies'},
        { rowHeader: 'Primary Control Point (PCP) referral', rowContent: '&nbsp;'},
        { rowHeader: 'Scanner referral', rowContent: '&nbsp;'},
        { rowHeader: 'Structured Assessment Border Risk (SABR)', rowContent: '&nbsp;'},
    ],
    cyclamenActivities: [
        { rowHeader: 'Cyclamen', rowContent: '&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;'},
    ],
    OtherActivities: [
        { rowHeader: 'Other Activities', rowContent: '&nbsp;'},
        { rowHeader: 'Crew Exercise', rowContent: '&nbsp;'},
        { rowHeader: 'Custody Duties', rowContent: '&nbsp;'},
        { rowHeader: 'Detention management', rowContent: '&nbsp;'},
        { rowHeader: 'GA/GM Monitoring (contact visit)', rowContent: '&nbsp;'},
        { rowHeader: 'GA/GM Monitoring (non-contact visit)', rowContent: '&nbsp;'},
        { rowHeader: 'Health & Safety/Welfare', rowContent: '&nbsp;'},
        { rowHeader: 'Intelligence collection and reporting', rowContent: '&nbsp;'},
        { rowHeader: 'Management meetings', rowContent: '&nbsp;'},
        { rowHeader: 'Other non-operational', rowContent: '<ul class="govuk-list govuk-list--bullet"><li>Union functions</li><li>Other Facility time (Home Office Networks and Groups)</li><li>Administrative functions carried out by officers due to the absence of administrative staff.</li><li>Assurance Meetings</li></ul>'},
        { rowHeader: 'Other operational', rowContent: '<ul class="govuk-list govuk-list--bullet"><li>Reporting Duties (OAR etc.)</li><li>Duty Office</li><li>Management Functions (HO Activities)</li><li>Carriers Liability (CL)</li><li>Overtime Checking</li><li>Information Technology (IT)</li><li>Security</li><li>Secure ID Functions (Secure Identity)</li><li>Equality & Diversity</li><li>Investors in People</li><li>Data Quality</li></ul>'},
        { rowHeader: 'Queen\'s warehouse', rowContent: '&nbsp;'},
        { rowHeader: 'Training', rowContent: '&nbsp;'},
        { rowHeader: 'Travel time - offsite', rowContent: '<p>Nationally (Except Heathrow):</p><ul class="govuk-list govuk-list--bullet"><li>Includes all travel time once away from main site</li></ul> <p>Heathrow:</p><ul class="govuk-list govuk-list--bullet"><li>Tarmac: Any time spent landside by Tarmac teams</li></ul><p>Freight: More than 30 minutes spent travelling by Freight teams</p>'},
        { rowHeader: 'Travel time - onsite', rowContent: '&nbsp;'},
        { rowHeader: 'VIP Movements', rowContent: '&nbsp;'},
    ],
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
        body: <OarTable table={tableContent.customActivities}/>
    },
    {
        id: 'searchDetectionActivities',
        header: "Search & Detection Activities",
        body: <OarTable table={tableContent.searchDetectionActivities}/>
    },
    {
        id: 'cyclamenActivities',
        header: "Cyclamen Activities",
        body: <OarTable table={tableContent.cyclamenActivities}/>
    },
    {
        id: 'otherActivities',
        header: "Other Activities",
        body: <OarTable table={tableContent.OtherActivities}/>
    },
];