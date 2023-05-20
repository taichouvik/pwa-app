
interface handlers {
    onSubmit?: ((event: React.FormEvent<HTMLFormElement>) => void);
    onChange?: undefined | ((event: React.ChangeEvent<HTMLInputElement>) => void);
}
export function InputBox({ onSubmit , onChange = undefined }: handlers) {

    return (
        <form className="inputBox" onSubmit={onSubmit} style={{display:"flex"}}>
            <input onChange={onChange} type="text" style={{flex: "1" }}/><input type="submit" value="->" style={{ textEmphasis: "ButtonText" }} />
        </form>
    )
}