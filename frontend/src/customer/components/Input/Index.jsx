import { useState, forwardRef, useEffect } from "react"
import './style.css'

export default forwardRef(function Input(props, ref) {


    const placeholder = props.placeholder
    const type = props.type
    const [error, setError] = useState(props.error)
    const [focused, setFocused] = useState(false)
    const [filled, setFilled] = useState(null)


    useEffect(() => {
        setError(props.error)
    }, [props.error])

    const handleFocus = () => {
        setFocused(true)
    }

    const handleBlur = () => {
        setFocused(false)
    }

    const handleChange = (e) => {
        if (e.target.value !== '' || e.target.value !== 'undefined' || e.target.value !== null)
            setFilled(e.target.value)
        else setFilled(null)
    }

    const handleClick = () => {
        ref.current.focus()
    }

    return (
        <div className="input_wrapper">
            <div className="input_container">
                <input
                    ref={ref}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    style={{'backgroundColor': 'white'}}
                    className={focused ? (error ? 'input_box input_box_focused_error' : 'input_box input_box_focused') : (error ? 'input_box input_box_error' : 'input_box')}
                    type={type} />
                <div
                    className={focused ? (error ? 'placeholder placeholder_focused placeholder_error' : 'placeholder placeholder_focused') : (error ? (filled ? 'placeholder placeholder_focused placeholder_error' : 'placeholder') : (filled ? 'placeholder placeholder_focused filled' : 'placeholder'))}
                    onClick={handleClick}>
                    {placeholder}
                </div>
            </div>
        </div>
    )
})