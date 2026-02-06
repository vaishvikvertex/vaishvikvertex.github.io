import type { Pillar } from "./pillars";

export const PILLARS: Pillar[] = [
  // Pillar 1: Advanced AI & Cognitive Computing
  {
    id: "pillar-1",
    slug: "ai-cognitive-computing",
    title: "Advanced AI & Cognitive Computing",
    shortTitle: "AI & Cognitive",
    tagline: "Intelligent Systems for Tomorrow's Industries",
    description:
      "Harness the power of cutting-edge artificial intelligence and machine learning to transform your operations. From generative AI to computer vision, we deliver end-to-end AI solutions that drive measurable business impact.",
    icon: "Brain",
    gradient: "from-purple-500 to-indigo-600",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    stats: {
      projectsCompleted: "100+",
      yearsExperience: "10+",
      clientSatisfaction: "98%",
      innovations: "15+",
    },
    domains: [
      {
        id: "genai-agentic",
        name: "GenAI & Agentic AI",
        description:
          "Advanced generative AI systems and autonomous agentic frameworks that enable intelligent decision-making, content generation, and complex task automation with minimal human intervention.",
        icon: "Sparkles",
        capabilities: [
          "Large Language Model (LLM) integration and fine-tuning",
          "Agentic AI frameworks for autonomous decision-making",
          "Multi-agent systems for complex task orchestration",
          "Custom GPT model development and deployment",
          "Retrieval-augmented generation (RAG) implementation",
        ],
        applications: [
          "Intelligent document processing and analysis",
          "Automated report generation and summarization",
          "Customer service chatbots with human-like responses",
          "Code generation and software development assistance",
          "Process automation with natural language interfaces",
        ],
        technologies: [
          "OpenAI GPT-4/GPT-3.5",
          "Anthropic Claude",
          "LangChain",
          "AutoGen",
          "Hugging Face Transformers",
        ],
      },
      {
        id: "offline-rag",
        name: "Offline RAG Applications",
        description:
          "Secure, on-premise RAG systems that enable AI-powered search and question-answering without cloud dependencies, ensuring data privacy and compliance with enterprise security requirements.",
        icon: "Database",
        capabilities: [
          "On-premise vector database deployment",
          "Secure document embedding and indexing",
          "Air-gapped AI model deployment",
          "Custom retrieval algorithms",
          "Enterprise knowledge base integration",
        ],
        applications: [
          "Confidential document search and retrieval",
          "Regulatory compliance document analysis",
          "Internal knowledge management systems",
          "Secure technical documentation querying",
          "Private data analysis and insights extraction",
        ],
        technologies: [
          "Chroma DB",
          "Weaviate",
          "FAISS",
          "LLaMA 2",
          "Sentence Transformers",
        ],
      },
      {
        id: "computer-vision",
        name: "Computer Vision & Deep Learning",
        description:
          "State-of-the-art computer vision solutions powered by deep learning for automated visual inspection, object detection, image analysis, and real-time monitoring across industrial applications.",
        icon: "Eye",
        capabilities: [
          "Object detection and classification",
          "Image segmentation and analysis",
          "Defect detection and quality control",
          "Real-time video analytics",
          "3D reconstruction and depth estimation",
        ],
        applications: [
          "Automated visual inspection systems",
          "Predictive maintenance through thermal imaging",
          "Safety monitoring and PPE detection",
          "Product quality assurance",
          "Drone-based infrastructure inspection",
        ],
        technologies: [
          "PyTorch",
          "TensorFlow",
          "YOLO",
          "OpenCV",
          "Detectron2",
        ],
      },
      {
        id: "spatial-ml",
        name: "Spatial Machine Learning & Geospatial Analysis",
        description:
          "Advanced spatial analytics and machine learning techniques for geographic data, enabling location-based insights, route optimization, and spatial pattern recognition for infrastructure and logistics.",
        icon: "Map",
        capabilities: [
          "Geospatial data processing and analysis",
          "Spatial pattern recognition",
          "Location-based predictive modeling",
          "Route optimization algorithms",
          "Terrain analysis and 3D modeling",
        ],
        applications: [
          "Infrastructure asset mapping and management",
          "Supply chain route optimization",
          "Environmental impact assessment",
          "Site selection and feasibility studies",
          "Disaster response planning",
        ],
        technologies: [
          "PostGIS",
          "GeoPandas",
          "QGIS",
          "Mapbox",
          "Google Earth Engine",
        ],
      },
      {
        id: "time-series",
        name: "Time Series Analysis",
        description:
          "Sophisticated time series modeling and forecasting for operational data, enabling accurate predictions, trend analysis, and anomaly detection in temporal data streams.",
        icon: "TrendingUp",
        capabilities: [
          "Time series forecasting and prediction",
          "Seasonal decomposition and trend analysis",
          "Multivariate time series modeling",
          "Real-time stream processing",
          "Change point detection",
        ],
        applications: [
          "Demand forecasting and inventory optimization",
          "Energy consumption prediction",
          "Financial market analysis",
          "Equipment performance trending",
          "Weather-dependent operational planning",
        ],
        technologies: [
          "Prophet",
          "ARIMA",
          "LSTM Neural Networks",
          "XGBoost",
          "Apache Kafka",
        ],
      },
      {
        id: "machine-learning",
        name: "Machine Learning",
        description:
          "Comprehensive machine learning solutions spanning supervised, unsupervised, and reinforcement learning for predictive modeling, optimization, and intelligent automation across diverse industrial applications.",
        icon: "Cpu",
        capabilities: [
          "Custom ML model development and training",
          "Feature engineering and selection",
          "Model optimization and hyperparameter tuning",
          "Ensemble methods and model stacking",
          "AutoML and neural architecture search",
        ],
        applications: [
          "Predictive maintenance and failure forecasting",
          "Process optimization and control",
          "Risk scoring and classification",
          "Recommendation systems",
          "Fraud detection and security",
        ],
        technologies: [
          "Scikit-learn",
          "XGBoost",
          "CatBoost",
          "H2O.ai",
          "MLflow",
        ],
      },
    ],
    whyChooseUs: {
      headline: "Leading the AI Revolution in Industrial Applications",
      subheading:
        "From concept to deployment, we deliver AI solutions that transform operations with measurable ROI",
      reasons: [
        {
          title: "Deep Industry Expertise",
          description:
            "10+ years specializing in industrial AI/ML applications with proven track record across manufacturing, energy, and marine sectors. Our team of PhD-level data scientists understands your domain challenges.",
          icon: "Award",
        },
        {
          title: "Proprietary Technology Stack",
          description:
            "Custom agentic AI frameworks for autonomous decision-making, offline RAG systems for secure on-premise deployments, and advanced computer vision models achieving 98%+ accuracy.",
          icon: "Zap",
        },
        {
          title: "End-to-End Solutions",
          description:
            "From data collection and preparation to production deployment and monitoring. We handle the complete AI lifecycle including integration with existing systems (SCADA, MES, ERP).",
          icon: "GitBranch",
        },
        {
          title: "Measurable Results",
          description:
            "Average 40% improvement in operational efficiency, 95%+ accuracy in predictive models, and ROI achieved within 6-12 months. We focus on business outcomes, not just technology.",
          icon: "TrendingUp",
        },
        {
          title: "Transparent & Explainable AI",
          description:
            "All our AI models come with explainability features (XAI), ensuring you understand how decisions are made. Critical for regulatory compliance and building stakeholder trust.",
          icon: "Shield",
        },
        {
          title: "24/7 Model Monitoring",
          description:
            "Continuous model performance monitoring, automated retraining pipelines, and drift detection ensure your AI systems remain accurate and reliable over time.",
          icon: "Activity",
        },
      ],
      differentiators: [
        "Only provider with offline-first AI/ML capabilities for secure environments",
        "Industry-specific pre-trained models reducing time-to-value by 60%",
        "Flexible deployment options: cloud, on-premise, edge, or hybrid",
        "Multi-vendor AI platform support (OpenAI, Anthropic, AWS, Azure, GCP)",
        "Dedicated AI ethics and governance frameworks",
      ],
    },
    caseStudies: [
      {
        title: "Offshore Platform Predictive Maintenance",
        description:
          "Implemented AI-powered predictive maintenance system for offshore oil & gas platform",
        challenge:
          "Unplanned equipment failures causing $2M+ downtime costs annually",
        solution:
          "Deployed computer vision and time series ML models for equipment health monitoring",
        results: [
          "87% reduction in unplanned downtime",
          "$1.8M annual cost savings",
          "95% accuracy in failure prediction",
        ],
        industry: "Oil & Gas",
      },
    ],
  },

  // Pillar 2: Maritime & Offshore Engineering
  {
    id: "pillar-2",
    slug: "maritime-offshore",
    title: "Maritime & Offshore Engineering",
    shortTitle: "Maritime & Offshore",
    tagline: "Engineering Excellence for Marine and Offshore Operations",
    description:
      "Comprehensive marine engineering services from ship design to offshore platform analysis. We combine deep domain expertise with advanced simulation tools to deliver safe, compliant, and cost-effective solutions.",
    icon: "Ship",
    gradient: "from-blue-500 to-cyan-600",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    stats: {
      projectsCompleted: "150+",
      yearsExperience: "15+",
      clientSatisfaction: "99%",
      innovations: "8+",
    },
    domains: [
      {
        id: "ship-design",
        name: "Ship Design & Stability of Ships/Floating Bodies",
        description:
          "Complete naval architecture services including ship design, stability analysis, hydrostatic calculations, and regulatory compliance for vessels and floating structures of all types.",
        icon: "Anchor",
        capabilities: [
          "Preliminary and detailed ship design",
          "Intact and damage stability analysis",
          "Hydrostatic and cross-curves calculations",
          "Load line and freeboard assessments",
          "Stability booklet preparation",
        ],
        applications: [
          "New vessel design and optimization",
          "Conversion and modification feasibility studies",
          "Stability compliance verification",
          "Floating production storage units (FPSO)",
          "Offshore accommodation platforms",
        ],
        technologies: [
          "AVEVA Marine",
          "NAPA",
          "Maxsurf",
          "Rhino Marine",
          "AutoCAD Marine",
        ],
      },
      {
        id: "structural-analysis",
        name: "Structural Analysis",
        description:
          "Advanced structural engineering and finite element analysis (FEA) for marine and offshore structures, ensuring structural integrity, safety, and compliance with international standards.",
        icon: "Box",
        capabilities: [
          "Finite element analysis (FEA)",
          "Stress and fatigue analysis",
          "Structural optimization",
          "Dynamic response analysis",
          "Ultimate strength assessment",
        ],
        applications: [
          "Hull structure design and verification",
          "Offshore platform structural integrity",
          "Subsea equipment analysis",
          "Mooring and lifting equipment certification",
          "Impact and collision analysis",
        ],
        technologies: [
          "ANSYS",
          "ABAQUS",
          "NASTRAN",
          "SACS",
          "STAAD.Pro",
        ],
      },
      {
        id: "cfd",
        name: "Computational Fluid Dynamics (CFD)",
        description:
          "High-fidelity CFD simulations for hydrodynamic analysis, resistance prediction, propulsion optimization, and environmental load assessment for marine vessels and offshore structures.",
        icon: "Wind",
        capabilities: [
          "Resistance and propulsion analysis",
          "Seakeeping and wave load prediction",
          "Maneuvering simulation",
          "Ventilation and HVAC design",
          "Flow-induced vibration analysis",
        ],
        applications: [
          "Hull form optimization",
          "Propeller design and cavitation analysis",
          "Green water and slamming prediction",
          "Offshore structure wave interaction",
          "Ballast water treatment system design",
        ],
        technologies: [
          "STAR-CCM+",
          "ANSYS Fluent",
          "OpenFOAM",
          "ORCA3D",
          "ShipFlow",
        ],
      },
      {
        id: "marine-operations",
        name: "Marine/Offshore Operations",
        description:
          "Operational engineering support for marine and offshore activities including installation procedures, transport studies, and operational risk assessments.",
        icon: "Settings",
        capabilities: [
          "Marine operations planning",
          "Lift and transport analysis",
          "Weather window analysis",
          "Installation procedures",
          "Vessel selection and optimization",
        ],
        applications: [
          "Offshore equipment installation",
          "Heavy lift operations",
          "Towing and transportation studies",
          "Jack-up and crane operations",
          "Subsea installation analysis",
        ],
        technologies: [
          "OrcaFlex",
          "MOSES",
          "SIMA",
          "Sesam",
          "AQWA",
        ],
      },
      {
        id: "field-survey",
        name: "Field Survey & 3rd Party Vetting/Review",
        description:
          "Independent technical inspection, condition assessment, and third-party verification services ensuring compliance with industry standards and identifying potential risks.",
        icon: "ClipboardCheck",
        capabilities: [
          "Condition surveys and inspections",
          "Pre-purchase and valuation surveys",
          "Third-party design review",
          "On-hire and off-hire surveys",
          "Technical due diligence",
        ],
        applications: [
          "Vessel condition assessment",
          "Offshore structure inspection",
          "Equipment certification verification",
          "Regulatory compliance audits",
          "Insurance surveys",
        ],
        technologies: [
          "Ultrasonic thickness gauging",
          "NDT inspection equipment",
          "Drone inspection systems",
          "Laser scanning (LiDAR)",
          "Underwater ROV inspection",
        ],
      },
    ],
    whyChooseUs: {
      headline: "Trusted Partner for Marine and Offshore Excellence",
      subheading:
        "15+ years of proven expertise delivering safe, compliant, and cost-effective marine engineering solutions worldwide",
      reasons: [
        {
          title: "Deep Domain Expertise",
          description:
            "Our team includes certified naval architects, marine engineers, and offshore specialists with extensive experience across all vessel types and offshore structures.",
          icon: "Users",
        },
        {
          title: "Safety First Culture",
          description:
            "Zero-incident track record across 150+ projects. Safety and regulatory compliance are embedded in every aspect of our work, ensuring your operations meet the highest standards.",
          icon: "Shield",
        },
        {
          title: "Global Standards Compliance",
          description:
            "Approved and recognized by major classification societies (DNV, ABS, Lloyd's Register, Bureau Veritas). Our designs meet IMO, SOLAS, and regional regulations.",
          icon: "Globe",
        },
        {
          title: "Comprehensive Service Range",
          description:
            "End-to-end support from concept design through to operation and decommissioning. Single point of contact for all your marine engineering needs.",
          icon: "Layers",
        },
        {
          title: "Advanced Simulation Tools",
          description:
            "State-of-the-art CFD, FEA, and dynamic analysis capabilities providing insights impossible through traditional methods. Optimize performance before construction.",
          icon: "Cpu",
        },
        {
          title: "24/7 Emergency Support",
          description:
            "Round-the-clock technical support and emergency response team. We understand marine operations don't follow business hours.",
          icon: "Phone",
        },
      ],
      differentiators: [
        "Only firm with combined ship design, offshore, and digital twin expertise",
        "In-house classification society-approved procedures",
        "Global network of surveyors and inspectors across 25+ countries",
        "Proprietary CFD/FEA workflows reducing analysis time by 50%",
        "Independent third-party status - no conflicts of interest",
      ],
    },
    caseStudies: [
      {
        title: "FPSO Structural Integrity Assessment",
        description:
          "Comprehensive structural analysis and life extension study for aging FPSO",
        challenge:
          "20-year-old FPSO showing signs of fatigue, needed assessment for 10-year extension",
        solution:
          "Advanced FEA, fatigue analysis, and inspection program design",
        results: [
          "Safe 10-year life extension approved",
          "$50M+ replacement cost avoided",
          "Zero structural failures post-extension",
        ],
        industry: "Oil & Gas",
      },
    ],
  },

  // Pillar 3: Asset Health & Predictive Intelligence
  {
    id: "pillar-3",
    slug: "asset-health-predictive",
    title: "Asset Health & Predictive Intelligence",
    shortTitle: "Asset Health & Predictive",
    tagline: "Maximizing Asset Performance Through Intelligence",
    description:
      "Transform maintenance from reactive to predictive with advanced analytics and continuous monitoring. Our solutions detect anomalies early, diagnose root causes, and prescribe optimal actions to maximize asset reliability and minimize costs.",
    icon: "Activity",
    gradient: "from-green-500 to-emerald-600",
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    stats: {
      projectsCompleted: "200+",
      yearsExperience: "12+",
      clientSatisfaction: "97%",
      innovations: "20+",
    },
    domains: [
      {
        id: "predictive-prescriptive",
        name: "Predictive & Prescriptive Analytics",
        description:
          "Advanced analytics that not only predict when failures will occur but also prescribe the optimal maintenance actions, timing, and resources required to prevent them.",
        icon: "TrendingUp",
        capabilities: [
          "Remaining useful life (RUL) prediction",
          "Failure mode forecasting",
          "Maintenance strategy optimization",
          "Resource allocation optimization",
          "Cost-benefit analysis automation",
        ],
        applications: [
          "Equipment failure prediction",
          "Maintenance scheduling optimization",
          "Spare parts inventory management",
          "Production planning integration",
          "Capital expenditure planning",
        ],
        technologies: [
          "Python ML Stack",
          "Azure ML",
          "AWS SageMaker",
          "Time Series Models",
          "Optimization Algorithms",
        ],
      },
      {
        id: "condition-monitoring",
        name: "Condition Monitoring & Machine Health Monitoring",
        description:
          "Real-time monitoring of equipment health using vibration analysis, thermal imaging, oil analysis, and other condition-based monitoring techniques to detect degradation before failure.",
        icon: "Gauge",
        capabilities: [
          "Vibration analysis and trending",
          "Thermal imaging analysis",
          "Oil and lubricant analysis",
          "Acoustic emission monitoring",
          "Real-time health scoring",
        ],
        applications: [
          "Rotating equipment monitoring (pumps, compressors, turbines)",
          "Motor and generator health tracking",
          "Bearing and gearbox condition assessment",
          "Heat exchanger performance monitoring",
          "Critical infrastructure monitoring",
        ],
        technologies: [
          "SKF @ptitude",
          "Emerson AMS",
          "GE Digital APM",
          "FLIR Thermal Cameras",
          "IIoT Sensor Networks",
        ],
      },
      {
        id: "anomaly-fault-detection",
        name: "Anomaly Detection & Fault Detection",
        description:
          "Intelligent systems that automatically detect deviations from normal operating patterns, identifying potential faults and anomalies in real-time across complex industrial processes.",
        icon: "AlertTriangle",
        capabilities: [
          "Unsupervised anomaly detection",
          "Pattern recognition and deviation analysis",
          "Multi-sensor data fusion",
          "Real-time alerting and notification",
          "False positive reduction",
        ],
        applications: [
          "Process anomaly detection in manufacturing",
          "Equipment performance deviation alerts",
          "Quality control and defect detection",
          "Cybersecurity threat detection",
          "Energy consumption anomalies",
        ],
        technologies: [
          "Isolation Forest",
          "Autoencoders",
          "LSTM Networks",
          "One-Class SVM",
          "Apache Spark",
        ],
      },
      {
        id: "fault-diagnosis",
        name: "Fault Diagnosis & Root Cause Analysis",
        description:
          "Systematic approaches to identify the underlying causes of failures and performance degradation, enabling targeted corrective actions and preventing recurrence.",
        icon: "Search",
        capabilities: [
          "Failure mode identification",
          "Root cause analysis (RCA)",
          "Fault tree analysis",
          "Fishbone diagram automation",
          "Expert system integration",
        ],
        applications: [
          "Post-failure investigation",
          "Recurring problem resolution",
          "Process optimization",
          "Quality improvement initiatives",
          "Safety incident analysis",
        ],
        technologies: [
          "Expert Systems",
          "Bayesian Networks",
          "Decision Trees",
          "Graph Analytics",
          "Neo4j",
        ],
      },
      {
        id: "change-point-detection",
        name: "Change Point/Event Detection",
        description:
          "Advanced algorithms that identify significant changes in system behavior or operating regimes, crucial for detecting early signs of degradation or operational shifts.",
        icon: "GitCommit",
        capabilities: [
          "Change point detection in time series",
          "Regime shift identification",
          "Performance baseline establishment",
          "Drift detection and monitoring",
          "Event correlation analysis",
        ],
        applications: [
          "Process regime change detection",
          "Equipment degradation onset identification",
          "Operating condition transitions",
          "Environmental impact analysis",
          "Energy efficiency monitoring",
        ],
        technologies: [
          "PELT Algorithm",
          "Bayesian Change Point",
          "CUSUM",
          "Hidden Markov Models",
          "R ruptures Package",
        ],
      },
      {
        id: "structural-monitoring",
        name: "Structural Monitoring",
        description:
          "Continuous monitoring of structural health for critical infrastructure including bridges, buildings, offshore platforms, and vessels using advanced sensor networks and analysis techniques.",
        icon: "Home",
        capabilities: [
          "Strain and stress monitoring",
          "Vibration-based damage detection",
          "Crack detection and growth tracking",
          "Load monitoring and analysis",
          "Structural health index calculation",
        ],
        applications: [
          "Bridge and infrastructure health monitoring",
          "Offshore platform integrity monitoring",
          "Building structural assessment",
          "Pipeline integrity management",
          "Wind turbine tower monitoring",
        ],
        technologies: [
          "Fiber Optic Sensors",
          "Strain Gauges",
          "Accelerometers",
          "SCADA Integration",
          "Digital Twin Platforms",
        ],
      },
      {
        id: "process-optimization",
        name: "Process Optimization",
        description:
          "Data-driven optimization of industrial processes to maximize efficiency, reduce energy consumption, improve quality, and minimize environmental impact while maintaining safety standards.",
        icon: "Zap",
        capabilities: [
          "Process parameter optimization",
          "Energy efficiency improvement",
          "Throughput maximization",
          "Quality optimization",
          "Multi-objective optimization",
        ],
        applications: [
          "Manufacturing process optimization",
          "Energy management and reduction",
          "Chemical process control",
          "Supply chain optimization",
          "Resource allocation",
        ],
        technologies: [
          "Gurobi Optimizer",
          "CPLEX",
          "Genetic Algorithms",
          "Reinforcement Learning",
          "Process Simulation Tools",
        ],
      },
    ],
    whyChooseUs: {
      headline:
        "Maximizing Asset Reliability While Minimizing Maintenance Costs",
      subheading:
        "Proven predictive intelligence delivering average 35% cost savings and 87% reduction in unplanned downtime",
      reasons: [
        {
          title: "Predictive Excellence",
          description:
            "95%+ accuracy in fault prediction with 3-6 month advance warning. Our models learn continuously from your data, improving over time and adapting to changing conditions.",
          icon: "Target",
        },
        {
          title: "Real-Time Monitoring",
          description:
            "24/7 continuous monitoring with intelligent alerting. Automated dashboards provide instant visibility into asset health across your entire operation.",
          icon: "Monitor",
        },
        {
          title: "Proven Cost Savings",
          description:
            "Average 35% reduction in maintenance costs and 87% reduction in unplanned downtime. ROI typically achieved within 6-12 months across 200+ implementations.",
          icon: "DollarSign",
        },
        {
          title: "Prescriptive, Not Just Predictive",
          description:
            "We don't just predict failures - we prescribe optimal actions. Our systems recommend what to do, when to do it, and what resources are needed.",
          icon: "Lightbulb",
        },
        {
          title: "Integration Ready",
          description:
            "Seamless integration with existing SCADA, DCS, MES, and CMMS systems. Works with your current infrastructure without expensive replacements.",
          icon: "Link",
        },
        {
          title: "Proven Track Record",
          description:
            "200+ assets monitored globally across oil & gas, power generation, manufacturing, and marine sectors. Diverse industry experience ensures best-practice solutions.",
          icon: "Award",
        },
      ],
      differentiators: [
        "Multi-physics approach combining vibration, thermal, and performance data",
        "Hybrid AI combining physics-based models with machine learning",
        "Automated false-positive reduction (90% fewer nuisance alarms)",
        "Cloud, edge, and hybrid deployment options for any security requirement",
        "Industry-leading accuracy: 95%+ precision, 92%+ recall",
      ],
    },
    caseStudies: [
      {
        title: "Power Plant Predictive Maintenance",
        description:
          "Implemented condition-based monitoring for 50MW gas turbine power plant",
        challenge:
          "Frequent unplanned outages causing $500K+ per incident in lost revenue",
        solution:
          "Deployed vibration, thermal, and performance monitoring with ML-based fault prediction",
        results: [
          "92% reduction in unplanned outages",
          "$3.2M annual savings",
          "Extended turbine life by 15%",
        ],
        industry: "Power Generation",
      },
    ],
  },

  // Pillar 4: Industrial Safety, Risk & Reliability
  {
    id: "pillar-4",
    slug: "industrial-safety-risk",
    title: "Industrial Safety, Risk & Reliability",
    shortTitle: "Safety, Risk & Reliability",
    tagline: "Safeguarding People, Assets, and Operations",
    description:
      "Comprehensive safety and risk management services ensuring compliance, preventing incidents, and fostering a culture of safety excellence. From quantitative risk assessments to accident investigations, we help you achieve zero-harm operations.",
    icon: "Shield",
    gradient: "from-orange-500 to-red-600",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    stats: {
      projectsCompleted: "300+",
      yearsExperience: "18+",
      clientSatisfaction: "99.5%",
      innovations: "12+",
    },
    domains: [
      {
        id: "safety-risk-reliability",
        name: "Safety Risk & Reliability Analysis",
        description:
          "Systematic identification, assessment, and mitigation of risks using quantitative and qualitative techniques including HAZOP, FMEA, FTA, and probabilistic risk assessment (PRA).",
        icon: "ShieldAlert",
        capabilities: [
          "Quantitative risk assessment (QRA)",
          "HAZOP and HAZID studies",
          "Failure modes and effects analysis (FMEA)",
          "Fault tree analysis (FTA)",
          "Reliability-centered maintenance (RCM)",
        ],
        applications: [
          "Process safety management",
          "Major hazard facility risk assessment",
          "Safety instrumented systems (SIS) design",
          "Emergency response planning",
          "Asset integrity management",
        ],
        technologies: [
          "PHAST",
          "DNV Safeti",
          "ReliaSoft",
          "RiskSpectrum",
          "Bowtie XP",
        ],
      },
      {
        id: "accident-investigation",
        name: "Accident & Incident Investigation",
        description:
          "Independent, systematic investigation of accidents and incidents to determine root causes, contributing factors, and develop effective corrective actions to prevent recurrence.",
        icon: "AlertCircle",
        capabilities: [
          "Accident root cause analysis",
          "Incident investigation and reporting",
          "Evidence collection and preservation",
          "Timeline reconstruction",
          "Corrective action development",
        ],
        applications: [
          "Workplace accident investigation",
          "Process safety incidents",
          "Environmental incidents",
          "Equipment failures",
          "Near-miss analysis",
        ],
        technologies: [
          "Tripod Beta",
          "AcciMap",
          "Fishbone Analysis",
          "Swiss Cheese Model",
          "Forensic Engineering Tools",
        ],
      },
      {
        id: "process-optimization-safety",
        name: "Process Optimization",
        description:
          "Optimizing industrial processes while maintaining or enhancing safety standards, ensuring efficiency gains don't compromise worker safety or environmental protection.",
        icon: "Settings",
        capabilities: [
          "Safe process redesign",
          "Operating envelope optimization",
          "Inherently safer design (ISD)",
          "Bow-tie risk management",
          "Safety performance indicators",
        ],
        applications: [
          "Safe process intensification",
          "Alarm management optimization",
          "Safety culture improvement",
          "Risk-based inspection planning",
          "Safety management system enhancement",
        ],
        technologies: [
          "ASPEN Plus",
          "HYSYS",
          "Process Safety Simulators",
          "KPI Dashboards",
          "Safety Culture Assessment Tools",
        ],
      },
      {
        id: "sustainable-solutions",
        name: "Sustainable Solutions",
        description:
          "Integrating environmental sustainability and safety excellence, developing solutions that reduce environmental impact while enhancing operational safety and regulatory compliance.",
        icon: "Leaf",
        capabilities: [
          "Environmental impact assessment",
          "Carbon footprint reduction",
          "Circular economy implementation",
          "Green technology integration",
          "Sustainability reporting",
        ],
        applications: [
          "Emission reduction strategies",
          "Waste minimization programs",
          "Energy efficiency improvements",
          "Water management systems",
          "Sustainable supply chain design",
        ],
        technologies: [
          "LCA Software",
          "SimaPro",
          "GaBi",
          "Carbon Accounting Tools",
          "ESG Reporting Platforms",
        ],
      },
    ],
    whyChooseUs: {
      headline: "Your Partner in Achieving Zero-Harm Operations",
      subheading:
        "18+ years of safety excellence helping organizations prevent incidents, ensure compliance, and build lasting safety cultures",
      reasons: [
        {
          title: "Zero-Harm Philosophy",
          description:
            "We believe all accidents are preventable. Our systematic approach to risk management has helped clients achieve zero lost-time injuries across 300+ projects.",
          icon: "Heart",
        },
        {
          title: "Quantitative Risk Expertise",
          description:
            "Advanced probabilistic risk assessment capabilities providing data-driven insights into your highest risks. Make informed decisions with quantified risk metrics.",
          icon: "Calculator",
        },
        {
          title: "Global Regulatory Compliance",
          description:
            "Deep expertise in OSHA, EPA, ISO 45001, API standards, and international safety regulations. Ensure compliance across all jurisdictions you operate in.",
          icon: "FileCheck",
        },
        {
          title: "Independent Investigations",
          description:
            "Unbiased, systematic accident investigations using proven methodologies. Our independent status ensures objective findings and effective corrective actions.",
          icon: "Search",
        },
        {
          title: "Continuous Improvement",
          description:
            "Safety is a journey, not a destination. We help you build systems for continuous improvement, learning from incidents, and evolving your safety culture.",
          icon: "TrendingUp",
        },
        {
          title: "Training Excellence",
          description:
            "Comprehensive safety training programs from frontline workers to executive leadership. Build competency and awareness at all levels of your organization.",
          icon: "GraduationCap",
        },
      ],
      differentiators: [
        "Only firm combining safety, reliability, and process engineering expertise",
        "Proprietary risk quantification methodologies validated across 50+ industries",
        "Average 75% reduction in incident rates within 18 months",
        "Independent consultant status - no conflicts of interest",
        "24/7 emergency investigation response team",
      ],
    },
    caseStudies: [
      {
        title: "Chemical Plant Safety Transformation",
        description:
          "Comprehensive safety management system overhaul for large chemical facility",
        challenge:
          "High incident rate (TRIR of 3.2) and regulatory compliance issues",
        solution:
          "Implemented QRA, upgraded SIS, redesigned procedures, and conducted extensive training",
        results: [
          "TRIR reduced to 0.4 (87% reduction)",
          "Zero major incidents in 3 years",
          "Full regulatory compliance achieved",
        ],
        industry: "Chemical Manufacturing",
      },
    ],
  },

  // Pillar 5: Robotics, Autonomy & Digital Reality
  {
    id: "pillar-5",
    slug: "robotics-autonomy-digital",
    title: "Robotics, Autonomy & Digital Reality",
    shortTitle: "Robotics & Digital Reality",
    tagline: "Building the Future of Autonomous Operations",
    description:
      "Transform your operations with digital twins, autonomous systems, and intelligent robotics. We bridge the physical and digital worlds, enabling remote operations, predictive insights, and unprecedented operational efficiency.",
    icon: "Bot",
    gradient: "from-teal-500 to-blue-600",
    color: "text-teal-600",
    bgColor: "bg-teal-50",
    borderColor: "border-teal-200",
    stats: {
      projectsCompleted: "80+",
      yearsExperience: "8+",
      clientSatisfaction: "96%",
      innovations: "25+",
    },
    domains: [
      {
        id: "digital-twins",
        name: "Digital Twins",
        description:
          "High-fidelity digital replicas of physical assets enabling real-time monitoring, simulation, optimization, and predictive maintenance through synchronized virtual and physical environments.",
        icon: "Copy",
        capabilities: [
          "Real-time digital twin development",
          "3D visualization and simulation",
          "Physics-based modeling",
          "IoT sensor integration",
          "Predictive simulation and what-if analysis",
        ],
        applications: [
          "Industrial plant digital twins",
          "Offshore platform virtual replicas",
          "Ship and vessel digital twins",
          "Smart building management",
          "Production line optimization",
        ],
        technologies: [
          "Unity 3D",
          "Unreal Engine",
          "ANSYS Twin Builder",
          "Siemens MindSphere",
          "Azure Digital Twins",
        ],
      },
      {
        id: "underwater-robotics",
        name: "Underwater Robotics",
        description:
          "Advanced underwater robotic systems (ROVs and AUVs) for subsea inspection, maintenance, and operations in marine and offshore environments reducing human risk and operational costs.",
        icon: "Waves",
        capabilities: [
          "ROV operation and piloting services",
          "Underwater inspection and survey",
          "Subsea equipment maintenance",
          "Pipeline and cable inspection",
          "Environmental monitoring",
        ],
        applications: [
          "Offshore structure inspection",
          "Subsea pipeline integrity assessment",
          "Ship hull inspection",
          "Dam and underwater structure surveys",
          "Marine research and exploration",
        ],
        technologies: [
          "BlueROV2",
          "VideoRay ROVs",
          "Autonomous Underwater Vehicles",
          "Underwater Sonar",
          "Subsea Positioning Systems",
        ],
      },
      {
        id: "industrial-automation",
        name: "Industrial Automation",
        description:
          "End-to-end industrial automation solutions from process control systems to robotic work cells, enhancing productivity, quality, and safety while reducing operational costs.",
        icon: "Cog",
        capabilities: [
          "PLC programming and integration",
          "SCADA system design and implementation",
          "Robotic work cell design",
          "Process automation",
          "Machine vision integration",
        ],
        applications: [
          "Manufacturing automation",
          "Material handling systems",
          "Quality inspection automation",
          "Process control and optimization",
          "Assembly line automation",
        ],
        technologies: [
          "Siemens S7/TIA Portal",
          "Allen-Bradley/Rockwell",
          "ABB Robotics",
          "FANUC",
          "Ignition SCADA",
        ],
      },
      {
        id: "autonomous-systems",
        name: "Autonomous Systems",
        description:
          "Intelligent autonomous systems capable of independent operation and decision-making, including drones, autonomous vehicles, and self-optimizing industrial systems.",
        icon: "Navigation",
        capabilities: [
          "Autonomous navigation and control",
          "Path planning and obstacle avoidance",
          "Multi-agent coordination",
          "Mission planning and execution",
          "Autonomous decision-making",
        ],
        applications: [
          "Autonomous drone inspection",
          "Warehouse automation (AGVs/AMRs)",
          "Autonomous marine vessels",
          "Self-driving industrial vehicles",
          "Autonomous mining equipment",
        ],
        technologies: [
          "ROS (Robot Operating System)",
          "DJI Drone SDK",
          "NVIDIA Jetson",
          "Apollo Auto",
          "PX4 Autopilot",
        ],
      },
      {
        id: "digitization-transformation",
        name: "Digitization & Digital Transformation",
        description:
          "Comprehensive digital transformation strategies and implementation services modernizing operations through IoT, cloud computing, data analytics, and integrated digital platforms.",
        icon: "RefreshCw",
        capabilities: [
          "Digital maturity assessment",
          "Digital transformation roadmap",
          "Legacy system modernization",
          "IoT platform implementation",
          "Cloud migration and integration",
        ],
        applications: [
          "Industry 4.0 transformation",
          "Smart factory implementation",
          "Connected asset ecosystems",
          "Digital supply chain",
          "Remote operations centers",
        ],
        technologies: [
          "AWS IoT",
          "Azure IoT Hub",
          "ThingWorx",
          "Kepware",
          "Node-RED",
        ],
      },
    ],
    whyChooseUs: {
      headline: "Leading the Digital and Autonomous Revolution",
      subheading:
        "Pioneering solutions in digital twins, robotics, and autonomous systems transforming how industries operate",
      reasons: [
        {
          title: "Cutting-Edge Technology",
          description:
            "Access to the latest in digital twin platforms, autonomous systems, and robotics technologies. We stay at the forefront of innovation so you can lead your industry.",
          icon: "Rocket",
        },
        {
          title: "Real-World Deployment",
          description:
            "Not just concepts - our underwater ROVs, digital twins, and automation systems are deployed and operational. Proven technology delivering real value.",
          icon: "CheckCircle",
        },
        {
          title: "Complete Digitization Roadmaps",
          description:
            "We don't just sell technology - we provide comprehensive roadmaps for digital transformation aligned with your business objectives and technical constraints.",
          icon: "Map",
        },
        {
          title: "Legacy System Integration",
          description:
            "Expertise in modernizing and integrating legacy systems without costly rip-and-replace. Protect your existing investments while adding new capabilities.",
          icon: "Link",
        },
        {
          title: "Future-Ready Solutions",
          description:
            "Scalable architectures designed to evolve with your needs. Our platforms grow with your business, supporting continuous innovation and capability addition.",
          icon: "TrendingUp",
        },
        {
          title: "Innovation Partnerships",
          description:
            "Collaborations with leading robotics and automation providers ensure you get best-in-class solutions backed by global support networks.",
          icon: "Handshake",
        },
      ],
      differentiators: [
        "Only provider with integrated digital twin + physical robotics expertise",
        "Underwater robotics capabilities serving oil & gas, marine, and infrastructure",
        "Vendor-agnostic approach ensuring optimal technology selection",
        "Hybrid cloud-edge architectures for any security requirement",
        "Proven 50%+ cost reduction vs. traditional inspection methods",
      ],
    },
    caseStudies: [
      {
        title: "Offshore Platform Digital Twin",
        description:
          "Complete digital twin implementation for North Sea offshore platform",
        challenge:
          "Manual inspections costly ($1M+ annually) and exposed personnel to risks",
        solution:
          "Deployed ROV inspection system integrated with real-time digital twin",
        results: [
          "70% reduction in inspection costs",
          "Zero personnel exposure to hazardous areas",
          "Real-time structural health monitoring",
        ],
        industry: "Oil & Gas",
      },
    ],
  },
];

export function getPillarBySlug(slug: string): Pillar | undefined {
  return PILLARS.find((p) => p.slug === slug);
}

export function getPillarById(id: string): Pillar | undefined {
  return PILLARS.find((p) => p.id === id);
}
