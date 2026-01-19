export const siteConfig = {
    name: "Philip Adzanoukpe",
    title: "Philip Adzanoukpe | Software & AI Engineer",
    description:
        "Experienced Software & AI Engineer specializing in Machine Learning, Computer Vision, AI Agents, and scalable backend systems. 10+ years building production ML pipelines and AI-driven solutions. Honorary Visiting Fellow at City, St George's, University of London.",
    url: "https://philipaz.com",
    ogImage: "/avatar.png",
    links: {
        github: "https://github.com/epigos",
        linkedin: "https://linkedin.com/in/philipadzanoukpe",
        twitter: "https://twitter.com/_philip_a",
        calendly: "https://calendly.com/philip-adzanoukpe/30min",
        blog: "https://medium.com/@epigos",
    },
    author: {
        name: "Philip Adzanoukpe",
        role: "Software & AI Engineer",
        tagline: "Building intelligent systems that drive real-world impact",
        bio: `Experienced Software and Machine Learning Engineer with over eight years of expertise 
          in building scalable backend systems and AI-driven solutions. A recent recipient of 
          the Excellence in STEM Achievement Award 2024 and an Honorary Visiting Fellow at 
          City, St George's, University of London, with a Master's degree in Data Science (Distinction). 
          Skilled in applying software engineering and AI to develop practical, high-impact 
          solutions that drive value for businesses and consumers.`,
        location: "Ghana / UK",
        avatar: "/avatar.png",
    },
};

export const navigation = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Research", href: "#research" },
    { name: "GitHub", href: "#github" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
];

export const techStack = {
    languages: [
        { name: "Python", icon: "python" },
        { name: "Go", icon: "go" },
        { name: "JavaScript", icon: "javascript" },
        { name: "TypeScript", icon: "typescript" },
        { name: "PHP", icon: "php" },
    ],
    "AI & ML": [
        { name: "PyTorch", icon: "pytorch" },
        { name: "TensorFlow", icon: "tensorflow" },
        { name: "Scikit-Learn", icon: "scikitlearn" },
        { name: "LangChain", icon: "langchain" },
        { name: "MLflow", icon: "mlflow" },
        { name: "OpenCV", icon: "opencv" },
    ],
    frameworks: [
        { name: "Django", icon: "django" },
        { name: "FastAPI", icon: "fastapi" },
        { name: "Flask", icon: "flask" },
        { name: "PySpark", icon: "spark" },
        { name: "Pandas", icon: "pandas" },
        { name: "React", icon: "react" },
        { name: "Next.js", icon: "nextjs" },
    ],
    cloud: [
        { name: "AWS", icon: "aws" },
        { name: "GCP", icon: "gcp" },
        { name: "SageMaker", icon: "sagemaker" },
        { name: "Kubernetes", icon: "kubernetes" },
        { name: "Docker", icon: "docker" },
        { name: "Terraform", icon: "terraform" },
    ],
    databases: [
        { name: "PostgreSQL", icon: "postgresql" },
        { name: "MySQL", icon: "mysql" },
        { name: "MongoDB", icon: "mongodb" },
        { name: "DynamoDB", icon: "dynamodb" },
        { name: "Redis", icon: "redis" },
        { name: "Neo4j", icon: "neo4j" },
    ],
    messaging: [
        { name: "Kafka", icon: "kafka" },
        { name: "RabbitMQ", icon: "rabbitmq" },
        { name: "SQS", icon: "sqs" },
    ],
};

