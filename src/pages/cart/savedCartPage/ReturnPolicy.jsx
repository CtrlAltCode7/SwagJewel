import React from 'react';
import {
    Box,
    Paper,
    Typography,
    Link
} from "@mui/material";

const ReturnPolicy = () => {
    return (
        <Box
            sx={{
                display: { xs: "none", lg: "block" },
                mt: 4,
                mb: 2,
                pl: 5,
                width: "78%",
            }}
        >
            <Paper sx={{ p: 2, backgroundColor: "#eee" }}>
                <Typography variant="h6" gutterBottom>
                    Return Policy
                </Typography>
                <Typography variant="body2">
                    Returns of Diamonds with Grading Report and Notable Gems™ must
                    be received by Stuller within 10 days of the invoice date.
                    Finished Jewelry, Tools, Supplies and Packaging, and Fabricated
                    Metals must be returned within 15 days of invoice date. All
                    other returns must be received within 30 days of the invoice
                    date. Items special ordered, altered, cut, or manufactured to
                    your specifications, cannot be accepted for credit or exchange.{" "}
                    <Link
                        href=""
                        style={{
                            color: "#555",
                            textDecoration: "underline",
                        }}
                    >
                        View Cancellation and Returns details
                    </Link>
                </Typography>
                <Typography sx={{ mt: 2 }} variant="body2">
                    For items that cannot be returned within the specifications of
                    our return policy guidelines, you may still be eligible for
                    account credit through our Clean Scrap program. Fabricated
                    metals that have been specially ordered or manufactured to your
                    specifications, altered, cut, annealed, etc. cannot be returned
                    or exchanged. Any items received outside of the associated time
                    frame may incur a 15% restocking fee.{" "}
                    <Link
                        href="/"
                        style={{
                            color: "#555",
                            textDecoration: "underline",
                        }}
                    >
                        Learn More
                    </Link>
                </Typography>
                <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                    Availability
                </Typography>
                <Typography variant="body2">
                    Product availability is updated hourly.
                </Typography>
                <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                    Pricing Notice
                </Typography>
                <Typography variant="body2">
                    All prices are approximate and are subject to change without
                    notice. Quoted prices for items sold by weight are based on
                    average weight. You will be invoiced for these items based on
                    the actual total weight of the item(s) shipped and the market
                    rates in effect at the time of shipping.
                </Typography>
            </Paper>
        </Box>
    )
}

export default ReturnPolicy