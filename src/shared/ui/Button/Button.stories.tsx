import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Button } from './Button'
export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        children: { control: 'text' },
        size: {
            options: ['size_m', 'size_l', 'size_xl'],
            control: {
                type: 'radio'
            }
        },
        theme: {
            options: ['outline', 'secondary', 'primary', 'textButton'],
            control: { type: 'radio' }
        },
        disabled: { control: 'boolean' },
        block: { control: 'boolean' }
    }
} as ComponentMeta < typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const TextButton = Template.bind({})
TextButton.args = {
    children: 'Button text',
    theme: 'textButton'
}
export const Primary = Template.bind({})
Primary.args = {
    children: 'Button text'
}
export const Secondary = Template.bind({})
Secondary.args = {
    children: 'Button text',
    theme: 'secondary'
}
export const Outline = Template.bind({})
Outline.args = {
    children: 'Button text',
    theme: 'outline'
}
export const WithBlock = Template.bind({})
WithBlock.args = {
    children: 'Button text',
    block: true
}
export const TextButtonDisabled = Template.bind({})
TextButtonDisabled.args = {
    children: 'Button text',
    theme: 'textButton',
    disabled: true
}
export const PrimaryDisabled = Template.bind({})
PrimaryDisabled.args = {
    children: 'Button text',
    disabled: true
}
export const SecondaryDisabled = Template.bind({})
SecondaryDisabled.args = {
    children: 'Button text',
    theme: 'secondary',
    disabled: true
}
export const OutlineDisabled = Template.bind({})
OutlineDisabled.args = {
    children: 'Button text',
    theme: 'outline',
    disabled: true
}

export const allButtons: ComponentStory<typeof Button> = (args) => (
    <>
        <div style={{ paddingBottom: 10, display: 'flex', gap: 10 }}>
            <Button {...args} size={'size_m'} theme={'textButton'}>
                Button text
            </Button>
            <Button {...args} size={'size_m'}>
                Button text
            </Button>
            <Button {...args} size={'size_m'} theme={'secondary'}>
                Button text
            </Button>
            <Button {...args} size={'size_m'} theme={'outline'}>
                Button text
            </Button>
        </div>
        <div style={{ paddingBottom: 10, display: 'flex', gap: 10 }}>
            <Button {...args} size={'size_l'} theme={'outline'}>
                Button text
            </Button>
            <Button {...args} size={'size_l'}>
                Button text
            </Button>
            <Button {...args} size={'size_l'} theme={'secondary'}>
                Button text
            </Button>
            <Button {...args} size={'size_l'} theme={'outline'}>
                Button text
            </Button>
        </div>
        <div style={{ paddingBottom: 10, display: 'flex', gap: 10 }}>
            <Button {...args} size={'size_xl'} theme={'textButton'}>
                Button text
            </Button>
            <Button {...args} size={'size_xl'}>
                Button text
            </Button>
            <Button {...args} size={'size_xl'} theme={'secondary'}>
                Button text
            </Button>
            <Button {...args} size={'size_xl'} theme={'outline'}>
                Button text
            </Button>
        </div>
    </>
)
