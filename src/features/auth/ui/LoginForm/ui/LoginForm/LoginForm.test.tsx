import { act, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithQueryClient } from '../../../../../../../config/jest/renderWithQueryClient'
import { AuthService } from '../../../../../../shared/api/auth/authService'
import { AppRoutes } from '../../../../../../shared/config/routeConfig/path'
import { routerPush } from '../../../../../../shared/lib/routerPush/routerPush'
import { type UserLoginModel } from '../../../../../../shared/types/auth'
import { LoginForm } from './LoginForm'

jest.mock('next/router', () => require('../../../../../config/jest/__mocks__/next_router'))
jest.mock('../../model/service/authService', () => ({
    AuthService: {
        login: jest.fn()
    }
}))
jest.mock('shared/lib/routerPush/routerPush', () => ({
    routerPush: jest.fn()
}))

describe('LoginForm', () => {
    it('renders without crashing', () => {
        renderWithQueryClient(<LoginForm />)
    })

    it('submits the form with valid data', async () => {
        renderWithQueryClient(<LoginForm />)

        await act(async () => {
            await userEvent.type(screen.getByPlaceholderText('Email or Login'), 'testuser')
            await userEvent.type(screen.getByPlaceholderText('Password'), 'testpasswordQ1q**')

            await userEvent.click(screen.getByTestId('sign-in-submit'))
        })

        await waitFor(() => {
            expect(AuthService.login).toHaveBeenCalledWith({
                loginOrEmail: 'testuser',
                password: 'testpasswordQ1q**'
            } as UserLoginModel)
            expect(routerPush).toHaveBeenCalledWith(AppRoutes.CREATE_PROFILE)
        })
    })

    it('displays server error message', async () => {
        const errorMessage = 'Invalid login or password';

        (AuthService.login as jest.Mock)
            .mockRejectedValueOnce({
                response: { data: { message: errorMessage } }
            })

        renderWithQueryClient(<LoginForm />)

        await act(async () => {
            await userEvent.type(screen.getByPlaceholderText('Email or Login'), 'testuser')
            await userEvent.type(screen.getByPlaceholderText('Password'), 'testpasswordQ1q**')
            await userEvent.click(screen.getByTestId('sign-in-submit'))
        })

        await waitFor(() => {
            expect(screen.getByText(errorMessage)).toBeInTheDocument()
        })
    })
})
