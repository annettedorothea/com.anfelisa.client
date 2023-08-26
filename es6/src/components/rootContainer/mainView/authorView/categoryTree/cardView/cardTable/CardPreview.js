import React from "react";

export const CardPreview = ({text, onEdit}) => {
    if (text.indexOf("data:image") === 0) {
        return <div className="preview">
            <div>
                <img src={text} alt="image"/>
            </div>
        </div>
    }
    return <div  className="preview" onClick={onEdit? onEdit : () => {}}>
        <pre>{text}</pre>
    </div>
}