import { program } from 'commander'

export const runCLI = () => {
    program
        .name('simple')
        .description('A simple CLI tool')
        .version('0.0.1')
        .action(() => {
            console.log('Hello from simple CLI!')
        })

    program.parse(process.argv)
}
