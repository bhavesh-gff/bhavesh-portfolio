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
    category: "DATA ANALYSIS",
    skills: [
      {
        name: "Python",
        description: "Primary programming language for scripting, data pipelines, and numerical calculations.",
        keyPoints: ["Scripting", "Automation", "Data structures", "Function design"],
        usedIn: ["Sales Data Analysis", "Smart Inventory ERP", "Decision-Making Tool"]
      },
      {
        name: "Pandas",
        description: "Core library for tabular data manipulation, aggregation, and reshaping.",
        keyPoints: ["Data Cleaning", "Transformation", "Aggregation", "EDA"],
        usedIn: ["Sales Data Analysis", "Smart Inventory ERP"]
      },
      {
        name: "NumPy",
        description: "Numerical computing library for high-performance array operations and mathematical functions.",
        keyPoints: ["Vectorization", "Array Operations", "Linear Algebra basics", "Statistical calculations"],
        usedIn: ["Sales Data Analysis", "Decision-Making Tool"]
      },
      {
        name: "SQL",
        description: "Structured Query Language for database interrogation, joins, and aggregations.",
        keyPoints: ["Joins & Aggregations", "Subqueries", "Filtering", "Schema querying"],
        usedIn: ["Smart Inventory ERP"]
      },
      {
        name: "Excel",
        description: "Spreadsheet tool for rapid data sanity checks, pivot tables, and tabular exploration.",
        keyPoints: ["Pivot Tables", "VLOOKUP/XLOOKUP", "Conditional Formatting", "Initial Data Profiling"],
        usedIn: ["Sales Data Analysis"]
      }
    ]
  },
  {
    category: "VISUALISATION",
    skills: [
      {
        name: "Matplotlib",
        description: "Comprehensive plotting library for generating static, animated, and interactive data visualizations.",
        keyPoints: ["Line & Bar Plots", "Scatter Distributions", "Subplot Layouts", "Custom Styling"],
        usedIn: ["Sales Data Analysis"]
      },
      {
        name: "Power BI",
        description: "Business intelligence platform for interactive dashboards and data storytelling.",
        keyPoints: ["DAX basics", "Dashboard Layout", "Data Modeling", "Interactive Slicers"],
        usedIn: ["Smart Inventory ERP"]
      }
    ]
  },
  {
    category: "DATA SCIENCE",
    skills: [
      {
        name: "Statistics",
        description: "Foundational mathematical framework for hypothesis testing, distributions, and variance.",
        keyPoints: ["Descriptive Stats", "Probability Distributions", "Hypothesis Testing", "Correlation Analysis"],
        usedIn: ["Sales Data Analysis", "Decision-Making Tool"]
      },
      {
        name: "Exploratory Data Analysis",
        description: "Systematic approach to summarizing dataset main characteristics using visual and quantitative methods.",
        keyPoints: ["Outlier Detection", "Distribution Checking", "Pattern Recognition", "Missing Value Audit"],
        usedIn: ["Sales Data Analysis"]
      },
      {
        name: "Machine Learning",
        description: "Fundamental predictive modeling concepts and scikit-learn introductory algorithms.",
        keyPoints: ["Supervised Learning basics", "Model Evaluation", "Feature Engineering", "Regression"],
        usedIn: ["Decision-Making Tool"]
      }
    ]
  },
  {
    category: "DATABASES",
    skills: [
      {
        name: "MySQL",
        description: "Relational database management system for storing structured records and executing queries.",
        keyPoints: ["Table Creation", "Indexing", "Joins", "CRUD Operations"],
        usedIn: ["Smart Inventory ERP"]
      },
      {
        name: "PostgreSQL",
        description: "Advanced open-source relational database system with robust querying capabilities.",
        keyPoints: ["Constraints", "Advanced Queries", "Transactions", "Relational Integrity"],
        usedIn: ["Smart Inventory ERP"]
      },
      {
        name: "SQLite",
        description: "Lightweight disk-based database for standalone python applications and prototyping.",
        keyPoints: ["File-based DB", "Local Storage", "Quick Setup", "SQL Support"],
        usedIn: ["Smart Inventory ERP", "Decision-Making Tool"]
      }
    ]
  },
  {
    category: "SUPPORTING TECHNOLOGIES",
    skills: [
      {
        name: "Git",
        description: "Version control system for tracking code iterations and project history.",
        keyPoints: ["Commits", "Branching", "Merging", "Version History"],
        usedIn: ["Sales Data Analysis", "Smart Inventory ERP", "Decision-Making Tool"]
      },
      {
        name: "GitHub",
        description: "Cloud platform for repository hosting, collaboration, and code sharing.",
        keyPoints: ["Repositories", "Markdown Documentation", "Issue Tracking", "Open Source workflow"],
        usedIn: ["Sales Data Analysis", "Smart Inventory ERP", "Decision-Making Tool"]
      },
      {
        name: "Streamlit",
        description: "Python framework for rapidly turning data scripts into shareable web apps.",
        keyPoints: ["Interactive Widgets", "Data App Prototyping", "Layout Design", "Rapid Deployment"],
        usedIn: ["Smart Inventory ERP"]
      },
      {
        name: "React",
        description: "JavaScript library for building modular user interface components.",
        keyPoints: ["Component Architecture", "State Management", "JSX", "UI Styling"],
        usedIn: ["Portfolio Workspace"]
      },
      {
        name: "Node.js",
        description: "JavaScript runtime environment for backend utilities and script execution.",
        keyPoints: ["Runtime Environment", "Scripting", "Package Management", "Tooling"],
        usedIn: ["Portfolio Workspace"]
      }
    ]
  }
];