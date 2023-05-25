import { ArrowForward } from '@mui/icons-material';
import { Button, colors } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

interface handlers {
    onSubmit?: ((event: React.FormEvent<HTMLFormElement>) => void);
    onChange?: undefined | ((event: React.ChangeEvent<HTMLInputElement>) => void);
}
export function InputBox({ onSubmit, onChange = undefined }: handlers) {
    const basicTheme = createTheme({
        palette: {
            primary: {
                main: colors.common.white,
                contrastText: colors.common.black
            },
            secondary: {
                main: colors.common.black,
                contrastText: colors.common.white,
            },
        },
    });

    return (
        <div>
            <form className="inputBox" onSubmit={onSubmit} style={{ display: "flex" }}>
                <input inputMode="numeric"
                    autoComplete="one-time-code"
                    pattern="[0-9]"
                    maxLength={1}
                    onChange={onChange}
                    type="text"
                    style={
                        {
                            flex: "1",
                            color: 'white',
                            backgroundColor: "white"
                        }
                    } />
                <ThemeProvider theme={basicTheme}>
                    <Button type='submit' variant="contained" sx={{ color: colors.common.white }} size='medium'>
                        <ArrowForward fontSize="large" />
                    </Button>
                </ThemeProvider>
            </form>
        </div>
    )
}