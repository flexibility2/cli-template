export const reactTemplateChoices = [
    {
        title: 'React TypeScript',
        value: 'react-ts'
    }
]

export const vueTemplateChoices = [
    {
        title: 'Vue TypeScript',
        value: 'vue-ts'
    }
]

export const templateChoices = {
    vue: vueTemplateChoices,
    react: reactTemplateChoices
}

export const frameworks = ['vue', 'react'] as const
export const templates = ['vue-ts', 'react-ts'] as const
