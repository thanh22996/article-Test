import React from "react";

export function FilterAndSort() {
    return (
        <div className="flex-block">
            <p className="label" > Fiter </p>

            <select className="select">
                <option value={1}>Compelete</option>
                <option value={2}>All</option>
                <option value={3}>Active</option>
                <option value={4}>Has due date</option>
            </select>

            <p className="label">Sort</p>

            <select className="select">
                <option value={1}>Added date</option>
                <option value={2}>Due date</option>
            </select>

        </div>
    )
}