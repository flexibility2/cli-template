# Simple CLI - Modern Frontend Project Scaffolding Tool

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-5.5.4-blue?logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/pnpm-10.12.1-orange?logo=pnpm" alt="pnpm" />
  <img src="https://img.shields.io/badge/Monorepo-Turbo-purple?logo=turborepo" alt="Turborepo" />
  <img src="https://img.shields.io/badge/License-ISC-green" alt="License" />
</p>

> An enterprise-grade CLI scaffolding tool built with Monorepo architecture, supporting rapid creation of React/Vue project templates with built-in local and remote template fetching capabilities.

## ✨ Key Features

-   🏗️ **Monorepo Architecture**: Built with pnpm workspace + Turborepo for efficient monorepo management
-   🎯 **Full TypeScript Stack**: 100% TypeScript with complete type safety
-   🚀 **Template System**: Supports both local templates and remote GitHub template fetching, highly extensible
-   🎨 **Interactive CLI**: Friendly interactive experience powered by Commander.js and Prompts
-   📦 **Ready to Use**: Built-in React-TS, Vue-TS, and other mainstream framework templates
-   🔧 **Engineering Best Practices**: Integrated ESLint, Prettier, Husky, Lint-staged toolchain
-   ⚡ **High Performance Build**: Fast builds and hot reload with tsup

## 📦 Tech Stack

### Core Technologies

-   **Language**: TypeScript 5.5.4
-   **Package Manager**: pnpm 10.12.1
-   **Build Tools**: Turbo 2.0.12 + tsup 8.2.4
-   **CLI Framework**: Commander.js 12.1.0

### Engineering Tools

-   **Code Standards**: ESLint 9.9.0 + Prettier 3.3.3
-   **Git Hooks**: Husky 9.1.4 + Lint-staged 15.2.9
-   **Commit Convention**: Commitizen (cz-git 1.9.4)
-   **Dependency Analysis**: Madge 8.0.0

### CLI Libraries

-   **Interactive Prompts**: Prompts 2.4.2
-   **Logger**: Consola 3.2.3
-   **Loading Spinner**: Ora 8.0.1
-   **Color Support**: Picocolors 1.0.1
-   **Template Download**: Giget 1.2.3
-   **File Operations**: fs-extra 11.2.0

## 🚀 Quick Start

### Installation

```bash
# Global installation
npm install -g @simple/cli

# Or using pnpm
pnpm add -g @simple/cli
```

### Usage

#### 1. Create Project (Interactive Mode)

```bash
simple create my-app
```

The CLI will prompt you to choose:

-   Framework: Vue / React / Vanilla
-   Template: TypeScript version

#### 2. Quick Create (Command Line Arguments)

```bash
# Create React TypeScript project
simple create my-react-app -f react -t react-ts

# Create Vue TypeScript project
simple create my-vue-app -f vue -t vue-ts
```

#### 3. Fetch Template from Remote GitHub Repository

```bash
simple create my-app -r
```

#### 4. Other Commands

```bash
# View CLI information
simple info

# Build project
simple build

# Start development server
simple serve
```

## 📁 Project Architecture

```
cli-template/
├── packages/
│   ├── cli/                    # CLI core package
│   │   ├── bin/
│   │   │   └── simple          # CLI entry point
│   │   ├── src/
│   │   │   ├── cli.ts          # CLI main program
│   │   │   ├── command/        # Command modules
│   │   │   │   ├── base/       # Base commands
│   │   │   │   │   ├── create.ts    # Create project command
│   │   │   │   │   ├── build.ts     # Build command
│   │   │   │   │   ├── server.ts    # Dev server command
│   │   │   │   │   └── info.ts      # Info command
│   │   │   │   └── types/      # Type definitions
│   │   │   ├── constants/      # Constants configuration
│   │   │   │   └── templates.ts     # Template configuration
│   │   │   └── utils/          # Utility functions
│   │   │       ├── loadTemplate.ts  # Template loading logic
│   │   │       ├── logger.ts        # Logger utility
│   │   │       ├── validateGivenFramework.ts
│   │   │       └── validateGivenTemplate.ts
│   │   └── templates/          # Built-in templates
│   │       ├── template-react-ts/   # React TypeScript template
│   │       └── template-vue-ts/     # Vue TypeScript template
│   └── core/                   # Core utilities (to be expanded)
├── apps/                       # Application examples (to be expanded)
├── package.json                # Root configuration
├── pnpm-workspace.yaml         # pnpm workspace config
├── turbo.json                  # Turborepo configuration
├── tsconfig.json               # TypeScript configuration
└── eslint.config.mjs           # ESLint configuration
```

