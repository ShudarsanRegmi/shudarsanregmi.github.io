export const personalInfo = {
    name: "Shudarsan Regmi",
    role: "Full-Stack Developer & Security Enthusiast",
    email: "shudarsanregmi555@gmail.com",
    github: "https://github.com/ShudarsanRegmi",
    linkedin: "https://www.linkedin.com/in/shudarsanregmi/",
    resume: "/Resume.pdf", // Assuming it will be placed in public/
    bio: "I'm a full stack web developer with a passion for creating dynamic and responsive web applications. I enjoy working with both frontend and backend technologies, including React, Node.js, and MongoDB. In addition to web development, I'm deeply interested in cybersecurity and strive to implement secure coding practices in my projects. My goal is to build robust and secure applications that deliver a great user experience.",
};

export const skills = [
    { name: "Frontend Development", level: 90, category: "Web" },
    { name: "Backend Development", level: 85, category: "Web" },
    { name: "Cybersecurity", level: 75, category: "Security" },
    { name: "Cloud Computing", level: 75, category: "Tools" },
    { name: "Python", level: 85, category: "Languages" },
    { name: "C/C++", level: 80, category: "Languages" },
    { name: "JavaScript/React", level: 90, category: "Languages" },
];

export const projects = [
    {
        title: "Negces Lab Booking",
        description: "Management platform for laboratory reservations at Amrita Vishwa Vidyapeetham.",
        tags: ["MERN", "Real World Impact"],
        category: "Web Development",
    },
    {
        title: "Vulnerability Scanner",
        description: "Security assessment tool for LLM-integrated chatbots focused on data leakage.",
        tags: ["Python", "Deep Learning", "Security"],
        category: "Cybersecurity",
    },
    {
        title: "Network Packet Sniffer",
        description: "C-based utility with protocol-level filtering and network analysis capabilities.",
        tags: ["C", "Networking", "Security"],
        category: "Cybersecurity",
    },
    {
        title: "VoxTalkinux",
        description: "Voice transcription utility for Linux environments powered by OpenAI Whisper.",
        tags: ["Python", "AI", "Utility"],
        category: "Software Development",
    },
    {
        title: "Digital Ledger",
        description: "Business management solution for medical suppliers migrating from physical records.",
        tags: ["MERN", "Business"],
        category: "Web Development",
    },
    {
        title: "Classroom Management",
        description: "Comprehensive platform for resource management and real-time updates.",
        tags: ["MERN", "Education"],
        category: "Web Development",
    }
];

export const experience = [
    {
        company: "InfoSys SpringBoard",
        role: "Software Development Intern",
        period: "Nov 2024 - Jan 2025",
        description: [
            "Led cross-functional team as Product Owner and Team Leader.",
            "Developed backend features for fashion e-commerce using Flask and SQLite.",
            "Managed sprint planning and code integration across sub-teams.",
        ],
    },
];

export const education = [
    {
        institution: "Amrita Vishwa Vidyapeetham",
        degree: "B.Tech - CyberSecurity",
        period: "Pursuing",
        extra: "Current CGPA: 9.01",
    },
    {
        institution: "Higher Secondary School",
        degree: "Science + Computer Science",
        period: "2023",
        extra: "GPA: 3.72",
    },
];

export const achievements = [
    { title: "1st Rank in 2nd Semester", gpa: "9.34 SGPA" },
    { title: "3rd Rank in 1st Semester", gpa: "8.7 SGPA" },
    { title: "Research Publication", detail: "Cybersecurity & Modern App Dev (2024)" },
];
