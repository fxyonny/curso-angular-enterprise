//import { Role } from "../types";
import { Role } from '@sernanp/models';

export interface Button{
    text: string;
    role: Role;
    
    notify();
}