export const projectHighlights = [
    {
        id: "1",
        name: "Epigos AI – No-Code Vision Platform",
        context: "Founder Project",
        year: "2023",
        problem:
            "Businesses lack ML expertise to deploy custom computer vision solutions.",
        solution:
            "Built an end-to-end no-code platform enabling businesses to train and deploy vision AI models without writing code. Includes automated training pipelines, model monitoring, and one-click deployment.",
        impact: "Deployed in agribusiness & healthcare pilots. Automated model training reduces deployment time from weeks to hours.",
        technologies: [
            "Python",
            "PyTorch",
            "FastAPI",
            "AWS",
            "SageMaker",
            "OpenCV",
            "React",
        ],
        links: {
            demo: "https://epigos.ai",
            github: "https://github.com/epigos",
        },
        featured: true,
    },
    {
        id: "2",
        name: "Smart Payment Routing Engine",
        context: "Gr4vy",
        year: "2022",
        problem:
            "Payment failures and latency due to suboptimal PSP routing decisions.",
        solution:
            "Built an intelligent payment routing service that automatically routes transactions to optimal Payment Service Providers based on transaction context, user demographics, and location.",
        impact: "Reduced payment latency through geo-based traffic routing. Improved transaction success rates for enterprise clients.",
        technologies: ["Python", "Go", "FastAPI", "PostgreSQL", "GCP", "AWS"],
        links: {},
        featured: true,
    },
    {
        id: "3",
        name: "ML-Powered Video Recommendations",
        context: "Triller",
        year: "2020",
        problem:
            "Users struggled to discover relevant content among millions of videos on the platform.",
        solution:
            "Integrated ML models for personalized video recommendations and built real-time video classification and analytics microservices.",
        impact: "Enhanced user engagement for millions of users. Enabled content discovery at scale with high-performance ML inference.",
        technologies: [
            "Python",
            "TensorFlow",
            "OpenCV",
            "AWS",
            "Kafka",
            "Kubernetes",
        ],
        links: {},
        featured: true,
    },
    {
        id: "4",
        name: "Loan Default Risk Prediction",
        context: "LendInvest",
        year: "2019",
        problem:
            "Manual underwriting was slow, inconsistent, and couldn't scale with loan volume.",
        solution:
            "Built ML models to predict loan application default risk and estimate completion timelines, integrated into the automated underwriting pipeline.",
        impact: "Automated key decisions in the underwriting process, enabling faster loan processing and consistent risk assessment.",
        technologies: [
            "Python",
            "Scikit-learn",
            "PySpark",
            "Pandas",
            "MySQL",
            "Kubernetes",
        ],
        links: {},
        featured: true,
    },
    {
        id: "5",
        name: "Payment Aggregation Platform",
        context: "OctopusLabs",
        year: "2017",
        problem:
            "Multiple internal platforms needed unified payment processing and bank account management.",
        solution:
            "Led development of a Payment Aggregation API enabling cross-platform payment processing, bank account verification, and transaction management.",
        impact: "Unified payment infrastructure across the organization. Enabled fund managers to process and manage loan portfolios efficiently.",
        technologies: [
            "Python",
            "Tornado",
            "MySQL",
            "GCP",
            "Kubernetes",
            "Docker",
        ],
        links: {},
        featured: false,
    },
    {
        id: "6",
        name: "Autonomous Driving State Representation",
        context: "MSc Research – City University London",
        year: "2020",
        problem:
            "Vision-based RL agents struggle with high-dimensional visual inputs in autonomous driving.",
        solution:
            "Developed evolving state representation learning techniques for deep reinforcement learning agents, improving how they process and act on visual data.",
        impact: "Improved visual perception and decision-making in simulated autonomous driving environments. Graduated with Distinction.",
        technologies: [
            "Python",
            "PyTorch",
            "OpenCV",
            "Reinforcement Learning",
            "CARLA",
        ],
        links: {
            paper: "https://bit.ly/2URLQrm",
        },
        featured: false,
    },
];

