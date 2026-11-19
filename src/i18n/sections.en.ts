// Data & AI profile content (English)
export default {
  meta: {
    title: "Edgar Martínez · Data & AI Engineer",
    description:
      "Data & AI Engineer. Multi-agent systems, RAG, LLM evaluation and production data pipelines on AWS and GCP.",
  },
  nav: {
    ai: "AI",
    cases: "Cases",
    skills: "Stack",
    experience: "Experience",
    projects: "Projects",
    contact: "Contact",
  },
  hero: {
    badge: "Data & AI Engineer",
    greeting: "Hi, I'm",
    name: "Edgar Martínez",
    buildPrefix: "I build",
    roles: [
      "multi-agent systems",
      "RAG with automated evals",
      "data pipelines",
      "cloud microservices",
    ],
    tagline:
      "I take AI and data to production: agents on Amazon Bedrock AgentCore, pipelines with dbt and DuckDB, and services on AWS and GCP. I come from full-stack development, so I also make sure everything works end to end.",
    ctaPrimary: "See AI projects",
    ctaSecondary: "Download CV",
    stats: [
      { value: 3, prefix: "", suffix: "+", decimals: 0, label: "years building software for companies" },
      { value: 5, prefix: "", suffix: "", decimals: 0, label: "agents orchestrated in a single system" },
      { value: 0.93, prefix: "", suffix: "", decimals: 2, label: "correctness scored by an LLM judge" },
      { value: 0, prefix: "$", suffix: "", decimals: 0, label: "infrastructure cost for a production pipeline" },
    ],
  },
  common: {
    seeCase: "See full case",
    code: "Code",
    back: "Back",
    stack: "Stack",
    architecture: "Architecture",
    context: "Context",
    decisions: "Technical decisions",
    challenge: "The most interesting bug",
    results: "Results",
    production: "What I'd do in production",
    problem: "Problem",
    solution: "Solution",
    impact: "Impact",
    seeMore: "See more",
    developedWith: "Built with:",
    next: "Next project",
    flowHint: "Request flow",
  },
  ai: {
    eyebrow: "AI Engineering",
    title: "AI Systems",
    subtitle:
      "Agents, RAG, memory and evaluation on Amazon Bedrock AgentCore. Each project includes its architecture, the decisions I made and the bugs I fixed.",
    items: [
      {
        slug: "multi-agent-support",
        title: "Multi-agent support system",
        subtitle: "Amazon Bedrock AgentCore · Strands Agents",
        color: "#F59E0B",
        summary:
          "An orchestrator routes each request to 4 specialist agents. The policy agent queries 3 Knowledge Bases in parallel, and all agents share state in DynamoDB, with guardrails and end-to-end tracing.",
        note: "Capstone project of the Agentic AI Engineer Nanodegree (Udacity).",
        github: "https://github.com/EdgarMS760/multi-agent-ecommerce",
        image: "multiAgentArchitecture",
        metrics: [
          { value: "5", label: "agents" },
          { value: "3", label: "Knowledge Bases in parallel" },
          { value: "E2E", label: "X-Ray tracing" },
        ],
        flow: [
          ["Customer"],
          ["Orchestrator · Haiku 4.5"],
          ["Inventory", "Policy", "Refund", "Communication"],
          ["DynamoDB", "3 × Knowledge Base", "Guardrails"],
        ],
        stack: [
          "Strands Agents SDK",
          "Bedrock AgentCore",
          "Claude Haiku 4.5",
          "Claude Sonnet 4.5",
          "Bedrock Knowledge Bases",
          "S3 Vectors",
          "DynamoDB",
          "Bedrock Guardrails",
          "AWS X-Ray",
          "CloudWatch",
          "AWS CDK",
        ],
        context:
          "Customer support for a fictional online store. A request like \"I want to return my order\" needs order data, the return policies, an eligibility decision and an empathetic reply. Instead of one agent doing everything, each step is handled by a specialist agent with its own tools, and the orchestrator coordinates the flow.",
        decisions: [
          {
            title: "Small model to route, large model to reason",
            text: "The orchestrator uses Claude Haiku 4.5, fast and cheap, only to decide who to delegate to. The specialists use Sonnet 4.5 where reasoning actually matters.",
          },
          {
            title: "Parallel multi-agent RAG",
            text: "The PolicyAgent fans out to 3 retriever sub-agents (returns, shipping and warranty) in parallel with a ThreadPoolExecutor, then merges and deduplicates the results by relevance.",
          },
          {
            title: "Shared state with optimistic locking",
            text: "A DynamoDB WorkflowState table with version-based conditional writes keeps concurrent agents from overwriting each other's work.",
          },
          {
            title: "Zero invented data",
            text: "Agents only report what their tools return: if an order doesn't exist, they say so. Bedrock Guardrails blocks PII, harmful content and off-topic requests.",
          },
          {
            title: "End-to-end observability",
            text: "Every tool call is an X-Ray subsegment (Orchestrator → Worker → Knowledge Base), both locally and in the deployed runtime.",
          },
        ],
        challenge: null,
        results: [
          "Automatic routing across 4 specialists based on customer intent.",
          "Refund decisions follow business rules (30 days Standard, 60 days Premium) checked against the database, not decided by the model.",
          "Deployed to AgentCore Runtime with the AgentCore CLI and AWS CDK.",
        ],
        production: null,
      },
      {
        slug: "support-chatbot-evals",
        title: "Support chatbot with automated evaluation",
        subtitle: "AgentCore Harness · Bedrock Evaluations",
        color: "#14B8A6",
        summary:
          "All routing lives in a single system prompt, and a 14-case suite scores it with an LLM judge. Every prompt change is measured with data instead of intuition.",
        note: "Project from the Agentic AI Engineer Nanodegree (Udacity).",
        github: "https://github.com/EdgarMS760/customer-support-agentcore",
        image: null,
        metrics: [
          { value: "0.857 → 0.929", label: "correctness" },
          { value: "14", label: "test cases" },
          { value: "3", label: "routes + edge cases" },
        ],
        flow: [
          ["Customer"],
          ["System prompt · Nova Pro"],
          ["Bug report", "FAQ question", "Other"],
          ["Gateway → Lambda → DynamoDB", "Embedded FAQ", "Human support"],
        ],
        stack: [
          "Bedrock AgentCore Harness",
          "AgentCore Gateway",
          "AWS Lambda",
          "DynamoDB",
          "Bedrock Evaluations",
          "Bedrock Guardrails",
          "Amazon Nova Pro",
          "Python / boto3",
          "CloudFormation",
        ],
        context:
          "A chatbot for an online store that handles three kinds of messages: bug reports (it gathers the description, steps and environment over several turns and files a ticket), platform questions (answered strictly from the FAQ, never inventing policy) and everything else (handed off to human support). The core challenge was prompt engineering and how to measure it.",
        decisions: [
          {
            title: "The prompt as the router",
            text: "No separate classifier or state graph: the harness provides the agent loop and the system prompt defines the behavior. Less infrastructure, faster iteration.",
          },
          {
            title: "A tool behind a Gateway",
            text: "create_bug_report is a Lambda that writes to DynamoDB, exposed to the agent through AgentCore Gateway and provisioned with CloudFormation.",
          },
          {
            title: "A suite with real edge cases",
            text: "Beyond the 3 routes: ambiguous messages, prompt injection, command injection, mixed intent, Spanish input, hostile messages and empty input.",
          },
          {
            title: "Metric-driven iteration",
            text: "Bedrock Evaluations (Builtin.Correctness, LLM-as-a-judge) between prompt versions. Fixing empty input, replying in the customer's language and mixed intents took it from 0.857 to 0.929.",
          },
        ],
        challenge: {
          title: "Other customers' data in the tickets",
          text: "Tickets were filled with fabricated details that were too specific, like \"Firefox on Windows 11\", copied word for word from an earlier, unrelated conversation. Root cause: the script never set the memory parameter, so AgentCore auto-provisioned a memory shared across every session and the model was recalling other customers' data. I fixed it by explicitly disabling memory when creating and updating the harness.",
        },
        results: [
          "Correctness from 0.857 (12/14) to 0.929 (13/14) across two evaluation runs.",
          "The one remaining case was an isolated empty generation; I found it by inspecting the raw model output, and it wasn't a logic error.",
          "I also fixed a test whose expected value didn't match the real FAQ: evaluating the dataset is part of the job too.",
        ],
        production: null,
      },
      {
        slug: "agent-memory-tools",
        title: "Agent with long-term memory",
        subtitle: "AgentCore Memory · Code Interpreter · Browser · MCP",
        color: "#8B5CF6",
        summary:
          "A support agent that remembers customer preferences across sessions, queries a Knowledge Base, does exact math in a sandbox and browses the web, with tools exposed over MCP.",
        note: "Project from a Udacity program on Amazon Bedrock AgentCore.",
        github: "https://github.com/EdgarMS760/AI-support-agent-aws",
        image: null,
        metrics: [
          { value: "6", label: "scenarios tested in runtime" },
          { value: "MCP", label: "tools via Gateway" },
          { value: "100%", label: "of the math in a sandbox" },
        ],
        flow: [
          ["Customer"],
          ["MemoryHook · retrieve context"],
          ["Agent · Nova 2 Lite"],
          ["Knowledge Base", "Code Interpreter", "Browser", "MCP Gateway"],
          ["MemoryHook · save the turn"],
        ],
        stack: [
          "Strands Agents SDK",
          "AgentCore Runtime",
          "AgentCore Memory",
          "AgentCore Code Interpreter",
          "AgentCore Browser",
          "MCP",
          "Bedrock Knowledge Bases",
          "Amazon Nova",
          "Python",
        ],
        context:
          "An agent deployed on AgentCore Runtime that tracks orders, processes refunds, answers from a knowledge base, calculates loyalty discounts and looks things up on the web. I tested it with 6 scenarios on the deployed runtime, including one for long-term memory across sessions.",
        decisions: [
          {
            title: "Memory through hooks",
            text: "A MemoryHook retrieves customer facts and preferences before each turn and saves the interaction afterwards, using AgentCore Memory's semantic extraction strategies.",
          },
          {
            title: "The LLM doesn't do the math",
            text: "The loyalty discount has several exact steps (round points down to multiples of 500, cap at 50%, apply the tier discount). It runs as code in Code Interpreter, so the result is correct no matter which model is behind the agent.",
          },
          {
            title: "Tools over MCP",
            text: "Order and refund tools come as MCP tools from AgentCore Gateway. The agent discovers them at startup without being coupled to their implementation.",
          },
        ],
        challenge: {
          title: "The memory was polluting itself",
          text: "The hook prepended memories to the user's message, and saving the turn then persisted that annotated version (a wall of old context) instead of the customer's actual words. A preference like \"I prefer concise answers\" got diluted and was never extracted as a fact. I found it by querying Memory directly with the SDK, outside the agent loop, and fixed it by stashing the original query before mutating the message.",
        },
        results: [
          "6 scenarios validated on the runtime: order tracking, refunds, RAG, long-term memory, discounts and browser.",
          "Customer preferences are correctly remembered across separate sessions.",
        ],
        production:
          "During testing, the model restated a dollar amount in prose that differed from what the tool had computed. In production I wouldn't let the model repeat numbers: I'd validate the tool's JSON with a Pydantic schema and show those fields directly in the UI, leaving the model to write only the explanation.",
      },
    ],
  },
  cases: {
    eyebrow: "Data Engineering",
    title: "Real-world cases",
    subtitle:
      "Systems I built for companies that are running in production today.",
    items: [
      {
        industry: "Employee transportation",
        title: "Operations and payroll analytics pipeline",
        color: "#0EA5E9",
        flow: ["Legacy systems", "Ingestion", "dbt + DuckDB", "Reports & alerts"],
        problem:
          "Operational reports depended on central IT and legacy systems. They took weeks, and trip assignment left drivers underused.",
        solution:
          "Decoupled ingestion from the legacy systems and a Python, dbt and DuckDB pipeline that joins payroll with work shifts. Plus fleet monitoring with history and incident alerts. Everything ships with Docker and GitHub Actions on AWS.",
        impact: [
          "Reports went from weeks to minutes, with no IT dependency",
          "Trip assignment without underused drivers",
          "Faster preventive maintenance thanks to alerts",
          "$0 infrastructure cost in production",
        ],
        stack: ["Python", "dbt", "DuckDB", "Docker", "GitHub Actions", "AWS"],
      },
      {
        industry: "Logistics",
        title: "Real-time delivery proof from WhatsApp",
        color: "#22C55E",
        flow: ["WhatsApp", "Extraction", "Classification", "Record"],
        problem:
          "Proof of delivery arrived over WhatsApp and was typed into the systems by hand; critical operational data was being lost.",
        solution:
          "A Node.js and Python service that extracts and classifies messages in real time and records delivery proof automatically. Plus a WhatsApp bot that delivers metrics and KPIs to leadership.",
        impact: [
          "Document capture went from a manual process to seconds",
          "No more lost operational data",
          "Automated KPIs for the board",
        ],
        stack: ["Node.js", "Python", "WhatsApp", "Laravel", "React"],
      },
      {
        industry: "Fintech · payments",
        title: "Real-time transaction ingestion",
        color: "#6366F1",
        flow: ["ISO 8583", "Parsing", "Dispatch", "Client console"],
        problem:
          "Clients needed to see their transactions instantly, on top of a card-acquiring system that was a legacy monolith.",
        solution:
          "A .NET microservice that ingests and parses ISO 8583 messages and dispatches them in real time to a visualization console. I helped refactor the monolith and, with AWS architects, build the infrastructure (EC2, RDS, S3, SES and Lambda Web Adapter).",
        impact: [
          "Transactions visible to clients in real time",
          "A more scalable monolith with vulnerabilities mitigated",
          "Faster development with Claude Code (custom plugins, hooks and skills)",
        ],
        stack: [".NET", "Docker", "ISO 8583", "AWS", "Claude Code"],
      },
    ],
  },
  skills: {
    eyebrow: "Stack",
    title: "What I work with",
    groups: [
      {
        name: "AI & agents",
        icon: "🤖",
        items: [
          "Amazon Bedrock",
          "Bedrock AgentCore",
          "Strands Agents",
          "RAG",
          "Knowledge Bases",
          "Guardrails",
          "LLM evaluation",
          "MCP",
          "OpenAI API",
          "IBM watsonx",
        ],
      },
      {
        name: "Data",
        icon: "📊",
        items: ["Python", "dbt", "DuckDB", "PostgreSQL", "MySQL", "MongoDB", "DynamoDB", "Ingestion / ETL"],
      },
      {
        name: "Cloud & DevOps",
        icon: "☁️",
        items: [
          "AWS (Lambda, EC2, S3, RDS, SES)",
          "GCP (Cloud Run, Cloud Build, Secret Manager)",
          "Cloudflare (Workers, Access)",
          "Docker",
          "GitHub Actions",
          "Linux",
        ],
      },
      {
        name: "Backend & software",
        icon: "🧩",
        items: ["FastAPI", ".NET", "Node.js", "React", "Microservices", "REST APIs", "Message queues"],
      },
    ],
  },
  experience: {
    eyebrow: "Career",
    title: "Experience",
    items: [
      {
        role: "AI Full-Stack Developer",
        org: "Fintech · payments",
        period: "Aug 2026 – present",
        text: "Transactional .NET and Docker microservices (ISO 8583), real-time ingestion and AWS infrastructure. Engineering workflow automation with Claude Code.",
      },
      {
        role: "Data & AI Engineer",
        org: "Employee transportation",
        period: "Mar 2026 – Aug 2026",
        text: "Pipelines with Python, dbt and DuckDB, fleet monitoring and CI/CD with Docker and GitHub Actions on AWS.",
      },
      {
        role: "Full-Stack Developer",
        org: "Logistics",
        period: "Apr 2024 – Mar 2026",
        text: "CRM, TMS and ERP features with Laravel and React. Real-time WhatsApp message extraction and classification, and KPI bots.",
      },
      {
        role: "Back-End Intern",
        org: "Software development",
        period: "Aug 2023 – Apr 2024",
        text: ".NET REST APIs and Artemis message queues between distributed systems.",
      },
    ],
    viewCredential: "View credential",
    credentialsTitle: "Certifications & achievements",
    credentials: [
      { title: "Agentic AI Engineer Nanodegree", org: "Udacity", date: "Oct 2026", url: "https://www.udacity.com/certificate/e/bed60066-900d-11f1-90e4-87e7ef3009f9" },
      { title: "AWS AI Practitioner Challenge", org: "Udacity", date: "Apr 2026" },
      {
        title: "IBM Hackathon · watsonx Orchestrate",
        org: "NLP over call transcripts with FastAPI",
        date: "2025",
      },
      {
        title: "Software Engineering & Multimedia",
        org: "FCFM, UANL",
        date: "2021 – 2025",
      },
    ],
  },
  softwareProjects: {
    eyebrow: "Software engineering",
    title: "Full-stack projects",
    subtitle:
      "Before data and AI came software: web, mobile and relational databases, built end to end.",
  },
  contact: {
    title: "Let's build something",
    text: "I'm looking for Data / AI Engineer challenges. If you have a project or an opening, get in touch.",
    email: "edgarsandoval685@gmail.com",
    emailCta: "Email me",
    footer: "Built with Astro, Tailwind CSS and GSAP.",
  },
};
