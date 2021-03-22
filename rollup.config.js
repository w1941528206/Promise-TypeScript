import path from 'path'
import ts from 'rollup-plugin-typescript2'
import {nodeResolve} from '@rollup/plugin-node-resolve'

export default {
    exports:'auto',
    input:'src/index.ts',
    output:{
        format:'cjs', //commonjs
        file:path.resolve(`dist/bundle.js`)
    },
    plugins:[
        ts({
            tsconfig:path.resolve(`tsconfig.json`)
        }),
        nodeResolve({
            extensions:['.js','.ts']
        })
    ]
}