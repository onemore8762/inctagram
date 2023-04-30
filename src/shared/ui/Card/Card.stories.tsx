import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Card } from 'shared/ui/Card/Card'
import congratulationsImg from 'shared/assets/images/congratulations.png'

export default {
    title: 'shared/Card',
    component: Card,
    argTypes: {}
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const BasicCard = Template.bind({})
BasicCard.args = {
    src: congratulationsImg,
    alt: 'congratulations'
}

export const CardWhenLoading = Template.bind({})
CardWhenLoading.args = {
    src: '',
    alt: 'no image',
    skeletonWidth: 300,
    skeletonHeight: 300
}
