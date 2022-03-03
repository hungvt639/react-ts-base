export const LOGIN = "/login";
export const REGISTER = "/register";
export const SEND_RESET_PASSWORD = "/send_reset-password";
export const RESET_PASSWORD = "/reset-password";
export const ACTIVATE_USER = "/activate-user";
export const HOME = "/";

export const PROFILE = "/user/profile";
export const USER_PROFILE = "/user";
export const USER_PROFILE_ROUTER = `${USER_PROFILE}/:id`;
export const NEW_BLOG = "/new-blog";
export const LIST_BLOG = "/list-blog";
export const BLOG = "/blog";
export const BLOG_VIEW = `${BLOG}/:slug`;
export const MESSAGE = "/message";
export const MESSAGE_ROUTER = `${MESSAGE}/:id`;

const route = {
    LOGIN,
    REGISTER,
    SEND_RESET_PASSWORD,
    RESET_PASSWORD,
    ACTIVATE_USER,
    HOME,
    PROFILE,
    USER_PROFILE,
    USER_PROFILE_ROUTER,
    NEW_BLOG,
    LIST_BLOG,
    BLOG,
    BLOG_VIEW,
    MESSAGE,
    MESSAGE_ROUTER,
};
export default route;
