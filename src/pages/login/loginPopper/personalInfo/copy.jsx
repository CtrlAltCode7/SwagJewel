import { Button, FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material';
import React, { useState } from 'react';

export default function PersonalInfo() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        gender: ''
    });

    const [editMode, setEditMode] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleEdit = (e) => {
        console.log('e', e)
        setEditMode(true);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setEditMode(false);
    };

    const handleCancel = () => {
        setEditMode(false);

    }

    return (
        <div className="YAly00">
            <div className="-nebyH">
                <span className="jwYvuG">Personal Information</span>
                <span className="xUWkem" >{editMode ? <span onClick={handleCancel}>Cancel</span> : <span onClick={handleEdit}>Edit</span>}</span>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="jo8V77 row">
                    <div className="LjjzvH">
                        <div className="U1LCmH">
                            <TextField
                                variant="standard"
                                name="firstName"
                                label="First Name"
                                required
                                autoComplete="name"
                                tabIndex={1}
                                value={formData.firstName}
                                onChange={handleChange}
                                disabled={!editMode}
                            />
                        </div>
                    </div>
                    <div className="LjjzvH">
                        <div className="U1LCmH">
                            <TextField
                                variant="standard"
                                name="lastName"
                                label="Last Name"
                                autoComplete="name"
                                tabIndex={2}
                                value={formData.lastName}
                                onChange={handleChange}
                                disabled={!editMode}
                            />
                        </div>
                    </div>
                </div>
                <div className="Y-Uvsm">Your Gender</div>
                <RadioGroup value={formData.gender} name="gender" onChange={handleChange}>
                    <FormControlLabel
                        value="Male"
                        control={<Radio />}
                        label="Male"
                        disabled={!editMode}
                    />
                    <FormControlLabel
                        value="Female"
                        control={<Radio />}
                        label="Female"
                        disabled={!editMode}
                    />
                </RadioGroup>
                {editMode && <Button type='submit'>Save</Button>}
            </form>
        </div>
    );
}
