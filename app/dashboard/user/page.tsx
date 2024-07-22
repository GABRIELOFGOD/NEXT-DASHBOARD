import React from "react";
import { UserCard } from "./userComponents/UserCard";

const User = () => {

    const contents = [
        {
            name: "Gabriel",
            amount: 10,
            id: 1
        },
        {
            name: "Solomon",
            amount: 110,
            id: 2
        },
        {
            name: "Damizcode",
            amount: 120,
            id: 3
        },
    ]
    
    return (
        <div className="flex mt-10 flex-col gap-10">
            <div className="flex gap-5 justify-evenly">
                {contents.map((item, i) => (
                    <UserCard item={item} key={i} />
                ))}
            </div>
        </div>
    )
}

export default User