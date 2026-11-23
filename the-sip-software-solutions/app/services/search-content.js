// Focused content for existing commercial routes; examples are not client results.
export const primaryServices = [
  { slug: "website-design", title: "Website design & development", description: "Custom business websites and redesigns with responsive layouts, clear service pages, contact forms, and a defined launch process." },
  { slug: "business-automation", title: "AI & business automation", description: "Connect your tools, reduce repeated data entry, and use approved AI tools where they fit the task." },
  { slug: "custom-business-systems", title: "Custom software development", description: "Build applications and customer portals around the work your existing software does not handle well." },
  { slug: "reporting-dashboards", title: "Reporting & KPI dashboards", description: "Bring available business data into useful reports, dashboards, and scheduled summaries." },
];

export const serviceSearchContent = {
  "website-design": {
    title: "Website Design in Jackson, MS | Web Development",
    heading: "Website design & development in Jackson, MS",
    description: "Custom website design, web development, and redesigns for Jackson, MS small businesses. Responsive sites with SEO foundations. Projects start at $750.",
    sections: [
      ["Custom website design for your business", "Your website design should make your services easy to understand before a visitor picks up the phone. We plan the page layout, navigation, typography, colors, and use of your real images around your business. The page list can include a homepage, service pages, an about page, project examples, and contact information, with the final scope agreed before design begins."],
      ["Web development that turns the design into working pages", "Development brings the approved design and content together in a responsive website. We build layouts for phones and larger screens, connect the agreed contact form, organize internal links, and configure page metadata. Before launch, we review navigation, image delivery, form behavior, and the customer’s path from reading a service page to making an inquiry. Portals, booking tools, and software integrations require their own defined scope."],
      ["Service pages that answer customer questions", "A useful service page explains the work you take on, where you provide it, what a customer should expect, and how to request the next step. A home services website may need project photos and an estimate request, while an advisory business may need a clear explanation of its process and a consultation link. We organize the content around your actual services rather than copying the same text across city pages."],
      ["Build search foundations into the launch", "We plan descriptive page titles, headings, internal links, and service-area copy around the services you actually provide. Launch checks cover crawl access, canonical URLs, the sitemap, and contact paths. These foundations help search engines understand your site; ongoing local SEO is a separate scope."],
      ["Redesign without losing useful pages", "For an existing website, we review the current URLs, service content, and available Search Console data before planning changes. Useful pages can keep their addresses; if a URL must change, the scope should include a permanent redirect and updates to internal links and the sitemap. We also review contact paths so customers can still reach you after launch."],
      ["Know the scope before you start", "Professional Presence starts at $750 for up to five pages, with a typical two-to-three-week timeline. Your written proposal confirms content responsibilities, revisions, launch requirements, and any separate hosting or support costs. Larger websites and connected systems receive their own scope."],
    ],
    links: ["local-seo", "google-business-profile", "website-care"],
  },
  "local-seo": {
    title: "SEO Jackson, MS | Local SEO & Google Maps",
    heading: "SEO services in Jackson, MS",
    description: "Local SEO in Jackson, MS for small businesses. Review search visibility, improve service pages, and align your website with an eligible Google Business Profile.",
    sections: [
      ["Start with your actual search visibility", "We review available Google Search Console data, indexed pages, and the searches relevant to your services. A Jackson business serving nearby communities needs accurate service-area information and useful service pages. We prioritize gaps in your existing site before recommending additional pages."],
      ["Connect your website and local presence", "Your website, eligible Google Business Profile, and genuine directory listings should describe the same business with consistent contact details. We review your services, profile categories, and customer contact paths using information you approve. Serving Madison, Ridgeland, Brandon, Flowood, Pearl, or Clinton does not require a separate storefront or a copied page for each city."],
      ["Choose one-time setup or ongoing work", "The Local Visibility Boost is a one-time audit and setup service. Local Growth provides ongoing monthly improvements and care under a separate agreement. Your proposal defines the pages, profile work, access, and reporting included so you can choose the level of support your business needs."],
      ["Measure inquiries as well as rankings", "Search impressions, clicks, and relevant query trends help guide the next improvement. Where tracking is available, we also review qualified inquiries. Organic website results and Google Maps visibility are different surfaces; results vary by search and location, and no position or timeline is guaranteed."],
      ["Ridgeland and Madison businesses", [
        "A business based in Ridgeland or Madison often serves customers across Madison County and into Jackson. The local SEO work uses that real service area. We review the website pages that name your services and the communities you cover, and we compare them with an eligible Google Business Profile.",
        "The goal is consistent information: the same services, the same way to request a quote, and the same description of where you work. We do not publish a separate city page for Ridgeland and another identical page for Madison. If a page would only repeat the same offer with a new city name, it does not belong in the scope.",
        "Search Console, when you can share it, shows which queries already reach the site. That review guides which existing page to improve first. It does not promise a position on Google or on Maps.",
      ]],
    ],
    links: ["website-design", "google-business-profile", "local-growth"],
  },
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
    title: "Reporting Dashboards in Jackson, MS",
    heading: "Business reporting and KPI dashboards in Jackson, MS",
    description: "Custom business reporting and KPI dashboards in Jackson, MS. Connect available data, define meaningful metrics, and automate agreed reports and notifications.",
    sections: [
      ["Start with the question, then the metric", "What needs attention this week? Which inquiries still need a response? We identify the decisions you want to make and define the metrics with you, including what each number counts, its reporting period, and the records behind it."],
      ["Use the data your business can provide", "We review your available lead records, spreadsheets, and supported business systems. The scope identifies each source, required permissions, and refresh schedule. Missing information and historical cleanup are addressed explicitly rather than hidden in a dashboard."],
      ["A report your team can rely on", "A dashboard, scheduled summary, or event notification is built around the agreed workflow. We check totals against source records and explain refresh timing and limitations. Additional sources and future reporting changes can be planned as separate work."],
    ],
    links: ["business-automation", "crm-integrations", "custom-business-systems"],
  },
  "crm-integrations": {
    title: "CRM Integration Services in Jackson, MS",
    heading: "CRM integration services in Jackson, MS",
    description: "CRM integration services in Jackson, MS. Connect inquiries to the CRM you already use. Starting at $750 flat. Larger Salesforce or API work is quoted after a free consult.",
    sections: [
      ["A connection for the CRM you already use", [
        "Small businesses in Jackson, Ridgeland, Madison, Flowood, Brandon, Pearl, and Clinton often take an estimate on the website and then retype the same details into a customer record. CRM integration services in Jackson, MS close that gap for the CRM or scheduling platform you already use.",
        "A website estimate request can create or update a customer record and notify the right staff member. When an appointment and the customer record need to match, a scheduling connection can be part of the same scope. The proposal names the platforms, the fields, and the timeline after a free consult call.",
        "You work directly with Wes at The Sip Web Studio, from the compatibility review through testing and handoff. The project does not guarantee new leads or a search ranking. It gives your team a tested path from the inquiry into the system you already use.",
      ]],
      ["Which systems a project can include", [
        "The starting point is your current CRM or scheduling platform, plus the website form or booking path that collects the inquiry. We do not keep a public menu of every product name. A connection depends on the account you have and on whether that tool supports the transfer.",
        "Before any build, we verify that the tools support a suitable integration and that your account has the required access. The written scope then names the platforms and the customer fields that will move. If a tool cannot support the transfer, we say so before you commit.",
        "Salesforce is handled as larger custom or multi-system work. API syncs that move records between more than one system are handled the same way. That work gets a flat quote after a free consult call. It is not automatically included in the starting CRM setup.",
        "An older customer list can be reviewed for migration only after we see the records, the format, and the permissions. Migration is scoped separately from the setup that keeps new inquiries in sync.",
      ]],
      ["How a CRM integration proceeds", [
        "The sequence follows the deliverables on this page. You see the scope, including deliverables, account access, revisions, and payment milestones, before work begins. You keep ownership of your domain and business accounts.",
        [
          "Free consult call. We review the inquiry path, the system your team treats as the customer record, and whether you need a CRM setup or larger multi-system work.",
          "Compatibility review of your existing tools, including the account access those tools require.",
          "Mapping of the customer fields you agree to move, and which value wins if a record is already there.",
          "The scoped form, CRM, or scheduling connection described in the proposal.",
          "Duplicate handling and approval rules where the platform supports them, so a person still confirms the steps that should not run on their own.",
          "Testing of a successful transfer and a failed transfer, including what your team does when a record does not go through.",
          "Documentation and a team handoff so the people who answer inquiries can operate the workflow.",
        ],
      ]],
      ["How pricing works", [
        "Starting at $750 for a flat CRM setup. That starting project follows the scope on this page: the compatibility review, the agreed field mapping, the form, CRM, or scheduling connection, duplicate handling and approval rules where the platform supports them, testing of successful and failed transfers, and the handoff.",
        "Larger custom or multi-system work, including Salesforce and API syncs, gets a flat quote after a free consult call. The quote is a single project price for the systems and fields we agree on. Subscriptions, API usage, data migration, and ongoing monitoring are separate unless the written agreement includes them.",
        "The consult call is free, and it does not obligate you to buy. Bring the tools you use today, a sample of the inquiry you want to capture, and the person who should be notified when a record is created or updated.",
      ]],
      ["B2B CRM integration in Mississippi", [
        "Some Mississippi businesses sell to other businesses. An advisor, a consultant, or a service company may take an inquiry from a website form or a scheduled call and then retype it into the CRM the sales process already uses. B2B CRM integration connects that path so the record is created or updated and the right person is notified.",
        "The tools are still the ones you already use. We verify that the CRM or scheduling platform supports the connection and that your account has the required access before we commit. Salesforce and API syncs between more than one system remain larger custom work, quoted after a free consult. A straightforward CRM setup is still a flat project starting at $750.",
        "The written scope names the platforms, the customer fields, and how duplicates are handled when the platform allows it. You keep ownership of the CRM account. The integration does not promise a number of new accounts or a search ranking.",
      ]],
    ],
    links: ["lead-capture", "appointment-automation", "business-automation", "custom-business-systems"],
  },
  "ai-automation": {
    title: "AI Automation for Small Businesses in Jackson, MS",
    heading: "AI automation for small businesses in Jackson, MS",
    description: "AI automation for small businesses in Jackson, MS. A website assistant answers questions and books appointments from your services, hours, and FAQs. Missed-call text-back, lead follow-up, review requests, and owner training can be part of the same quote. Flat-price setup, quoted after a free 15-minute call.",
    sections: [
      ["Start with the website assistant", [
        "The first setup most owners ask about is a chat assistant on the website. A customer can open it in the evening, on a Saturday, or while you are on another job, and ask the questions you already answer every week. Do you serve their part of Jackson, Ridgeland, Madison, Flowood, Brandon, Pearl, or Clinton? What does the job include? Can they get on the schedule?",
        "The assistant is built from your services, your hours, and your FAQs. It is not a generic bot that guesses. Before it ever talks to a customer, you read sample answers and mark what is right, what is wrong, and what should always come to you. Special pricing, complaints, and anything you have not approved go to a person.",
        "It can offer an appointment 24/7 only inside the rules you set. You decide which jobs can be booked, which times are open, and which requests need a call from you first. If the calendar or booking path you already use can accept that booking, the assistant uses it. If it cannot, the assistant collects the request and tells the customer you will confirm the time.",
        "When your hours change, or you stop offering a service, you tell Wes and the answers change with the business. You are not left maintaining a technical project. The point of the assistant is that a customer gets a clear next step instead of a dead end.",
      ]],
      ["Catch the call you could not take", [
        "The second setup is for the phone, not the website. You are with a customer, in the truck, or on a roof. The call rings through, the customer hangs up, and the next company on the list gets the job. An AI receptionist is there for that moment.",
        "It can answer the caller or text them back, depending on what your phone line can do and what you want customers to experience. The text asks what they need and gathers the details that matter for the trade: the neighborhood, the kind of job, and how to reach them. The goal is simple. Capture the job so it is waiting when you are free, instead of losing it to voicemail.",
        "You decide the words. A plumbing company and a bookkeeping office should not sound the same, and the message should sound like your shop, not like a script from another industry. On the call we look at how the phone works today and the quote says whether the setup is a text-back, an answer, or both.",
      ]],
      ["Reply while the lead is still warm", [
        "A new inquiry should not sit until the next morning. Speed-to-lead follow-up sends a text or an email as soon as a chat, a form, or a missed call comes in. The message confirms you received the request and tells the customer what happens next. Before an appointment, a reminder can go out so fewer visits are missed because someone forgot.",
        "Those texts and emails are not a pile of separate threads. They are logged in a simple CRM, with the customer, the request, and the appointment in one place. You can see who still needs a call without scrolling three apps.",
        {
          before: "If the customer record should live in the CRM you already use, that connection is scoped with our ",
          href: "/services/crm-integrations",
          label: "CRM integration services in Jackson, MS",
          after: ". The quote says whether the follow-up log is a simple record we set up or a connection to the system your team already opens every day.",
        },
      ]],
      ["Ask for the review when the job is done", [
        "Happy customers mean to leave a Google review and then the day gets away from them. The review setup sends the request after each completed job you mark ready. It goes to the customers you finished, not only the ones you expect will be glowing. You are not buying reviews, and you are not sorting people out because you think they might be unhappy.",
        "When a review comes in, you get a drafted reply written from the tone you approved. Drafted means you still read it and you still post it. The assistant does not publish a public reply on its own. You stay the owner of the Google profile and of every word that goes out under your name.",
      ]],
      ["Learn ChatGPT or Claude on your own work", [
        "AI Jumpstart is for you, not for the customer on the website. Wes sets up ChatGPT or Claude with the documents you choose: a price sheet, a few past quotes, service descriptions, and emails you are willing to reuse as examples. Nothing is added that you have not handed over.",
        "Then you practice together. You write a quote, a customer email, and a post you might put on your Google profile or social page, with Wes beside you. The training is hands-on, on your jobs, so the tool is something you can open on Monday. The assistant can draft. You still decide what gets sent and what gets posted.",
        "This is not a lecture about artificial intelligence. It is a working session for an owner who wants quotes, emails, and posts to take less time, and who wants to see the tool used on real material before the session ends.",
      ]],
      ["What the 15-minute call is for", [
        "You do not need to pick a package before we talk. The free call is 15 minutes. Tell Wes which part is slipping: questions on the website, calls you cannot answer, follow-up that waits too long, reviews that never get requested, or writing that piles up at night.",
        "Flat-price setup, quoted after a free 15-minute call. The quote names which of these setups are included, what you will review before a customer sees it, and how the handoff works. You do not have to buy anything on the call. Accounts for your website, your phone, or a writing tool stay in your name.",
        "Wes at The Sip Web Studio does this work for small businesses in Jackson and the surrounding Mississippi communities, including Ridgeland, Madison, Flowood, Brandon, Pearl, and Clinton. You work with the person who sets the tools up and who sits with you for the training. The setup does not promise a number of leads, a search ranking, or a stack of new reviews. It puts a clear next step in front of the customer and a record in front of you.",
      ]],
    ],
    links: ["crm-integrations", "appointment-automation", "review-request-system"],
  },
};
