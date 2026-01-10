import { Framework, Template } from '../command/types/template'
import { reactTemplateChoices, vueTemplateChoices } from '../constants/templates'

export const validateGivenTemplate = (framework: Framework, template: Template) => {
    switch (framework) {
        case 'vue':
            return vueTemplateChoices.map(({ value }) => value).includes(template)
        case 'react':
            return reactTemplateChoices.map(({ value }) => value).includes(template)
        default:
            return false
    }
}
