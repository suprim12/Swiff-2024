/**
 *  Swiff Project Configuration
 */
export default {
  defaultEnvironment: "staging",
  logging:{
    enabled: true,
    // dir:'', // change log directory (Default root: example "./storage/logs/")
    maxSize: 10 * 1024 * 1024, // recommended 10mb max log file size than clears log 
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
  env:{
    prefix: null
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
