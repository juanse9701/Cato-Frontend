export interface Subject {
    title: string;
    options: string[];
}

export interface Form {
    body: string;
    mail: string;
    name: string;
    title: string;
    subject: Subject;
    subtitle: string;
    text_button: string;
}

export interface Contact {
    data: string;
    form: Form;
    title: string;
    background: string;
}

export interface ContactPage {
    contact: Contact;
}
