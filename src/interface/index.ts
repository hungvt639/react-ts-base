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
export interface MessageInterface {
    content: string;
    sender: string;
    status: number;
    _id: string;
    created_at: string;
    updatedAt: string;
}
export interface ChatInterface {
    _id: string;
    member: string[];
    status: number;
    message: MessageInterface[];
    created_at: string;
    updated_at: string;
    __v: number;
}
