// ============IMPORTING ICONS ==================== //
import { MdDashboard, MdSupervisedUserCircle, MdShoppingBag, MdAttachMoney, MdWork, MdAnalytics, MdPeople, MdOutlineSettings, MdHelpCenter } from 'react-icons/md';
import { DummyTransaction, MenuSection, cardDeal } from '.';

const TransactionImg = '/images/no-profile-min.jpg'


export const SideMenu: MenuSection[] = [
    {
        title: 'pages',
        list: [
            {
                icon: <MdDashboard />,
                name: 'dashboard',
                path: '/dashboard'
            },
            {
                icon: <MdSupervisedUserCircle />,
                name: 'users',
                path: '/dashboard/user'
            },
            {
                icon: <MdShoppingBag />,
                name: 'product',
                path: '/dashboard/product'
            },
            {
                icon: <MdAttachMoney />,
                name: 'transaction',
                path: '/dashboard/transaction'
            }
        ]
    },
    {
        title: 'analytics',
        list: [
            {
                icon: <MdWork />,
                name: 'revenue',
                path: '/dashboard/revenue'
            },
            {
                icon: <MdAnalytics />,
                name: 'reports',
                path: '/dashboard/reports'
            },
            {
                icon: <MdPeople />,
                name: 'team',
                path: '/dashboard/team'
            }
        ]
    },
    {
        title: 'user',
        list: [
            {
                icon: <MdOutlineSettings />,
                name: 'settings',
                path: '/dashboard/settings'
            },
            {
                icon: <MdHelpCenter />,
                name: 'help',
                path: '/dashboard/help'
            }
        ]
    },
]

export const CardDeal: cardDeal[] = [
    {
        name: 'user',
        icon: <MdSupervisedUserCircle />,
        total: 102,
        rate: 16
    },
    {
        name: 'product',
        icon: <MdShoppingBag />,
        total: 54,
        rate: 12
    },
    {
        name: 'transaction',
        icon: <MdAttachMoney />,
        total: 1130,
        rate: -15
    }
]


export const DummyTransactions:DummyTransaction[] = [
    {
        img: TransactionImg,
        amount: 12.5,
        status: 'complete',
        transaction: 'salary paid',
        date: '26-05-2024',
    },
    {
        amount: 23.5,
        status: 'pending',
        transaction: 'paid utility bill',
        date: '20-05-2024',
    },
    {
        amount: 30,
        status: 'complete',
        transaction: 'make sale',
        date: '20-05-2024',
    },
    {
        amount: 3.5,
        status: 'cancelled',
        transaction: 'laundary fee',
        date: '26-05-2024',
    },
    {
        img: TransactionImg,
        amount: 50.25,
        status: 'failed',
        transaction: 'furniture',
        date: '23-05-2024',
    }
]


