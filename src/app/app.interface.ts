export interface laptop {
    brand: string;
    year: number;
    hasFrontCamera: boolean;
    keyBoardType: keyboard
}

type keyboard = 'short' | 'long'



export interface Student {
    firstName: string,
    secondName: string,
    age: number,
    email: string,
    gender: string,
    favSubject: [],
    isInternational: boolean | string,
    enrolmentDate: Date,
    img: string
}