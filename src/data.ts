export const profile = {
  name: 'Satya Prasad Aripaka',
  title: 'Full-Stack Developer',
  location: 'Hyderabad, India',
  email: 'satyaprasadaripaka165@gmail.com',
  phone: '+91 96761 81159',
  linkedin: 'https://www.linkedin.com/in/satya-aripaka-a94138241',
  github: 'https://github.com/Satyathedeveloper',
  photo: `${import.meta.env.BASE_URL}profile.png`,
  resume: `${import.meta.env.BASE_URL}Satya_Prasad_Aripaka_Resume.pdf`,
};

export interface Job { company: string; role: string; period: string; note?: string; points: string[]; tech: string[]; }
export const experience: Job[] = [
  {
    company: 'Genesis Poweronics India Pvt. Ltd.', role: 'Full-Stack Developer (PHP)', period: 'May 2025 – Oct 2026',
    note: 'Hyderabad. GEN ERP (8-member team) and Nutsby (5-member team).',
    points: [
      'Worked on the GEN ERP business platform and the live Nutsby e-commerce platform.',
      'Integrated Cashfree and Razorpay payments and payouts, with transaction validation for orders.',
      'Built Nutsby product management, cart, checkout, order processing and third-party API integrations.',
      'Built a Llama 3.2 chatbot that answers natural-language questions over a business database, with role and hierarchy-based access control.',
      'Normalized MySQL tables, added indexes, removed duplicate data and added foreign keys, cutting query slowness by about 50% (measured in phpMyAdmin).',
      'Debugged production issues, tested APIs with Postman and Thunder Client, and took part in code reviews.',
    ],
    tech: ['Core PHP', 'CodeIgniter 3 & 4', 'MySQL', 'React.js', 'REST APIs', 'Llama 3.2', 'Ollama'],
  },
  {
    company: 'Schemax Crafts and Solutions', role: 'Software Developer', period: 'Jul 2024 – May 2025', note: 'Visakhapatnam',
    points: [
      'Built Warehouse Management System modules for the ERP portal of a Bangladesh-based apparel company: cutting, sewing, production and purchasing.',
      'Developed business screens and reusable UI components, and integrated them with REST APIs.',
      'Built Node.js, NestJS and TypeScript backends for R&D projects, including a notification system, a forecasting tool and a report generator.',
    ],
    tech: ['React.js', 'Ant Design', 'Node.js', 'NestJS', 'TypeScript', 'Python', 'Prophet'],
  },
  {
    company: 'Freelance and self-learning', role: 'Freelance Developer', period: 'May 2023 – Jun 2024',
    points: ['Built a web application for a family tailoring shop to manage customer details and orders by delivery date, and strengthened my React.js and full-stack skills.'],
    tech: [],
  },
];

export interface Project { name: string; context: string; summary: string; role: string; tech: string[]; featured?: boolean; links?: { label: string; href: string }[]; }
export const projects: Project[] = [
  { name: 'LLM database chatbot', context: 'Genesis Poweronics, internal tool', featured: true,
    summary: 'Lets staff ask business questions in plain language and get answers from the company database.',
    role: 'Built the chatbot on Llama 3.2 through Ollama, and used session user details to apply role and hierarchy-based access rules to responses.',
    tech: ['Llama 3.2', 'Ollama', 'Python', 'Prompt engineering', 'MySQL'] },
  { name: 'Warehouse Management System modules', context: 'Schemax, client ERP portal', featured: true,
    summary: 'Workflow screens for an apparel manufacturer’s cutting, sewing, production and purchasing.',
    role: 'Built the screens and reusable components, and integrated them with backend REST APIs.',
    tech: ['React.js', 'Ant Design', 'REST APIs'] },
  { name: 'Hierarchy-based notification system', context: 'Schemax, R&D',
    summary: 'Sends project updates to stakeholders according to organizational hierarchy.',
    role: 'Built the Node.js backend and React interface.', tech: ['Node.js', 'NestJS', 'TypeScript', 'React.js'] },
  { name: 'Predictive warning system', context: 'Schemax, R&D',
    summary: 'Forecasts trends from historical data and raises warnings.',
    role: 'Built the forecasting pipeline.', tech: ['Python', 'Prophet'] },
  { name: 'Excel report generator', context: 'Schemax, R&D (public repository)',
    summary: 'Processes data and produces Excel reports with embedded charts.',
    role: 'Wrote the Python utility.', tech: ['Python'],
    links: [{ label: 'View on GitHub', href: 'https://github.com/Satyathedeveloper/plot-generator' }] },
  { name: 'Order tracker for a tailoring shop', context: 'Freelance',
    summary: 'Tracks customer details and orders by delivery date for a family-run shop.',
    role: 'Designed and built the web application.', tech: [] },
  { name: 'E-commerce web app', context: 'Learning project',
    summary: 'Basic store with an Angular frontend and Node.js APIs. Built while learning Angular.',
    role: 'Self-directed build.', tech: ['Angular', 'Node.js', 'REST APIs'] },
];

export interface SkillGroup { title: string; level: 'Professional' | 'Foundational' | 'Learning'; items: string[]; }
export const skills: SkillGroup[] = [
  { title: 'Frontend', level: 'Professional', items: ['React.js (Hooks, Context/Redux, Router)', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Bootstrap', 'Ant Design'] },
  { title: 'Backend', level: 'Professional', items: ['Core PHP', 'CodeIgniter 3 & 4', 'Node.js', 'NestJS', 'REST APIs', 'JWT and session auth'] },
  { title: 'Databases', level: 'Professional', items: ['MySQL', 'Schema design and normalization', 'Indexing', 'Query optimization'] },
  { title: 'Integrations', level: 'Professional', items: ['Cashfree', 'Razorpay', 'Third-party APIs', 'JSON and AJAX'] },
  { title: 'Tools and testing', level: 'Professional', items: ['Git and GitHub', 'Postman', 'Thunder Client', 'API testing', 'Production debugging'] },
  { title: 'PHP OOP', level: 'Foundational', items: ['Applied in CodeIgniter: classes, inheritance, constructors, access modifiers', 'Conceptual: encapsulation, polymorphism, abstraction, interfaces'] },
  { title: 'AI and data', level: 'Foundational', items: ['Llama 3.2 with Ollama', 'Prompt engineering', 'Python (Prophet, Excel automation)'] },
  { title: 'Currently learning', level: 'Learning', items: ['Angular', 'Java', 'Agentic AI concepts'] },
];

export const education = { degree: 'B.Tech (Lateral Entry), Mechanical Engineering', school: 'Raghu Institute of Technology, Visakhapatnam', period: '2020 – 2023', result: 'CGPA 8.5' };
