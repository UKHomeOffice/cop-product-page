import React, { useEffect } from "react";
import renderer from "react-test-renderer";
import { navItems } from "../../config/help-nav-items";
import SubNavigation from "../sub_navigation-help";
import { render } from "@testing-library/react";

describe("SubNavigationHelp", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<SubNavigation navItems={navItems} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Returns the correct SubNavigationHelp 'navItems' prop passed in", () => {
    const tree = renderer
      .create(<SubNavigation navItems={navItems} />);
    const testInstance = tree.root;
    expect(testInstance.props).toHaveProperty("navItems", [
      {
        name: "Get started", href: "/help/"
      },
      {
        name: "Operational Activity Reporting (OAR)", href: "/help/oar/",
        subItems: [{ name: "Overview", href: "/help/oar/" },
          { name: "Before you begin", href: "/help/oar/oar-before-you-begin-your-oar/" },
          { name: "Enter shift details and time", href: "/help/oar/oar-entering-shift-details-and-time/" },
          { name: "Understand activity categories", href: "/help/oar/oar-understanding-activity-categories/" },
          { name: "Detection/search activities", href: "/help/oar/oar-detection-search-activities/" },
          { name: "Check your OAR submission", href: "/help/oar/oar-checking-your-oar-submission/" },
          { name: "Add shift debrief notes", href: "/help/oar/oar-add-shift-debrief-notes/" }
        ]
      },
      {
        name: "Mandatory Declarations", href: "/help/mandec/",
        subItems: [{ name: "Overview", href: "/help/mandec/" },
          { name: "Add your line manager", href: "/help/mandec/mandec-adding-your-line-manager/" },
          { name: "If you have something to declare", href: "/help/mandec/mandec-something-to-declare/" },
          { name: "What Line Managers need to do", href: "/help/mandec/mandec-what-line-managers-need-to-do/" }
        ]
      },
      {
        name: "Use of Force", href: "/help/uof/",
        subItems: [{ name: "Overview", href: "/help/uof/" },
          { name: "Before you begin", href: "/help/uof/uof-before-you-begin/" },
          { name: "When you must report use of force", href: "/help/uof/uof-when-you-must-report-use-of-force/" },
          { name: "Personal Safety Training terms", href: "/help/uof/uof-personal-safety-training-terms/" }
        ]
      },
      {
        name: "Events at the Border", href: "/help/eab/",
        subItems: [
          {name: "Overview", href: "/help/eab/"},
          {name: "Events at the Border User Guide", href: "/help/eab/events-at-the-border-user-guide/" },
          {name: "Minimal standard limits", href: "/help/eab/minimal-standard-limits/" },
        ],
      },
      {
        name: "Intelligence Referral", href: "/help/ir/"
      },
      {
        name: "Intelligence Workflow", href: "/help/iw/"
      },
      {
        name: "Accessing COP on mobile devices", href: "/help/accessing-cop-on-mobile/"
      },
      {
        name: "Contact", href: "/help/contact/"
      }
    ]);
  });

  it("Renders correct sub nav list items", () => {
    const navItemsObj = [
      {
        name: "test", href: "/help/test/",
      },
    ];
    const { getByText } = render(<SubNavigation navItems={navItemsObj} />);
    const subNavigationItem = getByText("test");
    expect(subNavigationItem).toBeTruthy();
  });

});