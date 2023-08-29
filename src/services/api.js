export async function fetchMockMessages() {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Return mock data
    return [
      { id: 1, text: 'Hello, how are you?' },
      { id: 2, text: 'I\'m doing great!' },
      // More mock messages...
    ];
  }