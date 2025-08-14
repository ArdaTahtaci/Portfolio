import type { Hackathon } from '../types';

export const hackathons: Hackathon[] = [
    {
        id: 'ethcc-2025',
        name: 'EthCC 2025',
        location: 'Cannes, France',
        type: 'hackathon',
        achievement: 'Spotlight Invitation by EthGlobal',
        description: 'Received prestigious spotlight invitation from EthGlobal for innovative BrainID project - a revolutionary EEG brainwave identity verification system using zero-knowledge proofs. The project is currently under investment consideration and showcases cutting-edge neuroscience with blockchain technology.',
        highlight: true
    },
    {
        id: 'stellar-hack-pera',
        name: 'Stellar Hack Pera',
        location: 'Istanbul, Turkey',
        type: 'hackathon',
        achievement: '3rd Place Award',
        description: 'Secured third place in competitive blockchain hackathon with innovative Stellar-based solution',
        highlight: true
    },
    {
        id: 'chiliz-hacking',
        name: 'Chiliz Hacking',
        location: 'Paris, France',
        type: 'hackathon',
        description: 'Built FanPulse - an innovative platform that converts stadium crowd noise into tradeable blockchain assets on Chiliz network. The system captures real-time decibel levels and creates tamper-proof "Noise Ledgers" with bonding curve tokens for fan engagement monetization.'
    },
    {
        id: 'eth-barcelona-2022',
        name: 'EthBarcelona 2022',
        location: 'Barcelona, Spain',
        type: 'ecosystem-event',
        description: 'Attended premier Ethereum ecosystem event, networking with industry leaders and learning cutting-edge developments'
    }
]; 