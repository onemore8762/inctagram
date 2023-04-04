import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Input } from './Input'

export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = () => <Input/>

export const Normal = Template.bind({})
Normal.args = {}
