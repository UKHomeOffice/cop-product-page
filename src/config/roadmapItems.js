import React from "react";
import RoadMapBlockContainer from "../components/RoadMapBlockContainer";
const secure_run_continuous_improve = 'Secure, Run, Continuous Improve';

export const roadMapItem = {
  streamLine: {
    measure: ["Time saved", "Daily and monthly users", "% of users on mobile", "# of forms completed"],
    now: ["Intel Referral", "Events at the border", "Intel workflow", "sGMR", "Firmstep Migration*"],
    next: ["NCC Task Management", "Capacity Planning (OAR)", "RefDataV2", "Integrity Checks", "Cerberus Task Management*"],
    later: ["Record Refusal for entry (IS81)", "OAR Enhance", "Man DecV2", "Ops Planning Tools"]
  },
  inform: {
    measure: ["# reports available", "analyst time saved", "# users accessing reports", "faster availability of data"],
    now: ["BI Integration", "Analyst Data (self serve)", "PRAU feed V2", "Product Page"],
    next: ["Shift Debrief", "Sit Rep View", "Mandatory Declarations Viewer", "Embedded BI dashboards in COP"],
    later: ["Service Perf Dashboard", "Ops Dashboard", "Intel Dashboard"]
  },
  trusted: {
    measure: ["Availability", "# grey IT systems removed", "Cost per transaction", "User satisfaction"],
    now: ["Image Capture (Smartphone)", "Workflow collaboration Tool (Cawemo)", "24x7 Support", "Service Readiness Review", secure_run_continuous_improve],
    next: ["eDcoument read & verify", "Workflow Engine Upgrade 7.13", "Optimise Tool", "User Documentation V2", secure_run_continuous_improve],
    later: ["Fingerprint capture", "Workflow Engine Upgrade 7.14", "Release Comms", secure_run_continuous_improve]
  }
};


export const roadMapMobile = {
  streamLine: [
    {
      id: 'streamLine',
      header: "Measure",
      body: <RoadMapBlockContainer
        content={roadMapItem.streamLine.measure}
        bannerColour={"#28afb0"}/>
    },
    {
      id: 'streamLine',
      header: "Now",
      body: <RoadMapBlockContainer
        content={roadMapItem.streamLine.now}
        bannerColour={"#28afb0"}/>
    },
    {
      id: 'streamLine',
      header: "Next",
      body: <RoadMapBlockContainer
        content={roadMapItem.streamLine.next}
        bannerColour={"#28afb0"}/>
    },
    {
      id: 'streamLine',
      header: "Later",
      body: <RoadMapBlockContainer
        content={roadMapItem.streamLine.later}
        bannerColour={"#28afb0"}/>
    },
  ],
  inform: [
    {
      id: 'inform',
      header: "Measure",
      body: <RoadMapBlockContainer
        content={roadMapItem.inform.measure}
        bannerColour={"#f18f01"}/>
    },
    {
      id: 'inform',
      header: "Now",
      body: <RoadMapBlockContainer
        content={roadMapItem.inform.now}
        bannerColour={"#f18f01"}/>
    },
    {
      id: 'inform',
      header: "Next",
      body: <RoadMapBlockContainer
        content={roadMapItem.inform.next}
        bannerColour={"#f18f01"}/>
    },
    {
      id: 'inform',
      header: "Later",
      body: <RoadMapBlockContainer
        content={roadMapItem.inform.later}
        bannerColour={"#f18f01"}/>
    },
  ],
  trusted: [
    {
      id: 'trusted',
      header: "Measure",
      body: <RoadMapBlockContainer
        content={roadMapItem.trusted.measure}
        bannerColour={"#a23b72"}/>
    },
    {
      id: 'trusted',
      header: "Now",
      body: <RoadMapBlockContainer
        content={roadMapItem.trusted.now}
        bannerColour={"#a23b72"}/>
    },
    {
      id: 'trusted',
      header: "Next",
      body: <RoadMapBlockContainer
        content={roadMapItem.trusted.next}
        bannerColour={"#a23b72"}/>
    },
    {
      id: 'trusted',
      header: "Later",
      body: <RoadMapBlockContainer
        content={roadMapItem.trusted.later}
        bannerColour={"#a23b72"}/>
    },
  ],
};

