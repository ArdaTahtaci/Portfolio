import type { Project } from '../types';

export const projects: Project[] = [
    {
        id: 'brainid',
        title: 'BrainID',
        description:
            'Revolutionary EEG brainwave identity verification system using zero-knowledge proofs for unhackable biometrics. Built a complete neural identity verification platform combining cutting-edge neuroscience with blockchain technology. Features 8-channel EEG monitoring via ESP32, real-time neural signal processing extracting 280 unique features, and Semaphore protocol implementation for privacy-preserving verification. The system generates 2KB biometric keys from brainwave patterns and uses zero-knowledge proofs to verify humanity without storing personal data. Deployed on Base Sepolia with comprehensive smart contracts for identity registry, group management, and ZK proof verification.',
        tech: ['React', 'Next.js', 'Solidity', 'Python', 'ESP32', 'Zero-Knowledge Proofs', 'Semaphore Protocol', 'Base Blockchain', 'Socket.IO', 'TensorFlow'],
        links: {
            live: 'https://ethglobal.com/showcase/brainid-cvgar',
            github: 'https://github.com/ArdaTahtaci/BrainID'
        },
        image: null,
        featured: true,
    },
    {
        id: 'einsan',
        title: 'e‑insan Admin Panel',
        description:
            'Enterprise-grade admin control panel for the Turkish Presidency Human Resources Office, serving over 1 million Turkish citizens. Built a comprehensive dashboard using React, Redux, and TypeScript that provides detailed user analytics, administrative controls, and seamless integration with government services including job postings and training programs. The system handles high-volume data processing and ensures secure access to sensitive government information.',
        tech: ['React', 'TypeScript', 'Redux', 'REST API', 'Government Integration'],
        links: { live: 'https://einsan.gov.tr/' },
        image: null,
        featured: true,
    },
    {
        id: 'nft-certification',
        title: 'NFT Certification Platform',
        description:
            'Revolutionary blockchain-based credentialing platform that eliminates traditional certification forgery and inefficiency problems. Built on the Internet Computer Protocol (ICP) with Rust smart contracts, this platform offers secure certificate issuance, immutable blockchain verification, and global accessibility. Features seamless Web2/Web3 integration with user-friendly design, making it ideal for educational institutions, governments, and professional organizations seeking to enhance trust and transparency in their certification processes.',
        tech: ['Rust', 'Node.js', 'ICP', 'Blockchain', 'Smart Contracts'],
        image: null,
        featured: true,
    },
    {
        id: 'arbitrage-bot',
        title: 'DeFi Arbitrage Trading Bot',
        description:
            'Sophisticated automated trading system that exploits price differences across decentralized exchanges (DEXs) using flash loans for risk-free profit generation. The system leverages Solidity smart contracts integrated with the Aave protocol for instant capital access, while a Node.js monitoring bot tracks real-time price disparities using ethers.js and blockchain RPC APIs. Compatible with all EVM chains, this solution demonstrates advanced DeFi mechanics and automated trading strategies.',
        tech: ['Node.js', 'Solidity', 'Hardhat', 'PostgreSQL', 'Aave', 'EVM', 'DeFi'],
        image: null,
        featured: true,
    },
    {
        id: 'fanpulse',
        title: 'FanPulse',
        description:
            'Innovative fan engagement platform that converts stadium crowd noise into tradeable blockchain assets. Built during Chiliz Hacking Paris, this system uses ESP32-S3 microcontrollers and mobile devices to capture real-time decibel levels, creating tamper-proof "Noise Ledgers" on Chiliz Spicy testnet. Features bonding curve tokens for each club that automatically increase in value with crowd volume, rival team token battles during matches, and GDPR-compliant edge-only audio processing. The platform enables clubs to monetize fan energy, provides real-time sentiment data for broadcasters, and rewards passionate fans with tradeable tokens.',
        tech: ['Solidity', 'React', 'Node.js', 'ESP32', 'Chiliz Blockchain', 'TensorFlow', 'Python', 'Tailwind CSS'],
        links: {
            live: 'https://devfolio.co/projects/fanpulse-d5bd',
            github: 'https://github.com/YKesX/FanPulse'
        },
        image: null,
    },
    {
        id: 'plagiocephaly-stl',
        title: 'Medical 3D Diagnosis Tool',
        description:
            'Advanced medical application designed to assist healthcare professionals in diagnosing plagiocephaly (flat head syndrome) in infants. Features an interactive STL viewer built with Three.js that allows doctors to select precise 3D coordinates for clinical measurements. The system performs sophisticated geometric calculations to determine condition severity and provides data-driven insights for treatment planning, combining medical expertise with cutting-edge 3D visualization technology.',
        tech: ['React', 'Three.js', 'Python', 'Medical Imaging', '3D Visualization'],
        links: { live: 'https://ipfs.io/ipfs/bafybeieu47dx6lt3gpilp7aa3obi5enlimcbzhzgunmvr7gcaulief5wpa' },
        image: null,
    },
    {
        id: 'wallet-encrypt-ipfs',
        title: 'Web3 Encryption & IPFS Storage',
        description:
            'Decentralized data encryption and storage solution that leverages Web3 wallet signatures for secure data handling. Users can encrypt sensitive information using their MetaMask wallet\'s cryptographic capabilities and store it immutably on IPFS (InterPlanetary File System). The project includes comprehensive Solidity smart contracts, Hardhat development environment, and demonstrates advanced Web3 security patterns for data privacy and decentralized storage solutions.',
        tech: ['React', 'TypeScript', 'MetaMask', 'Solidity', 'Hardhat', 'EVM', 'IPFS'],
        links: {
            live: 'https://ipfs.io/ipfs/bafkreihwbkctpqebrhxideqvvdveqwdxlnx4offxkxxzk73sghirmk2m2u',
            github: 'https://ipfs.io/ipfs/bafkreihxyvbpwcb5h55iiaow575qw4snlr4n6ourqmyfku5p2xmw22lqkm',
        },
        image: null,
    },
    {
        id: 'twittify',
        title: 'Full-Stack Social Media Platform',
        description:
            'Complete Twitter-inspired social media application showcasing full-stack development capabilities. Features a responsive React/Redux frontend with real-time user interactions, comprehensive user authentication, post creation and engagement systems, and a robust Node.js/Express backend with MongoDB database. This project demonstrates end-to-end application architecture, from UI/UX design to database optimization and deployment strategies. Note: Hosted on free tier, so initial loading may be slower.',
        tech: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'Authentication'],
        links: {
            live: 'https://twittify.onrender.com',
            github: 'https://github.com/ArdaTahtaci/Twittify_Client',
        },
        image: null,
    },
    {
        id: 'neokod-website',
        title: 'Corporate Website with SEO',
        description:
            'Professional company website built with modern web technologies and optimized for search engines. Implemented using React, TypeScript, and Next.js to ensure optimal performance, SEO compliance, and user experience. Features responsive design, fast loading times, and comprehensive search engine optimization to maximize online visibility and business impact.',
        tech: ['React', 'TypeScript', 'Next.js', 'SEO', 'Performance Optimization'],
        links: { live: 'https://www.neokodyazilim.com' },
        image: null,
    },
    {
        id: 'cinema-lovers',
        title: 'Movie Discovery Platform',
        description:
            'Elegant movie and TV show discovery application with a focus on exceptional user interface design and smooth user experience. Integrates with The Movie Database (TMDb) API to provide comprehensive entertainment content, featuring advanced search capabilities, detailed movie information, ratings, and personalized recommendations. Built with React, Redux, and TypeScript to ensure type safety and maintainable code architecture.',
        tech: ['React', 'Redux', 'TypeScript', 'API Integration', 'UI/UX Design'],
        links: {
            live: 'https://cinema-lovers-sigma.vercel.app/',
            github: 'https://github.com/ArdaTahtaci/cinema_lovers',
        },
        image: null,
    },
]; 