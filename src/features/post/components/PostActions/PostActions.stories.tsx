import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import React from 'react'
import { PostActions } from './PostActions'

export default {
    title: 'features/PostModalActions',
    component: PostActions,
    argTypes: {

    }
} as ComponentMeta<typeof PostActions>

const Template: ComponentStory<typeof PostActions> = () => {
    return <div style={{ width: '479px' }}><PostActions /></div>
}

export const DefaultPostModalActions = Template.bind({})
DefaultPostModalActions.args = {
}
