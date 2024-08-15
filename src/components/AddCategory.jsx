import { useState } from "react"

export function AddCategory({ onNewCategory }) {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const newInputValue = inputValue.trim();
        if(newInputValue.length <= 1 ) return;

        onNewCategory(newInputValue);
        setInputValue("");
    }

    return (
        <form onSubmit={onSubmit}>
            <input 
                type="text"
                placeholder="Search gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
