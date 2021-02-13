import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'

const extensions = ['.js', '.ts']
export default [{
  input: 'src/main.ts',
  output: [
    {
      dir: 'dist',
      format: 'esm'
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
