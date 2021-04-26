import {
    faLungsVirus,
    faSyringe,
    faHospital,
    faAmbulance,
    faCapsules,
    faPhoneAlt,
    faVials
} from '@fortawesome/free-solid-svg-icons';

export const tabsInfo = [
    {
        name: 'Oxygen',
        icon: faLungsVirus,
        link: '/oxygen',
        color: 'text-red-500',
        value: 'oxygen'
    },
    {
        name: 'Medicine',
        icon: faCapsules,
        link: '/medicine',
        color: 'text-green-500',
        value: 'medicine'
    },
    {
        name: 'Hospital',
        icon: faHospital,
        link: '/hospitals',
        color: 'text-indigo-500',
        value: 'hospitals'
    },
    {
        name: 'Ambulance',
        icon: faAmbulance,
        link: '/ambulance',
        color: 'text-blue-500',
        value: 'ambulance'
    },
    {
        name: 'Plasma',
        icon: faSyringe,
        link: '/plasma',
        color: 'text-yellow-500',
        value: 'plasma'
    },
    {
        name: 'Vaccine',
        icon: faVials,
        link: '/vaccine',
        color: 'text-red-500',
        value: 'vaccine'
    },
    {
        name: 'Helpline',
        icon: faPhoneAlt,
        link: '/helpline',
        color: 'text-pink-500',
        value: 'helpline'
    }
];
