import { useState, useEffect } from 'react';

function UserCard() {
  // Состояние для хранения имени пользователя
  const [userName, setUserName] = useState('Иван Иванов');
  const [defaultName] = useState('Иван Иванов'); // Значение по умолчанию

  // useEffect для отслеживания изменений имени
  useEffect(() => {
    console.log('Имя пользователя изменилось:', userName);
  }, [userName]);

  // Обработчик изменения input
  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };

  // Обработчик сброса имени
  const handleReset = () => {
    setUserName(defaultName);
  };

  return (
    <div style={{ 
      border: '1px solid #ccc', 
      padding: '20px', 
      borderRadius: '8px', 
      maxWidth: '300px',
      margin: '20px'
    }}>
      <h2>Карточка пользователя</h2>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="nameInput">Имя: </label>
        <input
          id="nameInput"
          type="text"
          value={userName}
          onChange={handleNameChange}
          style={{ padding: '5px' }}
        />
      </div>
      <button 
        onClick={handleReset}
        style={{ 
          padding: '5px 10px', 
          backgroundColor: '#f0f0f0', 
          border: '1px solid #999',
          cursor: 'pointer'
        }}
      >
        Сбросить
      </button>
      <div style={{ marginTop: '10px' }}>
        <strong>Текущее имя:</strong> {userName}
      </div>
    </div>
  );
}

export default UserCard;
