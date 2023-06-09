export interface RefreshTokenResponse {
    accessToken: string
}

export interface UserAuthModel {
    email: string
    userName: string
    userId: number
}

export interface UserLoginModel {
    email: string
    password: string
}

export interface UserRegistrationModel {
    userName: string
    email: string
    password: string
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
}

export interface PasswordRecoveryModel {
    email: string
    recaptcha: string
}

export interface ProfileDataModel {
    userName: string
    name: string
    surName: string
    dateOfBirthday: string
    city: string
    aboutMe: string
    avatarUrl: string
}
