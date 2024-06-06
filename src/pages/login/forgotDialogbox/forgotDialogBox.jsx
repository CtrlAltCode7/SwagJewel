import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField, Typography } from '@mui/material';
import OTP from '../verifyOTP/verifyOTP';
import ResetPassword from '../resetPassword/resetPassword';

// Define the VerifyOTP component
function VerifyOTP() {
    return (
        <div>
            {/* Content of the VerifyOTP component */}
            <Typography variant="h6">Verify OTP</Typography>
            {/* Add OTP input field and other necessary components */}
        </div>
    );
}

export default function ScrollDialog() {
    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');
    const [email, setEmail] = React.useState('');
    const [emailError, setEmailError] = React.useState('');
    const [showVerifyOTP, setShowVerifyOTP] = React.useState(false);
    const [VerifyOTPToken, setVerifyOTPToken] = React.useState("");
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubscribe = () => {
        if (validateEmail(email)) {
            console.log("Subscribing with email:", email);
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            const raw = JSON.stringify({
                "email": email
            });

            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: raw,
                redirect: "follow"
            };

            fetch("https://api.swagjewelers.com/api/user/forgot-password", requestOptions)
                .then((response) => response.json())
                .then((result) => {
                    console.log("forgot result", result?.data);
                    // If response indicates success, show the VerifyOTP component
                    if (result.message.trim().toLowerCase() === "success") {
                        const token = result?.data;
                        setVerifyOTPToken(token)
                        setShowVerifyOTP(true);

                    }
                })
                .catch((error) => console.error(error));
        } else {
            setEmailError('Invalid email address');
        }
    };

    const validateEmail = (email) => {
        // Regular expression for validating email format
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (validateEmail(e.target.value)) {
            setEmailError('');
        } else {
            setEmailError('Invalid email address');
        }
    };

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
            setShowVerifyOTP(false)
        }
    }, [open]);

    console.log('VerifyOTPToken', VerifyOTPToken)

    return (
        <React.Fragment>
            <Typography variant="body2" sx={{
                color: "#555",
                cursor: "pointer"
            }} onClick={handleClickOpen('paper')}>Forgot password</Typography>
            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">Forgot Password</DialogTitle>
                <DialogContent dividers={scroll === 'paper'}>
                    <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}
                    >
                        {showVerifyOTP ?
                            <OTP
                                forgotpassword={true}
                                VerifyOTPToken={VerifyOTPToken}
                                setShowPassword={setShowPassword}
                                setShowVerifyOTP={setShowVerifyOTP}
                                setVerifyOTPToken={setVerifyOTPToken}
                            />
                            : showPassword ? (

                                <ResetPassword
                                    VerifyOTPToken={VerifyOTPToken}
                                    handleClose={handleClose}
                                    setOpen={setOpen}
                                    setPasswordShow={setShowPassword}
                                    setShowVerifyOTP={setShowVerifyOTP}
                                />
                            ) : (
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="email"
                                    label="Email Address"
                                    type="email"
                                    fullWidth
                                    value={email}
                                    onChange={handleEmailChange}
                                    error={!!emailError}
                                    helperText={emailError}
                                />

                            )}
                    </DialogContentText>
                </DialogContent>
                {
                    !showVerifyOTP && !showPassword && (
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button onClick={handleSubscribe}>Enter</Button>
                        </DialogActions>
                    )
                }

            </Dialog>
        </React.Fragment>
    );
}
