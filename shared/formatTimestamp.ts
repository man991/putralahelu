const formatTimestamp = (timestamp: number): string => {
    const date = new Date(timestamp);
    
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const days = Math.floor((Date.now() - timestamp) / (1000 * 60 * 60 * 24)); 
  
    let formattedTime = '';
    
    if (minutes < 60) {
      formattedTime = `${minutes} menit`;
    }
    if (hours < 24) {
      formattedTime = `${hours} jam`;
    }
    if (days > 0) {
      formattedTime = `${days} hari`;
    }
    
    return formattedTime;
  };

  export default formatTimestamp;