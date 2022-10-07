import React from "react";

export const CardPreview = ({text, onEdit}) => {
    if (text.indexOf("data:image") === 0) {
        return <td className="preview">
            <img src={text} alt="image"/>
        </td>
    }
    return <td onDoubleClick={onEdit? onEdit : () => {}}>
        <pre>{text}</pre>
    </td>
}