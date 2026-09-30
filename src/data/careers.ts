import { Career } from '../types';

export const CAREERS_DATABASE: Career[] = [
  {
    id: 'ai-pm',
    slug: 'ai-product-manager',
    ticker: 'CB:AIPM',
    title: 'AI Product Manager',
    sector: 'Artificial Intelligence & Platforms',
    summary: 'Orchestrates foundation model deployment, prompt pipelines, LLM product architecture, latency-accuracy tradeoffs, and user-facing agentic workflows.',
    medianSalary: 168000,
    entrySalary: 125000,
    topSalary: 235000,
    hiringVelocity: 38.4,
    remotePercentage: 68,
    automationRisk: {
      level: 'low',
      score: 14,
      rationale: 'High reliance on human cross-functional diplomacy, strategic product judgment, and risk governance.'
    },
    stabilityIndex: 91,
    jobOpeningsCount: 16420,
    weather: {
      status: 'sunny',
      label: 'Sunny · Accelerated Liquidity',
      description: 'Exceptional hiring momentum driven by enterprise generative AI transitions. Compensation premium remains acute for candidates with proven model deployment experience.',
      hiringWindow: 'High velocity (Immediate - 3 months)',
      pressureIndex: 88
    },
    growthHistory: {
      years: ['2023', '2024', '2025', '2026', '2027', '2028'],
      values: [42, 58, 74, 91, 108, 126]
    },
    salaryHistory: {
      years: ['2021', '2022', '2023', '2024', '2025', '2026'],
      values: [128, 136, 148, 158, 164, 168]
    },
    geoSalaries: [
      { location: 'San Francisco Bay Area', median: 198000, currency: 'USD', remoteAvailable: true },
      { location: 'New York Metro', median: 184000, currency: 'USD', remoteAvailable: true },
      { location: 'Seattle / Pacific NW', median: 176000, currency: 'USD', remoteAvailable: true },
      { location: 'London / UK Tech', median: 132000, currency: 'GBP equiv.', remoteAvailable: true },
      { location: 'US Remote Benchmark', median: 162000, currency: 'USD', remoteAvailable: true }
    ],
    radarDimensions: [
      { axis: 'Technical Architecture', marketRequirement: 82 },
      { axis: 'Product & Strategy', marketRequirement: 94 },
      { axis: 'Data & Experimentation', marketRequirement: 86 },
      { axis: 'Leadership & Alignment', marketRequirement: 88 },
      { axis: 'Tooling & Automation', marketRequirement: 76 }
    ],
    skills: [
      {
        id: 'llm-evals',
        name: 'LLM Evaluation & Benchmarking',
        category: 'Data & Analytics',
        marketWeight: 94,
        marketDemandLevel: 'Critical',
        description: 'Design deterministic and model-graded benchmark suites to track hallucination, recall, and safety.',
        typicalWeeksToMaster: 6
      },
      {
        id: 'product-strategy',
        name: 'AI Product Strategy & Roadmap',
        category: 'Product & Strategy',
        marketWeight: 92,
        marketDemandLevel: 'Critical',
        description: 'Defining user value loops, unit economics of token usage, and defensible data flywheels.',
        typicalWeeksToMaster: 8
      },
      {
        id: 'system-arch-rag',
        name: 'RAG & Vector Architecture',
        category: 'Technical',
        marketWeight: 86,
        marketDemandLevel: 'Critical',
        description: 'Understanding semantic retrieval, embeddings chunking, hybrid search, and latency bottlenecks.',
        typicalWeeksToMaster: 7
      },
      {
        id: 'experimentation-ab',
        name: 'A/B Testing & Causal Inference',
        category: 'Data & Analytics',
        marketWeight: 78,
        marketDemandLevel: 'High',
        description: 'Structuring statistical online controlled experiments and behavioral cohort tracking.',
        typicalWeeksToMaster: 5
      },
      {
        id: 'stakeholder-alignment',
        name: 'Executive & Eng Stakeholder Alignment',
        category: 'Leadership & Comms',
        marketWeight: 84,
        marketDemandLevel: 'High',
        description: 'Bridging technical model constraints with legal, security, and C-suite expectations.',
        typicalWeeksToMaster: 4
      },
      {
        id: 'prompt-engineering',
        name: 'Prompt Engineering & Few-Shot Design',
        category: 'Tooling & Automation',
        marketWeight: 72,
        marketDemandLevel: 'Moderate',
        description: 'System prompt design, structured JSON schema outputs, and chain-of-thought orchestration.',
        typicalWeeksToMaster: 3
      }
    ],
    careerPaths: [
      {
        targetRole: 'Director of AI Products',
        timeframe: '2-3 years',
        salaryPotential: 245000,
        frictionScore: 'Low',
        skillOverlap: 84,
        bridgeSkills: ['Portfolio P&L Management', 'Cross-Portfolio Governance', 'Talent Scaling']
      },
      {
        targetRole: 'VP of Product (AI Core)',
        timeframe: '4-5 years',
        salaryPotential: 320000,
        frictionScore: 'Medium',
        skillOverlap: 72,
        bridgeSkills: ['M&A Technical Diligence', 'Board-Level Strategy', 'Enterprise Sales Support']
      },
      {
        targetRole: 'AI Solutions Architect',
        timeframe: '1-2 years',
        salaryPotential: 185000,
        frictionScore: 'Low',
        skillOverlap: 79,
        bridgeSkills: ['Hands-on Cloud Infrastructure', 'API Rate Limiting Systems', 'Enterprise VPC']
      }
    ],
    roadmap: [
      {
        phase: 1,
        title: 'Model Fundamentals & Token Economics',
        timeEstimate: 'Weeks 1-4',
        focus: 'Understand transformer inference latencies, context windows, cost per token, and structured tool calling.',
        projectCapstone: {
          title: 'Enterprise AI Unit-Economics Calculator',
          description: 'Interactive financial modeling tool predicting annual API costs across Claude, Gemini, and GPT-4o based on throughput curves.',
          deliverable: 'Live interactive model spreadsheet + PRD specification document.'
        },
        interviewFocalPoints: ['Context window tradeoffs', 'Latency vs cost optimization', 'Structured output JSON constraints']
      },
      {
        phase: 2,
        title: 'Evaluation Frameworks & Safety Guardrails',
        timeEstimate: 'Weeks 5-8',
        focus: 'Implement automated test harnesses to detect regressions in domain-specific tasks.',
        projectCapstone: {
          title: 'Automated Ground-Truth LLM Evaluation Suite',
          description: 'A 200-sample test harness measuring precision, hallucination rate, and adversarial jailbreak compliance.',
          deliverable: 'Evaluation report comparing 3 distinct prompt architectures with statistical confidence bounds.'
        },
        interviewFocalPoints: ['Model-graded vs deterministic evals', 'False negative impact on brand trust', 'Red-teaming protocols']
      },
      {
        phase: 3,
        title: 'Agentic Workflows & Multi-Step Systems',
        timeEstimate: 'Weeks 9-12',
        focus: 'Design human-in-the-loop validation patterns and failure-recovery mechanisms for complex task flows.',
        projectCapstone: {
          title: 'Autonomous Research & Synthesis Agent PRD',
          description: 'Full product specification detailing error recovery, user consent checkpoints, and latency compensation.',
          deliverable: 'Figma interactive flow + technical system architecture diagram + edge-case test grid.'
        },
        interviewFocalPoints: ['State management in agent loops', 'Human-in-the-loop intervention criteria', 'Graceful degradation']
      }
    ]
  },
  {
    id: 'ml-sys-eng',
    slug: 'machine-learning-engineer',
    ticker: 'CB:MLE',
    title: 'Machine Learning Systems Engineer',
    sector: 'Engineering & Deep Tech',
    summary: 'Builds scalable training clusters, model serving pipelines, distributed inference engines, and low-latency quantization layers.',
    medianSalary: 182000,
    entrySalary: 135000,
    topSalary: 260000,
    hiringVelocity: 42.1,
    remotePercentage: 58,
    automationRisk: {
      level: 'low',
      score: 11,
      rationale: 'Core hardware-software optimization, kernel engineering, and distributed systems logic cannot be automated.'
    },
    stabilityIndex: 94,
    jobOpeningsCount: 19800,
    weather: {
      status: 'sunny',
      label: 'Sunny · Acute Talent Premium',
      description: 'Extremely aggressive corporate competition for engineers capable of optimizing GPU memory bandwidth, vLLM/TensorRT pipelines, and low-precision inference.',
      hiringWindow: 'Immediate priority (0-2 months)',
      pressureIndex: 92
    },
    growthHistory: {
      years: ['2023', '2024', '2025', '2026', '2027', '2028'],
      values: [50, 68, 88, 112, 134, 155]
    },
    salaryHistory: {
      years: ['2021', '2022', '2023', '2024', '2025', '2026'],
      values: [138, 148, 162, 172, 178, 182]
    },
    geoSalaries: [
      { location: 'San Francisco Bay Area', median: 215000, currency: 'USD', remoteAvailable: true },
      { location: 'Seattle / Bellevue', median: 195000, currency: 'USD', remoteAvailable: true },
      { location: 'New York Metro', median: 192000, currency: 'USD', remoteAvailable: true },
      { location: 'Zurich / Tech Hub', median: 180000, currency: 'CHF equiv.', remoteAvailable: true },
      { location: 'US Remote Benchmark', median: 175000, currency: 'USD', remoteAvailable: true }
    ],
    radarDimensions: [
      { axis: 'Technical Architecture', marketRequirement: 96 },
      { axis: 'Product & Strategy', marketRequirement: 60 },
      { axis: 'Data & Experimentation', marketRequirement: 92 },
      { axis: 'Leadership & Alignment', marketRequirement: 68 },
      { axis: 'Tooling & Automation', marketRequirement: 90 }
    ],
    skills: [
      {
        id: 'distributed-inference',
        name: 'Distributed Inference & vLLM/TGI',
        category: 'Technical',
        marketWeight: 96,
        marketDemandLevel: 'Critical',
        description: 'Optimizing continuous batching, PagedAttention, speculative decoding, and tensor parallelism.',
        typicalWeeksToMaster: 9
      },
      {
        id: 'quantization-cuda',
        name: 'Model Quantization (AWQ/GPTQ) & CUDA',
        category: 'Technical',
        marketWeight: 90,
        marketDemandLevel: 'Critical',
        description: 'Reducing memory footprint from FP16 to INT8/INT4 while maintaining perplexity thresholds.',
        typicalWeeksToMaster: 8
      },
      {
        id: 'pytorch-training',
        name: 'PyTorch & Distributed Training',
        category: 'Data & Analytics',
        marketWeight: 88,
        marketDemandLevel: 'Critical',
        description: 'FSDP, DeepSpeed ZeRO stages, gradient accumulation, and checkpoint sharding.',
        typicalWeeksToMaster: 7
      },
      {
        id: 'mlops-orchestration',
        name: 'MLOps & Kubernetes Orchestration',
        category: 'Tooling & Automation',
        marketWeight: 84,
        marketDemandLevel: 'High',
        description: 'KServe, Ray clusters, Triton Inference Server, and automated GPU node autoscaling.',
        typicalWeeksToMaster: 6
      },
      {
        id: 'latency-profiling',
        name: 'Performance Profiling & Bottleneck Analysis',
        category: 'System Architecture',
        marketWeight: 82,
        marketDemandLevel: 'High',
        description: 'Nsight systems profiling, memory bandwidth saturation diagnostics, and kernel benchmarking.',
        typicalWeeksToMaster: 5
      }
    ],
    careerPaths: [
      {
        targetRole: 'Staff ML Infrastructure Engineer',
        timeframe: '2-3 years',
        salaryPotential: 275000,
        frictionScore: 'Low',
        skillOverlap: 89,
        bridgeSkills: ['Cluster Reliability Engineering', 'Multi-tenant Resource Isolation', 'Custom Hardware Compilers']
      },
      {
        targetRole: 'Head of Applied AI Research',
        timeframe: '4-5 years',
        salaryPotential: 340000,
        frictionScore: 'High',
        skillOverlap: 70,
        bridgeSkills: ['Research Publication Leadership', 'Budget Allocation', 'Talent Acquisition']
      }
    ],
    roadmap: [
      {
        phase: 1,
        title: 'Kernel & Inference Optimization',
        timeEstimate: 'Weeks 1-5',
        focus: 'Profiling GPU memory latency, FlashAttention implementations, and batch scheduling.',
        projectCapstone: {
          title: 'High-Throughput Local LLM Serving Cluster',
          description: 'Deploy a multi-GPU vLLM cluster with continuous batching, streaming SSE tokens, and Prometheus latency dashboards.',
          deliverable: 'Reproducible Docker Compose repository with benchmark suite showing TTFT and tokens/sec.'
        },
        interviewFocalPoints: ['PagedAttention mechanism', 'Time to First Token (TTFT) trade-offs', 'KV-cache management']
      },
      {
        phase: 2,
        title: 'Quantization & Fine-Tuning Pipelines',
        timeEstimate: 'Weeks 6-10',
        focus: 'LoRA, QLoRA, and parameter-efficient tuning on enterprise proprietary corpora.',
        projectCapstone: {
          title: 'Domain-Specialized 4-Bit Model Pipeline',
          description: 'Fine-tune an open-source 8B model on financial tabular data and quantize to AWQ with minimal perplexity degradation.',
          deliverable: 'Weight repository, evaluation benchmark script, and validation report.'
        },
        interviewFocalPoints: ['LoRA rank tuning', 'Quantization error mitigation', 'Training gradient stability']
      }
    ]
  },
  {
    id: 'swe-fullstack',
    slug: 'senior-fullstack-engineer',
    ticker: 'CB:SWE',
    title: 'Senior Full-Stack Engineer',
    sector: 'Software Engineering',
    summary: 'Designs scalable web architectures, resilient database schemas, responsive client interfaces, and high-performance serverless or containerized backends.',
    medianSalary: 142000,
    entrySalary: 105000,
    topSalary: 195000,
    hiringVelocity: 14.8,
    remotePercentage: 76,
    automationRisk: {
      level: 'moderate',
      score: 36,
      rationale: 'Boilerplate code generation is increasingly handled by AI assistants, shifting demand toward complex architectural design and systems cohesion.'
    },
    stabilityIndex: 86,
    jobOpeningsCount: 38400,
    weather: {
      status: 'overcast',
      label: 'Overcast · Elevated Competition',
      description: 'Healthy volume of openings, but hiring bars have escalated significantly. Companies prioritize engineers with deep system design and performance engineering skills over generalists.',
      hiringWindow: 'Moderate pace (2-4 months)',
      pressureIndex: 68
    },
    growthHistory: {
      years: ['2023', '2024', '2025', '2026', '2027', '2028'],
      values: [70, 75, 80, 86, 92, 98]
    },
    salaryHistory: {
      years: ['2021', '2022', '2023', '2024', '2025', '2026'],
      values: [124, 132, 136, 138, 140, 142]
    },
    geoSalaries: [
      { location: 'San Francisco Bay Area', median: 172000, currency: 'USD', remoteAvailable: true },
      { location: 'New York Metro', median: 160000, currency: 'USD', remoteAvailable: true },
      { location: 'Austin / Texas Tech', median: 145000, currency: 'USD', remoteAvailable: true },
      { location: 'Berlin / EU Hub', median: 105000, currency: 'EUR equiv.', remoteAvailable: true },
      { location: 'US Remote Benchmark', median: 138000, currency: 'USD', remoteAvailable: true }
    ],
    radarDimensions: [
      { axis: 'Technical Architecture', marketRequirement: 92 },
      { axis: 'Product & Strategy', marketRequirement: 65 },
      { axis: 'Data & Experimentation', marketRequirement: 70 },
      { axis: 'Leadership & Alignment', marketRequirement: 75 },
      { axis: 'Tooling & Automation', marketRequirement: 84 }
    ],
    skills: [
      {
        id: 'system-design',
        name: 'Distributed Systems & Microservices',
        category: 'Technical',
        marketWeight: 92,
        marketDemandLevel: 'Critical',
        description: 'Scalable message brokers, event-driven architectures, caching layers, and database sharding.',
        typicalWeeksToMaster: 8
      },
      {
        id: 'react-next',
        name: 'Modern React & TypeScript Ecosystem',
        category: 'Technical',
        marketWeight: 88,
        marketDemandLevel: 'Critical',
        description: 'Server components, concurrent rendering, state isolation, and bundle performance budgets.',
        typicalWeeksToMaster: 6
      },
      {
        id: 'sql-db-perf',
        name: 'PostgreSQL & Database Optimization',
        category: 'Data & Analytics',
        marketWeight: 86,
        marketDemandLevel: 'Critical',
        description: 'Index strategies, query execution plans, connection pool tuning, and transaction isolation.',
        typicalWeeksToMaster: 6
      },
      {
        id: 'devops-ci-cd',
        name: 'CI/CD & Cloud Infrastructure (AWS)',
        category: 'Tooling & Automation',
        marketWeight: 78,
        marketDemandLevel: 'High',
        description: 'Terraform, Docker containerization, edge CDN routing, and automated canary deployments.',
        typicalWeeksToMaster: 5
      },
      {
        id: 'api-security',
        name: 'API Security & Zero-Trust Auth',
        category: 'System Architecture',
        marketWeight: 80,
        marketDemandLevel: 'High',
        description: 'OAuth 2.1, JWT rotation, rate limiting, and defensive input sanitization.',
        typicalWeeksToMaster: 4
      }
    ],
    careerPaths: [
      {
        targetRole: 'Principal Systems Architect',
        timeframe: '3-4 years',
        salaryPotential: 225000,
        frictionScore: 'Low',
        skillOverlap: 86,
        bridgeSkills: ['High-throughput Distributed Consensus', 'Enterprise Governance', 'Vendor Audits']
      },
      {
        targetRole: 'Engineering Manager',
        timeframe: '2-3 years',
        salaryPotential: 195000,
        frictionScore: 'Medium',
        skillOverlap: 75,
        bridgeSkills: ['People Management', 'Sprint Capacity Forecasting', 'Org Budgeting']
      }
    ],
    roadmap: [
      {
        phase: 1,
        title: 'Deep System Architecture & Sharding',
        timeEstimate: 'Weeks 1-4',
        focus: 'Mastering distributed state, consistency guarantees, and sub-50ms API SLAs.',
        projectCapstone: {
          title: 'Multi-Tenant Collaborative Workspace Backend',
          description: 'High-concurrency document synchronization server with optimistic locking and Redis pub-sub invalidation.',
          deliverable: 'Production deployment with k6 load test logs handling 10,000 req/sec.'
        },
        interviewFocalPoints: ['Eventual vs strong consistency', 'Cache stampede mitigation', 'Deadlock detection']
      }
    ]
  },
  {
    id: 'cloud-architect',
    slug: 'cloud-solutions-architect',
    ticker: 'CB:CLD',
    title: 'Cloud Solutions Architect',
    sector: 'Cloud & Infrastructure',
    summary: 'Designs resilient, multi-region cloud infrastructures, cost optimization frameworks, disaster recovery postures, and enterprise security perimeters.',
    medianSalary: 165000,
    entrySalary: 128000,
    topSalary: 230000,
    hiringVelocity: 22.3,
    remotePercentage: 72,
    automationRisk: {
      level: 'low',
      score: 16,
      rationale: 'Hybrid architecture planning, legacy modernization, and contractual cloud governance require human strategic foresight.'
    },
    stabilityIndex: 93,
    jobOpeningsCount: 22100,
    weather: {
      status: 'sunny',
      label: 'Sunny · Sustained Capital Inflow',
      description: 'Strong corporate demand as legacy enterprises migrate workloads to hybrid clouds while attempting to curtail spiraling cloud compute bills.',
      hiringWindow: 'Active hiring (1-3 months)',
      pressureIndex: 82
    },
    growthHistory: {
      years: ['2023', '2024', '2025', '2026', '2027', '2028'],
      values: [55, 65, 76, 88, 102, 116]
    },
    salaryHistory: {
      years: ['2021', '2022', '2023', '2024', '2025', '2026'],
      values: [134, 142, 150, 158, 162, 165]
    },
    geoSalaries: [
      { location: 'San Francisco Bay Area', median: 194000, currency: 'USD', remoteAvailable: true },
      { location: 'New York Metro', median: 180000, currency: 'USD', remoteAvailable: true },
      { location: 'Chicago / Midwest', median: 155000, currency: 'USD', remoteAvailable: true },
      { location: 'London / European Hub', median: 125000, currency: 'GBP equiv.', remoteAvailable: true },
      { location: 'US Remote Benchmark', median: 160000, currency: 'USD', remoteAvailable: true }
    ],
    radarDimensions: [
      { axis: 'Technical Architecture', marketRequirement: 94 },
      { axis: 'Product & Strategy', marketRequirement: 72 },
      { axis: 'Data & Experimentation', marketRequirement: 65 },
      { axis: 'Leadership & Alignment', marketRequirement: 82 },
      { axis: 'Tooling & Automation', marketRequirement: 88 }
    ],
    skills: [
      {
        id: 'aws-infra',
        name: 'AWS / GCP Multi-Account Architecture',
        category: 'Technical',
        marketWeight: 94,
        marketDemandLevel: 'Critical',
        description: 'VPC peering, Transit Gateways, Direct Connect, and identity federation across clouds.',
        typicalWeeksToMaster: 8
      },
      {
        id: 'finops',
        name: 'Cloud FinOps & Cost Governance',
        category: 'Product & Strategy',
        marketWeight: 88,
        marketDemandLevel: 'Critical',
        description: 'Reserved instance planning, spot termination handling, and idle resource reduction algorithms.',
        typicalWeeksToMaster: 5
      },
      {
        id: 'terraform-iac',
        name: 'Terraform & Infrastructure-as-Code',
        category: 'Tooling & Automation',
        marketWeight: 90,
        marketDemandLevel: 'Critical',
        description: 'Modular Terraform states, automated drift detection, and CI pipeline validation.',
        typicalWeeksToMaster: 6
      },
      {
        id: 'disaster-recovery',
        name: 'Disaster Recovery (RTO/RPO) & High Availability',
        category: 'System Architecture',
        marketWeight: 84,
        marketDemandLevel: 'High',
        description: 'Active-active multi-region failover, automated cross-region database replication.',
        typicalWeeksToMaster: 5
      }
    ],
    careerPaths: [
      {
        targetRole: 'Chief Technology Officer (Infrastructure)',
        timeframe: '4-6 years',
        salaryPotential: 290000,
        frictionScore: 'Medium',
        skillOverlap: 78,
        bridgeSkills: ['Vendor Negotiation', 'Global Regulatory Compliance', 'Executive Leadership']
      }
    ],
    roadmap: [
      {
        phase: 1,
        title: 'Zero-Trust Multi-Region Blueprint',
        timeEstimate: 'Weeks 1-6',
        focus: 'Design resilient distributed perimeters and automated failover.',
        projectCapstone: {
          title: 'Automated Multi-Cloud Failover Topology',
          description: 'Deploy an automated multi-region active-passive failover with Route 53 health routing and Aurora Global Database.',
          deliverable: 'Complete Terraform module + chaos engineering breakdown test report.'
        },
        interviewFocalPoints: ['Split-brain resolution', 'RTO vs RPO trade-offs', 'Egress fee reduction strategies']
      }
    ]
  },
  {
    id: 'cyber-security',
    slug: 'cybersecurity-architect',
    ticker: 'CB:CSEC',
    title: 'Cybersecurity Operations Architect',
    sector: 'Information Security',
    summary: 'Constructs proactive threat hunting systems, automated SIEM/SOAR pipelines, zero-trust architectures, and cryptographic integrity frameworks.',
    medianSalary: 158000,
    entrySalary: 120000,
    topSalary: 220000,
    hiringVelocity: 31.6,
    remotePercentage: 62,
    automationRisk: {
      level: 'low',
      score: 9,
      rationale: 'Adversarial human psychology, zero-day threat response, and forensic containment demand real-time human intuition.'
    },
    stabilityIndex: 96,
    jobOpeningsCount: 24700,
    weather: {
      status: 'sunny',
      label: 'Sunny · Defensive Moat Premium',
      description: 'Heightened geopolitical conflicts and ransomware sophistication have made defensive cybersecurity an untouchable budget item in corporate boardrooms.',
      hiringWindow: 'High urgency (Immediate - 2 months)',
      pressureIndex: 89
    },
    growthHistory: {
      years: ['2023', '2024', '2025', '2026', '2027', '2028'],
      values: [62, 74, 86, 99, 114, 130]
    },
    salaryHistory: {
      years: ['2021', '2022', '2023', '2024', '2025', '2026'],
      values: [126, 134, 144, 150, 154, 158]
    },
    geoSalaries: [
      { location: 'Washington D.C. Metro', median: 185000, currency: 'USD', remoteAvailable: true },
      { location: 'San Francisco Bay Area', median: 190000, currency: 'USD', remoteAvailable: true },
      { location: 'New York Metro', median: 178000, currency: 'USD', remoteAvailable: true },
      { location: 'Tel Aviv / Security Hub', median: 165000, currency: 'ILS equiv.', remoteAvailable: true },
      { location: 'US Remote Benchmark', median: 154000, currency: 'USD', remoteAvailable: true }
    ],
    radarDimensions: [
      { axis: 'Technical Architecture', marketRequirement: 94 },
      { axis: 'Product & Strategy', marketRequirement: 62 },
      { axis: 'Data & Experimentation', marketRequirement: 78 },
      { axis: 'Leadership & Alignment', marketRequirement: 80 },
      { axis: 'Tooling & Automation', marketRequirement: 86 }
    ],
    skills: [
      {
        id: 'threat-hunting',
        name: 'Proactive Threat Hunting & SIEM (Splunk/Sentinel)',
        category: 'Data & Analytics',
        marketWeight: 92,
        marketDemandLevel: 'Critical',
        description: 'Analyzing anomalous telemetry, behavioral egress spikes, and indicator-of-compromise signatures.',
        typicalWeeksToMaster: 7
      },
      {
        id: 'zero-trust',
        name: 'Zero-Trust Architecture & IAM Governance',
        category: 'System Architecture',
        marketWeight: 90,
        marketDemandLevel: 'Critical',
        description: 'Implementing micro-segmentation, continuous authentication, and least-privilege policies.',
        typicalWeeksToMaster: 6
      },
      {
        id: 'incident-response',
        name: 'Incident Response & Forensic Isolation',
        category: 'Leadership & Comms',
        marketWeight: 86,
        marketDemandLevel: 'Critical',
        description: 'Orchestrating forensic memory dumps, legal communication trees, and containment runbooks.',
        typicalWeeksToMaster: 5
      }
    ],
    careerPaths: [
      {
        targetRole: 'Chief Information Security Officer (CISO)',
        timeframe: '4-6 years',
        salaryPotential: 310000,
        frictionScore: 'Medium',
        skillOverlap: 82,
        bridgeSkills: ['Boardroom Risk Reporting', 'SEC Cybersecurity Disclosures', 'Global Insurance Audit']
      }
    ],
    roadmap: [
      {
        phase: 1,
        title: 'Zero-Trust Perimeter & SOAR Automation',
        timeEstimate: 'Weeks 1-5',
        focus: 'Automating defensive telemetry and instant isolation scripts.',
        projectCapstone: {
          title: 'Automated Ransomware Containment Pipeline',
          description: 'Construct a SOAR webhook pipeline that detects mass file write signatures and automatically severs network interfaces in under 2 seconds.',
          deliverable: 'Tested Python/SOAR automation script + incident response table-top runbook.'
        },
        interviewFocalPoints: ['Containment vs evidence preservation', 'Lateral movement detection', 'Zero-trust certificate pinning']
      }
    ]
  },
  {
    id: 'data-scientist',
    slug: 'lead-data-scientist',
    ticker: 'CB:DATA',
    title: 'Lead Data Scientist & Analytics Lead',
    sector: 'Data & Applied Intelligence',
    summary: 'Translates high-dimensional corporate data into actionable predictive engines, causal business models, customer lifetime algorithms, and forecasting systems.',
    medianSalary: 146000,
    entrySalary: 110000,
    topSalary: 205000,
    hiringVelocity: 16.2,
    remotePercentage: 66,
    automationRisk: {
      level: 'moderate',
      score: 32,
      rationale: 'Basic SQL querying and standardized regression models are increasingly automated; value has pivoted entirely toward domain interpretation and causal inference.'
    },
    stabilityIndex: 87,
    jobOpeningsCount: 28900,
    weather: {
      status: 'overcast',
      label: 'Overcast · Maturing Discipline',
      description: 'The market has transitioned away from generic data science toward specialized causal inference, production ML integration, and direct revenue enablement.',
      hiringWindow: 'Selective hiring (2-4 months)',
      pressureIndex: 65
    },
    growthHistory: {
      years: ['2023', '2024', '2025', '2026', '2027', '2028'],
      values: [65, 72, 79, 87, 95, 104]
    },
    salaryHistory: {
      years: ['2021', '2022', '2023', '2024', '2025', '2026'],
      values: [122, 130, 138, 142, 144, 146]
    },
    geoSalaries: [
      { location: 'San Francisco Bay Area', median: 178000, currency: 'USD', remoteAvailable: true },
      { location: 'New York Metro', median: 168000, currency: 'USD', remoteAvailable: true },
      { location: 'Boston / Biotech Hub', median: 154000, currency: 'USD', remoteAvailable: true },
      { location: 'London / UK Tech', median: 110000, currency: 'GBP equiv.', remoteAvailable: true },
      { location: 'US Remote Benchmark', median: 142000, currency: 'USD', remoteAvailable: true }
    ],
    radarDimensions: [
      { axis: 'Technical Architecture', marketRequirement: 78 },
      { axis: 'Product & Strategy', marketRequirement: 82 },
      { axis: 'Data & Experimentation', marketRequirement: 96 },
      { axis: 'Leadership & Alignment', marketRequirement: 74 },
      { axis: 'Tooling & Automation', marketRequirement: 80 }
    ],
    skills: [
      {
        id: 'causal-inference',
        name: 'Causal Inference & Quasi-Experiments',
        category: 'Data & Analytics',
        marketWeight: 94,
        marketDemandLevel: 'Critical',
        description: 'Synthetic control methods, difference-in-differences, and instrumental variable estimation.',
        typicalWeeksToMaster: 7
      },
      {
        id: 'python-stats',
        name: 'Advanced Statistical Modeling (Python/R)',
        category: 'Data & Analytics',
        marketWeight: 90,
        marketDemandLevel: 'Critical',
        description: 'Bayesian hierarchical models, survival analysis, and probabilistic programming.',
        typicalWeeksToMaster: 6
      },
      {
        id: 'sql-dbt',
        name: 'SQL Analytics & dbt Data Modeling',
        category: 'Technical',
        marketWeight: 88,
        marketDemandLevel: 'Critical',
        description: 'Complex window aggregates, dimensional modeling, and lineage testing in Snowflake/BigQuery.',
        typicalWeeksToMaster: 4
      }
    ],
    careerPaths: [
      {
        targetRole: 'Head of Analytics & Insights',
        timeframe: '2-4 years',
        salaryPotential: 215000,
        frictionScore: 'Low',
        skillOverlap: 85,
        bridgeSkills: ['C-Suite Executive Storytelling', 'Departmental P&L Attribution']
      }
    ],
    roadmap: [
      {
        phase: 1,
        title: 'Causal Inference in Production',
        timeEstimate: 'Weeks 1-4',
        focus: 'Differentiating real incremental uplift from correlational churn patterns.',
        projectCapstone: {
          title: 'Synthetic Control Experiment on Enterprise Retention',
          description: 'Build an open causal attribution model testing the true net revenue impact of product feature releases.',
          deliverable: 'Jupyter notebook reproducible report with bootstrapping confidence intervals.'
        },
        interviewFocalPoints: ['Confounding variable identification', 'Selection bias corrections', 'Power calculation formulas']
      }
    ]
  },
  {
    id: 'quant-trader',
    slug: 'quantitative-research-analyst',
    ticker: 'CB:QUANT',
    title: 'Quantitative Research Analyst',
    sector: 'Financial Technology & Capital Markets',
    summary: 'Designs statistical arbitrage models, high-frequency execution algorithms, microstructure alpha strategies, and multi-asset risk optimization engines.',
    medianSalary: 210000,
    entrySalary: 155000,
    topSalary: 380000,
    hiringVelocity: 26.5,
    remotePercentage: 24,
    automationRisk: {
      level: 'low',
      score: 12,
      rationale: 'Zero-sum competitive markets constantly adapt to existing algorithms; human mathematical discovery remains paramount.'
    },
    stabilityIndex: 89,
    jobOpeningsCount: 7800,
    weather: {
      status: 'sunny',
      label: 'Sunny · Ultra-High Compensation Ceiling',
      description: 'Tremendous hedge fund and proprietary trading firm demand for top mathematical talent. Discretionary bonuses can exceed 100-200% of base salary.',
      hiringWindow: 'Extremely competitive / Rolling',
      pressureIndex: 95
    },
    growthHistory: {
      years: ['2023', '2024', '2025', '2026', '2027', '2028'],
      values: [58, 67, 78, 91, 105, 122]
    },
    salaryHistory: {
      years: ['2021', '2022', '2023', '2024', '2025', '2026'],
      values: [170, 182, 192, 200, 206, 210]
    },
    geoSalaries: [
      { location: 'New York Metro (Wall St)', median: 245000, currency: 'USD', remoteAvailable: false },
      { location: 'Chicago / Trading Desks', median: 225000, currency: 'USD', remoteAvailable: false },
      { location: 'London / Canary Wharf', median: 195000, currency: 'GBP equiv.', remoteAvailable: false },
      { location: 'Singapore / Asian Markets', median: 190000, currency: 'SGD equiv.', remoteAvailable: false },
      { location: 'Remote / Hybrid Exception', median: 195000, currency: 'USD', remoteAvailable: true }
    ],
    radarDimensions: [
      { axis: 'Technical Architecture', marketRequirement: 88 },
      { axis: 'Product & Strategy', marketRequirement: 55 },
      { axis: 'Data & Experimentation', marketRequirement: 98 },
      { axis: 'Leadership & Alignment', marketRequirement: 58 },
      { axis: 'Tooling & Automation', marketRequirement: 84 }
    ],
    skills: [
      {
        id: 'stochastic-calculus',
        name: 'Stochastic Calculus & Time-Series Alpha',
        category: 'Data & Analytics',
        marketWeight: 98,
        marketDemandLevel: 'Critical',
        description: 'Autoregressive models, cointegration, Ornstein-Uhlenbeck mean-reversion, and cross-asset signal discovery.',
        typicalWeeksToMaster: 12
      },
      {
        id: 'cpp-performance',
        name: 'High-Performance C++ & Memory Pinning',
        category: 'Technical',
        marketWeight: 92,
        marketDemandLevel: 'Critical',
        description: 'Cache-locality optimization, zero-allocation loops, lock-free queues, and tick-level orderbook parsing.',
        typicalWeeksToMaster: 10
      },
      {
        id: 'risk-var',
        name: 'Portfolio Risk & Value-at-Risk (VaR)',
        category: 'Data & Analytics',
        marketWeight: 86,
        marketDemandLevel: 'High',
        description: 'Expected shortfall calculations, stress testing against liquidity crises, and factor covariance matrices.',
        typicalWeeksToMaster: 6
      }
    ],
    careerPaths: [
      {
        targetRole: 'Portfolio Manager (Alpha Fund)',
        timeframe: '3-5 years',
        salaryPotential: 500000,
        frictionScore: 'High',
        skillOverlap: 88,
        bridgeSkills: ['Capital Allocation Mandates', 'Investor Capital Raising', 'Downside Drawdown Management']
      }
    ],
    roadmap: [
      {
        phase: 1,
        title: 'Orderbook Microstructure & Alpha Backtesting',
        timeEstimate: 'Weeks 1-6',
        focus: 'Avoid backtest overfitting, lookahead bias, and transaction cost drag.',
        projectCapstone: {
          title: 'Event-Driven Tick Data Backtester in C++',
          description: 'Build an ultra-low-latency tick backtesting engine evaluating a mean-reverting ETF pair trading strategy with slippage estimation.',
          deliverable: 'C++ codebase + performance tear sheet measuring Sharpe, Sortino, and Max Drawdown.'
        },
        interviewFocalPoints: ['Sharpe ratio decay', 'Slippage and latency arbitrage', 'Overfitting detection via walk-forward analysis']
      }
    ]
  },
  {
    id: 'product-designer',
    slug: 'staff-product-designer',
    ticker: 'CB:UXD',
    title: 'Staff Product Designer & Systems Lead',
    sector: 'Design & Human-Computer Interaction',
    summary: 'Architects comprehensive multi-platform design systems, interaction patterns for AI and generative tools, and frictionless enterprise workflows.',
    medianSalary: 148000,
    entrySalary: 112000,
    topSalary: 210000,
    hiringVelocity: 18.7,
    remotePercentage: 82,
    automationRisk: {
      level: 'low',
      score: 18,
      rationale: 'Generative UI tools require human taste, spatial coherence, user empathy research, and systematic component constraints.'
    },
    stabilityIndex: 88,
    jobOpeningsCount: 18200,
    weather: {
      status: 'overcast',
      label: 'Overcast · Taste & Systems Bar',
      description: 'Companies are hiring fewer junior visual designers and actively recruiting senior/staff designers who understand complex workflow mechanics and design tokens.',
      hiringWindow: 'Steady (2-3 months)',
      pressureIndex: 72
    },
    growthHistory: {
      years: ['2023', '2024', '2025', '2026', '2027', '2028'],
      values: [60, 68, 76, 85, 94, 105]
    },
    salaryHistory: {
      years: ['2021', '2022', '2023', '2024', '2025', '2026'],
      values: [120, 128, 136, 142, 146, 148]
    },
    geoSalaries: [
      { location: 'San Francisco Bay Area', median: 182000, currency: 'USD', remoteAvailable: true },
      { location: 'New York Metro', median: 168000, currency: 'USD', remoteAvailable: true },
      { location: 'Los Angeles / West Coast', median: 152000, currency: 'USD', remoteAvailable: true },
      { location: 'Amsterdam / EU Design Hub', median: 112000, currency: 'EUR equiv.', remoteAvailable: true },
      { location: 'US Remote Benchmark', median: 144000, currency: 'USD', remoteAvailable: true }
    ],
    radarDimensions: [
      { axis: 'Technical Architecture', marketRequirement: 68 },
      { axis: 'Product & Strategy', marketRequirement: 92 },
      { axis: 'Data & Experimentation', marketRequirement: 74 },
      { axis: 'Leadership & Alignment', marketRequirement: 86 },
      { axis: 'Tooling & Automation', marketRequirement: 88 }
    ],
    skills: [
      {
        id: 'design-systems',
        name: 'Design Systems Architecture & Tokens',
        category: 'Product & Strategy',
        marketWeight: 94,
        marketDemandLevel: 'Critical',
        description: 'Multi-brand token architectures, Figma component libraries, accessibility compliance (WCAG AAA), and semantic styling contracts.',
        typicalWeeksToMaster: 6
      },
      {
        id: 'ai-ux-patterns',
        name: 'AI Interaction Patterns & Generative UX',
        category: 'Product & Strategy',
        marketWeight: 90,
        marketDemandLevel: 'Critical',
        description: 'Designing non-deterministic interfaces, intent disambiguation, confidence indicators, and human correction loops.',
        typicalWeeksToMaster: 5
      },
      {
        id: 'user-research',
        name: 'Qualitative Discovery & Usability Testing',
        category: 'Leadership & Comms',
        marketWeight: 84,
        marketDemandLevel: 'High',
        description: 'Rapid user prototype testing, Jobs-to-be-Done discovery interviews, and funnel drop-off diagnostics.',
        typicalWeeksToMaster: 4
      }
    ],
    careerPaths: [
      {
        targetRole: 'VP of Design',
        timeframe: '4-5 years',
        salaryPotential: 260000,
        frictionScore: 'Low',
        skillOverlap: 84,
        bridgeSkills: ['Brand Stewardship', 'Executive Influence', 'Design Org Scaling']
      }
    ],
    roadmap: [
      {
        phase: 1,
        title: 'Design Systems & Semantic Token Pipeline',
        timeEstimate: 'Weeks 1-4',
        focus: 'Bridging design contracts directly to production code.',
        projectCapstone: {
          title: 'Production-Grade Multi-Brand Design System',
          description: 'Architect a 40-component design system in Figma with automated style dictionary export into React Tailwind tokens.',
          deliverable: 'Figma community file + documentation site with WCAG compliance audits.'
        },
        interviewFocalPoints: ['Component versioning', 'Engineering handoff rigor', 'Accessible focus-visible management']
      }
    ]
  },
  {
    id: 'devops-platform',
    slug: 'platform-engineer',
    ticker: 'CB:PLAT',
    title: 'Platform Engineer & Site Reliability Lead',
    sector: 'Infrastructure & SRE',
    summary: 'Constructs internal developer platforms (IDP), automated deployment canary engines, distributed telemetry, and incident mitigation runbooks.',
    medianSalary: 162000,
    entrySalary: 122000,
    topSalary: 225000,
    hiringVelocity: 28.4,
    remotePercentage: 74,
    automationRisk: {
      level: 'low',
      score: 13,
      rationale: 'Core infrastructure reliability, multi-datacenter network failures, and real-time chaos recovery require deep systems engineering.'
    },
    stabilityIndex: 94,
    jobOpeningsCount: 21300,
    weather: {
      status: 'sunny',
      label: 'Sunny · Developer Velocity Focus',
      description: 'Companies are aggressively hiring platform teams to eliminate engineer burnout and accelerate release cadence while guarding uptime.',
      hiringWindow: 'Fast-moving (1-2 months)',
      pressureIndex: 86
    },
    growthHistory: {
      years: ['2023', '2024', '2025', '2026', '2027', '2028'],
      values: [54, 66, 78, 92, 108, 124]
    },
    salaryHistory: {
      years: ['2021', '2022', '2023', '2024', '2025', '2026'],
      values: [130, 138, 146, 154, 158, 162]
    },
    geoSalaries: [
      { location: 'San Francisco Bay Area', median: 192000, currency: 'USD', remoteAvailable: true },
      { location: 'Seattle / Pacific NW', median: 178000, currency: 'USD', remoteAvailable: true },
      { location: 'New York Metro', median: 174000, currency: 'USD', remoteAvailable: true },
      { location: 'London / European Hub', median: 128000, currency: 'GBP equiv.', remoteAvailable: true },
      { location: 'US Remote Benchmark', median: 156000, currency: 'USD', remoteAvailable: true }
    ],
    radarDimensions: [
      { axis: 'Technical Architecture', marketRequirement: 94 },
      { axis: 'Product & Strategy', marketRequirement: 64 },
      { axis: 'Data & Experimentation', marketRequirement: 76 },
      { axis: 'Leadership & Alignment', marketRequirement: 78 },
      { axis: 'Tooling & Automation', marketRequirement: 95 }
    ],
    skills: [
      {
        id: 'kubernetes-gitops',
        name: 'Kubernetes Operators & GitOps (ArgoCD)',
        category: 'Tooling & Automation',
        marketWeight: 96,
        marketDemandLevel: 'Critical',
        description: 'Custom resource definitions, automated rollouts, blue-green ingress, and declarative state synchronization.',
        typicalWeeksToMaster: 8
      },
      {
        id: 'telemetry-observability',
        name: 'OpenTelemetry & Distributed Tracing',
        category: 'System Architecture',
        marketWeight: 88,
        marketDemandLevel: 'Critical',
        description: 'Instrumenting spans, Prometheus metrics alerting, eBPF network packet inspection, and Grafana dashboards.',
        typicalWeeksToMaster: 6
      },
      {
        id: 'golang-internal-tools',
        name: 'Golang Systems Tooling & CLI Automation',
        category: 'Technical',
        marketWeight: 84,
        marketDemandLevel: 'High',
        description: 'Writing custom Kubernetes controllers, internal dev CLI tools, and automated backup daemons.',
        typicalWeeksToMaster: 6
      }
    ],
    careerPaths: [
      {
        targetRole: 'VP of Infrastructure & Security',
        timeframe: '4-5 years',
        salaryPotential: 285000,
        frictionScore: 'Low',
        skillOverlap: 84,
        bridgeSkills: ['Vendor SLAs', 'Global Compliance (SOC2/FedRAMP)', 'Disaster Escalation Policy']
      }
    ],
    roadmap: [
      {
        phase: 1,
        title: 'GitOps Pipeline & Ephemeral Preview Envs',
        timeEstimate: 'Weeks 1-5',
        focus: 'Enabling PR-triggered isolated Kubernetes preview environments.',
        projectCapstone: {
          title: 'Self-Service Developer Platform Blueprint',
          description: 'Deploy an automated ArgoCD and Crossplane stack allowing engineers to spin up Postgres and Redis clusters via simple yaml manifests.',
          deliverable: 'Tested GitHub repository with automated teardown and cost tracking.'
        },
        interviewFocalPoints: ['ArgoCD reconciliation loop', 'Zero-downtime database migrations', 'Ingress controller failover']
      }
    ]
  },
  {
    id: 'ai-solutions-architect',
    slug: 'ai-solutions-architect',
    ticker: 'CB:AISA',
    title: 'Enterprise AI Solutions Architect',
    sector: 'Enterprise AI & Consulting',
    summary: 'Designs enterprise-grade generative AI blueprints, private model VPC hosting, data masking and governance compliance, and vendor API evaluation.',
    medianSalary: 175000,
    entrySalary: 130000,
    topSalary: 250000,
    hiringVelocity: 35.8,
    remotePercentage: 65,
    automationRisk: {
      level: 'low',
      score: 15,
      rationale: 'High enterprise compliance nuance, client relationship diplomacy, and custom integration design prevent automation.'
    },
    stabilityIndex: 90,
    jobOpeningsCount: 15100,
    weather: {
      status: 'emerging',
      label: 'Emerging · Frontier Premium',
      description: 'Rapidly emerging role created by Fortune 500 demand to safely bridge internal legacy databases with modern foundation models.',
      hiringWindow: 'Very high demand (0-3 months)',
      pressureIndex: 87
    },
    growthHistory: {
      years: ['2023', '2024', '2025', '2026', '2027', '2028'],
      values: [30, 48, 70, 96, 122, 148]
    },
    salaryHistory: {
      years: ['2021', '2022', '2023', '2024', '2025', '2026'],
      values: [120, 132, 146, 160, 168, 175]
    },
    geoSalaries: [
      { location: 'New York Metro', median: 198000, currency: 'USD', remoteAvailable: true },
      { location: 'San Francisco Bay Area', median: 205000, currency: 'USD', remoteAvailable: true },
      { location: 'Chicago / Midwest', median: 168000, currency: 'USD', remoteAvailable: true },
      { location: 'London / Global Banking Hub', median: 140000, currency: 'GBP equiv.', remoteAvailable: true },
      { location: 'US Remote Benchmark', median: 170000, currency: 'USD', remoteAvailable: true }
    ],
    radarDimensions: [
      { axis: 'Technical Architecture', marketRequirement: 90 },
      { axis: 'Product & Strategy', marketRequirement: 85 },
      { axis: 'Data & Experimentation', marketRequirement: 82 },
      { axis: 'Leadership & Alignment', marketRequirement: 92 },
      { axis: 'Tooling & Automation', marketRequirement: 84 }
    ],
    skills: [
      {
        id: 'enterprise-rag',
        name: 'Enterprise Document RAG & Vector Security',
        category: 'Technical',
        marketWeight: 95,
        marketDemandLevel: 'Critical',
        description: 'Role-based access control inside vector embeddings, PII redaction, and semantic tenant segregation.',
        typicalWeeksToMaster: 7
      },
      {
        id: 'compliance-governance',
        name: 'AI Risk Governance & EU AI Act Compliance',
        category: 'Product & Strategy',
        marketWeight: 88,
        marketDemandLevel: 'Critical',
        description: 'Structuring model audit trails, bias mitigation reviews, and regulatory transparency packets.',
        typicalWeeksToMaster: 5
      },
      {
        id: 'csuite-advisory',
        name: 'Executive Technical Advisory & ROI Modeling',
        category: 'Leadership & Comms',
        marketWeight: 90,
        marketDemandLevel: 'Critical',
        description: 'Presenting multi-million dollar AI infrastructure investments to CFOs and CIOs with verified productivity models.',
        typicalWeeksToMaster: 6
      }
    ],
    careerPaths: [
      {
        targetRole: 'Chief AI Officer (CAIO)',
        timeframe: '3-4 years',
        salaryPotential: 340000,
        frictionScore: 'Medium',
        skillOverlap: 84,
        bridgeSkills: ['Corporate Governance', 'P&L Ownership', 'Global AI Transformation']
      }
    ],
    roadmap: [
      {
        phase: 1,
        title: 'Enterprise AI Governance Blueprint',
        timeEstimate: 'Weeks 1-4',
        focus: 'Designing compliant vector stores with zero leakage of confidential IP.',
        projectCapstone: {
          title: 'Air-Gapped Private LLM Reference Architecture',
          description: 'Produce an end-to-end architecture blueprint including PII sanitization proxy, self-hosted embeddings, and SOC2 audit trail.',
          deliverable: 'Comprehensive 15-page architectural specification + interactive demonstration prototype.'
        },
        interviewFocalPoints: ['PII masking at inference time', 'Vector database RBAC', 'Model drift mitigation']
      }
    ]
  }
];

