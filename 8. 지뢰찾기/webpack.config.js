const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development", // 실서비스: production
  devtool: "eval",

  // entry에 넣은 파일명의 확장자를 알아서 찾아줌
  // resolve 안쓰면 entry에 확장자명까지 명시 해줘야함
  resolve: {
    extensions: [".js", ".jsx"],
  },

  entry: {
    app: ["./client"],
  }, // 입력

  // entry 에 modules 를 적용 하여 output 생성하는 흐름
  module: {
    rules: [
      {
        test: /\.jsx?/, // 이 룰을 js와 jsx 확장자에다가 적용하겠다. (정규표현식)
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  browsers: ["> 5% in KR", "last 2 chrome versions"], // https://github.com/browserslist/browserslist
                },
                //debug: true,
              },
            ],
            "@babel/preset-react",
          ], // preset = plugin 들 여러개 모아놓은 것
          plugins: [
            "@babel/plugin-proposal-class-properties",
            "react-hot-loader/babel",
          ],
        },
      },
    ],
  },

  plugins: [new webpack.LoaderOptionsPlugin({ debug: true })],

  output: {
    path: path.join(__dirname, "dist"), // __dirname 은 현재 폴더의 경로를 뜻함 C:\..\..2.끝말잇기
    filename: "app.js",
  }, // 출력
};