export const experiences = [
    {
        id: "1",
        company: "Epigos AI",
        role: "Founder & CEO",
        location: "Ghana",
        startDate: "May 2023",
        endDate: "Present",
        description: "Building no-code computer vision platform for businesses",
        highlights: [
            "Designed a no-code platform enabling businesses to create and implement custom computer vision models",
            "Developed an automated pipeline for training and deploying vision AI models, including monitoring key model performance metrics",
            "Managed all technical aspects of the platform development, including architecture, design, implementation, troubleshooting and debugging",
        ],
        technologies: [
            "Python",
            "FastAPI",
            "Go",
            "PyTorch",
            "AWS",
            "SageMaker",
            "OpenCV",
            "PostgreSQL",
        ],
        link: "https://epigos.ai",
    },
    {
        id: "2",
        company: "Gr4vy",
        role: "Senior Software Engineer",
        location: "UK",
        startDate: "Jan 2022",
        endDate: "Apr 2023",
        description: "Building payment infrastructure and routing services",
        highlights: [
            "Built APIs to interface Payment Service Providers (PSPs) enabling clients to process payment transactions",
            "Developed a location-based traffic routing service to direct traffic to microservices based on user location to reduce response latency",
            "Built payment routing service to automatically route transactions to PSPs based on transaction context and user demographics",
        ],
        technologies: [
            "Python",
            "FastAPI",
            "Go",
            "PostgreSQL",
            "Docker",
            "GCP",
            "AWS",
            "Serverless",
        ],
        link: "https://gr4vy.com",
    },
    {
        id: "3",
        company: "Triller",
        role: "Senior Software Engineer, Machine Learning",
        location: "UK",
        startDate: "Jun 2020",
        endDate: "Dec 2021",
        description: "ML-powered video recommendations and content discovery",
        highlights: [
            "Integrated machine learning models into the Triller app backend, enhancing personalised video recommendations for users",
            "Developed and optimised backend microservices to support real-time video classification and analytics, ensuring high-performance scaling for millions of users",
            "Collaborated with the research team to implement AI-powered features, improving user engagement and content discovery across the platform",
        ],
        technologies: [
            "Python",
            "PostgreSQL",
            "TensorFlow",
            "OpenCV",
            "AWS",
            "Kafka",
            "Kubernetes",
        ],
        link: "https://apps.apple.com/us/app/triller-social-videos-clips/id994905763",
    },
    {
        id: "4",
        company: "LendInvest",
        role: "Senior Software Engineer",
        location: "UK",
        startDate: "May 2019",
        endDate: "May 2020",
        description: "Automating loan underwriting with ML predictions",
        highlights: [
            "Built backend systems for the automation of the loan underwriting process",
            "Built Machine learning models to predict loan application default risk and completion days",
        ],
        technologies: [
            "Python",
            "Tornado",
            "MySQL",
            "Kubernetes",
            "RabbitMQ",
            "Pandas",
            "Scikit-learn",
            "PySpark",
        ],
        link: "https://lendinvest.com",
    },
    {
        id: "5",
        company: "OctopusInvestments",
        role: "Python Developer",
        location: "UK",
        startDate: "Mar 2017",
        endDate: "Jun 2019",
        description: "Payment aggregation and loan management platforms",
        highlights: [
            "Led the development of Payment aggregation API enabling internal platforms to process payments and manage client bank account details",
            "Built web platform for loan underwriting to enable fund managers to process and manage loan portfolios",
        ],
        technologies: [
            "Python",
            "Tornado",
            "MySQL",
            "GCP",
            "Kubernetes",
            "Docker",
        ],
        link: "https://octopusinvestments.com",
    },
    {
        id: "6",
        company: "Lyst",
        role: "Software Engineer",
        location: "UK",
        startDate: "Oct 2016",
        endDate: "Dec 2016",
        description: "Building and maintaining web crawlers at scale",
        highlights: [
            "Designed, developed and maintained web crawlers for clients mainly in Python",
        ],
        technologies: [
            "Python",
            "Scrapy",
            "Django",
            "Flask",
            "PostgreSQL",
            "AWS",
            "ElasticSearch",
        ],
        link: "https://lyst.com",
    },
    {
        id: "7",
        company: "Zyte",
        role: "Web Scraping Engineer",
        location: "Ireland",
        startDate: "May 2016",
        endDate: "Dec 2016",
        description: "Building and maintaining web crawlers at scale",
        highlights: [
            "Designed, developed and maintained web crawlers for clients mainly in Python",
        ],
        technologies: [
            "Python",
            "Scrapy",
            "Django",
            "Flask",
            "PostgreSQL",
            "AWS",
            "ElasticSearch",
        ],
        link: "https://zyte.com",
    },
];

