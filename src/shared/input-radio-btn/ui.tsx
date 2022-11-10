import React from "react";

interface IRadioInputProps {
    selectedItem: string,
    item: string,
    onChange:(e:React.ChangeEvent<HTMLInputElement>)=>void,
}

export const InputRadioBtn: React.FC<IRadioInputProps> = ({selectedItem, item, onChange}) => {

    return (
            <label>
                <input checked={selectedItem === item}
                       value={item}
                       type="radio"
                       className="radio-btn"
                       onChange={onChange}
                />
                <div className="fake"><span>{item}</span></div>
            </label>
    );
};
