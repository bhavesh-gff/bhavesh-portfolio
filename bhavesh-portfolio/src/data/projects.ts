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
      problem: "Car sales data needs to be explored to understand sales trends and differences in model performance.",
      objective: "Analyze the car sales data with Python to identify useful patterns and business insights.",
      dataset: "Car sales dataset.",
      dataPreparation: [
        "Prepared the car sales fields for exploratory analysis.",
        "Checked the data values used for trend and model comparisons."
      ],
      analysis: [
        "Explored sales trends across the dataset.",
        "Compared model performance to identify useful differences.",
        "Summarized patterns that support business interpretation."
      ],
      visualization: [
        "Created visual comparisons to communicate sales trends and model performance.",
        "Used data visualization to make the analysis easier to interpret."
      ],
      insights: [
        "The analysis highlights sales trends and differences in model performance.",
        "The findings provide practical business insights from the car sales data."
      ],
      result: "Delivered a focused sales analysis with visual findings and business insights."
    }
  }
];