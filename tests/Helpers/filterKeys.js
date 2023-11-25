const positiveQAKeywords = [
    // Testing Tools & Frameworks
    "Selenium", "Cypress", "JIRA", "TestRail", "Postman",
    "JUnit", "TestNG", "Mocha", "Jest", "Playwright",

    // Testing Types & Methodologies
    "Manual Testing", "Automated Testing", "Functional Testing",
    "Regression Testing", "Integration Testing", "Unit Testing",
    "Smoke Testing", "User Acceptance Testing", "Agile", "Scrum",
    "Waterfall",

    // Programming Languages & Technologies
    "Java", "Python", "JavaScript", "HTML", "CSS", "SQL",
    "Git", "RESTful APIs", "JSON", "XML",

    // Low Entry level of expereince required
    "Entry Level", "New Grad", "Intern", "Junior", "Associate",
    "0-2 years of experience", "0-3 years of experience",

    // Soft Skills & Basics
    "Attention to Detail", "Communication Skills", "Analytical Skills",
    "Teamwork", "Problem-Solving", "Time Management", "Adaptability",
    "Basic Understanding of SDLC", "Bootcamp",
    "Basic Understanding of QA Methodologies"
];

const negativeQAKeywords = [
    // Advanced or Specialized Skills
    "Machine Learning", "AI Development", "Data Science",
    "Blockchain", "IoT", "Cloud Architecture", "Full-stack Development",
    "Project Management", "DevOps", "Security Testing",
    "Penetration Testing", "Performance Testing", "Load Testing",
    "Clearance", "Security Clearance", "Secret Clearance", "US Citizen",

    // Senior-Level Indicators
    "Senior", "Lead", "Manager", "Architect", "Director",
    "5+ years of experience", "Experience leading teams",
    "Experience managing large projects",
    "Staff", "Principal", "VP", "C-Level", "Executive",

    // Irrelevant Skills or Industries
    "Sales", "Marketing", "Finance", "Accounting", "Human Resources",
    "Electrical", "Mechanical", "Civil", "Chemical", "Biomedical",
    
    // Advanced degrees
    "Masters", "PhD", "MBA"
];


module.exports = {
    positiveQAKeywords,
    negativeQAKeywords
}