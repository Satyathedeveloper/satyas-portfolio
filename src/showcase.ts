export interface Module { name: string; mine: boolean }
export interface ModuleGroup { title: string; modules: Module[] }
export interface Showcase {
  id: string; kind: 'erp' | 'shop'; name: string; kicker: string; team: string; overview: string;
  contribution: string[]; stack: string[]; groups?: ModuleGroup[]; features?: string[]; link?: { label: string; href: string };
}

export const erp: Showcase = {
  id: 'gen-erp', kind: 'erp', name: 'GEN ERP', kicker: 'Genesis Poweronics. Business management platform', team: '8-member team',
  overview: 'A multi-module management platform for a company that sells, services and rents generators and also sells solar products. It connects sales, service, rental, purchasing, finance and HR work in one system.',
  contribution: [
    'Worked on modules across sales and service, rental and purchasing, HR (attendance and recruitment), and accounts, billing and finance, as one of eight team members.',
    'Built PHP and MySQL back ends and REST APIs, and connected them to React screens.',
    'Tuned MySQL schemas and queries on Genesis applications: normalization, indexes, duplicate removal and foreign keys.',
  ],
  stack: ['Core PHP', 'CodeIgniter 3 & 4', 'MySQL', 'React.js', 'REST APIs'],
  groups: [
    { title: 'Sales and operations', modules: [{ name: 'Generator sales', mine: true }, { name: 'Solar sales and installation', mine: false }] },
    { title: 'Service and rental', modules: [{ name: 'Generator servicing', mine: true }, { name: 'Rental generator management', mine: true }] },
    { title: 'Finance and procurement', modules: [{ name: 'Purchasing', mine: true }, { name: 'Bills and amounts', mine: true }, { name: 'Accounts and ledgers', mine: true }] },
    { title: 'People and administration', modules: [{ name: 'HRM and employee records', mine: true }, { name: 'Attendance', mine: true }, { name: 'Recruitment', mine: true }, { name: 'Admin, Executive and Finance workflows', mine: false }] },
  ],
};

export const nutsby: Showcase = {
  id: 'nutsby', kind: 'shop', name: 'Nutsby', kicker: 'Genesis Poweronics. E-commerce, live in production', team: '5-member team',
  overview: 'A separate, live e-commerce website with its own storefront, ordering flow and payments. It is not part of GEN ERP.',
  contribution: [
    'Built product management, cart and checkout, and order processing as part of the team.',
    'Integrated Cashfree and Razorpay for payments and payouts, with transaction validation for orders.',
    'Added third-party API integrations and fixed production issues using Postman and Thunder Client.',
  ],
  stack: ['Core PHP', 'CodeIgniter', 'MySQL', 'React.js', 'REST APIs', 'Cashfree', 'Razorpay'],
  features: ['Product management', 'Cart and checkout', 'Order processing', 'Payments and payouts (Cashfree, Razorpay)', 'Transaction validation', 'Third-party API integration'],
  link: { label: 'Visit nutsby.com', href: 'https://nutsby.com/' },
};
