// Contenido del perfil Data & AI (español)
export default {
  meta: {
    title: "Edgar Martínez · Data & AI Engineer",
    description:
      "Data & AI Engineer. Sistemas multi-agente, RAG, evaluación de LLMs y pipelines de datos en producción sobre AWS y GCP.",
  },
  nav: {
    ai: "IA",
    cases: "Casos",
    skills: "Stack",
    experience: "Experiencia",
    projects: "Proyectos",
    contact: "Contacto",
  },
  hero: {
    badge: "Data & AI Engineer",
    greeting: "Hola, soy",
    name: "Edgar Martínez",
    buildPrefix: "Construyo",
    roles: [
      "sistemas multi-agente",
      "RAG con evaluación automática",
      "pipelines de datos",
      "microservicios en la nube",
    ],
    tagline:
      "Llevo IA y datos a producción: agentes sobre Amazon Bedrock AgentCore, pipelines con dbt y DuckDB, y servicios en AWS y GCP. Vengo del desarrollo full-stack, así que también me encargo de que todo funcione de punta a punta.",
    ctaPrimary: "Ver proyectos de IA",
    ctaSecondary: "Descargar CV",
    stats: [
      { value: 3, prefix: "", suffix: "+", decimals: 0, label: "años construyendo software en empresas" },
      { value: 5, prefix: "", suffix: "", decimals: 0, label: "agentes orquestados en un solo sistema" },
      { value: 0.93, prefix: "", suffix: "", decimals: 2, label: "de correctness evaluado con un LLM como juez" },
      { value: 0, prefix: "$", suffix: "", decimals: 0, label: "de infraestructura para un pipeline en producción" },
    ],
  },
  common: {
    seeCase: "Ver caso completo",
    code: "Código",
    back: "Volver",
    stack: "Stack",
    architecture: "Arquitectura",
    context: "Contexto",
    decisions: "Decisiones técnicas",
    challenge: "El bug más interesante",
    results: "Resultados",
    production: "Qué haría en producción",
    problem: "Problema",
    solution: "Solución",
    impact: "Impacto",
    seeMore: "Ver más",
    developedWith: "Desarrollado con:",
    next: "Siguiente proyecto",
    flowHint: "Flujo de una solicitud",
  },
  ai: {
    eyebrow: "AI Engineering",
    title: "Sistemas de IA",
    subtitle:
      "Agentes, RAG, memoria y evaluación sobre Amazon Bedrock AgentCore. Cada proyecto incluye su arquitectura, las decisiones que tomé y los bugs que resolví.",
    items: [
      {
        slug: "multi-agent-support",
        title: "Sistema multi-agente de soporte",
        subtitle: "Amazon Bedrock AgentCore · Strands Agents",
        color: "#F59E0B",
        summary:
          "Un orquestador enruta cada solicitud a 4 agentes especialistas. El agente de políticas consulta 3 Knowledge Bases en paralelo y todos comparten estado en DynamoDB, con guardrails y trazas de punta a punta.",
        note: "Proyecto final del Agentic AI Engineer Nanodegree (Udacity).",
        github: "https://github.com/EdgarMS760/multi-agent-ecommerce",
        image: "multiAgentArchitecture",
        metrics: [
          { value: "5", label: "agentes" },
          { value: "3", label: "Knowledge Bases en paralelo" },
          { value: "E2E", label: "trazas en X-Ray" },
        ],
        flow: [
          ["Cliente"],
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
          "Sistema de atención a clientes para una tienda en línea ficticia. Una solicitud como «quiero devolver mi pedido» necesita datos del pedido, las políticas de devolución, una decisión de elegibilidad y una respuesta empática. En lugar de un agente que haga todo, cada paso lo resuelve un agente especialista con sus propias herramientas, y el orquestador coordina el flujo.",
        decisions: [
          {
            title: "Modelo pequeño para enrutar, grande para razonar",
            text: "El orquestador usa Claude Haiku 4.5, rápido y barato, solo para decidir a quién delegar. Los especialistas usan Sonnet 4.5, donde sí hace falta razonamiento.",
          },
          {
            title: "RAG paralelo con varios agentes",
            text: "El PolicyAgent lanza 3 sub-agentes recuperadores (devoluciones, envíos y garantías) en paralelo con ThreadPoolExecutor, junta los resultados y los deduplica por relevancia.",
          },
          {
            title: "Estado compartido con bloqueo optimista",
            text: "Una tabla WorkflowState en DynamoDB con escrituras condicionales por versión evita que dos agentes sobrescriban el trabajo del otro.",
          },
          {
            title: "Cero datos inventados",
            text: "Los agentes solo reportan lo que devuelven sus herramientas: si un pedido no existe, lo dicen. Bedrock Guardrails bloquea PII, contenido dañino y temas fuera de alcance.",
          },
          {
            title: "Observabilidad de punta a punta",
            text: "Cada llamada a herramienta queda como subsegmento en X-Ray (Orchestrator → Worker → Knowledge Base), tanto en local como en el runtime desplegado.",
          },
        ],
        challenge: null,
        results: [
          "Enrutamiento automático entre 4 especialistas según la intención del cliente.",
          "Decisiones de reembolso según reglas de negocio (30 días Standard, 60 días Premium) verificadas contra la base de datos, no por el modelo.",
          "Desplegado en AgentCore Runtime con la CLI de AgentCore y AWS CDK.",
        ],
        production: null,
      },
      {
        slug: "support-chatbot-evals",
        title: "Chatbot de soporte con evaluación automática",
        subtitle: "AgentCore Harness · Bedrock Evaluations",
        color: "#14B8A6",
        summary:
          "Todo el enrutamiento vive en un solo system prompt, y una suite de 14 casos lo evalúa con un LLM como juez. Así cada cambio al prompt se mide con datos y no por intuición.",
        note: "Proyecto del Agentic AI Engineer Nanodegree (Udacity).",
        github: "https://github.com/EdgarMS760/customer-support-agentcore",
        image: null,
        metrics: [
          { value: "0.857 → 0.929", label: "correctness" },
          { value: "14", label: "casos de prueba" },
          { value: "3", label: "rutas + edge cases" },
        ],
        flow: [
          ["Cliente"],
          ["System prompt · Nova Pro"],
          ["Reporte de bug", "Pregunta FAQ", "Otro"],
          ["Gateway → Lambda → DynamoDB", "FAQ embebido", "Soporte humano"],
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
          "Chatbot para una tienda en línea que atiende tres tipos de mensajes: reportes de bugs (recopila descripción, pasos y entorno en varios turnos y abre un ticket), preguntas sobre la plataforma (responde solo desde el FAQ, sin inventar políticas) y todo lo demás (lo canaliza a soporte humano). El reto principal fue el prompt engineering y cómo medirlo.",
        decisions: [
          {
            title: "El prompt como router",
            text: "Sin clasificador aparte ni grafo de estados: el harness pone el ciclo del agente y el system prompt define el comportamiento. Es menos infraestructura y más fácil de iterar.",
          },
          {
            title: "Herramienta detrás de un Gateway",
            text: "create_bug_report es una Lambda que escribe en DynamoDB, expuesta al agente mediante AgentCore Gateway y aprovisionada con CloudFormation.",
          },
          {
            title: "Suite con edge cases reales",
            text: "Además de las 3 rutas: mensajes ambiguos, prompt injection, inyección de comandos, intención mixta, mensajes en español, mensajes hostiles y mensajes vacíos.",
          },
          {
            title: "Iterar con métricas",
            text: "Bedrock Evaluations (Builtin.Correctness, LLM como juez) entre versiones del prompt. Corregí el manejo de mensajes vacíos, la respuesta en el idioma del cliente y las intenciones mixtas, y subió de 0.857 a 0.929.",
          },
        ],
        challenge: {
          title: "Datos de otros clientes en los tickets",
          text: "Los tickets se llenaban con datos inventados demasiado específicos, como «Firefox on Windows 11», copiados literalmente de una conversación anterior y sin relación. La causa: el script nunca configuraba el parámetro memory, y AgentCore aprovisionaba automáticamente una memoria compartida entre todas las sesiones, así que el modelo recordaba datos de otros clientes. Lo resolví desactivando la memoria explícitamente al crear y actualizar el harness.",
        },
        results: [
          "Correctness de 0.857 (12/14) a 0.929 (13/14) entre dos corridas de evaluación.",
          "El único caso restante fue una generación vacía aislada; lo identifiqué revisando la respuesta cruda del modelo, no era un error de lógica.",
          "También corregí un test cuyo valor esperado no coincidía con el FAQ real: evaluar el dataset también es parte del trabajo.",
        ],
        production: null,
      },
      {
        slug: "agent-memory-tools",
        title: "Agente con memoria de largo plazo",
        subtitle: "AgentCore Memory · Code Interpreter · Browser · MCP",
        color: "#8B5CF6",
        summary:
          "Agente de soporte que recuerda las preferencias del cliente entre sesiones, consulta una Knowledge Base, hace cálculos exactos en un sandbox y navega la web, con herramientas expuestas por MCP.",
        note: "Proyecto de un programa de Udacity sobre Amazon Bedrock AgentCore.",
        github: "https://github.com/EdgarMS760/AI-support-agent-aws",
        image: null,
        metrics: [
          { value: "6", label: "escenarios probados en runtime" },
          { value: "MCP", label: "herramientas vía Gateway" },
          { value: "100%", label: "de la aritmética en sandbox" },
        ],
        flow: [
          ["Cliente"],
          ["MemoryHook · recupera contexto"],
          ["Agente · Nova 2 Lite"],
          ["Knowledge Base", "Code Interpreter", "Browser", "Gateway MCP"],
          ["MemoryHook · guarda el turno"],
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
          "Agente desplegado en AgentCore Runtime que da seguimiento a pedidos, procesa reembolsos, responde desde una base de conocimiento, calcula descuentos por lealtad y consulta sitios web. Lo probé con 6 escenarios en el runtime desplegado, incluido uno de memoria de largo plazo entre sesiones.",
        decisions: [
          {
            title: "Memoria con hooks",
            text: "Un MemoryHook recupera hechos y preferencias del cliente antes de cada turno y guarda la interacción al terminar, usando las estrategias de extracción semántica de AgentCore Memory.",
          },
          {
            title: "Los números no los calcula el LLM",
            text: "El descuento por lealtad tiene varios pasos exactos (redondear puntos a múltiplos de 500, tope del 50% y descuento por nivel). Se ejecuta como código en Code Interpreter, así el resultado es correcto sin importar el modelo.",
          },
          {
            title: "Herramientas por MCP",
            text: "Pedidos y reembolsos llegan como herramientas MCP desde AgentCore Gateway. El agente las descubre al iniciar, sin acoplarse a su implementación.",
          },
        ],
        challenge: {
          title: "La memoria se contaminaba a sí misma",
          text: "El hook agregaba los recuerdos al mensaje del usuario, y al guardar el turno se persistía esa versión anotada (un muro de contexto viejo) en lugar de las palabras reales del cliente. Una preferencia como «prefiero respuestas concisas» se diluía y nunca se extraía como hecho. Lo encontré consultando la Memory directamente con el SDK, fuera del agente, y lo resolví guardando la consulta original antes de modificar el mensaje.",
        },
        results: [
          "6 escenarios validados en el runtime: rastreo de pedidos, reembolsos, RAG, memoria de largo plazo, descuentos y browser.",
          "La preferencia del cliente se recuerda correctamente entre sesiones distintas.",
        ],
        production:
          "En pruebas, el modelo reescribía en prosa un monto distinto al que calculó la herramienta. En producción no dejaría que el modelo repita números: validaría el JSON de la herramienta con un esquema de Pydantic y mostraría esos campos directamente en la UI. El modelo solo redactaría la explicación.",
      },
    ],
  },
  cases: {
    eyebrow: "Data Engineering",
    title: "Casos reales",
    subtitle:
      "Sistemas que construí en empresas y que hoy están en producción.",
    items: [
      {
        industry: "Transporte de personal",
        title: "Pipeline analítico de operación y nómina",
        color: "#0EA5E9",
        flow: ["Sistemas legacy", "Ingesta", "dbt + DuckDB", "Reportes y alertas"],
        problem:
          "Los reportes operativos dependían de TI central y de sistemas legacy. Tardaban semanas, y la asignación de viajes dejaba operadores subutilizados.",
        solution:
          "Ingesta desacoplada desde los sistemas legacy y un pipeline en Python, dbt y DuckDB que cruza nóminas con jornadas. Además, monitoreo de flota con historiales y alertas de incidentes. Todo se despliega con Docker y GitHub Actions en AWS.",
        impact: [
          "Reportes de semanas a minutos, sin depender de TI",
          "Asignación de viajes sin subutilización de operadores",
          "Mantenimiento preventivo más rápido gracias a las alertas",
          "$0 de costo de infraestructura en producción",
        ],
        stack: ["Python", "dbt", "DuckDB", "Docker", "GitHub Actions", "AWS"],
      },
      {
        industry: "Logística",
        title: "Evidencias de entrega desde WhatsApp en tiempo real",
        color: "#22C55E",
        flow: ["WhatsApp", "Extracción", "Clasificación", "Registro"],
        problem:
          "Las evidencias de entrega llegaban por WhatsApp y se capturaban a mano en los sistemas; se perdía información operativa crítica.",
        solution:
          "Servicio en Node.js y Python que extrae y clasifica los mensajes en tiempo real y registra las evidencias automáticamente. Además, un bot de WhatsApp que entrega métricas y KPIs a la dirección.",
        impact: [
          "Captura de documentos de un proceso manual a segundos",
          "Sin pérdida de información operativa",
          "KPIs automáticos para la mesa directiva",
        ],
        stack: ["Node.js", "Python", "WhatsApp", "Laravel", "React"],
      },
      {
        industry: "Fintech · pagos",
        title: "Ingesta de transacciones en tiempo real",
        color: "#6366F1",
        flow: ["ISO 8583", "Parsing", "Despacho", "Consola del cliente"],
        problem:
          "Los clientes necesitaban ver sus transacciones al instante, sobre un sistema de adquirencia bancaria que era un monolito heredado.",
        solution:
          "Microservicio en .NET que ingiere y parsea mensajes ISO 8583 y los despacha en tiempo real a una consola de visualización. Participé en la refactorización del monolito y, con arquitectos AWS, en la infraestructura (EC2, RDS, S3, SES y Lambda Web Adapter).",
        impact: [
          "Transacciones visibles para el cliente en tiempo real",
          "Monolito más escalable y con vulnerabilidades mitigadas",
          "Desarrollo más rápido con Claude Code (plugins, hooks y skills propias)",
        ],
        stack: [".NET", "Docker", "ISO 8583", "AWS", "Claude Code"],
      },
    ],
  },
  skills: {
    eyebrow: "Stack",
    title: "Con qué trabajo",
    groups: [
      {
        name: "IA y agentes",
        icon: "🤖",
        items: [
          "Amazon Bedrock",
          "Bedrock AgentCore",
          "Strands Agents",
          "RAG",
          "Knowledge Bases",
          "Guardrails",
          "Evaluación de LLMs",
          "MCP",
          "OpenAI API",
          "IBM watsonx",
        ],
      },
      {
        name: "Datos",
        icon: "📊",
        items: ["Python", "dbt", "DuckDB", "PostgreSQL", "MySQL", "MongoDB", "DynamoDB", "Ingesta / ETL"],
      },
      {
        name: "Cloud y DevOps",
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
        name: "Backend y software",
        icon: "🧩",
        items: ["FastAPI", ".NET", "Node.js", "React", "Microservicios", "REST APIs", "Colas de mensajes"],
      },
    ],
  },
  experience: {
    eyebrow: "Trayectoria",
    title: "Experiencia",
    items: [
      {
        role: "AI Full-Stack Developer",
        org: "Fintech · pagos",
        period: "Ago 2026 – actual",
        text: "Microservicios transaccionales en .NET y Docker (ISO 8583), ingesta en tiempo real e infraestructura en AWS. Automatización de flujos de ingeniería con Claude Code.",
      },
      {
        role: "Ingeniero de Datos e IA",
        org: "Transporte de personal",
        period: "Mar 2026 – Ago 2026",
        text: "Pipelines con Python, dbt y DuckDB, monitoreo de flota y CI/CD con Docker y GitHub Actions en AWS.",
      },
      {
        role: "Desarrollador Full-Stack",
        org: "Logística",
        period: "Abr 2024 – Mar 2026",
        text: "CRM, TMS y ERP con Laravel y React. Extracción y clasificación de mensajes de WhatsApp en tiempo real y bots de KPIs.",
      },
      {
        role: "Practicante Back-End",
        org: "Desarrollo de software",
        period: "Ago 2023 – Abr 2024",
        text: "REST APIs en .NET y colas de mensajes con Artemis entre sistemas distribuidos.",
      },
    ],
    viewCredential: "Ver credencial",
    credentialsTitle: "Certificaciones y logros",
    credentials: [
      { title: "Agentic AI Engineer Nanodegree", org: "Udacity", date: "Oct 2026", url: "https://www.udacity.com/certificate/e/bed60066-900d-11f1-90e4-87e7ef3009f9" },
      { title: "AWS AI Practitioner Challenge", org: "Udacity", date: "Abr 2026" },
      {
        title: "Hackathon IBM · watsonx Orchestrate",
        org: "NLP sobre transcripciones con FastAPI",
        date: "2025",
      },
      {
        title: "Ingeniería de Software y Multimedia",
        org: "FCFM, UANL",
        date: "2021 – 2025",
      },
    ],
  },
  softwareProjects: {
    eyebrow: "Ingeniería de software",
    title: "Proyectos full-stack",
    subtitle:
      "Antes de los datos y la IA vino el software: web, móvil y bases de datos relacionales, construidos de punta a punta.",
  },
  contact: {
    title: "¿Construimos algo?",
    text: "Busco retos como Data / AI Engineer. Si tienes un proyecto o una vacante, escríbeme.",
    email: "edgarsandoval685@gmail.com",
    emailCta: "Escríbeme",
    footer: "Hecho con Astro, Tailwind CSS y GSAP.",
  },
};
