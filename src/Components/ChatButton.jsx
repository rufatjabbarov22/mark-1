import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ChatIcon from '@mui/icons-material/Chat';

const LiveChatButton = () => {
  const [isChatOpen, setChatOpen] = useState(false);

  const toggleChat = () => {
    setChatOpen(!isChatOpen);
  };

  return (
    <div style={{ position: 'fixed', bottom: 20, left: 20 }}>
      <Button
        variant="contained"
        color="secondary"
        onClick={toggleChat}
        startIcon={<ChatIcon />}
      >
        Live Chat
      </Button>

      {isChatOpen && (
        // Здесь вы можете добавить код для вашего чата во всплывающем окне
        // Например, модальное окно или другой компонент для чата
        <div style={{ position: 'fixed', bottom: 80, left: 20, backgroundColor: 'white' }}>
          {/* Вставьте здесь ваш чат */}
        </div>
      )}
    </div>
  );
};

export default LiveChatButton;