export const INITIAL_USER_PROFILE = {
  name: 'Alex Rivera',
  currentRole: 'Full-Stack Developer',
  yearsExperience: 4,
  weeklyLearningHours: 10,
  preferredWorkMode: 'Remote' as const
};

export const INITIAL_USER_SKILLS: Record<string, 'missing' | 'in_progress' | 'mastered'> = {
  'llm-evals': 'in_progress',
  'product-strategy': 'in_progress',
  'system-arch-rag': 'mastered',
  'experimentation-ab': 'missing',
  'stakeholder-alignment': 'in_progress',
  'prompt-engineering': 'mastered',
  'system-design': 'mastered',
  'react-next': 'mastered',
  'sql-db-perf': 'mastered',
  'devops-ci-cd': 'in_progress',
  'api-security': 'mastered',
  'distributed-inference': 'in_progress',
  'quantization-cuda': 'missing',
  'pytorch-training': 'in_progress',
  'mlops-orchestration': 'missing',
  'latency-profiling': 'in_progress',
  'aws-infra': 'mastered',
  'finops': 'missing',
  'terraform-iac': 'in_progress',
  'disaster-recovery': 'in_progress',
  'threat-hunting': 'missing',
  'zero-trust': 'in_progress',
  'incident-response': 'missing',
  'causal-inference': 'missing',
  'python-stats': 'in_progress',
  'sql-dbt': 'mastered',
  'design-systems': 'in_progress',
  'ai-ux-patterns': 'in_progress',
  'user-research': 'missing',
  'kubernetes-gitops': 'in_progress',
  'telemetry-observability': 'in_progress',
  'golang-internal-tools': 'missing',
  'enterprise-rag': 'mastered',
  'compliance-governance': 'missing',
  'csuite-advisory': 'missing',
  'stochastic-calculus': 'missing',
  'cpp-performance': 'in_progress',
  'risk-var': 'missing'
};
