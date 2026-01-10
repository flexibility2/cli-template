import { Framework } from '../command/types/template'
import { frameworks } from '../constants/templates'
export const validateGivenFramework = (framework: Framework) => frameworks.includes(framework)
