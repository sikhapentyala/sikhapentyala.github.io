/* ============================================================
   PUBLICATIONS  —  the only file you edit to add a paper.
   ------------------------------------------------------------
   One chronological list. Each paper carries labels for its
   research area(s) and its publication type. The tabs at the
   top of the page filter by research area.

   HOW TO ADD A PAPER
     Copy any block below, paste it at the top, change the fields.

   FIELDS
     title    (required)
     authors  (required)  Your name is bolded automatically.
                          Put a * after a student you mentored.
     venue    (required)  Short name, e.g. "ICML", "PoPETs".
     year     (required)  A number, no quotes.
     kind     (required)  conference | journal | workshop
                          | preprint | patent
     areas    (required)  A list. Use as many as genuinely apply.
                          Keys must match the AREAS list below.
     note     (optional)  e.g. "4% acceptance". Shown in grey.
     url      (optional)  Link to the paper.
     selected (optional)  true  ->  also shows on the home page.
   ============================================================ */

/* The research areas. These become the filter tabs, in this order,
   and the labels shown on each paper. Rename a label here and it
   changes everywhere. Keep labels short so the tabs stay on one line.
   `color` tints the tab: blue | orange | green | purple | teal | red */
const AREAS = [
  { key: "synthetic", label: "Synthetic Data",             color: "blue"   },
  { key: "auditing",  label: "Privacy Attacks & Auditing", color: "red"    },
  { key: "privacy",   label: "Privacy",                    color: "purple" },
  { key: "fairness",  label: "Fairness",                   color: "orange" },
  { key: "explain",   label: "Explainability",             color: "teal"   },
  { key: "aiforgood", label: "AI for Good",                color: "green"  },
];

