import { render, screen } from '@testing-library/react'
import { Button, ButtonTheme } from './Button'

describe('buttons', () => {
    test('Test render', () => {
        render(<Button>TEST</Button>)
        expect(screen.getByText('TEST')).toBeInTheDocument()
    })
    test('Test render2', () => {
        const { getByText } = render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>)
        expect(getByText('TEST')).toBeInTheDocument()
    })
})
