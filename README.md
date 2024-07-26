
# Swiff 2024
**Note: Currently in Development (Will merge to Swiff after approval)**

Swiff streamlines common SSH tasks during website/app development, saving you valuable time.

## Key Features

### 🚀 Folder Synchronization
Keep folders in sync between servers effortlessly.

### 💫 Database Management
Manage databases between servers with automatic backups.

### 🎩 Composer File Management
Transfer composer files between servers with automatic backups.

### 💻 Remote Terminal Connection
Launch an SSH session directly into the remote site/app folder.

### 💻 Logger
Access all logs with `swiff.log`.

## Getting Started

1. **Install Swiff globally with npm:**
   ```sh
   npm install --global swiff-4@latest
   ```

2. **Run Swiff:**
   ```sh
   swiff-4
   ```

## Additional Features

- **Custom SSH Identity:**
  Swiff uses your identity located at `/Users/[currentUser]/.ssh/id_rsa`. Specify a custom SSH key path in your `.env` file with:
  ```sh
  SWIFF_CUSTOM_KEY="/Users/[your-user]/.ssh/[key-filename]"
  ```

- **Gzipped Backups:**
  Automatically back up and gzip your files and databases whenever they change.

- **Disable Specific Tasks:**
  Specify tasks to disable via a config setting.

- **Folder Sync Enhancements:**
  New features include `see diff` and validation sync with `git`.

- **Enhanced Logger:**
  `swiff.log` includes max size settings to manage log file size:
  ```js
  logging: {
    enabled: true,
    dir: '', // Default root: "./storage/logs/"
    maxSize: 10 * 1024 * 1024, // Recommended 10MB max log file size
  },
  ```

- **Multi-Environment Support:**
  ```js
  defaultEnvironment: "staging",
  environments: {
    staging: {
      user: "",   
      host: "",  
      appPath: "",
      port: 22,
    },
    production: {
      user: "",   
      host: "",  
      appPath: "",    
      port: 22,
    },
  },
  ```

## Requirements
Swiff requires Node.js LTS version (16.0.0+).

Place the following in `swiff.config.js` at the root of your application:

```js
export default {
  defaultEnvironment: "staging",
  logging: {
    enabled: true,
    // dir: '', // Default root: "./storage/logs/"
    maxSize: 10 * 1024 * 1024, // Recommended 10MB max log file size
  },
  environments: {
    staging: {
      user: "",   
      host: "",  
      appPath: "",
      port: 22,
    },
    production: {
      user: "",   
      host: "",  
      appPath: "",    
      port: 22,
    },
  },
  local: {
    ddev: true,
  },
  env: {
    prefix: null, // Example: "CRAFT_" for projects above version 4
  },
  pushFolders: [
    // { path: "config", exclude: "/project/*" },
    // 'templates',
    // 'public/dist'
  ],
  pullFolders: [
    // 'public/assets/volumes'
  ],
  disabled: ["databasePush"],
};
```
Swiff works with MySQL databases and supports `ddev` (requires `local.ddev = true`).

## Technology

- [Node.js](https://nodejs.org/en/) - JavaScript runtime built on Chrome's V8 engine
- [Ink 2](https://github.com/vadimdemedes/ink) - React for interactive command-line apps
- [Babel](https://babeljs.io/) - JavaScript transpiler
- [Rollup](https://rollupjs.org/) - JavaScript module bundler
- [Prettier](https://github.com/prettier/prettier) - Code formatter
- [Pino](https://github.com/pinojs/pino) - Logger

## Credits

- Sounds by [Emoji Sounds](https://icons8.com/sounds)
- Created by [@benrogerson](https://twitter.com/benrogerson) and [Sam Stevens](https://simple.com.au)
- Updated & Maintained by [@suprimgolay](https://suprimgolay.com.np/)
- Swiff has been agency battle-tested by [Simple](https://simple.com.au), specializing in Craft CMS websites.
