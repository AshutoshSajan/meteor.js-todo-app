import React, { useState } from 'react';
// import { TasksCollection } from '/imports/api/TasksCollection';
import { TasksCollection } from '/imports/db/TasksCollection';

export const TaskForm = ({ user }) => {
    const [text, setText] = useState('');

    // insecure operation 
    // ====================================

    // const handleSubmit = e => {
    //     e.preventDefault();

    //     if (!text) return;

    //     TasksCollection.insert({
    //         text: text.trim(),
    //         createdAt: new Date(),
    //         userId: user._id
    //     });

    //     setText('');
    // };

    // secure operation after running  meteor remove insecure
    // ====================================

    const handleSubmit = e => {
        e.preventDefault();

        if (!text) return;

        Meteor.call('tasks.insert', text);

        setText('');
    };

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Type to add new tasks"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <button type="submit">Add Task</button>
        </form>
    );
};