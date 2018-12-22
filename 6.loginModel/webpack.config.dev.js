import path from 'path'

export default {
    entry : path.join(__dirname, '/client/index.js'),
    output : {
        path : '/'
    },
    module:{
        rules:[
                {
                test: /\.js$/,
                include: path.join(__dirname, 'client'),
                loader: [ 'babel-loader' ]
                }
        ]
    },
    resolve: {
        extensions: ['.js', ' ' ]
      }
 }