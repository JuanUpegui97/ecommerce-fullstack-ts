
export interface LoginCredentials {
    email: string;
    password: string;
}

export interface LoginResponse {
    usuario: {
        username: string;
        rolename: string;
    };
    token: string;
}