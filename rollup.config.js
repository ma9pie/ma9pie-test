import svgr from '@svgr/rollup';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import url from 'rollup-plugin-url';

import pkg from './package.json';

// 어떤 확장자를 처리 할 지 정함
const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const config = {
  input: './src/index.ts', // 어떤 파일부터 불러올지 정함.
  plugins: [
    // peerDependencies로 설치한 라이브러리들을 external 모듈로 설정 즉, 번들링된 결과에 포함시키지 않음
    peerDepsExternal(),
    // node_modules 에서 모듈을 불러올 수 있게 해줌. ts/tsx 파일도 불러올 수 있게 해줌
    resolve({ extensions }),
    // CommonJS 형태로 만들어진 모듈도 불러와서 사용 할 수 있게 해줌. 현재 프로젝트 상황에서는 없어도 무방함
    commonjs({
      include: 'node_modules/**',
    }),
    // Babel을 사용 할 수 있게 해줌
    babel({ extensions, include: ['src/**/*'], runtimeHelpers: true }),
    // 미디어 파일을 dataURI 형태로 불러와서 사용 할 수 있게 해줌.
    url(),
    // SVG를 컴포넌트로 사용 할 수 있게 해줌.
    svgr(),
  ],
  output: [
    {
      // 번들링한 파일을 저장 할 경로
      file: pkg.main,
      // ES Module 형태로 번들링함
      format: 'cjs',
    },
    // {
    //   file: 'dist/es/index.d.ts',
    //   format: 'es',
    // },
    // {
    //   file: 'dist/esm/index.d.ts',
    //   format: 'esm',
    // },
    // {
    //   file: 'dist/cjs/index.d.ts',
    //   format: 'cjs',
    // },
  ],
};

export default config;
