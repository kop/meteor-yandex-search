Package.describe({
    summary: "Wrapper package for tomsteele/node-yandex-search",
    version: '0.0.1',
    git: 'git@github.com:kop/meteor-yandex-search.git',
    name: 'ikoptiev:yandex-search'
});

Npm.depends({
    'yandex-search': 'https://github.com/tomsteele/node-yandex-search/tarball/916e1cb055ba1cac3f3c12d0dfee081ca7213905'
});

Package.onUse(function (api) {
    api.addFiles('yandex_search.js', 'server');
    api.export('YandexSearch', 'server');
});
