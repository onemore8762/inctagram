import React from 'react'
import { type ComponentMeta } from '@storybook/react'
import { Button, ButtonSize, ButtonTheme } from './Button'

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        children: { control: 'text' },
        size: {
            options: ButtonSize,
            control: {
                type: 'radio'
            }
        },
        theme: {
            options: ButtonTheme,
            control: {
                type: 'radio'
            }
        },
        disabled: { control: 'boolean' },
        block: { control: 'boolean' }
    }
} as ComponentMeta < typeof Button >
export const TextButton = (args) => <Button {...args} />
export const Primary = (args) => <Button {...args} />
export const Secondary = (args) => <Button {...args} />
export const Outline = (args) => <Button {...args} />
export const WithBlock = (args) => <Button {...args} />

export const TextButtonDisabled = (args) => <Button {...args} />
export const PrimaryDisabled = (args) => <Button {...args} />
export const SecondaryDisabled = (args) => <Button {...args} />
export const OutlineDisabled = (args) => <Button {...args} />

export const allButtons = (args) => (
    <>
        <div style={{ paddingBottom: 10, display: 'flex', gap: 10 }}>
            <Button {...args} size={ButtonSize.M} theme={ ButtonTheme.TEXT_BUTTON}>
                Button text
            </Button>
            <Button {...args} size={ButtonSize.M}>
                Button text
            </Button>
            <Button {...args} size={ButtonSize.M} theme={ ButtonTheme.SECONDARY}>
                Button text
            </Button>
            <Button {...args} size={ButtonSize.M} theme={ ButtonTheme.OUTLINE}>
                Button text
            </Button>
        </div>
        <div style={{ paddingBottom: 10, display: 'flex', gap: 10 }}>
            <Button {...args} size={ButtonSize.L} theme={ ButtonTheme.TEXT_BUTTON}>
                Button text
            </Button>
            <Button {...args} size={ButtonSize.L}>
                Button text
            </Button>
            <Button {...args} size={ButtonSize.L} theme={ ButtonTheme.SECONDARY}>
                Button text
            </Button>
            <Button {...args} size={ButtonSize.L} theme={ ButtonTheme.OUTLINE}>
                Button text
            </Button>
        </div>
        <div style={{ paddingBottom: 10, display: 'flex', gap: 10 }}>
            <Button {...args} size={ButtonSize.XL} theme={ ButtonTheme.TEXT_BUTTON}>
                Button text
            </Button>
            <Button {...args} size={ButtonSize.XL}>
                Button text
            </Button>
            <Button {...args} size={ButtonSize.XL} theme={ ButtonTheme.SECONDARY}>
                Button text
            </Button>
            <Button {...args} size={ButtonSize.XL} theme={ ButtonTheme.OUTLINE}>
                Button text
            </Button>
        </div>
    </>
)

TextButton.args = {
    children: 'Button text',
    theme: ButtonTheme.TEXT_BUTTON
}

Primary.args = {
    children: 'Button text'
}

Secondary.args = {
    children: 'Button text',
    theme: ButtonTheme.SECONDARY
}

Outline.args = {
    children: 'Button text',
    theme: ButtonTheme.OUTLINE
}

WithBlock.args = {
    children: 'Button text',
    block: true
}
TextButtonDisabled.args = {
    children: 'Button text',
    theme: ButtonTheme.TEXT_BUTTON,
    disabled: true
}

PrimaryDisabled.args = {
    children: 'Button text',
    disabled: true
}

SecondaryDisabled.args = {
    children: 'Button text',
    theme: ButtonTheme.SECONDARY,
    disabled: true
}

OutlineDisabled.args = {
    children: 'Button text',
    theme: ButtonTheme.OUTLINE,
    disabled: true
}
