import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  MenuItem,
  Button,
  Box,
  Divider,
  IconButton,
  Typography
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const EventRegistrationModal = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    eventType: '',
    fullName: '',
    email: '',
    phone: '+7 777 77 77',
    contactMethod: ''
  });

  const [friends, setFriends] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const addFriend = () => {
    setFriends([...friends, { contactMethod: '' }]);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ pb: 2 }}>Заявка на регистрацию для мероприятия</DialogTitle>
      
      <DialogContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <TextField
            select
            label="Тип мероприятия *"
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            fullWidth
          >
            <MenuItem value="conference">Конференция</MenuItem>
            <MenuItem value="workshop">Мастер-класс</MenuItem>
            <MenuItem value="meetup">Митап</MenuItem>
          </TextField>

          <TextField
            label="ФИО *"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            fullWidth
          />

          <TextField
            label="Имейл *"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
          />

          <TextField
            label="Номер телефона *"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            fullWidth
          />

          <Divider />

          {friends.map((friend, index) => (
            <Box key={index} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Typography variant="subtitle1">Друг {index + 1}</Typography>
              <TextField
                select
                label="Предпочитаемый вид связи *"
                name="contactMethod"
                value={friend.contactMethod}
                onChange={(e) => {
                  const newFriends = [...friends];
                  newFriends[index].contactMethod = e.target.value;
                  setFriends(newFriends);
                }}
                fullWidth
              >
                <MenuItem value="phone">Телефон</MenuItem>
                <MenuItem value="email">Email</MenuItem>
                <MenuItem value="whatsapp">WhatsApp</MenuItem>
              </TextField>
            </Box>
          ))}

          <Button 
            startIcon={<AddIcon />} 
            onClick={addFriend}
            sx={{ alignSelf: 'flex-start' }}
          >
            Добавить друга
          </Button>
        </Box>
      </DialogContent>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 3 }}>
        <Button variant="outlined" onClick={onClose}>Назад</Button>
        <Button variant="contained">Дальше</Button>
      </Box>
    </Dialog>
  );
};

export default EventRegistrationModal;
