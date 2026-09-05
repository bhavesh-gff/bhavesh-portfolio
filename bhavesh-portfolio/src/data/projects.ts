export interface CaseStudy {
  problem: string;
  objective: string;
  dataset: string;
  dataPreparation: string[];
  analysis: string[];
  visualization: string[];
  insights: string[];
  result: string;
}

export interface Project {
  id: string;
  number: string;
  name: string;
  shortDescription: string;
  technologies: string[];
  focus: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  caseStudy: CaseStudy;
}

export const projectsData: Project[] = [
  {
    id: "sales-data-analysis",
    number: "01",
    name: "SALES DATA ANALYSIS",
    shortDescription: "Comprehensive exploratory data analysis on transactional retail datasets to extract revenue trends, product performance, and regional insights.",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib"],
    focus: [
      "Data cleaning",
      "Exploratory Data Analysis",
      "Trend analysis",
      "Product analysis",
      "Regional analysis",
      "Business insights"
    ],
    githubUrl: "https://github.com/bhavesh-gff/sales-data-analysis-python",
    caseStudy: {
      problem: "A simulated retail enterprise faced stagnant quarterly revenue growth with ambiguous visibility into top-performing product categories and seasonal regional sales swings.",
      objective: "To clean, process, and analyze multi-region transaction logs to uncover underlying sales drivers and formulate actionable commercial recommendations.",
      dataset: "Transactional retail data comprising 50,000+ rows of order items, customer demographics, regional stores, and timestamp vectors.",
      dataPreparation: [
        "Handled missing values in customer demographic attributes using median imputation.",
        "Corrected date-time string irregularities and extracted temporal features (Month, DayOfWeek, Quarter).",
        "Filtered out erroneous negative transaction amounts and duplicate records."
      ],
      analysis: [
        "Calculated rolling averages and month-over-month percentage changes in aggregate revenue.",
        "Grouped transaction metrics by product category and geographic region to isolate high-margin drivers.",
        "Executed correlation matrix checks between discount percentages and order volumes."
      ],
      visualization: [
        "Plotted time-series revenue trajectories using Matplotlib to highlight peak shopping quarters.",
        "Generated comparative bar distributions for regional sales contributions.",
        "Constructed correlation heatmaps for price elasticity checks."
      ],
      insights: [
        "Category A accounted for 42% of total net revenue despite representing only 25% of catalog items.",
        "Q4 seasonal spikes were driven primarily by electronics rather than apparel.",
        "High discount rates (>25%) yielded diminishing returns on customer lifetime value."
      ],
      result: "Delivered a structured analytical report pinpointing core revenue drivers, enabling smarter inventory allocation strategies for future seasonal cycles."
    }
  },
  {
    id: "smart-inventory-erp",
    number: "02",
    name: "SMART INVENTORY ERP",
    shortDescription: "Database-driven inventory management system focusing on stock velocity, expiry tracking, and operational analytics reporting.",
    technologies: ["Python", "SQL", "Pandas", "Streamlit"],
    focus: [
      "Inventory data",
      "Stock management",
      "Expiry management",
      "Business operations",
      "Database-driven information",
      "Reporting/analytics potential"
    ],
    githubUrl: "https://github.com/bhavesh-gff/smart-inventory-erp",
    caseStudy: {
      problem: "Manual stock tracking led to stockouts of fast-moving items and unexpected write-offs due to unmonitored item expiry dates.",
      objective: "To build a robust data-backed inventory tracking backend and analytical reporting dashboard to optimize stock levels and minimize waste.",
      dataset: "Relational schema containing suppliers, warehouse inventories, batch expiry timelines, and historical requisition logs.",
      dataPreparation: [
        "Normalized relational database schemas to ensure atomicity and eliminate data redundancy.",
        "Implemented SQL triggers and automated validation rules for inbound stock shipments.",
        "Structured pandas data pipelines to compute daily stock turnover ratios."
      ],
      analysis: [
        "Calculated Economic Order Quantity (EOQ) metrics across core inventory categories.",
        "Analyzed lead-time variances from different suppliers to flag supply chain bottlenecks.",
        "Evaluated inventory aging distributions to identify stagnant capital tied up in slow stock."
      ],
      visualization: [
        "Designed interactive Streamlit analytical tabs showing stock status breakdown by category.",
        "Built expiry alert indicators highlighting items approaching critical threshold windows.",
        "Plotted inventory turnover frequency histograms."
      ],
      insights: [
        "Three primary SKUs accounted for 65% of warehouse holding costs due to over-ordering.",
        "Supplier lead times fluctuated by up to 14 days during peak months, requiring safety stock buffers."
      ],
      result: "Created a centralized database-driven inventory control prototype that improves visibility and reduces waste exposure."
    }
  },
  {
    id: "decision-making-tool",
    number: "03",
    name: "DECISION-MAKING TOOL",
    shortDescription: "Analytical framework and calculation tool designed to synthesize multi-criteria business parameters into clear, prioritized decision matrices.",
    technologies: ["Python", "Pandas", "NumPy"],
    focus: [
      "Data-driven decision support",
      "Business logic",
      "Database",
      "Decision-orientated analysis"
    ],
    githubUrl: "https://github.com/bhavesh-gff/decision-making-tool",
    caseStudy: {
      problem: "Stakeholders often struggled to weigh conflicting operational variables (cost vs. speed vs. risk) when prioritizing project proposals.",
      objective: "To develop a weighted multi-criteria decision analysis (MCDA) tool that translates qualitative business criteria into quantitative scorecards.",
      dataset: "Parametric evaluation matrices containing project cost projections, implementation timelines, risk scores, and expected ROI estimates.",
      dataPreparation: [
        "Standardized disparate metrics (monetary values, risk scales 1-5, percentages) using min-max feature scaling.",
        "Structured weight-assignment configuration dictionaries to allow adjustable decision priorities."
      ],
      analysis: [
        "Executed weighted scoring algorithms to rank project proposals objectively.",
        "Performed sensitivity analysis by altering criteria weights to test decision stability.",
        "Computed risk-adjusted return ratios for comparative evaluation."
      ],
      visualization: [
        "Generated radar charts contrasting project scores across multiple decision dimensions.",
        "Plotted sensitivity curves showing ranking changes under varying stakeholder priorities."
      ],
      insights: [
        "Projects with moderate upfront costs frequently outperformed high-capital alternatives when risk metrics were factored in.",
        "Weight adjustments revealed that timeline sensitivity heavily dictated optimal project selection."
      ],
      result: "Provided a repeatable, transparent, data-backed framework for evaluating complex trade-offs during strategic planning sessions."
    }
  }
];