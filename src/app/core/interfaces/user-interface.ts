export interface getInfo {
    message: string,
    user : inUser 
}

export interface inUser {

    _id?: string,
    name: string,
    email?: string,
    dateOfBirth?: string,
    gender?: string,
    photo: string,
    createdAt?: string

}

export interface User {

    id?: string,
    username: string,
    mail?: string,
    date?: string,
    gender?: string,
    image: string,
    startIn?: string

}
