import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { PostModalActions } from './PostModalActions'

export default {
    title: 'features/PostModalActions',
    component: PostModalActions,
    argTypes: {

    }
} as ComponentMeta<typeof PostModalActions>

const Template: ComponentStory<typeof PostModalActions> = () => {
    return <div style={{ width: '479px' }}><PostModalActions /></div>
}

export const DefaultPostModalActions = Template.bind({})
DefaultPostModalActions.args = {
}
