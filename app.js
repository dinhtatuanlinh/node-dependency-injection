const mailer = require('./libs/mailer');
const {ContainerBuilder} = require('node-dependency-injection');
let container = new ContainerBuilder();
container.register("service.mailer", mailer).addArgument('linh');
let mail = container.get("service.mailer")._example
console.log(mail);