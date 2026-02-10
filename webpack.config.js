const path = require("path"); //permet de manipuler les chemins de fichiers

module.exports = {
  entry: "./src/index.js", //point d'entrée de l'application
  output: {
    path: path.resolve(__dirname, "dist"), //dossier de sortie
    filename: "bundle.js", //nom du fichier de sortie
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, //fichiers à traiter (ici, les fichiers .js et .jsx)
        exclude: /node_modules/, //exclure le dossier node_modules
        use: {
          loader: "babel-loader", //utiliser babel-loader pour transpiler le code
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"], //presets pour transpiler le code ES6+ et JSX
          },
        },
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/, //fichiers d'images à traiter
        type: "asset", //utiliser le module asset de webpack 5 pour gérer les images
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], //extensions de fichiers à résoudre
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"), //dossier à servir pour le développement
    },
    compress: true, //activer la compression gzip
    port: 8080, //port de développement
  },
};
