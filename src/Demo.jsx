import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, List, ListItem, ListItemText, IconButton, Popper, Paper, Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/items';

function Demo() {
  const [name, setName] = useState('');
  const [profession, setProfession] = useState('');
  const [salary, setSalary] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const [items, setItems] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get(API_URL);
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  const handleAdd = async () => {
    try {
      await axios.post(API_URL, { name, profession, salary });
      fetchItems();
      setName('');
      setProfession('');
      setSalary('');
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`${API_URL}/${editId}`, { name, profession, salary });
      fetchItems();
      setName('');
      setProfession('');
      setSalary('');
      setIsEdit(false);
      setEditId(null);
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  const handleEdit = (item) => {
    setName(item.name);
    setProfession(item.profession);
    setSalary(item.salary);
    setIsEdit(true);
    setEditId(item.id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchItems();
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const handleClick = (event, item) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    setSelectedItem(item);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <Container>
      <h1>CRUD Application</h1>
      <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
        <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} margin="normal" />
        <TextField label="Profession" value={profession} onChange={(e) => setProfession(e.target.value)} margin="normal" />
        <TextField label="Salary" value={salary} onChange={(e) => setSalary(e.target.value)} margin="normal" />
        {isEdit ? (
          <Button variant="contained" color="primary" onClick={handleUpdate}>Update</Button>
        ) : (
          <Button variant="contained" color="primary" onClick={handleAdd}>Add</Button>
        )}
      </Box>
      <List>
        {items.map((item) => (
          <ListItem key={item.id} button onClick={(e) => handleClick(e, item)}>
            <ListItemText primary={`${item.name} - ${item.profession} - $${item.salary}`} />
            <IconButton edge="end" onClick={() => handleEdit(item)}>
              <EditIcon />
            </IconButton>
            <IconButton edge="end" onClick={() => handleDelete(item.id)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Paper>
          <Button onClick={() => handleEdit(selectedItem)}>Edit</Button>
          <Button onClick={() => handleDelete(selectedItem.id)}>Delete</Button>
        </Paper>
      </Popper>
    </Container>
  );
}
export default Demo;