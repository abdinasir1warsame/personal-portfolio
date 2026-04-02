export const experienceData = [
  {
    id: 1,
    title: 'DevOps Engineer',
    company: 'CoderCo',
    period: '2025 - Present',
    description:
      'Delivered DevOps implementations for containerized applications using ECS/ECR, automated CI/CD pipelines, AWS infrastructure deployments, and scalable cloud solutions. Applied professional practices in security, monitoring, and infrastructure management.',
    details: [
      'Containerized applications using multi‑stage Docker builds, reducing final image size by ~70% and improving layer caching for faster deployments.',
      'Provisioned AWS infrastructure (VPC, ECS, RDS, ALBs) using Terraform, reducing manual setup time by 90% and enabling repeatable, version‑controlled infrastructure.',
      'Implemented CI/CD pipelines with GitHub Actions OIDC, eliminating long‑lived AWS credentials and improving security posture.',
      'Designed a secure, multi‑AZ architecture on ECS Fargate with public/internal ALBs, NAT gateways, and PostgreSQL in private subnets.',
      'Automated ACM certificate validation and Route 53 DNS records – this enabled HTTPS for the custom domain and resolved the clientHold domain verification issue that blocked deployment.',
      'Managed Terraform remote state with S3 backend and DynamoDB locking, preventing concurrent state conflicts and enabling team collaboration.',
    ],
  },
  {
    id: 2,
    title: 'Full Stack Developer',
    company: 'Freelance',
    period: '2023 - Present',
    description:
      'Designed and built full‑stack web applications using React.js, Node.js, Express.js, and Firebase. Integrated AI capabilities and collaborated with clients to deliver tailored solutions.',
    details: [
      'Launched Career‑Roadmap, a SaaS platform – personalised AI career planning with interactive roadmaps, interview prep, and CV analysis features.',
      'Launched Flavor‑Layer, a SaaS platform – AI‑powered recipe planner that creates custom meals from prompts or ingredients, with shopping list and meal planning tools.',
      'Designed and built full‑stack web apps using React.js, Node.js, Express.js, and Firebase.',
      'Integrated advanced AI capabilities using OpenAI and LangChain to deliver tailored, intelligent user experiences.',
      'Created clean, responsive UIs with Tailwind CSS, optimized for performance across devices.',
      'Collaborated with clients to translate business requirements into technical solutions.',
    ],
  },
  {
    id: 3,
    title: 'First Line Support',
    company: 'Web Help',
    period: 'Nov 2021 - Mar 2023',
    description:
      'Provided technical guidance, support, and hands‑on assistance to system users via the IT service desk and remote support software tools.',
    details: [
      'Achieved 85% first‑time resolution rate by accurately logging, troubleshooting, and resolving technical issues in a timely and efficient manner.',
      'Diagnosed and resolved technical problems efficiently, delivering fast and effective solutions.',
      'Consistently handled at least 40+ technical issues per day, improving resolution time by 15% and sustaining a 90% satisfaction rate.',
      'Worked collaboratively with team members to coordinate and resolve complex support issues, fostering a cohesive and efficient support environment.',
      'Trained and mentored new team members on standard operating procedures and tools.',
      'Played a key role in identifying recurring issues and escalating them to the appropriate department for future prevention.',
    ],
  },
];
