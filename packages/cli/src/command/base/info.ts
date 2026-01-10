import { Command } from 'commander'
import pc from 'picocolors'

import pkg from '../../../package.json'
import { logger } from '../../utils/logger'
export const info = (program: Command) =>
    program
        .createCommand('info')
        .description('Display information about the CLI project')
        .action(() => {
            logger.info(pc.green(`Project Version: ${pkg.version}`))
        })
