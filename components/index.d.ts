import { ReactNode } from "react";

export interface deal {
  deal: {
    icon: ReactNode,
    name: string,
    rate: number,
    total?: number
  }
}