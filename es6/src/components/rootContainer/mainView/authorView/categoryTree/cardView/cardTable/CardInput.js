import React from "react";
import {displayErrorToast} from "../../../../../../../../gen/common/ActionFunctions";
import {Texts} from "../../../../../../../app/Texts";

export const CardInput = ({
                              text,
                              placeholder,
                              onTextChanged,
                              onKeyUp,
                              onBlur,
                              image,
                              imageFileId,
                              onImageChanged,
                              id
                          }) => {

    const onFileChange = (event) => {
        let files = event.target.files;

        if (files.length > 0) {
            const file = files[0];
            event.target.value = null;
            if (!file.type.match('image.*')) {
                displayErrorToast(Texts.messages.noImageFile)
                return;
            }
            if (file.size > 2000000) {
                displayErrorToast(Texts.messages.fileTooBig)
                return;
            }
            const reader = new FileReader();
            reader.onload = (e) => onImageChanged(e.target.result);
            reader.readAsDataURL(file);
        }
    }

    if (image) {
        return <td>
            <div className="preview">
                <img src={image} alt="image"/>
                <button onClick={() => onImageChanged(null)} className="danger">
                    <i className="fas fa-times"/>
                </button>
            </div>
        </td>
    }
    return <td className="textarea input">
            <textarea
                onChange={onTextChanged}
                autoComplete="off"
                value={text}
                placeholder={placeholder}
                onKeyUp={onKeyUp}
                onBlur={onBlur ? onBlur : () => {
                }}
                id={id}
            />
        <br/>
        <input type="file" id={imageFileId} onChange={onFileChange} hidden accept="image/*"/>
        <div className="imageButtonWrapper">
            <label htmlFor={imageFileId} className="imageButton">
                <i className="fas fa-image"/>
            </label>
        </div>
    </td>

}