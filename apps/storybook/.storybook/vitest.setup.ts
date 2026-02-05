import { beforeAll } from 'vitest'
import { setProjectAnnotations } from '@storybook/react-vite'
import * as previewAnnotations from './preview'

// React rendererとプロジェクトのアノテーションをテストに適用
const project = setProjectAnnotations([previewAnnotations])

beforeAll(project.beforeAll)
