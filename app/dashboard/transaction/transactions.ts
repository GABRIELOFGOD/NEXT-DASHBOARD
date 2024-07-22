// interface TransactionStatus {

// }

export interface Transaction {
  name: string
  status: "success" | "pending" | "failed" | "cancelled";
  amount: number;
  date: string;
  description?: string;
}

export const transactions: Transaction[] = [
  {
    name: "Buy of cement",
    status: "success",
    amount: 210,
    date: "10-11-2002",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, magni nobis error, quo dolorem impedit maxime, laborum quos animi dicta cum eum cumque assumenda? A sunt nihil eveniet deleniti quia?"
  },
  {
    name: "Buy of cement",
    status: "pending",
    amount: 210,
    date: "10-11-2002",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, magni nobis error, quo dolorem impedit maxime, laborum quos animi dicta cum eum cumque assumenda? A sunt nihil eveniet deleniti quia?"
  },
  {
    name: "Buy of cement",
    status: "success",
    amount: 210,
    date: "10-11-2002",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, magni nobis error, quo dolorem impedit maxime, laborum quos animi dicta cum eum cumque assumenda? A sunt nihil eveniet deleniti quia?"
  },
  {
    name: "Buy of cement",
    status: "failed",
    amount: 210,
    date: "10-11-2002",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, magni nobis error, quo dolorem impedit maxime, laborum quos animi dicta cum eum cumque assumenda? A sunt nihil eveniet deleniti quia?"
  },
  {
    name: "Buy of cement",
    status: "success",
    amount: 210,
    date: "10-11-2002",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, magni nobis error, quo dolorem impedit maxime, laborum quos animi dicta cum eum cumque assumenda? A sunt nihil eveniet deleniti quia?"
  },
  {
    name: "Buy of cement",
    status: "pending",
    amount: 210,
    date: "10-11-2002",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, magni nobis error, quo dolorem impedit maxime, laborum quos animi dicta cum eum cumque assumenda? A sunt nihil eveniet deleniti quia?"
  },
  {
    name: "Buy of cement",
    status: "success",
    amount: 210,
    date: "10-11-2002",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, magni nobis error, quo dolorem impedit maxime, laborum quos animi dicta cum eum cumque assumenda? A sunt nihil eveniet deleniti quia?"
  },
  {
    name: "Buy of cement",
    status: "failed",
    amount: 210,
    date: "10-11-2002",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, magni nobis error, quo dolorem impedit maxime, laborum quos animi dicta cum eum cumque assumenda? A sunt nihil eveniet deleniti quia?"
  },
  {
    name: "Buy of cement",
    status: "success",
    amount: 210,
    date: "10-11-2002",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, magni nobis error, quo dolorem impedit maxime, laborum quos animi dicta cum eum cumque assumenda? A sunt nihil eveniet deleniti quia?"
  },
  {
    name: "Buy of cement",
    status: "pending",
    amount: 210,
    date: "10-11-2002",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, magni nobis error, quo dolorem impedit maxime, laborum quos animi dicta cum eum cumque assumenda? A sunt nihil eveniet deleniti quia?"
  },
  {
    name: "Buy of cement",
    status: "success",
    amount: 210,
    date: "10-11-2002",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, magni nobis error, quo dolorem impedit maxime, laborum quos animi dicta cum eum cumque assumenda? A sunt nihil eveniet deleniti quia?"
  },
  {
    name: "Buy of cement",
    status: "failed",
    amount: 210,
    date: "10-11-2002",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, magni nobis error, quo dolorem impedit maxime, laborum quos animi dicta cum eum cumque assumenda? A sunt nihil eveniet deleniti quia?"
  },
  {
    name: "Buy of cement",
    status: "success",
    amount: 210,
    date: "10-11-2002",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, magni nobis error, quo dolorem impedit maxime, laborum quos animi dicta cum eum cumque assumenda? A sunt nihil eveniet deleniti quia?"
  },
  {
    name: "Buy of cement",
    status: "pending",
    amount: 210,
    date: "10-11-2002",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, magni nobis error, quo dolorem impedit maxime, laborum quos animi dicta cum eum cumque assumenda? A sunt nihil eveniet deleniti quia?"
  },
  {
    name: "Buy of cement",
    status: "success",
    amount: 210,
    date: "10-11-2002",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, magni nobis error, quo dolorem impedit maxime, laborum quos animi dicta cum eum cumque assumenda? A sunt nihil eveniet deleniti quia?"
  },
  {
    name: "Buy of cement",
    status: "failed",
    amount: 210,
    date: "10-11-2002",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, magni nobis error, quo dolorem impedit maxime, laborum quos animi dicta cum eum cumque assumenda? A sunt nihil eveniet deleniti quia?"
  },
]