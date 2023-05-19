interface handlers {
    onSubmit: any;
    onChange: any;
}
export function InputBox({ onSubmit = undefined, onChange = undefined }: handlers) {

    return (
        <form onSubmit={onSubmit}>
            <input type="text" name="option" /> <input type="submit" onChange={onChange} value="->" style={{ textEmphasis: "ButtonText" }} />
        </form>
    )
}