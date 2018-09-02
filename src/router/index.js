import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/views/layout/Layout'

/** note: submenu only apppear when children.length>=1
*   detail see  https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
**/

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    roles: ['admin','editor']     will control the page roles (you can set multiple roles)
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
    noCache: true                if true ,the page will no be cached(default is false)
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/authredirect', component: () => import('@/views/login/authredirect'), hidden: true },
  { path: '/404', component: () => import('@/views/errorPage/404'), hidden: true },
  { path: '/401', component: () => import('@/views/errorPage/401'), hidden: true },


  {
    path: '',
    component: Layout,
    redirect: 'spdashboard',
    children: [{
      path: 'spdashboard',
      component: () => import('@/views/spindex/index'),
      name: 'spdashboard',
      meta: { title: '首页', icon: 'dashboard', noCache: true }
    }]
  },
  {
    path:'/spdpgl',
    component: Layout,
    redirect: 'spdpgl',
    name:'spdpgl'  ,
    meta:{
      title:'店铺管理',
      icon:'component'
    },
    children:[
      {
        path:'spdpxx',
        component:()=>import('@/views/spdpgl/dpxx'),
        name:'dpxx',
        meta:{
          title:'店铺信息'
        }
      },
      {
        path:'spzffs',
        component:()=>import('@/views/spdpgl/zffs'),
        name:'zffs',
        meta:{
          title:'支付方式'
        }
      },
      {
        path:'spggcx',
        component:()=>import('@/views/spdpgl/ggcx'),
        name:'ggcx',
        meta:{
          title:'公告促销'
        }
      },
      {
        path:'sppsxx',
        component:()=>import('@/views/spdpgl/psxx'),
        name:'psxx',
        meta:{
          title:'配送信息'
        }
      },
      {
        path:'sphyfk',
        component:()=>import('@/views/spdpgl/hyfk'),
        name:'hyfk',
        meta:{
          title:'会员反馈'
        }
      },
      {
        path:'sphylb',
        component:()=>import('@/views/spdpgl/hylb'),
        name:'hylb',
        meta:{
          title:'会员列表'
        }
      }

    ]
  },
  {
    path:'/spdpdd',
    component: Layout,
    redirect: 'spdpdd',
    name:'spdpdd'  ,
    meta:{
      title:'店铺订单',
      icon:'clipboard'
    },
    children:[
      {
        path:'spddgl',
        component:()=>import('@/views/spdpdd/ddgl'),
        name:'ddgl',
        meta:{
          title:'订单管理'
        }
      },
      {
        path:'dpddxq',
        component:()=>import('@/views/spdpdd/dpddxq'),
        name:'dpddxq',
        meta:{
          title:'订单详情'
        }
      },
      {
        path:'spmdjd',
        component:()=>import('@/views/spdpdd/mdjd'),
        name:'mdjd',
        meta:{
          title:'门店加单（会员）'
        }
      },
      {
        path:'spgwc',
        component:()=>import('@/views/spdpdd/gwc'),
        name:'gwc',
        meta:{
          title:'购物车'
        }
      }
    ]
  },
  {
    path:'/spspgl',
    component:Layout,
    redirect:'spspgl',
    name:'spspgl',
    meta:{
      title:'商品管理',
      icon:'example'
    },
    children:[
      {
        path:'ptsplb',
        component:()=>import('@/views/spspgl/ptsplb'),
        name:'ptsplb',
        meta:{
          title:'平台商品列表'
        }
      },
      {
        path:'dpcjsp',
        component:()=>import('@/views/spspgl/dpcjsp'),
        name:'dpcjsp',
        meta:{
          title:'店铺创建商品'
        }
      },
      {
        path:'dgsplb',
        component:()=>import('@/views/spspgl/dgsplb'),
        name:'dgsplb',
        meta:{
          title:'单个SPU商品列表'
        }
      },
      {
        path:'dpspxq',
        component:()=>import('@/views/spspgl/dpspxq'),
        name:'dpspxq',
        meta:{
          title:'店铺商品详情'
        }
      },
      {
        path:'dpsysplb',
        component:()=>import('@/views/spspgl/dpsysplb'),
        name:'dpsysplb',
        meta:{
          title:'店铺所有商品列表'
        }
      },
      {
        path:'dpspfl',
        component:()=>import('@/views/spspgl/dpspfl'),
        name:'dpspfl',
        meta:{
          title:'店铺商品分类'
        }
      }
    ]
  },
  {
    path:'/spzhsz',
    component:Layout,
    redirect:'spzhsz',
    name:'spzhsz',
    alwaysShow: true,
    meta:{
      title:'账号设置',
      icon:'password'
    },
    children:[
      {
        path:'xgmm',
        component:()=>import('@/views/spzhsz/xgmm'),
        name:'xgmm',
        meta:{
          title:'修改密码'
        }
      }
    ]
  },
  {
    path:'/spyhgl',
    component:Layout,
    redirect:'spyhgl',
    name:'spyhgl',
    meta:{
      title:'用户管理',
      icon:'peoples'
    },
    children:[
      {
        path:'cjyh',
        component:()=>import('@/views/spyhgl/cjyh'),
        name:'cjyh',
        meta:{
          title:'创建用户'
        }
      },
      {
        path:'mjdpfl',
        component:()=>import('@/views/spyhgl/mjdpfl'),
        name:'mjdpfl',
        meta:{
          title:'卖家店铺分类'
        }
      },
      {
        path:'mjdpqy',
        component:()=>import('@/views/spyhgl/mjdpqy'),
        name:'mjdpqy',
        meta:{
          title:'卖家店铺区域'
        }
      },
      {
        path:'hylbmj',
        component:()=>import('@/views/spyhgl/hylbmj'),
        name:'hylbmj',
        meta:{
          title:'会员列表买家'
        }
      },
      {
        path:'mjdplb',
        component:()=>import('@/views/spyhgl/mjdplb'),
        name:'mjdplb',
        meta:{
          title:'卖家店铺列表'
        }
      }
    ]
  }  ,
  {
    path:'/spspsjk',
    component:Layout,
    redirect:'spspsjk',
    name:'spspsjk',
    meta:{
      title:'商品数据库',
      icon:'chart'
    },
    children:[
      {
        path:'ptsplb',
        component:()=>import('@/views/spspsjk/ptsplb'),
        name:'ptsplb',
        meta:{
          title:'平台商品列表（SPU）'
        }
      },
      {
        path:'ptcjsp',
        component:()=>import('@/views/spspsjk/ptcjsp'),
        name:'ptcjsp',
        meta:{
          title:'平台创建商品（SPU）'
        }
      },
      {
        path:'ptspfl',
        component:()=>import('@/views/spspsjk/ptspfl'),
        name:'ptspfl',
        meta:{
          title:'平台商品分类'
        }
      },

      {
        path:'ptsppp',
        component:()=>import('@/views/spspsjk/ptsppp'),
        name:'ptsppp',
        meta:{
          title:'平台商品品牌'
        }
      },
      {
        path:'sydpsplb',
        component:()=>import('@/views/spspsjk/sydpsplb'),
        name:'sydpsplb',
        meta:{
          title:'所有店铺商品列表'
        }
      }
    ]
  },
  {
    path:'/spbbhz',
    component:Layout,
    redirect:'spbbhz',
    name:'spbbhz',
    meta:{
      title:'报表汇总',
      icon:'table'
    },
    children:[
      {
        path:'sycgddgl',
        component:()=>import('@/views/spbbhz/sycgddgl'),
        name:'sycgddgl',
        meta:{
          title:'所有常规订单管理'
        }
      },
      {
        path:'sycgddglxq',
        component:()=>import('@/views/spbbhz/sycgddglxq'),
        name:'sycgddglxq',
        meta:{
          title:'订单详情'
        }
      },
      {
        path:'symdjdgl',
        component:()=>import('@/views/spbbhz/symdjdgl'),
        name:'symdjdgl',
        meta:{
          title:'所有门店加单管理'
        }
      },
      {
        path:'symdjdxq',
        component:()=>import('@/views/spbbhz/symdjdxq'),
        name:'symdjdxq',
        meta:{
          title:'非常规订单详情'
        }
      },
      {
        path:'clrw',
        component:()=>import('@/views/spbbhz/clrw'),
        name:'clrw',
        meta:{
          title:'陈列任务'
        }
      },
      {
        path:'cjclrw',
        component:()=>import('@/views/spbbhz/cjclrw'),
        name:'cjclrw',
        meta:{
          title:'创建陈列任务'
        }
      },
      {
        path:'ptxxtz',
        component:()=>import('@/views/spbbhz/ptxxtz'),
        name:'ptxxtz',
        meta:{
          title:'平台信息通知'
        }
      },

      {
        path:'appqdpz',
        component:()=>import('@/views/spbbhz/appqdpz'),
        name:'appqdpz',
        meta:{
          title:'APP启动配置'
        }
      },
      {
        path:'bnpz',
        component:()=>import('@/views/spbbhz/bnpz'),
        name:'bnpz',
        meta:{
          title:'APP banner配置'
        }
      }
    ]
  }
  ,

  // {
  //   path: '',
  //   component: Layout,
  //   redirect: 'dashboard',
  //   children: [{
  //     path: 'dashboard',
  //     component: () => import('@/views/dashboard/index'),
  //     name: 'dashboard',
  //     meta: { title: 'dashboard', icon: 'dashboard', noCache: true }
  //   }]
  // },
  // {
  //   path: '/documentation',
  //   component: Layout,
  //   redirect: '/documentation/index',
  //   children: [{
  //     path: 'index',
  //     component: () => import('@/views/documentation/index'),
  //     name: 'documentation',
  //     meta: { title: 'documentation', icon: 'documentation', noCache: true }
  //   }]
  // },
  // {
  //   path: '/guide',
  //   component: Layout,
  //   redirect: '/guide/index',
  //   children: [{
  //     path: 'index',
  //     component: () => import('@/views/guide/index'),
  //     name: 'guide',
  //     meta: { title: 'guide', icon: 'guide', noCache: true }
  //   }]
  // }
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  // {
  //   path: '/permission',
  //   component: Layout,
  //   redirect: '/permission/index',
  //   alwaysShow: true, // will always show the root menu
  //   meta: {
  //     title: 'permission',
  //     icon: 'lock',
  //     roles: ['admin', 'editor'] // you can set roles in root nav
  //   },
  //   children: [{
  //     path: 'page',
  //     component: () => import('@/views/permission/page'),
  //     name: 'pagePermission',
  //     meta: {
  //       title: 'pagePermission',
  //       roles: ['admin'] // or you can only set roles in sub nav
  //     }
  //   }, {
  //     path: 'directive',
  //     component: () => import('@/views/permission/directive'),
  //     name: 'directivePermission',
  //     meta: {
  //       title: 'directivePermission'
  //       // if do not set roles, means: this page does not require permission
  //     }
  //   }]
  // },
  //
  // {
  //   path: '/icon',
  //   component: Layout,
  //   children: [{
  //     path: 'index',
  //     component: () => import('@/views/svg-icons/index'),
  //     name: 'icons',
  //     meta: { title: 'icons', icon: 'icon', noCache: true }
  //   }]
  // },
  //
  // {
  //   path: '/components',
  //   component: Layout,
  //   redirect: 'noredirect',
  //   name: 'component-demo',
  //   meta: {
  //     title: 'components',
  //     icon: 'component'
  //   },
  //   children: [
  //     { path: 'tinymce', component: () => import('@/views/components-demo/tinymce'), name: 'tinymce-demo', meta: { title: 'tinymce' }},
  //     { path: 'markdown', component: () => import('@/views/components-demo/markdown'), name: 'markdown-demo', meta: { title: 'markdown' }},
  //     { path: 'json-editor', component: () => import('@/views/components-demo/jsonEditor'), name: 'jsonEditor-demo', meta: { title: 'jsonEditor' }},
  //     { path: 'splitpane', component: () => import('@/views/components-demo/splitpane'), name: 'splitpane-demo', meta: { title: 'splitPane' }},
  //     { path: 'avatar-upload', component: () => import('@/views/components-demo/avatarUpload'), name: 'avatarUpload-demo', meta: { title: 'avatarUpload' }},
  //     { path: 'dropzone', component: () => import('@/views/components-demo/dropzone'), name: 'dropzone-demo', meta: { title: 'dropzone' }},
  //     { path: 'sticky', component: () => import('@/views/components-demo/sticky'), name: 'sticky-demo', meta: { title: 'sticky' }},
  //     { path: 'count-to', component: () => import('@/views/components-demo/countTo'), name: 'countTo-demo', meta: { title: 'countTo' }},
  //     { path: 'mixin', component: () => import('@/views/components-demo/mixin'), name: 'componentMixin-demo', meta: { title: 'componentMixin' }},
  //     { path: 'back-to-top', component: () => import('@/views/components-demo/backToTop'), name: 'backToTop-demo', meta: { title: 'backToTop' }},
  //     { path: 'drag-dialog', component: () => import('@/views/components-demo/dragDialog'), name: 'dragDialog-demo', meta: { title: 'dragDialog' }},
  //     { path: 'dnd-list', component: () => import('@/views/components-demo/dndList'), name: 'dndList-demo', meta: { title: 'dndList' }},
  //     { path: 'drag-kanban', component: () => import('@/views/components-demo/dragKanban'), name: 'dragKanban-demo', meta: { title: 'dragKanban' }}
  //   ]
  // }
  // ,
  //
  // {
  //   path: '/charts',
  //   component: Layout,
  //   redirect: 'noredirect',
  //   name: 'charts',
  //   meta: {
  //     title: 'charts',
  //     icon: 'chart'
  //   },
  //   children: [
  //     { path: 'keyboard', component: () => import('@/views/charts/keyboard'), name: 'keyboardChart', meta: { title: 'keyboardChart', noCache: true }},
  //     { path: 'line', component: () => import('@/views/charts/line'), name: 'lineChart', meta: { title: 'lineChart', noCache: true }},
  //     { path: 'mixchart', component: () => import('@/views/charts/mixChart'), name: 'mixChart', meta: { title: 'mixChart', noCache: true }}
  //   ]
  // },
  //
  // {
  //   path: '/tab',
  //   component: Layout,
  //   children: [{
  //     path: 'index',
  //     component: () => import('@/views/tab/index'),
  //     name: 'tab',
  //     meta: { title: 'tab', icon: 'tab' }
  //   }]
  // },
  //
  // {
  //   path: '/table',
  //   component: Layout,
  //   redirect: '/table/complex-table',
  //   name: 'table',
  //   meta: {
  //     title: 'Table',
  //     icon: 'table'
  //   },
  //   children: [
  //     { path: 'dynamic-table', component: () => import('@/views/table/dynamicTable/index'), name: 'dynamicTable', meta: { title: 'dynamicTable' }},
  //     { path: 'drag-table', component: () => import('@/views/table/dragTable'), name: 'dragTable', meta: { title: 'dragTable' }},
  //     { path: 'inline-edit-table', component: () => import('@/views/table/inlineEditTable'), name: 'inlineEditTable', meta: { title: 'inlineEditTable' }},
  //     { path: 'tree-table', component: () => import('@/views/table/treeTable/treeTable'), name: 'treeTableDemo', meta: { title: 'treeTable' }},
  //     { path: 'custom-tree-table', component: () => import('@/views/table/treeTable/customTreeTable'), name: 'customTreeTableDemo', meta: { title: 'customTreeTable' }},
  //     { path: 'complex-table', component: () => import('@/views/table/complexTable'), name: 'complexTable', meta: { title: 'complexTable' }}
  //   ]
  // },
  //
  // {
  //   path: '/example',
  //   component: Layout,
  //   redirect: '/example/list',
  //   name: 'example',
  //   meta: {
  //     title: 'example',
  //     icon: 'example'
  //   },
  //   children: [
  //     { path: 'create', component: () => import('@/views/example/create'), name: 'createArticle', meta: { title: 'createArticle', icon: 'edit' }},
  //     { path: 'edit/:id(\\d+)', component: () => import('@/views/example/edit'), name: 'editArticle', meta: { title: 'editArticle', noCache: true }, hidden: true },
  //     { path: 'list', component: () => import('@/views/example/list'), name: 'articleList', meta: { title: 'articleList', icon: 'list' }}
  //   ]
  // },
  //
  // {
  //   path: '/nested',
  //   component: Layout,
  //   redirect: '/nested/menu1/menu1-1',
  //   name: 'nested',
  //   meta: {
  //     title: 'nested',
  //     icon: 'nested'
  //   },
  //   children: [
  //     {
  //       path: 'menu1',
  //       component: () => import('@/views/nested/menu1/index'), // Parent router-view
  //       name: 'menu1',
  //       meta: { title: 'menu1' },
  //       redirect: '/nested/menu1/menu1-1',
  //       children: [
  //         {
  //           path: 'menu1-1',
  //           component: () => import('@/views/nested/menu1/menu1-1'),
  //           name: 'menu1-1',
  //           meta: { title: 'menu1-1' }
  //         },
  //         {
  //           path: 'menu1-2',
  //           component: () => import('@/views/nested/menu1/menu1-2'),
  //           name: 'menu1-2',
  //           redirect: '/nested/menu1/menu1-2/menu1-2-1',
  //           meta: { title: 'menu1-2' },
  //           children: [
  //             {
  //               path: 'menu1-2-1',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
  //               name: 'menu1-2-1',
  //               meta: { title: 'menu1-2-1' }
  //             },
  //             {
  //               path: 'menu1-2-2',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
  //               name: 'menu1-2-2',
  //               meta: { title: 'menu1-2-2' }
  //             }
  //           ]
  //         },
  //         {
  //           path: 'menu1-3',
  //           component: () => import('@/views/nested/menu1/menu1-3'),
  //           name: 'menu1-3',
  //           meta: { title: 'menu1-3' }
  //         }
  //       ]
  //     },
  //     {
  //       path: 'menu2',
  //       name: 'menu2',
  //       component: () => import('@/views/nested/menu2/index'),
  //       meta: { title: 'menu2' }
  //     }
  //   ]
  // },
  //
  // {
  //   path: '/error',
  //   component: Layout,
  //   redirect: 'noredirect',
  //   name: 'errorPages',
  //   meta: {
  //     title: 'errorPages',
  //     icon: '404'
  //   },
  //   children: [
  //     { path: '401', component: () => import('@/views/errorPage/401'), name: 'page401', meta: { title: 'page401', noCache: true }},
  //     { path: '404', component: () => import('@/views/errorPage/404'), name: 'page404', meta: { title: 'page404', noCache: true }}
  //   ]
  // },
  //
  // {
  //   path: '/error-log',
  //   component: Layout,
  //   redirect: 'noredirect',
  //   children: [{ path: 'log', component: () => import('@/views/errorLog/index'), name: 'errorLog', meta: { title: 'errorLog', icon: 'bug' }}]
  // },
  //
  // {
  //   path: '/excel',
  //   component: Layout,
  //   redirect: '/excel/export-excel',
  //   name: 'excel',
  //   meta: {
  //     title: 'excel',
  //     icon: 'excel'
  //   },
  //   children: [
  //     { path: 'export-excel', component: () => import('@/views/excel/exportExcel'), name: 'exportExcel', meta: { title: 'exportExcel' }},
  //     { path: 'export-selected-excel', component: () => import('@/views/excel/selectExcel'), name: 'selectExcel', meta: { title: 'selectExcel' }},
  //     { path: 'upload-excel', component: () => import('@/views/excel/uploadExcel'), name: 'uploadExcel', meta: { title: 'uploadExcel' }}
  //   ]
  // },
  //
  // {
  //   path: '/zip',
  //   component: Layout,
  //   redirect: '/zip/download',
  //   alwaysShow: true,
  //   meta: { title: 'zip', icon: 'zip' },
  //   children: [{ path: 'download', component: () => import('@/views/zip/index'), name: 'exportZip', meta: { title: 'exportZip' }}]
  // },
  //
  // {
  //   path: '/theme',
  //   component: Layout,
  //   redirect: 'noredirect',
  //   children: [{ path: 'index', component: () => import('@/views/theme/index'), name: 'theme', meta: { title: 'theme', icon: 'theme' }}]
  // },
  //
  // {
  //   path: '/clipboard',
  //   component: Layout,
  //   redirect: 'noredirect',
  //   children: [{ path: 'index', component: () => import('@/views/clipboard/index'), name: 'clipboardDemo', meta: { title: 'clipboardDemo', icon: 'clipboard' }}]
  // },
  //
  // {
  //   path: '/i18n',
  //   component: Layout,
  //   children: [{ path: 'index', component: () => import('@/views/i18n-demo/index'), name: 'i18n', meta: { title: 'i18n', icon: 'international' }}]
  // },
  //
  // { path: '*', redirect: '/404', hidden: true },
  //
  // {
  //   path: '/icon',
  //   component: Layout,
  //   children: [{
  //     path: 'index',
  //     component: () => import('@/views/svg-icons/index'),
  //     name: 'icons',
  //     meta: { title: 'icons', icon: 'icon', noCache: true }
  //   }]
  // }

]
