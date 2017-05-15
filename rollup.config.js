import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import uglify from  'rollup-plugin-uglify'
var isProduction = process.env.NODE_ENV === 'production';

/**
 * Output location
 */
var outputDev = 'build/bundle.js'
var outputDist = 'dist/bundle.js'

/**
 * Rollup configuration
 */
export default {
  moduleName: 'Module',
  entry: 'src/js/index.js',
  dest: isProduction ? outputDist : outputDev,
  format: 'umd',
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**'
    }),
    isProduction ? uglify() : {}
  ]
}