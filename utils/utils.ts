export function separateDateAndTime(createdAt: string) {
    if (!createdAt) return { date: '', time: '' };
    
    const [date, time] = createdAt.split(' '); // Zakładamy format "YYYY-MM-DD HH:mm:ss"
    return { date: date || '', time: time || '' };
  }