export const education = [
    {
        id: "1",
        institution: "City St George's, University of London",
        degree: "MSc Data Science",
        field: "Data Science",
        startDate: "2019",
        endDate: "2020",
        location: "London, UK",
        highlights: [
            "Graduated with Distinction",
            "Thesis: Evolving State Representation Learning for vision based Deep Reinforcement Learning in autonomous driving environments",
            "Honorary Visiting Fellow (2024)",
        ],
    },
    {
        id: "2",
        institution: "University of Cape Coast",
        degree: "BSc Human Biology",
        field: "Human Biology",
        startDate: "2008",
        endDate: "2012",
        location: "Cape Coast, Ghana",
        highlights: [],
    },
];

export const honors = [
    {
        id: "1",
        title: "Honorary Visiting Fellow",
        organization: "City, St George's, University of London",
        date: "2025",
        description:
            "Appointed for contributions to AI and machine learning research",
    },
    {
        id: "2",
        title: "Excellence in STEM Achievement Award 2024",
        organization: "City University London",
        date: "2024",
        description: "Recognition for outstanding contributions in STEM",
    },
    {
        id: "3",
        title: "Speaker - AI Expo Africa 2023",
        organization: "AI Expo Africa",
        date: "2023",
        description: "Presented: Transforming Industry with Computer Vision",
    },
    {
        id: "4",
        title: "Speaker - Python Addicts",
        organization: "Python Addicts London",
        date: "2019",
        description: "Presented: Python for Fintech",
    },
];

export const research = [
    {
        id: "1",
        title: "Predicting House Rental Prices in Ghana Using Machine Learning",
        slug: "house-rental-prices-ghana",
        abstract:
            "Research on applying machine learning techniques to predict house rental prices in the Ghanaian real estate market, providing insights for property valuation and market analysis.",
        authors: ["Philip Adzanoukpe"],
        publication: "Research Paper",
        date: "2024",
        tags: ["Machine Learning", "Real Estate", "Prediction Models"],
        featured: true,
        externalUrl: "https://arxiv.org/abs/2501.06241",
    },
    {
        id: "2",
        title: "Evolving State Representation Learning for Vision-based Deep Reinforcement Learning",
        slug: "state-representation-learning",
        abstract:
            "MSc thesis exploring state representation learning techniques for deep reinforcement learning agents in autonomous driving environments, improving visual perception and decision-making.",
        authors: ["Philip Adzanoukpe"],
        publication: "MSc Thesis - City University London",
        date: "2020",
        tags: [
            "Deep Learning",
            "Reinforcement Learning",
            "Computer Vision",
            "Autonomous Driving",
        ],
        featured: true,
        externalUrl: "https://bit.ly/2URLQrm",
    },
];

export const testimonials = [
    {
        id: "1",
        quote: "Having worked with Philip at both Octopus Investments and at LendInvest I can only say good things about him. Philip has a fantastic understanding of what is required from him and the code he writes, both software engineering and machine learning is of an exceptionally high standard. He is hard working, committed and conscientious. Having Philip on our teams brought incredible business value.",
        author: "Debra Duggan",
        role: "IT Data Manager",
        company: "Capital Group | Ex-LendInvest",
        avatar: "/testimonials/default.jpg",
    },
    {
        id: "2",
        quote: "I had the pleasure of working with Philip at Octopus, where he was a remote developer working from his home in Ghana. Philip is an extremely talented senior python developer, who is also well versed with database development, as well as devops tasks such as CI/CD pipelines and Kubernetes management. He can plan and architect a full backend solution, and work independently to get it done. He also has experience as a lead developer, managing a number of other developers, including code reviews of pull requests. He is friendly, communicative and hard working. I couldn't recommend him more highly.",
        author: "Morgan Sowden",
        role: "CoFounder & CTPO at journalist.net",
        company: "Ex-Facebook | Ex-Octopus",
        avatar: "/testimonials/default.jpg",
    },
];
