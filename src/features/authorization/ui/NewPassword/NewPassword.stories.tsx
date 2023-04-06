import { NewPassword } from './NewPassword'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

export default {
    title: 'shared/NewPassword',
    component: NewPassword,
    argTypes: {
        onSubmit: { action: 'onSubmit' }
    }
} as ComponentMeta<typeof NewPassword>

const Template: ComponentStory<typeof NewPassword> = (args) => <NewPassword {...args} />

export const DefaultNewPassword = Template.bind({})
DefaultNewPassword.args = {}
