import React from 'react'
import { act, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RegisterForm } from './RegisterForm'
import { AuthService } from '../../model/service/authService'
import { renderWithQueryClient } from '../../../../../config/jest/renderWithQueryClient'

jest.mock('next/router', () => require('./__mocks__/next_router'))
jest.mock('shared/lib/routerPush/routerPush', () => ({
    routerPush: jest.fn()
}))
jest.mock('../../model/service/authService', () => ({
    AuthService: {
        registration: jest.fn()
    }
}))

describe('RegisterForm', () => {
    it('renders without crashing', () => {
        renderWithQueryClient(<RegisterForm/>)
    })

    it('submits the form with valid data', async () => {
        renderWithQueryClient(<RegisterForm />)

        await act(async () => {
            // Fill out the form
            await userEvent.type(screen.getByPlaceholderText('Login'), 'testuser')
            await userEvent.type(screen.getByPlaceholderText('Email'), 'test@example.com')
            await userEvent.type(screen.getByPlaceholderText('Password'), 'testpasswordQ1q**')
            await userEvent.type(
                screen.getByPlaceholderText('Password confirmation'),
                'testpasswordQ1q**'
            )

            // Click on the "Sign Up" button
            await userEvent.click(screen.getByTestId('sign-up-submit'))
        })

        await waitFor(() => {
            expect(AuthService.registration).toHaveBeenCalledWith({
                login: 'testuser',
                email: 'test@example.com',
                password: 'testpasswordQ1q**',
                frontendLink: 'http://localhost:3000/ru/auth/confirm-email'
            })
        })
    })

    it('displays validation errors', async () => {
        renderWithQueryClient(<RegisterForm />)

        await act(async () => {
            // Click on the "Sign Up" button without filling out the form
            await userEvent.click(screen.getByTestId('sign-up-submit'))
        })

        // Check if the validation errors are displayed
        await waitFor(() => {
            expect(screen.getByText('login must be at least 6 characters')).toBeInTheDocument()
            expect(screen.getByText('Field is required!')).toBeInTheDocument()
            expect(screen.getByText('Password should include one uppercase letter, ' +
                'one lowercase letter, one number and one special character'))
                .toBeInTheDocument()
        })
    })
})
