import { execSync } from 'node:child_process'
export function hasPnpm() {
    return !!getPnpmVersion()
}

export function getPnpmVersion(): string | null {
    try {
        const output = execSync('pnpm --version', { stdio: ['pipe', 'pipe', 'ignore'] })
        return output.toString().trim()
    } catch (error) {
        console.log('error in getPnpmVersion: ', error)
        return null
    }
}
