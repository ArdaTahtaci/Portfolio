import type { Article } from '../types';

export const articles: Article[] = [
    {
        id: 'basic-concepts-of-blockchain-and-fundamentals',
        title: 'Basic Concepts of Blockchain and Fundamentals',
        description:
            'An introductory exploration of blockchain technology, covering its basic principles, key terminology, core features, and evolution from Web 1.0 to Web 3.0. The article explains Bitcoin and Ethereum, the difference between coins and tokens, blockchain types, and future directions including scalability, interoperability, and privacy.',
        publishedDate: 'Mar 29, 2025',
        readTime: '8 min read',
        url: 'https://medium.com/@ardatahtaci/basic-concepts-of-blockchain-and-fundamentals-a0551afc545d',
        tags: ['Blockchain', 'Web3', 'Bitcoin', 'Ethereum'],
        featured: true,
    },
    {
        id: 'understanding-layer-2-scaling-ethereum-without-compromise',
        title: 'Understanding Layer 2: Scaling Ethereum Without Compromise',
        description:
            "Explores Ethereum’s scalability challenges and how Layer 2 solutions—sidechains, sharding, Optimistic Rollups, and ZK-Rollups—address them without sacrificing decentralization or security. Discusses the blockchain trilemma, key projects like Optimism, Arbitrum, zkSync, and Starknet, and the trade-offs involved in each approach.",
        publishedDate: 'Apr 5, 2025',
        readTime: '6 min read',
        url: 'https://medium.com/@ardatahtaci/layer-2-solutions-scaling-ethereum-without-compromise-7117e157e847',
        tags: ['Layer 2 Solution', 'Blockchain', 'Scalability', 'Ethereum', 'Technology'],
        featured: true,
    },
]; 