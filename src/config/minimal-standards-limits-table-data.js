import React, { useEffect } from "react";
import MinimalStandardLimitsTable from "../components/minimal-standard-limits-table"

const tableContent = {
    PriorityA: [
        {
            column1: '-',
            column2: '-',
            column3: 'Frontline to record in…'
        },
        {
            column1: '<strong>COVID-19</strong>',
            column2: 'All Incidents, where items/ people detection activity relates to COVID-19.',
            column3: 'Seizure file/ Immigration Case file'
        },
        {
            column1: '<strong>National Security at the Border</strong> (including CBRN - chemical, biological, radiological and nuclear)',
            column2: '<p>All incidents</p>  <p>All positive incidents at level 3 as defined by the Cyclamen operating procedures (COPs).</p> <p>ALL CASES relating to COVID-19</p>',
            column3: 'Seizure file'
        },
        {
            column1: '<strong>Clandestine Entry</strong>',
            column2: 'Any clandestine you find at the UK border including juxtaposed controls. ALL CASES relating to COVID-19',
            column3: 'Immigration case file'
        },
        {
            column1: '<strong>Class A</strong>',
            column2: 'All seizures of 50g and above.',
            column3: 'Seizure file'
        },
        {
            column1: '<strong>Strategic exports</strong>',
            column2: 'All cases in which you suspect an attempt has been made to circumvent prohibitions, sanctions or restrictions to acquire certain goods that are subject to UN, EU or Organisation for Security and Cooperation in Europe (OSCE) controls or orders.',
            column3: 'Seizure file'
        },
        {
            column1: '<Strong>Cash</strong>',
            column2: '<p>All detections of cash linked to terrorism, whatever the amount.</p> <p>All cash seizures of £20,000 and over.</p> <p>All cash detections where there is an unusual concealment or method.</p> <p>All cash detections involving abuse or misuse of occupation or employment, for example government official, or airport or port worker.</p>',
            column3: 'Seizure file'
        },
        {
            column1: '<strong>Firearms – Lethal.</strong> Including component parts',
            column2: 'All seizures',
            column3: 'Seizure file'
        },
        {
            column1: '<strong>Modern Slavery and Human trafficking</strong> – defined as ‘the recruitment, transportation, transfer, harbouring or receipt of persons by means of the threat or use of force or other forms of coercion, abduction, fraud, abuse of power’.',
            column2: '<p>Any cases in which there is evidence, suspicion, or reasonably held belief that the person may be involved in, or the subject of, human trafficking. This includes documents linked to human trafficking found during examinations of baggage and/or freight (for example: forged or genuine passports and correspondence).</p> <p>ALL CASES relating to COVID-19</p>',
            column3: 'Immigration case file'
        },
        {
            column1: '<strong>Child Sexual Abuse and Exploitation</strong> – Section 55 of the Borders, Citizenship and Immigration Act 2009 requires staff to be aware of the need to safeguard and promote the welfare of children (to be alert to the indicators of child neglect and/or abuse).',
            column2: '<p>Any cases in which there is evidence, suspicion, or reasonably held belief that the person may be at risk under Section 55 of the Borders, Citizenship and Immigration Act 2009. This includes documents linked to child protection found during examinations of baggage and/or freight.</p><p>ALL CASES relating to COVID-19</p>',
            column3: 'Immigration case file'
        },
    ],
    PriorityB: [
        {
            column1: '-',
            column2: '-',
            column3: 'Frontline to record in…'
        },
        {
            column1: '<strong>Intellectual property rights</strong>',
            column2: '<p>All significant cases, or what could be deemed to be commercial quantities, of counterfeit goods imported into the UK.</p><p>ALL CASES relating to COVID-19</p>',
            column3: 'Seizure file'
        },
        {
            column1: '<strong>International Trade</strong>',
            column2: '<p>All Detections including Non-compliance identified/ product safety.</p><p>ALL CASES relating to COVID-19</p>',
            column3: 'Seizure file'
        },
        {
            column1: '<strong>Medicines and Medical Services</strong>',
            column2: '<p>All seizures of 100 tabs and/or 250g and above.</p><p>ALL CASES relating to COVID-19</p>',
            column3: 'Seizure file'
        },
        {
            column1: '<strong>Cigarettes</strong>',
            column2: '<p>All seizures of 10,000 cigarettes and above, or any unusual concealments or method.</p><p>All cigarette detections involving abuse or misuse of occupation or employment – for example government official or airport or port worker.</p>',
            column3: 'Seizure file'
        },
        {
            column1: '<strong>Hand-rolling tobacco</strong>',
            column2: '<p>All seizures of 10kg and above, or any unusual concealments or method.</p> <p>All tobacco detections involving abuse or misuse of occupation or employment – for example government official or airport or port worker.</p>',
            column3: 'Seizure file'
        },
        {
            column1: '<strong>Other tobacco products</strong> – for example fruit tobacco or pipe tobacco',
            column2: '<p>All seizures of 10kg and above, or any unusual concealments or method. This includes:</p> <ul class="govuk-list govuk-list--bullet"><li>cigarette and tobacco-making equipment</li><li>tobacco shredders</li><li> counterfeit cigarette and tobacco packaging</li><li>unprocessed and/or raw tobacco</li></ul>',
            column3: 'Seizure file'
        },
        {
            column1: '<strong>Common travel area (CTA) abuse</strong>',
            column2: '<p>Any arrests, interceptions, detections and referrals to the criminal financial investigation teams when you suspect abuse of the CTA.</p><p>ALL CASES relating to COVID-19</p>',
            column3: 'Immigration case file'
        },
        {
            column1: '<p style="color: white"><strong>Immigration identity crime:</strong> including:</p><ul style="color: white" class="govuk-list govuk-list--bullet"><li> inadequately documented arrivals (IDA)</li><li> transit without visa (TWOV) abuse</li><li>visa abuse</li></ul>',
            column2: '<p>Any cases in which there is evidence or suspicion of the involvement of organised criminality, widespread document abuse or persistent criminal behaviour or, due to the severity of the alleged offence, prosecution is deemed to be the most appropriate course of action.</p><p>ALL CASES relating to COVID-19</p>',
            column3: 'Immigration case file'
        },
        {
            column1: '<strong>Knives and offensive weapons</strong>',
            column2: 'All seizures of gravity knives, flick knives, knuckle dusters, swords, telescopic batons, pepper sprays and laser products.',
            column3: 'Seizure file'
        },
    ],
    PriorityC: [
        {
            column1: '-',
            column2: '-',
            column3: 'Frontline to record in…'
        },
        {
            column1: '<strong>Alcohol</strong>',
            column2: 'All seizures of 5,000 litres and above.',
            column3: 'Seizure file'
        },
        {
            column1: '<strong>Immigration Rules Abuse</strong>',
            column2: '<p>Any cases in which there is evidence or suspicion of the involvement of organised criminality, widespread document abuse or persistent criminal behaviour or, due to the severity of the alleged offence, prosecution is deemed to be the most appropriate course of action.</p><p>ALL CASES relating to COVID-19</p>',
            column3: 'Immigration case file'
        },
        {
            column1: '<strong>Other Class B & C drugs.</strong> including: amphetamines, hallucinogens, and anabolic steroids',
            column2: 'All seizures of 100 tabs and/or 250g and above.',
            column3: 'Seizure file'
        },
        {
            column1: '<strong>CITES</strong> (Convention on International Trade in Endangered Species)',
            column2: '<p>All significant or commercial seizures of traditional Chinese medicines</p><p>All significant or commercial seizures of timber</p><p>All seizures of live animals</p><p>All commercial seizures of dead animals and animal derivatives</p><p>All commercial seizures of plants</p>',
            column3: '&nbsp;'
        },
        {
            column1: '<strong>New psychoactive substances</strong> – also known as legal highs.',
            column2: 'Any cases in which, following detection and subsequent laboratory testing, the substances are found to contain components that are subject to control under the 1961 UN Single Convention on Narcotic Drugs, the 1971 UN Convention on Psychotropic Substances and/or the Misuse of Drugs Act 1971.',
            column3: 'Seizure file'
        },
    ],
    PriorityD: [
        {
            column1: '-',
            column2: '-',
            column3: 'Frontline to record in…'
        },
        {
            column1: '<strong>MTIC (Missing Trader Intra-Community Fraud)</strong>',
            column2: 'All detections. Under review',
            column3: 'Seizure file'
        },
        {
            column1: '<strong>Firearms</strong> – Non-Lethal. Including CS sprays and electronic stun guns',
            column2: 'All seizures.',
            column3: 'Seizure file'
        },
        {
            column1: '<strong>Products of animal origin (POAO)</strong>',
            column2: '<p>Meat:</p> <ul class="govuk-list govuk-list--bullet"><li>Bushmeat weighing more than 10kg</li><li>Other meat products weighing more than 20kg</li></ul>',
            column3: 'Seizure file'
        },
        {
            column1: '<strong>Cutting Agent and Precursors</strong>',
            column2: 'All events. Under Review.',
            column3: 'Seizure file'
        },
        {
            column1: '<strong>Cannabis</strong>',
            column2: 'All seizures of 5kg and above.',
            column3: 'Seizure file'
        },
    ],
    PriorityE: [
        {
            column1: '-',
            column2: '-',
            column3: 'Frontline to record in…'
        },
        {
            column1: '<strong>Plant Health</strong>',
            column2: '10kgs or more. Under review',
            column3: 'Seizure file'
        },
        {
            column1: '<strong>Indecent and obscene material</strong>',
            column2: '<p>All paedophile material including indicative material.</p> <p>Obscene material (rape, bestiality, torture) but not material involving consenting adults.</p><p>Snuff movies (killing of adults and children).</p><p>Commercial quantities larger than what could be deemed for personal use (25-50 tapes), or more than one of a specific tape or DVD.</p>',
            column3: 'Seizure file'
        },
        {
            column1: '<strong>Hydrocarbon Oils</strong>',
            column2: 'All seizures of 5,000 litres and above. Under review',
            column3: 'Seizure file'
        },
    ],
}

export const MinimalStandardLimitsTables = [
    {
        id: 'priorityA',
        header: "Priority A",
        body: <MinimalStandardLimitsTable table={tableContent.PriorityA} />
    },
    {
        id: 'priorityB',
        header: "Priority B",
        body: <MinimalStandardLimitsTable table={tableContent.PriorityB} />
    },
    {
        id: 'priorityC',
        header: "Priority C",
        body: <MinimalStandardLimitsTable table={tableContent.PriorityC} />
    },
    {
        id: 'priorityD',
        header: "Priority D",
        body: <MinimalStandardLimitsTable table={tableContent.PriorityD} />
    },
    {
        id: 'priorityE',
        header: "Priority E",
        body: <MinimalStandardLimitsTable table={tableContent.PriorityE} />
    }
];