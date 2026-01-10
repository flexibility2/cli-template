import { program } from 'commander'

import './command'

export const runCLI = () => {
    program.parse(process.argv)
}
