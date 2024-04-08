import { ReactNode } from "react";

interface MenuItem {
    icon: ReactNode;
    name: string;
    path: string;
}

export interface MenuSection {
    title: string;
    list: MenuItem[];
}

export interface cardDeal {
    name: string;
    icon: ReactNode;
    rate: number;
    total: number;
}

export interface DummyTransaction {
    status: 'complete' | 'pending' | 'cancelled' | 'failed';
    amount: number;
    transaction: string,
    date?: Date | undefined | number | any,
    img?: string | undefined
}