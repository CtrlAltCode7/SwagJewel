import React from "react";
import { Box } from "@mui/material";
import JewelerDetails from "../jewelerDetails/jewelerDetails"; // Assuming JewelerDetails component is in a separate file

const jewelersData = [
    {
        name: "Andrews Manufacturing Jewellers",
        distance: "8.43444443 miles",
        address:
            "Shop Ag04, Ruisseau Creole, La Mivoie, Black River, Black River 134, MU",
        phone: "59713828",
        email: "andrew@andrewsjewellers.mu",
        website: "http://www.andrewsjeweller.mu",
        jewelershowcase: "https://andrewsjewellers.jewelershowcase.com",
        storeHours: [
            { day: "Monday", hours: "9:00 AM - 5:30 PM" },
            { day: "Tuesday", hours: "9:00 AM - 5:30 PM" },
            { day: "Wednesday", hours: "9:00 AM - 5:30 PM" },
            { day: "Thursday", hours: "9:00 AM - 5:30 PM" },
            { day: "Friday", hours: "7:00 AM - 5:30 PM" },
            { day: "Saturday", hours: "9:00 AM - 2:00 PM" },
            { day: "Sunday", hours: "N/A" },
        ],
        services: [
            "Service 1",
            "Service 2",
            "Service 3",
            "Service 4",
            // Add more services as needed
        ],
    },
    {
        name: "Andrews Manufacturing Jewellers 1111",
        distance: "8.4343 miles",
        address:
            "Shop Ag04, Ruisseau Creole, La Mivoie, Black River, Black River 134, MU",
        phone: "59713828",
        email: "andrew@andrewsjewellers.mu",
        website: "http://www.andrewsjeweller.mu",
        jewelershowcase: "https://andrewsjewellers.jewelershowcase.com",
        storeHours: [
            { day: "Monday", hours: "9:00 AM - 5:30 PM" },
            { day: "Tuesday", hours: "9:00 AM - 5:30 PM" },
            { day: "Wednesday", hours: "9:00 AM - 5:30 PM" },
            { day: "Thursday", hours: "9:00 AM - 5:30 PM" },
            { day: "Friday", hours: "7:00 AM - 5:30 PM" },
            { day: "Saturday", hours: "9:00 AM - 2:00 PM" },
            { day: "Sunday", hours: "N/A" },
        ],
        services: [
            "Service 1",
            "Service 2",
            "Service 3",
            "Service 4",
            // Add more services as needed
        ],
    },
    // Add more jewelers as needed
];

const JewelerList = () => {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column"
        }}>
            {jewelersData.map((jeweler, index) => (
                <JewelerDetails key={index} jeweler={jeweler} />
            ))}
        </Box>
    );
};

export default JewelerList;
