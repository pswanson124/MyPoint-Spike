export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Welcome' },

      { route: 'list/Admin',    name: 'listAdmin',        moduleId: 'list/listAdmin',    nav: true, title: 'List Admin' },
      { route: 'lists/',         name: 'listsIndex',        moduleId: 'list/index',        nav: true, title: 'List Index' },
      { route: ['list/:name/:pagesize/:page/:sort/:restoreLast',
                'list/:name/:pagesize/:page/:sort',
                'list/:name/:pagesize/:page',
                'list/:name/:pagesize',
                'list/:name'
              ],    name: 'listView',        moduleId: 'list/list',        nav: false, title: 'List' },
      { route: 'list/:name/edit/:id', name: 'listEdit',        moduleId: 'list/edit',        nav: false, title: 'List Edit' },

      { route: 'file/file',     name: 'file',        moduleId: 'file/file',        nav: true, title: 'File' },

      { route: 'page/:page',         name: 'page',        moduleId: 'page/index',        nav: false, title: 'Page' },
      { route: 'users',         name: 'users',        moduleId: 'users',        nav: true, title: 'Github Users' },
      { route: 'child-router',  name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' }
    ]);

    this.router = router;
  }
}
