export const socketListenEvent = (socket, { setSocketValue }) => {
  socket.on('connect', () => {
    setSocketValue((prev) => ({
      ...prev,
      socketId: socket.id
    }));
  });

  socket.on('ONLINE_USER_CHANGED', (onlineUsers) => {
    setSocketValue((prev) => ({
      ...prev,
      onlineUsers
    }));
  });

  socket.on('RECEIVE_MESSAGE', (messageData) => {
    setSocketValue((prev) => ({
      ...prev,
      messageData
    }));
  });

  socket.on('MESSAGE_READ', (messageReadStatus) => {
    console.log('=== socket ===');
    setSocketValue((prev) => ({
      ...prev,
      messageReadStatus
    }));
  });

  socket.on('TYPING_NOTIFY', (typingNotify) => {
    setSocketValue((prev) => ({
      ...prev,
      typingNotify
    }));
  });
};
