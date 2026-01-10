import { program } from 'commander'

import pkg from '../../package.json'

import { build } from './base/build'
import { create } from './base/create'
import { info } from './base/info'
import { serve } from './base/server'
import { registerCommand } from './registerCommand'

program.version(pkg.version).description(pkg.description)

registerCommand(build)

registerCommand(info)

registerCommand(create)

registerCommand(serve)
