import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.maks.ocitfirstaid",
  appName: "canki-app",
  webDir: "out",
  bundledWebRuntime: false,

  android: {
    buildOptions: {
      keystorePath: "/Users/makca/personal-projects/canki-app/android/key.jks",
      keystoreAlias: "key",
    },
  },
};

export default config;
