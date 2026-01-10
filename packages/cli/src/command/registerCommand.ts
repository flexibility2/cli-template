import { program } from 'commander'
import { Command } from 'commander'
// eslint-disable-next-line no-unused-vars
type Fn = (p: Command) => Command

export const registerCommand = (fn: Fn) => {
    program.addCommand(fn(program))
}
