
import { defineConfig } from '@lingui/cli'

export default defineConfig({
  sourceLocale: "en",
  locales: ["en", "ny-mw"],
  catalogs: [
    {
      path: "<rootDir>/src/locale/messages/{locale}/messages",
      include: ["<rootDir>/src/**>", "src/"],
    }
  ]
});
