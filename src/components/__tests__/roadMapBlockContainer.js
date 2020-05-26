import React from "react";
import renderer from "react-test-renderer";
import RoadMapBlockContainer from "../RoadMapBlockContainer";


describe("roadmapBlockContainer", () => {

  const roadMapItem = {
    streamLine: {
      measure: ["Time saved", "Daily and monthly users", "% of users on mobile", "# of forms completed"],
      now: ["Intel Referral", "Events at the border", "Intel workflow", "sGMR", "Firmstep Migration*"],
      next: ["NCC Task Management", "Capacity Planning (OAR)", "RefDataV2", "Integrity Checks", "Cerberus Task Management*"],
      later: ["Record Refusal for entry (IS81)", "OAR Enhance", "Man DecV2", "Ops Planning Tools"]
    },
    inform: {
      measure: ["# reports available", "# analysts using data", "# of cases to stakeholders", "faster availability of data"],
      now: ["BI Integration", "Analyst Data (self serve)", "PRAU feed V2", "Product Page"],
      next: ["Shift Debrief", "Sit Rep View", "Mandatory Declarations Viewer", "Embedded BI dashboards in COP"],
      later: ["Service Perf Dashboard", "Ops Dashboard", "Intel Dashboard"]
    },
    trusted: {
      measure: ["Availability", "# grey IT systems removed", "Cost per transaction", "User satisfaction"],
      now: ["Image Capture (Smartphone)", "Workflow collaboration Tool (Cawemo)", "24x7 Support", "Service Readiness Review", "Secure, Run, Continuous Improve"],
      next: ["eDcoument read & verify", "Workflow Engine Upgrade 7.13", "Optimise Tool", "User Documentation V2", "Secure, Run, Continuous Improve"],
      later: ["Fingerprint capture", "Workflow Engine Upgrade 7.14", "Release Comms", "Secure, Run, Continuous Improve"]
    }
  };

  it("renders correctly", () => {
    const tree = renderer
      .create(<RoadMapBlockContainer content={roadMapItem.streamLine.now} bannerColour={'#28afb0'} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Returns the correct RoadMapBlockContainer 'content' and bannerColour prop passed in", () => {
    const tree = renderer
      .create(<RoadMapBlockContainer content={roadMapItem.streamLine.now} bannerColour={'#28afb0'}/>);
    const testInstance = tree.root;
    expect(testInstance.props).toHaveProperty('content', ["Intel Referral", "Events at the border", "Intel workflow", "sGMR", "Firmstep Migration*"]);
    expect(testInstance.props).toHaveProperty('bannerColour', '#28afb0');
  });
});