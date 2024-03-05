import svgr from '@svgr/rollup';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import url from 'rollup-plugin-url';

import pkg from './package.json';

// 처리할 확장자 목록
const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const config = {
  input: './src/index.ts', // 어떤 파일부터 불러올지 정함.
  plugins: [
    // peerDependencies로 명시된 의존성을 외부로 분리
    peerDepsExternal(),
    // Node.js 모듈 시스템에서 사용되는 module resolve를 지원
    resolve({ extensions }),
    //  CommonJS 형태로 작성된 모듈도 Rollup에서 사용할 수 있도록 지원
    commonjs({
      include: 'node_modules/**',
    }),
    // Babel을 Rollup에서 사용할 수 있도록 지원
    babel({ extensions, include: ['src/**/*'], runtimeHelpers: true }),
    // 미디어 파일을 dataURI 형태로 불러와서 사용 할 수 있게 해줌.
    url(),
    // SVG 파일을 React 컴포넌트로 변환
    svgr(),
  ],
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
};

export default config;
