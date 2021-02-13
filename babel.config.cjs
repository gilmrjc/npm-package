module.exports = (api) => {
  const targets = {
    esmodules: !api.env('test')
  }

  if (api.env('test')) {
    targets.node = 'current'
  }

  return {
    plugins: [
      '@babel/plugin-transform-runtime'
    ],
    presets: [
      '@babel/preset-typescript',
      ['@babel/preset-env', {
        targets,
        bugfixes: true,
        loose: true,
        modules: api.env('test') ? 'auto' : false
      }]
    ]
  }
}
