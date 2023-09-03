import React from "react";

export const Priority = ({priority, editable, priorityChanged}) => {
    const Icon = ({index}) => {
        return <i
            className={`fa-star ${priority && index <= priority ? 'fa' : 'far'}`}
            onClick={
                editable ?
                    () => priorityChanged(priority === index ? null : index) :
                    () => {
                    }
            }
        />;
    }
    return <div className="priority">
        <Icon index={1}/>
        <Icon index={2}/>
        <Icon index={3}/>
    </div>
}