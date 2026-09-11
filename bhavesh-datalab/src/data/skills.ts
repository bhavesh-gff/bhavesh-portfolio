export interface SkillItem {
  name: string;
  description: string;
  keyPoints: string[];
  usedIn: string[];
}

export interface SkillCategory {
  category: string;
  skills: SkillItem[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "PROGRAMMING & DATA ANALYSIS",
    skills: [
      {
        name: "Python",
        description: "Programming language used for data analysis and visualization workflows.",
        keyPoints: ["Data analysis", "Scripting", "Visualization workflows"],
        usedIn: ["Sales Data Analysis"]
      },
      {
        name: "Pandas",
        description: "Python library for preparing, transforming, and analyzing tabular data.",
        keyPoints: ["Data cleaning", "Transformation", "Aggregation", "EDA"],
        usedIn: ["Sales Data Analysis"]
      },
      {
        name: "NumPy",
        description: "Numerical computing support used alongside Python data analysis.",
        keyPoints: ["Array operations", "Numerical calculations"],
        usedIn: ["Sales Data Analysis"]
      }
    ]
  },
  {
    category: "SQL & DATA",
    skills: [
      {
        name: "SQL",
        description: "Query language used to extract and analyze structured data.",
        keyPoints: ["Data extraction", "Filtering", "Aggregations", "Conversion analysis"],
        usedIn: ["Customer Churn Analysis", "Ecommerce Sales & Conversion Analysis"]
      },
      {
        name: "Google BigQuery",
        description: "Cloud data warehouse used for ecommerce session and transaction analysis.",
        keyPoints: ["Ecommerce queries", "Session analysis", "Transaction analysis"],
        usedIn: ["Ecommerce Sales & Conversion Analysis"]
      }
    ]
  },
  {
    category: "DATA VISUALISATION",
    skills: [
      {
        name: "Matplotlib",
        description: "Python visualization library used to communicate sales analysis findings.",
        keyPoints: ["Trend charts", "Comparative plots", "Data storytelling"],
        usedIn: ["Sales Data Analysis"]
      },
      {
        name: "Data Visualization",
        description: "Visual communication of trends, comparisons, and analytical findings.",
        keyPoints: ["Trend analysis", "Pattern communication", "Business insights"],
        usedIn: ["Customer Churn Analysis", "Ecommerce Sales & Conversion Analysis", "Sales Data Analysis"]
      }
    ]
  },
  {
    category: "ANALYTICS",
    skills: [
      {
        name: "Exploratory Data Analysis",
        description: "Structured exploration of data to identify patterns, trends, and useful business insights.",
        keyPoints: ["Pattern finding", "Trend analysis", "Comparative analysis"],
        usedIn: ["Customer Churn Analysis", "Ecommerce Sales & Conversion Analysis", "Sales Data Analysis"]
      },
      {
        name: "Customer Segmentation",
        description: "Comparison of customer groups to understand differences in churn and behavior.",
        keyPoints: ["Segment comparisons", "Churn patterns", "Risk identification"],
        usedIn: ["Customer Churn Analysis"]
      },
      {
        name: "Conversion Analysis",
        description: "Analysis of sessions, transactions, and traffic channels to understand ecommerce conversion.",
        keyPoints: ["Session-to-transaction conversion", "Traffic channels", "Cart abandonment"],
        usedIn: ["Ecommerce Sales & Conversion Analysis"]
      }
    ]
  }
];