## 🔧 Core Implementation

### 1. Command System Design

Plugin-based command registration mechanism powered by Commander.js:

```typescript
// Command registry
registerCommand(create) // Create project
registerCommand(build) // Build project
registerCommand(serve) // Start server
registerCommand(info) // View info
```

### 2. Template Loading Strategy

Two template loading modes supported:

-   **Local Templates**: Quick copy from built-in `templates` directory
-   **Remote Templates**: Fetch latest templates from GitHub using `giget`

```typescript
// Local template loading
await loadLocalTemplate({ projectName, template })

// Remote template loading
await loadRemoteTemplate({ projectName })
```

### 3. Interactive Experience

Friendly user interaction powered by Prompts:

```typescript
const { framework } = await prompts({
    type: 'select',
    choices: [
        { title: 'Vue', value: 'vue' },
        { title: 'React', value: 'react' }
    ],
    message: 'What is your framework?'
})
```

### 4. Environment Detection

Auto-detect user's package manager (pnpm/npm) and choose appropriate commands:

```typescript
const command = hasPnpm() ? 'pnpm' : 'npm'
const params = hasPnpm() ? ['dev'] : ['run', 'dev']
```

## 🛠️ Local Development

### Prerequisites

-   Node.js >= 18
-   pnpm >= 10

### Development Workflow

```bash
# 1. Clone the repository
git clone <repository-url>

# 2. Install dependencies
pnpm install

# 3. Development mode (with hot reload)
pnpm dev

# 4. Build
pnpm build

# 5. Lint check
pnpm lint

# 6. Type check
pnpm typecheck

# 7. Dependency graph
pnpm graph
```

### Debugging CLI

During development, you can debug using:

```bash
# Link globally
cd packages/cli
pnpm link --global

# Use it
simple create test-app
```

## 📊 Engineering Highlights

### 1. Monorepo Management

-   **pnpm workspace** for multi-package dependency management
-   **Turborepo** for parallel builds and incremental caching
-   Support for cross-package references and unified version management

### 2. Code Quality Assurance

-   **ESLint**: Automatic code standard checking
-   **Prettier**: Unified code formatting
-   **TypeScript**: Strict type checking
-   **Husky + Lint-staged**: Pre-commit automatic checks

### 3. Commit Convention

Integrated Commitizen for interactive commits:

```bash
pnpm commit
```

### 4. Dependency Analysis

Analyze module dependencies using Madge:

```bash
pnpm graph
```

## 🎯 Design Philosophy

### 1. Extensibility

-   **Plugin-based Command System**: New commands only need to implement standard interfaces and register
-   **Decoupled Template System**: Support for dynamically adding new framework templates
-   **Configuration-driven**: Manage all templates through `templates.ts` configuration file

### 2. User Experience

-   **Friendly Error Messages**: Highlight key information using picocolors
-   **Progress Feedback**: Display loading states using ora
-   **Smart Defaults**: Support both interactive selection and command-line arguments

### 3. Performance Optimization

-   **Lazy Loading**: Dynamic import of command modules
-   **Parallel Building**: Intelligent scheduling by Turborepo
-   **Incremental Compilation**: Hot reload support with tsup watch mode

## 📈 Future Roadmap

-   [ ] Support more framework templates (Svelte, Solid, Nuxt, Next.js)
-   [ ] Add plugin system for third-party templates
-   [ ] Implement template marketplace with online browsing and downloading
-   [ ] Integrate AI-assisted configuration (smart template recommendations based on requirements)
-   [ ] Support project upgrade and migration commands
-   [ ] Add performance monitoring and usage statistics
-   [ ] Provide VSCode extension support

## 🤝 Technical Highlights

1. **Architecture Design**: Monorepo architecture + modular design with clear code organization, easy to maintain and extend
2. **Engineering Capabilities**: Complete frontend engineering toolchain including build, test, standard checks, and commit conventions
3. **TypeScript Practices**: Comprehensive TypeScript usage demonstrating type safety and code quality awareness
4. **CLI Development Experience**: Proficient use of Commander, Prompts and other CLI frameworks for excellent user experience
5. **Performance Optimization**: Efficient Monorepo builds powered by Turborepo
6. **Best Practices**: Following frontend engineering best practices with clean, readable code

## 📝 License

ISC

---

**Author**: flexibility2  
**Use Cases**: Enterprise frontend project initialization, team template management, rapid prototyping
