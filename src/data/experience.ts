import type { Experience } from '../types';

export const experiences: Experience[] = [
    {
        id: 'neokod',
        company: 'Neokod AR‑GE Yazılım',
        position: 'Jr. Full‑Stack Web & Blockchain Developer',
        location: 'Ankara, Turkey',
        startDate: 'Nov 2023',
        endDate: 'Jun 2025',
        description: [
            'Architected and developed enterprise-grade dashboards and administrative tools using modern React ecosystem, TypeScript, and Redux for state management, serving mission-critical government applications.',
            'Pioneered blockchain development initiatives by creating sophisticated smart contracts in both Solidity and Rust, utilizing industry-standard tools like Hardhat, OpenZeppelin, and dfx (Dfinity SDK) for robust Web3 solutions.',
            'Led critical contributions to e-insan platform (+5 Million Users), developing comprehensive admin panels, RESTful APIs, and implementing advanced CI/CD pipelines with Docker containerization.',
            'Enhanced system reliability through comprehensive documentation, monitoring workflows, and performance optimization strategies, ensuring 99.9% uptime for government services.'
        ],
        technologies: ['React', 'TypeScript', 'Redux', 'Node.js', 'Solidity', 'Rust', 'Docker', 'CI/CD', 'REST APIs']
    }
]; 