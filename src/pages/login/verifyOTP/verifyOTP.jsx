import React, { useState, useRef, useEffect } from 'react';
import {
    Box,
    Typography,
    Button,
    Stack,
    Alert,
    Container,
    Snackbar,
} from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import toastr from 'toastr';
import MuiAlert from "@mui/material/Alert";

// import REACT_APP_URL from 'src/views/dashboard/components/url';

const OtpInput = ({ otp, setOtp }) => {
    const inputRefs = useRef([]);

    const handleChange = (e, index) => {
        const value = e.target.value;
        if (/^[0-9]$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);
            if (index < 3) {
                inputRefs.current[index + 1].focus();
            }
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace") {
            const newOtp = [...otp];
            newOtp[index] = "";
            setOtp(newOtp);

            if (index > 0) {
                inputRefs.current[index - 1].focus();
            }
        }
    };

    return (
        <Box display="flex" justifyContent="center" gap="20px">
            {otp.map((value, index) => (
                <input
                    key={index}
                    type="text"
                    value={value}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    ref={(el) => (inputRefs.current[index] = el)}
                    maxLength="1"
                    style={{
                        width: "3rem",
                        height: "3rem",
                        textAlign: "center",
                        fontSize: "1.5rem",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                    }}
                />
            ))}
        </Box>
    );
};

const OTP = ({ forgotpassword, VerifyOTPToken, setShowPassword, setShowVerifyOTP, setVerifyOTPToken }) => {
    const navigate = useNavigate();
    const [otp, setOtp] = useState(new Array(4).fill(""));
    const [error, setError] = useState(false);
    const [resendCountdown, setResendCountdown] = useState(30);
    const [isResendDisabled, setIsResendDisabled] = useState(false);
    const location = useLocation();
    const loginData = location.state?.message;
    const username = loginData?.data?.userName;
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [notification, setNotification] = useState("");
    const [state, setState] = useState({
        open: false,
        vertical: "top",
        horizontal: "right",
    });
    const [alertSeverity, setAlertSeverity] = useState("error");
    const { vertical, horizontal, open } = state;


    const token = loginData?.data?.token;

    useEffect(() => {
        let timer;
        if (isResendDisabled) {
            timer = setInterval(() => {
                setResendCountdown((prev) => {
                    if (prev === 1) {
                        clearInterval(timer);
                        setIsResendDisabled(false);
                        return 30;
                    }
                    return prev - 1;
                });
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [isResendDisabled]);

    const checkDigits = () => {
        const otpValue = otp.join("");
        if (otpValue.length !== 4) {
            setError(true);
            return false;
        }
        return true;
    };

    const handleClick = () => {
        if (!checkDigits()) {
            setOtp(new Array(4).fill(""));
            return;
        }
        setNotification("")

        // fetch(`${REACT_APP_URL}/api/v1/admin/verify-admin-otp`, {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //         Authorization: Bearer ${localStorage.getItem("token")},
        //     },
        //     body: JSON.stringify({ email: localStorage.getItem("email"), login_otp: otp.join("") }),
        // })
        //     .then((response) => {
        //         if (response.status === 200) {
        //             return response.json();
        //         } else {
        //             setOtp(new Array(4).fill(""));
        //             setError(true);
        //             throw new Error("Enter Correct OTP");
        //         }
        //     })
        //     .then((data) => {
        //         toastr.success(data.message, "", {
        //             closeButton: true,
        //         });
        //         navigate("/dashboard");
        //     })
        //     .catch((error) => {
        //         console.error("Error:", error);
        //         setError(true);
        //     });
        // alert("hi")
        console.log("111111111", otp);

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${token}`);

        const raw = JSON.stringify({
            "otp": `${otp.join("")}`
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("https://api.swagjewelers.com//api/user/verify-otp", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                console.log('result', result)
                if (result.message.trim().toLowerCase() === "success") {
                    const token = result.user.token;
                    localStorage.setItem("token", JSON.stringify(token));
                    // setNotification("OTP Verified successfully")
                    navigate("/home", { state: { message: "OTP Verified successfully" } });
                } else {
                    setNotification(result.message)
                    setAlertSeverity("error");

                }
            })
            .catch((error) => {
                // setNotification()
                console.log('error', error)

            })


    };


    const handleResendOtp = () => {
        setIsResendDisabled(true);
        setOtp(new Array(4).fill(""));

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${token}`);

        const raw = JSON.stringify({
            "userName": `${username}`
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("https://api.swagjewelers.com//api/user/resend-otp", requestOptions)
            .then((response) => response.json())
            .then((response) => {
                console.log('????????', response?.message)
                if (response.message.trim().toLowerCase() === "success") {
                    // toastr.success("OTP resent successfully", "", {
                    //     closeButton: true,
                    // });
                    console.log('successfully')
                    setNotification("OTP resent successfully");
                    setAlertSeverity("success");
                } else {
                    // setNotification("Failed to resend OTP");
                    // throw new Error("Failed to resend OTP");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
                setNotification("Failed to resend OTP");

                // toastr.error("Failed to resend OTP", "", {
                //     closeButton: true,
                // });
            });
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    useEffect(() => {
        if (notification && notification.trim().length > 0) {
            setOpenSnackbar(true);
        }
    }, [notification]);

    const handleEmailVerify = () => {
        // VerifyOTPToken

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${VerifyOTPToken}`);

        const raw = JSON.stringify({
            "otp": otp.join("")
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("https://api.swagjewelers.com/api/user/verify-otp", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setShowVerifyOTP(false)
                setShowPassword(true);
                console.log("emailverification",result)
                const token = result?.user?.token;
                setVerifyOTPToken(token);
            })
            .catch((error) => console.error(error));

    }


    return (
        <>
            <Container maxWidth="xs">
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    minHeight="100vh"
                    textAlign="center"
                >
                    <Typography variant="h4" gutterBottom>
                        Enter OTP
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Please enter the 4-digit OTP sent to your email.
                    </Typography>
                    <OtpInput otp={otp} setOtp={setOtp} />
                    {error && (
                        <Alert severity="error" sx={{ mt: 2 }}>
                            Please enter a valid 4-digit OTP.
                        </Alert>
                    )}
                    {
                        forgotpassword ? <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
                            <Button variant="contained" color="primary" onClick={handleEmailVerify}>
                                Verify OTP
                            </Button> </Stack> :

                            <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
                                <Button variant="contained" color="primary" onClick={handleClick}>
                                    Submit
                                </Button>
                                <Button
                                    variant="outlined"
                                    color="secondary"
                                    onClick={handleResendOtp}
                                    disabled={isResendDisabled}
                                >
                                    {isResendDisabled ? `Resend OTP (${resendCountdown})` : "Resend OTP"}
                                </Button>
                            </Stack>
                    }
                </Box>
            </Container>
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={openSnackbar}
                autoHideDuration={3000}
                onClose={handleCloseSnackbar}
            >
                <MuiAlert
                    elevation={6}
                    variant="filled"
                    onClose={handleCloseSnackbar}
                    severity={alertSeverity}
                >
                    {notification}
                </MuiAlert>
            </Snackbar>
        </>
    );
};

export default OTP;
