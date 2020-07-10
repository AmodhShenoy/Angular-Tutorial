export class Feedback{
    firstname: string;
    lastname: string;
    telnum: string;
    email:string;
    agree:boolean;
    contacttype:string;
    message:string;
}

export const ContactType: string[] = ['None', 'Tel', 'Email'];