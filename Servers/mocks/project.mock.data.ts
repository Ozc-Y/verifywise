import { Project } from "../models/project.model";

// Sample mock data for Project
const mockProjects: Project[] = [
  {
    id: 1,
    project_title: "AI Compliance Checker",
    owner: 1,
    users: "[1, 2, 3]",
    start_date: new Date("2023-01-15"),
    ai_risk_classification: "high risk",
    type_of_high_risk_role: "deployer",
    goal: "To ensure compliance with AI governance standards",
    last_updated: new Date("2024-10-30"),
    last_updated_by: 1,
  },
  {
    id: 2,
    project_title: "Data Analyzer",
    owner: 1,
    users: "[4, 5]",
    start_date: new Date("2023-03-22"),
    ai_risk_classification: "limited risk",
    type_of_high_risk_role: "provider",
    goal: "Analyze and optimize dataset usage",
    last_updated: new Date("2024-09-12"),
    last_updated_by: 2,
  }
];

// Export the mock data for use in other files
export default mockProjects;
