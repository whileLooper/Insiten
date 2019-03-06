const { override, fixBabelImports, addLessLoader, addPostcssPlugins } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    modules: true,
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#1DA57A' }
  })
);
