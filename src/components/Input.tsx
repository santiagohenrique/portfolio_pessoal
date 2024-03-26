interface Props{
    labelText: string,
    inputId: string,
    inputName: string
}

export const Input = ({labelText, inputId, inputName}: Props) => {
    return(
        <div className="input-container flex-column">
            <label htmlFor={inputId} >{labelText}</label>
            <input type="text" id={inputId} name={inputName} required />
        </div>
    );
}