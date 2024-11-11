import { v4 as uuidv4 } from 'uuid';
export const generator = () => {
    return `Your code is ${uuidv4()} + test_1`;
}