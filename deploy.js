var FtpDeploy = require("ftp-deploy");
var ftpDeploy = new FtpDeploy();


console.log('Preparando para subir os arquivos')


console.log('Aplicando configurações de FTP')
var config = {
    user: "chacararecantodasaguas-com",
    // Password optional, prompted if none given
    password: "TLJwq(W.;%f[2&B",
    host: "chacararecantodasaguas-com.umbler.net",
    port: 21,
    localRoot: __dirname ,
    remoteRoot: "/public",
    // include: ["*", "**/*"],      // this would upload everything except dot files
    include: ["*", "*.*", ".*", "**/*"],
    // e.g. exclude sourcemaps, and ALL files in node_modules (including dot files)
    exclude: ["dist/**/*.map", ".git/**", "deploy.js", "node_modules/**"],
    // delete ALL existing files at destination before uploading, if true
    deleteRemote: true,
    // Passive mode is forced (EPSV command is not sent)
    forcePasv: false
};

console.log('Começando a transferência')

ftpDeploy
    .on("uploaded", function (data) {
        console.clear();
        let porcentagemDecimal = (data.transferredFileCount / data.totalFilesCount) * 100;
        let porcentagem = parseFloat(porcentagemDecimal.toFixed(2))
        console.log('Processo de upload de arquivos: ' + data.transferredFileCount + '/' + data.totalFilesCount + ' =====> ' + porcentagem + '%')
    })
    .deploy(config)
    .then(res => console.log("Deploy realizado com sucesso!:", res))
    .catch(err => console.log(err));
