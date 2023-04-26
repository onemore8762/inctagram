import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { DatePicker } from './DatePicker'

export default {
    title: 'shared/DatePicker',
    component: DatePicker,
    argTypes: {
        onChange: { action: 'onChange' }
    }
} as ComponentMeta<typeof DatePicker>

const Template: ComponentStory<typeof DatePicker> = (args) => <DatePicker {...args} />

export const DefaultDatePicker = Template.bind({})
DefaultDatePicker.args = {
    placeholder: 'Date-picker',
    onChange: () => {}
}
