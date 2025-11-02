import { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Mahir Dyan",
    taglines: [
      "Computer Science & Engineering Student",
      "Robotics & AI Enthusiast",
      "Software Developer & Builder",
      "Always Learning, Building, and Sharing"
    ],
    email: "mahirdyan30@gmail.com",
    socials: [
      { name: "LinkedIn", url: "https://www.linkedin.com/in/mahir-dyan-47b396310/", icon: "fab fa-linkedin-in" },
      { name: "GitHub", url: "https://github.com/Iamm3taphorical", icon: "fab fa-github" },
      { name: "Codeforces", url: "https://codeforces.com/profile/mahir.dyan", icon: "fas fa-code" },
      { name: "LeetCode", url: "https://leetcode.com/u/gnkF6xnyA4/", icon: "fas fa-keyboard" },
      { name: "HackerRank", url: "https://www.hackerrank.com/profile/mahir_dyan", icon: "fab fa-hackerrank" },
      { name: "Email", url: "mailto:mahirdyan30@gmail.com", icon: "fas fa-envelope" }
    ]
  },
  about: "I’m a Computer Science & Engineering student at BRAC University (Dhaka, Bangladesh), passionate about software development, robotics, automation, and AI-driven solutions. I build algorithms, explore machine vision and control systems, and develop full-stack web applications. My approach is collaborative, curious, and impact-focused.",
  skills: [
    { title: "Languages", skills: ["Java", "Python", "C++", "C#"] },
    { title: "Web Technologies", skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Node.js", "Express", "MongoDB", "MySQL"] },
    { title: "Robotics & Embedded", skills: ["Machine Vision", "Control Systems", "Sensor Integration", "Embedded Programming"] },
    { title: "Dev Practices", skills: ["OOP", "Functional Programming", "REST APIs", "CI/CD"] },
    { title: "Soft Skills", skills: ["Leadership", "Team Coordination", "Technical Documentation", "Community Management"] }
  ],
  experience: [
    { role: "Co-Founder", company: "Projukti Lipi", period: "2024 – Present", description: "Co-founded a student tech initiative focused on promoting tech awareness, leading projects, partnerships, and community events." },
    { role: "Team Member (Machine Vision & AI)", company: "BRACU Duburi", period: "2024 – Present", description: "Working on machine vision and AI subsystems for an autonomous underwater vehicle: object detection, navigation, and real-time decision pipelines." },
    { role: "Team Member (Control & AI)", company: "BRACU Alter", period: "2024 – Present", description: "Contributing to autonomous rescue rover systems — control theory, system modeling, stability analysis, and AI navigation modules." },
    { role: "Team Member (Avionics)", company: "BRACU Diganta", period: "2024 – Present", description: "Developing avionics and embedded software for UAVs: sensor integration, communication modules, and flight data handling." },
    { role: "Apprentice", company: "Robotics Club of BRAC University (ROBU)", period: "2024 – Present", description: "Supported robotics projects by streamlining HR operations, coordinating members, and improving collaboration across project teams. Participated in hands-on robotics prototyping and testing workflows." },
    { role: "Executive", company: "BRAC University Computer Club (BUCC)", period: "2024 – Present", description: "Managed member engagement and community activities, organized workshops and coding sessions, and assisted in club project coordination." },
    { role: "General Member", company: "IEEE BRACU Student Branch", period: "2024 – Present", description: "Engaged in research collaboration initiatives and technical events to strengthen the student research ecosystem." },
    { role: "HR & Strategic Planner", company: "Mohammadpur Government College Science Club", period: "2021 – 2022", description: "Led member engagement and event organization to grow the club’s activities and outreach." }
  ],
  currentFocus: {
    introduction: "I focus on building end-to-end systems that combine robust software engineering with real-world robotics and ML. My current priorities include:",
    focusPoints: [
      { title: "Data Structures & Algorithms (Java)", description: "Deepening mastery with production-quality implementations and documented learning resources." },
      { title: "Computer Vision & Object Detection (YOLO / OpenCV)", description: "Developing reliable pipelines for image/video input, model inference, and annotated output for robotics applications." },
      { title: "Robotics Systems Integration", description: "Integrating perception, control, and embedded interfaces for autonomous platforms." },
      { title: "Full-Stack Web & Deployment", description: "Building portfolio projects and learning to deploy ML services with containerization and cloud fundamentals." },
      { title: "Competitive Programming", description: "Improving ranking and problem coverage on Codeforces, LeetCode and HackerRank." },
      { title: "Engineering Best Practices", description: "Adding tests, CI/CD, modular design, and documentation to make projects production ready." }
    ],
    shortTermGoals: [
      "Convert key YOLO notebooks into reusable Python packages with CLI interfaces.",
      "Harden `CSE220_Data_Structure` with test suites and example problems for each operation.",
      "Deploy a perception → inference → dashboard demo (via GitHub Pages + lightweight backend/cloud function)."
    ]
  },
  githubStats: {
    username: "Iamm3taphorical",
    stats: "https://github-readme-stats.vercel.app/api?username=Iamm3taphorical&show_icons=true&count_private=true",
    topLangs: "https://github-readme-stats.vercel.app/api/top-langs/?username=Iamm3taphorical&layout=compact",
    streak: "https://streak-stats.demolab.com?user=Iamm3taphorical",
    summaryCards: {
      profileDetails: "https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=Iamm3taphorical&theme=radical",
      reposPerLang: "https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=Iamm3taphorical&theme=radical",
      mostCommitLang: "https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=Iamm3taphorical&theme=radical",
      stats: "https://github-profile-summary-cards.vercel.app/api/cards/stats?username=Iamm3taphorical&theme=radical",
      productiveTime: "https://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=Iamm3taphorical&theme=radical&utcOffset=6"
    }
  },
  awards: [
    { title: "Top 8 Finalist", event: "AI Hackathon" },
    { title: "Participant", event: "National Robotics Championship (NRC)" },
    { title: "Participant", event: "Traction অভ্যুদয় (National Robotics Competition)" }
  ]
};