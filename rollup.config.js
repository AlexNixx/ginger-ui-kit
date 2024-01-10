import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import url from '@rollup/plugin-url';
import terser from '@rollup/plugin-terser';
import svgr from '@svgr/rollup';

import peerDepsExternal from 'rollup-plugin-peer-deps-external';

import postcss from 'rollup-plugin-postcss';
import { dts } from 'rollup-plugin-dts';

import postcssPresetEnv from 'postcss-preset-env';
import autoprefixer from 'autoprefixer';

import packageJson from './package.json' assert { type: 'json' };

const config = [
  {
    experimentalCodeSplitting: true,
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.module,
        format: 'cjs',
        sourceMap: false
      },
      {
        file: packageJson.main,
        format: 'esm',
        sourceMap: false
      }
    ],
    preserveModules: true,
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        exclude: ['**/*.stories.tsx', '**/*.spec.ts', '**/*.config.ts']
      }),
      postcss({
        plugins: [postcssPresetEnv(), autoprefixer()],
        autoModules: true,
        modules: {
          generateScopedName: 'g-ui_[name]_[local]__[hash:base64:5]'
        },
        extract: false,
        extensions: ['.scss'],
        use: ['sass'],
        minimize: true,
        sourceMap: false
      }),
      url(),
      svgr({ icon: true }),
      terser()
    ]
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: packageJson.types, format: 'esm' }],
    external: [/\.(css|scss)$/],
    plugins: [dts()]
  }
];

export default config;
