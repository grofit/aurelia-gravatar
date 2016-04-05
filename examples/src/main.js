export function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .developmentLogging()
        .plugin('aurelia-gravatar');

    aurelia.start().then(a => a.setRoot('src/app'));
}