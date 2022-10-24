import React from "react";

export const CardPreview = ({text, onEdit}) => {
    if (text.indexOf("data:image") === 0) {
        return <td className="preview">
            <div>
                <img src={text} alt="image"/>
            </div>
        </td>
    }
    return <td onDoubleClick={onEdit? onEdit : () => {}}>
        <pre>{text}</pre>
    </td>
}