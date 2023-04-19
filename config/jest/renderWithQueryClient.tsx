import { QueryClient } from '@tanstack/query-core'
import React from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import { render } from '@testing-library/react'

export const renderWithQueryClient = (component: React.ReactElement) => {
    const queryClient = new QueryClient()

    return render(
        <QueryClientProvider client={queryClient}>{component}</QueryClientProvider>
    )
}
