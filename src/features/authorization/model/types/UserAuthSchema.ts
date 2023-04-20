export interface UserAuthModel {
    email: string
    login: string
    userId: string
}

export interface UserLoginModel {
    loginOrEmail: string
    password: string
}

export interface UserRegistrationModel {
    login: string
    email: string
    password: string
    frontendLink: string
}
export interface UserRegistrationError {
    errorsMessages: Array<{
        field: string
        message: string
    }>
}

export interface UserCreatePasswordModel {
    recoveryCode: string
    newPassword: string
}
export interface UseResendLinkModel {
    email: string
    frontendLink: string
}
