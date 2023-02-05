import { CapacitorConfig } from "@capacitor/cli";
import ip from "ip";

const config: CapacitorConfig = {
  appId: 'uk.co.joinpoppet',
  appName: 'Poppet',
  webDir: '../../dist/apps/app/www',
  bundledWebRuntime: false,
  ios: {
    contentInset: 'always'
  }
};

//see https://medium.com/@oleksandr.k/how-to-run-ionic-capacitor-app-from-nx-monorerepo-in-live-reload-mode-ec894ed71c24
if (process.env.LIVE === 'true') {
  const localIp = ip.address();
  const port = process.env.PORT || 4200;
  config.server = { url: `http://${localIp}:${port}`, cleartext: true };
} else {
  Reflect.deleteProperty(config, 'server');
}

export default config;
