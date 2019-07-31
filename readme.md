#npm run start: 
    使用webpack-dev-server启动本地开发服务器，地址为localhost:9000
    默认展示的组件是playground，可以利用这个组件对其他组件进行测试
#npm run compile_bundle: 
    使用rollup进行打包。
    会将所有的代码集中打包为一个bundle存放在build目录下，可以生成多种格式的文件，es，cjs等等。。
    样式文件会集中打包为一个css文件。
#npm run compile_lib: 
    使用rollup进行打包。
    会将每一个组件分别进行打包，存放在lib目录下，生成的文件格式默认为es。
    每个组件的样式文件会被打包成css文件，分别放在该组件的目录下
#npm run compile: 
    依次运行compile_bundle和compile_lib
