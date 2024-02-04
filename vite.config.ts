import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';
import path, { dirname } from 'node:path';
import tsconfigPaths from 'vite-tsconfig-paths';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  root: path.resolve(__dirname, 'src'),
  plugins: [tsconfigPaths()],
});
