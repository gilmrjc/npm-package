import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'

const extensions = ['.js', '.ts']
export default [{
  input: 'src/main.ts',
  output: [
    {
      file: 'dist/main.js',
      format: 'esm'
    },
    {
      file: 'dist/bundle.min.js',
      format: 'esm',
      plugins: [terser()]
    }
  ],
  external: [/@babel\/runtime/],
  plugins: [
    resolve({
      extensions
    }),
    babel({
      babelHelpers: 'runtime',
      exclude: 'node_modules/**',
      extensions
    })
  ]
}]
