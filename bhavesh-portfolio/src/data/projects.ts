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
  name: string;
  shortDescription: string;
  technologies: string[];
  focus: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  caseStudy: CaseStudy;
}

export const projectsData: Project[] = [
  {
    id: "customer-churn-analysis",
    name: "Customer Churn Analysis",
    shortDescription: "Analysis of customer churn patterns across contract type, payment method, internet service, and customer segments to support retention decisions.",
    technologies: ["SQL", "Data Analysis"],
    focus: ["Churn rate analysis", "Customer segmentation", "Risk identification", "Business recommendations"],
    caseStudy: {
      problem: "Customer churn needs to be understood across customer and service attributes so retention priorities can be identified.",
      objective: "Explore churn patterns and translate them into practical retention recommendations.",
      dataset: "Customer churn dataset.",
      dataPreparation: ["Prepared customer and service fields for comparison.", "Checked values used in churn-rate analysis."],
      analysis: ["Compared churn by contract type, payment method, and internet service.", "Reviewed customer segments and churn risk patterns."],
      visualization: ["Summarized churn patterns with comparison-focused visual analysis."],
      insights: ["The analysis highlights where churn is concentrated across customer and service segments."],
      result: "A focused churn analysis that supports retention strategy and prioritization."
    }
  },
  {
    id: "ecommerce-sales-conversion-analysis",
    name: "Ecommerce Sales & Conversion Analysis",
    shortDescription: "BigQuery and SQL analysis of ecommerce sessions, revenue, product performance, traffic channels, and session-to-transaction conversion.",
    technologies: ["SQL", "Google BigQuery"],
    focus: ["Revenue analysis", "Product performance", "Traffic-channel conversion", "Cart abandonment"],
    caseStudy: {
      problem: "Ecommerce session data needs to be connected to revenue and transaction outcomes to understand conversion performance.",
      objective: "Analyze sessions, products, traffic channels, and transactions to identify conversion and revenue patterns.",
      dataset: "Ecommerce session and transaction data analyzed in Google BigQuery.",
      dataPreparation: ["Queried ecommerce session and transaction data for analysis.", "Prepared session-level measures for conversion comparisons."],
      analysis: ["Analyzed revenue and product performance.", "Compared traffic-channel conversion and session-to-transaction behavior.", "Reviewed cart abandonment patterns."],
      visualization: ["Organized conversion and revenue findings into clear analytical summaries."],
      insights: ["The analysis connects traffic, sessions, transactions, and revenue to support ecommerce optimization."],
      result: "A SQL-based ecommerce analysis that supports conversion and revenue decisions."
    }
  },
  {
    id: "sales-data-analysis",
    name: "Sales Data Analysis",
    shortDescription: "Python and Pandas analysis of car sales data to identify sales trends, model performance, and practical business insights.",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib"],
    focus: [
      "Data cleaning",
      "Exploratory Data Analysis",
      "Sales trends",
      "Model performance",
      "Data Visualization",
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
  }
];