const PUBLICATIONS = [

  /* ---------------------------- 2026 ---------------------------- */
  {
    title: "SoK: Reconstruction Attacks on Synthetic Tabular Data (Insights from Winning the NIST CRC)",
    authors: "S. Golob, S. Pentyala, M. De Cock",
    venue: "PoPETs", year: 2026, kind: "conference",
    areas: ["synthetic", "auditing", "privacy"],
    featured: ["trustworthy"],
    note: "4% acceptance",
  },
  {
    title: "FHAIM: Fully Homomorphic AIM for Private Synthetic Data Generation",
    authors: "M. Kumar*, Q. Lou, P. Barreto, M. De Cock, S. Pentyala",
    venue: "ICML", year: 2026, kind: "conference",
    areas: ["synthetic", "privacy"],
    featured: ["sdg"],
    note: "26.6% acceptance", selected: true,
  },
  {
    title: "Federated Synthetic Data Generation for Hepatology Research: A UNOS-based Evaluation",
    authors: "S. Pentyala, A. Babu*, J. Ahn, M. De Cock",
    venue: "ACM BCB", year: 2026, kind: "conference",
    areas: ["synthetic", "privacy", "aiforgood"],
  },
  {
    title: "Synthetic Germline VCF Generation for Rare Diseases: Case Study in NF1",
    authors: "S. Pentyala, Z. Pan, P.J. McKeever, J. Banerjee, L. Foschini, M. De Cock",
    venue: "ACM BCB", year: 2026, kind: "conference",
    areas: ["synthetic", "aiforgood"],
    featured: ["aiforgood"],
  },
  {
    title: "Designing Structured Conversational Support for Tuberculosis Treatment Adherence and Patient Coping",
    authors: "P. Garg, S. Iribarren, S. Pentyala, Y. Rodriguez, P. Carmiol-Rodriguez, A. Vidrio, C. Kwanin, J. Sprecher, J. Roberti",
    venue: "CLPsych", year: 2026, kind: "conference",
    areas: ["aiforgood"],
    featured: ["aiforgood"],
  },
  {
    // CHECK: venue was ambiguous in your CV (SaTML 2025 vs RECOMB 2026).
    title: "Federated Generation of Synthetic RNA-seq Data",
    authors: "D. Filienko, M. De Cock, S. Pentyala",
    venue: "RECOMB Privacy", year: 2026, kind: "conference",
    areas: ["synthetic", "privacy", "aiforgood"],
    featured: ["sdg"], selected: true,
  },
  {
    title: "Auditing Patient Privacy Risk in Synthetic Rare Disease Germline Data",
    authors: "S. Pentyala, Z. Pan, L. Foschini, M. De Cock, J. Banerjee",
    venue: "RECOMB Privacy", year: 2026, kind: "workshop",
    areas: ["synthetic", "auditing", "aiforgood"],
    featured: ["trustworthy"], selected: true,
  },
  {
    title: "Privacy-Preserving Genomics Data Sharing on the NAIRR",
    authors: "S. Pentyala, P. McKeever, J. Banerjee, L. Foschini, M. De Cock",
    venue: "NAIRR Annual Meeting", year: 2026, kind: "workshop",
    areas: ["synthetic", "privacy", "aiforgood"],
  },
  {
    title: "From Graphical Models to Foundation Models: Synthetic Bulk RNA-seq Data Generation",
    authors: "D. Filienko, E.C. Neto, S. Pentyala, J. Banerjee, L. Foschini, M. De Cock",
    venue: "ISMB/ECCB", year: 2026, kind: "workshop",
    areas: ["synthetic", "aiforgood"],
  },
  {
    title: "Does Synthetic Bulk RNA-seq Data Protect Donors? Privacy Auditing through Membership Inference Attacks",
    authors: "C. Jarell, D. Filienko, J. Kim, E. Szebenyi, S. Pentyala, S. Golob, M. De Cock",
    venue: "ISMB/ECCB", year: 2026, kind: "workshop",
    areas: ["synthetic", "auditing", "aiforgood"],
  },
  {
    title: "Towards Useful and Private Synthetic Omics: Community Benchmarking of Generative Models for Transcriptomics Data",
    authors: "H. Ozturk, T. Afonja, J. Jalko, R. Binkyte, et al., S. Menzies*, S. Pentyala, D. Filienko, S. Golob, P. McKeever, J. Banerjee, L. Foschini, M. De Cock, et al.",
    venue: "arXiv", year: 2026, kind: "preprint",
    areas: ["synthetic", "privacy", "aiforgood"],
  },
  {
    title: "Privacy Vulnerabilities in Synthetic Single-Cell RNA-Sequence Data",
    authors: "S. Golob, P. McKeever, S. Pentyala, M. De Cock, J. Peck",
    venue: "arXiv", year: 2026, kind: "preprint",
    areas: ["synthetic", "auditing", "aiforgood"],
  },
  {
    title: "System and Method for Low-Power Multi-Horizon Time Forecasting with Interpretability",
    authors: "S. Pentyala et al.",
    venue: "US Patent App. 2026/0220657", year: 2026, kind: "patent",
    areas: ["explain"], note: "JPMorgan Chase",
  },

  /* ---------------------------- 2025 ---------------------------- */
  {
    title: "Privacy Vulnerabilities in Marginals-based Synthetic Data",
    authors: "S. Golob, S. Pentyala, A. Maratkhan, M. De Cock",
    venue: "IEEE SaTML", year: 2025, kind: "conference",
    areas: ["synthetic", "auditing", "privacy"],
    featured: ["trustworthy"],
    note: "29% acceptance",
    url: "https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10992388",
  },
  {
    title: "End-to-End Collaborative Synthetic Data Generation",
    authors: "S. Pentyala, G. Sitaraman, T. Claar*, M. De Cock",
    venue: "PPAI @ AAAI", year: 2025, kind: "workshop",
    areas: ["synthetic", "privacy"],
  },
  {
    title: "Privacy-Preserving Synthetic Data Generation on the NAIRR",
    authors: "S. Pentyala, S. Menzies*, M. De Cock",
    venue: "NAIRR Pilot Inaugural Annual Meeting", year: 2025, kind: "workshop",
    areas: ["synthetic", "privacy"],
  },
  {
    title: "Federated Synthetic Data Generation to Accelerate Hepatology Research",
    authors: "A. Babu*, J. Ahn, M. De Cock, S. Pentyala",
    venue: "ACM Cascadia Women in Computing", year: 2025, kind: "workshop",
    areas: ["synthetic", "aiforgood"],
  },
  {
    title: "Comparison of Single Cell RNA Synthetic Data Generators: a CAMDA Health Challenge Analysis",
    authors: "P. McKeever, D. Filienko, S. Golob, S. Menzies*, S. Pentyala, J. Banerjee, L. Foschini, M. De Cock",
    venue: "ISMB/ECCB", year: 2025, kind: "workshop",
    areas: ["synthetic", "aiforgood"],
  },
  {
    title: "Synthetic Data Generation for bulk RNA-seq Data: a CAMDA Health Challenge Analysis",
    authors: "S. Menzies*, S. Pentyala, D. Filienko, S. Golob, J. Banerjee, L. Foschini, M. De Cock",
    venue: "ISMB/ECCB", year: 2025, kind: "workshop",
    areas: ["synthetic", "aiforgood"],
  },

  /* ---------------------------- 2024 ---------------------------- */
  {
    title: "Privacy-Preserving Group Fairness in Cross-Device Federated Learning",
    authors: "S. Pentyala, N. Neophytou, A. Nascimento, M. De Cock, G. Farnadi",
    venue: "PMLR", year: 2024, kind: "conference",
    areas: ["fairness", "privacy"],
    featured: ["trustworthy"],
    note: "16% acceptance", selected: true,
    url: "https://nips.cc/virtual/2022/58464",
  },
  {
    title: "CaPS: Collaborative and Private Synthetic Data Generation from Distributed Sources",
    authors: "S. Pentyala, M. Pereira, M. De Cock",
    venue: "ICML", year: 2024, kind: "conference",
    areas: ["synthetic", "privacy"],
    featured: ["sdg"],
    note: "27.9% acceptance", selected: true,
    url: "https://proceedings.mlr.press/v235/pentyala24a.html",
  },
  {
    title: "Privacy-Preserving Membership Queries for Federated Anomaly Detection",
    authors: "J. Vos, S. Pentyala, S. Golob, R. Maia, D. Kelly, C. Martins, Z. Erkin, M. De Cock, A. Nascimento",
    venue: "PoPETs", year: 2024, kind: "journal",
    areas: ["privacy"], note: "20% acceptance",
    url: "https://petsymposium.org/popets/2024/popets-2024-0074.pdf",
  },
  {
    title: "An End-to-End Framework for Private DGA Detection as a Service",
    authors: "R.J.M. Maia, D. Ray, S. Pentyala, R. Dowsley, M. De Cock, A. Nascimento, R. Jacobi",
    venue: "PLOS ONE", year: 2024, kind: "journal",
    areas: ["privacy"],
    url: "https://pubmed.ncbi.nlm.nih.gov/39196905/",
  },
  {
    title: "Securely Generating Synthetic Genomic Data from Distributed Data Silos",
    authors: "T. Claar*, S. Golob, S. Pentyala, G. Sitaraman, M. De Cock, J. Banerjee, L. Foschini",
    venue: "GenoPri", year: 2024, kind: "workshop",
    areas: ["synthetic", "privacy", "aiforgood"],
  },
  {
    title: "High Epsilon Synthetic Data Vulnerabilities in MST and PrivBayes",
    authors: "S. Golob, S. Pentyala, A. Maratkhan, M. De Cock",
    venue: "PPAI @ AAAI", year: 2024, kind: "workshop",
    areas: ["synthetic", "auditing"],
  },

  /* ---------------------------- 2023 ---------------------------- */
  {
    title: "Privacy-Preserving Fair Item Ranking",
    authors: "J.A. Sun, S. Pentyala, M. De Cock, G. Farnadi",
    venue: "ECIR", year: 2023, kind: "conference",
    areas: ["fairness", "privacy"],
    featured: ["trustworthy"], note: "29% acceptance",
    url: "https://www.springerprofessional.de/en/privacy-preserving-fair-item-ranking/24634466",
  },
  {
    title: "A Decentralized Information Marketplace Preserving Input and Output Privacy",
    authors: "S. Golob, S. Pentyala, R. Dowsley, B. David, M. Larangeira, M. De Cock, A. Nascimento",
    venue: "DEC @ SIGMOD", year: 2023, kind: "conference",
    areas: ["privacy"],
    url: "https://dl.acm.org/doi/10.1145/3600046.3600047",
  },
  {
    title: "Privacy-Preserving Algorithmic Recourse",
    authors: "S. Pentyala, S. Sharma, S. Kariyappa, F. Leuce, D. Magazzeni",
    venue: "XAI-Finance @ ICAIF", year: 2023, kind: "workshop",
    areas: ["explain", "privacy"],
    featured: ["trustworthy"],
  },
  {
    title: "System and Method for Generating Recourse Paths with Privacy Guarantees",
    authors: "S. Pentyala et al.",
    venue: "US Patent App. 18/517,211", year: 2023, kind: "patent",
    areas: ["explain", "privacy"], note: "JPMorgan Chase",
  },

  /* ---------------------------- 2022 ---------------------------- */
  {
    title: "Secure Multiparty Computation for Synthetic Data Generation from Distributed Data",
    authors: "M. Pereira, S. Pentyala, A. Nascimento, R.T. de Sousa Jr., M. De Cock",
    venue: "SyntheticData4ML @ NeurIPS", year: 2022, kind: "workshop",
    areas: ["synthetic", "privacy"],
  },
  {
    title: "PrivFair: A Library for Privacy-Preserving Fairness Auditing",
    authors: "S. Pentyala, D. Melanson, M. De Cock, G. Farnadi",
    venue: "PPAI @ AAAI", year: 2022, kind: "workshop",
    areas: ["fairness", "auditing", "privacy"],
    featured: ["trustworthy"],
  },
  {
    title: "PrivFairFL: Privacy-Preserving Group Fairness in Federated Learning",
    authors: "S. Pentyala, N. Neophytou, A. Nascimento, M. De Cock, G. Farnadi",
    venue: "Montreal AI Symposium", year: 2022, kind: "workshop",
    areas: ["fairness", "privacy"],
    featured: ["trustworthy"],
  },
  {
    title: "Training Differentially Private Models with Secure Multiparty Computation",
    authors: "S. Pentyala, D. Railsback, R. Maia, R. Dowsley, D. Melanson, A. Nascimento, M. De Cock",
    venue: "arXiv", year: 2022, kind: "preprint",
    areas: ["privacy"],
  },

  /* ---------------------------- 2021 ---------------------------- */
  {
    title: "Privacy-Preserving Video Classification with Convolutional Neural Networks",
    authors: "S. Pentyala, R. Dowsley, M. De Cock",
    venue: "ICML", year: 2021, kind: "conference",
    areas: ["privacy"], note: "21.5% acceptance",
    url: "https://proceedings.mlr.press/v139/pentyala21a/pentyala21a.pdf",
  },
  {
    // CHECK: this one has no research area — it predates your current work.
    // Give it an area, or delete the entry if you'd rather not list it.
    title: "OSMRunner: A System for Exploring and Fixing OSM Connectivity",
    authors: "F. Tabet, S. Pentyala, B. Patel, et al.",
    venue: "IEEE MDM", year: 2021, kind: "conference",
    areas: [],
    url: "https://ieeexplore.ieee.org/document/9474847",
  },

];
