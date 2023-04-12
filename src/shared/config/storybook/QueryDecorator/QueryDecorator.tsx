import { type Story } from '@storybook/react'
import { type ReactElement, useState } from 'react'
import { QueryClient } from '@tanstack/query-core'
import { QueryClientProvider } from '@tanstack/react-query'

export const QueryDecorator = () => function StoryComponent (StoryComponent: Story): ReactElement {
    const [queryClient] = useState(() => new QueryClient())
    return (
        <QueryClientProvider client={queryClient}>
            <StoryComponent/>
        </QueryClientProvider>
    )
}
