// Focused content for existing commercial routes; examples are not client results.
export const primaryServices = [
  { slug: "website-design", title: "Website design & development", description: "Present your services clearly, show your work, and give customers a straightforward way to get in touch." },
  { slug: "business-automation", title: "AI & business automation", description: "Connect your tools, reduce repeated data entry, and use approved AI tools where they fit the task." },
  { slug: "custom-business-systems", title: "Custom software development", description: "Build applications and customer portals around the work your existing software does not handle well." },
  { slug: "reporting-dashboards", title: "Reporting & KPI dashboards", description: "Bring available business data into useful reports, dashboards, and scheduled summaries." },
];

export const serviceSearchContent = {
  "business-automation": {
    title: "Business Automation in Jackson, MS",
    description: "Business workflow automation in Jackson, MS. Connect forms, CRM records, scheduling, and notifications with defined approvals and failure handling.",
    sections: [
      ["Start with the work that repeats", "Copying a website inquiry into a customer record, assigning the next task, and sending the same acknowledgment are good places to review. We map how the work happens today and decide which steps should be automated and which still need a person."],
      ["Connect the tools you already use", "We check the integration options and account permissions of your existing forms, CRM, calendars, and other business tools before proposing a connection. Your scope names the fields, triggers, actions, and notifications included, rather than promising that every platform can connect."],
      ["Test the exceptions before launch", "A useful workflow needs a plan for missing information, duplicate records, and failed connections. We agree on human approvals, failure notifications, and a manual fallback, then test representative cases and document how your team operates the system."],
    ],
    links: ["ai-solutions", "crm-integrations", "reporting-dashboards"],
  },
  "ai-solutions": {
    title: "AI Solutions & Automation in Jackson, MS",
    description: "AI solutions for Jackson, MS businesses: website FAQ assistants and scoped business tools using approved information, clear boundaries, and human oversight.",
    sections: [
      ["Choose a useful first AI task", "Start with a repeated question or a task involving approved information. A website assistant can explain your services and direct visitors to a person; an internal tool can help staff find or summarize material. We assess whether AI or a conventional workflow is the better fit."],
      ["Keep your business in control", "Before a build, we agree on source material, access, data handling, and what the tool is allowed to do. Pricing exceptions, commitments, and decisions requiring judgment are routed to a person. We test unsupported questions as well as everyday requests."],
      ["Plan for updates and usage", "Your approved content needs an owner and a way to stay current. We document source updates, handoff behavior, and operating limits. Platform subscriptions and usage costs are identified separately, and larger internal tools receive their own scope."],
    ],
    links: ["ai-document-tools", "business-automation", "custom-business-systems"],
  },
  "custom-business-systems": {
    title: "Custom Software Development in Jackson, MS",
    description: "Custom software development for Jackson, MS businesses. Plan applications, customer portals, and integrations with defined requirements, testing, and handoff.",
    sections: [
      ["Build for a defined business problem", "When standard tools leave your team coordinating work through spreadsheets and messages, a custom application may help. We start with the users, the current process, and the decisions the system needs to support before choosing features."],
      ["Agree on the first release", "A customer portal, internal dashboard, or connected application can be delivered in phases. Discovery defines user roles, data sources, integrations, and acceptance criteria. The written proposal explains what the first release includes and what belongs in a later phase."],
      ["Make ownership and support clear", "Your proposal documents ownership of deliverables, third-party license terms, hosting, and support arrangements. We test the agreed workflows and access rules, then provide training and a documented handoff. New features and ongoing maintenance are scoped separately."],
    ],
    links: ["customer-portals", "crm-integrations", "reporting-dashboards"],
  },
  "reporting-dashboards": {
    title: "Business Reporting & KPI Dashboards in Jackson, MS",
    description: "Custom business reporting and KPI dashboards in Jackson, MS. Connect available data, define meaningful metrics, and automate agreed reports and notifications.",
    sections: [
      ["Start with the question, then the metric", "What needs attention this week? Which inquiries still need a response? We identify the decisions you want to make and define the metrics with you, including what each number counts, its reporting period, and the records behind it."],
      ["Use the data your business can provide", "We review your available lead records, spreadsheets, and supported business systems. The scope identifies each source, required permissions, and refresh schedule. Missing information and historical cleanup are addressed explicitly rather than hidden in a dashboard."],
      ["A report your team can rely on", "A dashboard, scheduled summary, or event notification is built around the agreed workflow. We check totals against source records and explain refresh timing and limitations. Additional sources and future reporting changes can be planned as separate work."],
    ],
    links: ["business-automation", "crm-integrations", "custom-business-systems"],
  },
};
