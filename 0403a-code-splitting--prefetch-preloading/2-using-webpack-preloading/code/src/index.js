import _ from 'lodash';


function getComponent() {
  return import('lodash')
    .then(({ default: _ }) => {
      //
      // The reason we need default is that since webpack 4, when
      // importing a CommonJS module, the import will no longer
      // resolve to the value of module.exports, it will instead
      // create an artificial namespace object for the CommonJS
      // module. For more information on the reason behind this,
      // read:
      // https://medium.com/webpack/webpack-4-import-and-commonjs-d619d626b655
      //
      const element = document.createElement('div');

      element.innerHTML = _.join(['Hello', 'webpack'], ' ');
       return element;
    })
    .catch((error) => 'An error occurred while loading the component');
}


let button = document.createElement('button')
button.innerHTML = 'getComponent'
button.addEventListener('click', e => {
  //
  // The inline preload directive `/* webpackPrefetch: true */` will inject:
  //
  //   <link rel="prefetch" as="script" href="http://127.0.0.1:8080/src_script_js.bundle.js">
  //
  // into the header.
  //
  import(/* webpackPrefetch: true */ './script.js');

  getComponent().then((component) => {
    document.body.appendChild(component);
  });
})


document.body.appendChild(button)

