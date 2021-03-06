



export function normalizePort(val: any): Number {
    const port = parseInt(val, 10);
    
    if (isNaN(port))
      return val
    
  
    if (port >= 0)
      return port
    
    return -1
  }