import { Message } from "./message.model";
import { User } from "./user.model";

export class Discussion{

        public id : number;
        public title: string;
        public subject: string;
        public isActive: boolean;
        public messages : Message[];
        public UserId : number;
        public User: Partial<{username: string}> = {}
        public username : string;
        
        
}