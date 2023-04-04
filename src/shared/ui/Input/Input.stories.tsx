import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Input } from './Input'

export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {
      type: {
        options: ['text', 'password']
      },
      variant: {
        options: ['outline', 'search']
      },
      disabled: { control: 'boolean' },
    }
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input/>

export const Normal = Template.bind({})
Normal.args = {}
