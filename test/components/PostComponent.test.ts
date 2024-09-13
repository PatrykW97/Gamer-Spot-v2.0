import { describe, it, expect } from 'vitest';
import { separateDateAndTime } from '@/utils/utils';

describe('PostComponent',()=>{
    it('Should separate date and time from createdAt',()=>{
        const createdAt = '2024-09-12 14:35:00';

        const { date, time } = separateDateAndTime(createdAt);
        
        expect(date).toBe('2024-09-12');
        expect(time).toBe('14:35:00');
        
    })
})