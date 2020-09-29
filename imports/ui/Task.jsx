import React from 'react';

export const Task = ({ task, onCheckboxClick, onDeleteClick }) => {
    return (
        <li className="task">
            <input
                type="checkbox"
                checked={!!task.isChecked}
                onClick={() => onCheckboxClick(task)}
                readOnly
            />
            <span className={task.isChecked ? "complete" : ""}>{task.text}</span>
            <button onClick={() => onDeleteClick(task)}>&times;</button>
        </li>
    );
};