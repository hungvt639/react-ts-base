export interface FriendInterface {
    _id?: String;
    idFriend: String;
    status: number;
    fullname: String;
}
export interface UserInterface {
    _id: String;
    email: String;
    username: String;
    password: String;
    fullname?: String;
    address?: String;
    birthday?: Date;
    friends?: FriendInterface[];
    avatar?: string;
}
export interface Notification {
    head: string;
    content: string;
    user: string;
    _id: string;
    created_at: string;
    updated_at: string;
    __v: number;
}

export interface MemberInterface {
    _id: String;
    idUser: String;
    idChat: String;
}

export interface MessageInterface {
    _id: String;
    content: String;
    sender: String;
    status: Number;
    created_at: string;
    updatedAt: string;
}
export interface ChatInterface {
    _id: String;
    name: String;
    member: MemberInterface[];
    message: MessageInterface[];
    status: number;
    created_at: string;
    updated_at: string;
    __v: number;
}
