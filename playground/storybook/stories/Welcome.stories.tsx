import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { Welcome } from '../../components/Welcome'

const ToStorybook = () => <Welcome />

storiesOf('Welcome', module).add('to Storybook', () => <ToStorybook />)
