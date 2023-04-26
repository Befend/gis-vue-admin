// 模拟后端动态生成路由
import { MockMethod } from "vite-plugin-mock"

/**
 * 主页路由
 */
const homeRouter = {
  path: "/home/index",
  name: "home",
  component: "/home/index",
  meta: {
    icon: "homepage",
    name: "首页",
    title: "home.root",
    isLink: "",
    isHide: false,
    isFull: false,
    isAffix: true,
    isKeepAlive: true
  }
}

/**
 * 大数据路由
 */
// const bigDataRouter = {
//   path: "/dataScreen",
//   name: "dataScreen",
//   component: "/dataScreen/index",
//   meta: {
//     icon: "big-data-root",
//     name: "数据大屏",
//     isLink: "",
//     isHide: false,
//     isFull: true,
//     isAffix: false,
//     isKeepAlive: true
//   }
// }

/**
 * 仪表盘路由
 */
const dashboardRouter = {
  path: "/dashboard",
  name: "dashboard",
  redirect: "/dashboard/dataVisualize",
  meta: {
    icon: "dashboard",
    name: "仪表盘",
    title: "dashboard.root",
    isLink: "",
    isHide: false,
    isFull: false,
    isAffix: false,
    isKeepAlive: true
  },
  children: [
    {
      path: "/dashboard/dataVisualize",
      name: "dataVisualize",
      component: "/dashboard/dataVisualize/index",
      meta: {
        icon: "data-visualization",
        name: "数据可视化",
        title: "dashboard.dataVisualize",
        isLink: "",
        isHide: false,
        isFull: false,
        isAffix: false,
        isKeepAlive: true
      }
    },
    {
      path: "/dashboard/embedded",
      name: "embedded",
      component: "/dashboard/embedded/index",
      meta: {
        icon: "inline-page",
        name: "内嵌页面",
        title: "dashboard.embedded",
        isLink: "",
        isHide: false,
        isFull: false,
        isAffix: false,
        isKeepAlive: true
      }
    }
  ]
}

/**
 * 表格路由
 */
// const tableRouter = {
//   path: "/proTable",
//   name: "proTable",
//   redirect: "/proTable/useProTable",
//   meta: {
//     icon: "table-root",
//     name: "超级表格",
//     isLink: "",
//     isHide: false,
//     isFull: false,
//     isAffix: false,
//     isKeepAlive: true
//   },
//   children: [
//     {
//       path: "/proTable/useProTable",
//       name: "useProTable",
//       component: "/proTable/useProTable/index",
//       meta: {
//         icon: "Menu",
//         name: "使用 ProTable",
//         isLink: "",
//         isHide: false,
//         isFull: false,
//         isAffix: false,
//         isKeepAlive: true
//       },
//       children: [
//         {
//           path: "/proTable/useProTable/detail/:id",
//           name: "useProTableDetail",
//           component: "/proTable/useProTable/detail",
//           meta: {
//             icon: "Menu",
//             name: "ProTable 详情",
//             isLink: "",
//             isHide: true,
//             isFull: false,
//             isAffix: false,
//             isKeepAlive: true,
//             activeMenu: "/proTable/useProTable"
//           }
//         }
//       ]
//     },
//     {
//       path: "/proTable/useTreeFilter",
//       name: "useTreeFilter",
//       component: "/proTable/useTreeFilter/index",
//       meta: {
//         icon: "Menu",
//         name: "使用 TreeFilter",
//         isLink: "",
//         isHide: false,
//         isFull: false,
//         isAffix: false,
//         isKeepAlive: true
//       }
//     },
//     {
//       path: "/proTable/useTreeFilter/detail/:id",
//       name: "useTreeFilterDetail",
//       component: "/proTable/useTreeFilter/detail",
//       meta: {
//         icon: "Menu",
//         name: "TreeFilter 详情",
//         activeMenu: "/proTable/useTreeFilter",
//         isLink: "",
//         isHide: true,
//         isFull: false,
//         isAffix: false,
//         isKeepAlive: true
//       }
//     },
//     {
//       path: "/proTable/useSelectFilter",
//       name: "useSelectFilter",
//       component: "/proTable/useSelectFilter/index",
//       meta: {
//         icon: "Menu",
//         name: "使用 SelectFilter",
//         isLink: "",
//         isHide: false,
//         isFull: false,
//         isAffix: false,
//         isKeepAlive: true
//       }
//     },
//     {
//       path: "/proTable/treeProTable",
//       name: "treeProTable",
//       component: "/proTable/treeProTable/index",
//       meta: {
//         icon: "Menu",
//         name: "树形 ProTable",
//         isLink: "",
//         isHide: false,
//         isFull: false,
//         isAffix: false,
//         isKeepAlive: true
//       }
//     },
//     {
//       path: "/proTable/complexProTable",
//       name: "complexProTable",
//       component: "/proTable/complexProTable/index",
//       meta: {
//         icon: "Menu",
//         name: "复杂 ProTable",
//         isLink: "",
//         isHide: false,
//         isFull: false,
//         isAffix: false,
//         isKeepAlive: true
//       }
//     },
//     {
//       path: "/proTable/document",
//       name: "proTableDocument",
//       component: "/proTable/document/index",
//       meta: {
//         icon: "Menu",
//         name: "ProTable 文档",
//         isLink: "https://juejin.cn/post/7166068828202336263/#heading-14",
//         isHide: false,
//         isFull: false,
//         isAffix: false,
//         isKeepAlive: true
//       }
//     }
//   ]
// }

/**
 * 权限路由
 */
const permissionRouter = {
  path: "/auth",
  name: "auth",
  redirect: "/auth/menu",
  meta: {
    icon: "root-manage",
    name: "权限管理",
    title: "auth.root",
    isLink: "",
    isHide: false,
    isFull: false,
    isAffix: false,
    isKeepAlive: true
  },
  children: [
    {
      path: "/auth/menu",
      name: "authMenu",
      component: "/auth/menu/index",
      meta: {
        icon: "menu-root",
        name: "菜单权限",
        title: "auth.menu",
        isLink: "",
        isHide: false,
        isFull: false,
        isAffix: false,
        isKeepAlive: true
      }
    },
    {
      path: "/auth/button",
      name: "authButton",
      component: "/auth/button/index",
      meta: {
        icon: "button-manage",
        name: "按钮权限",
        title: "auth.button",
        isLink: "",
        isHide: false,
        isFull: false,
        isAffix: false,
        isKeepAlive: true
      }
    }
  ]
}

/**
 * 组件路由
 */
const componentRouter = {
  path: "/assembly",
  name: "assembly",
  redirect: "/assembly/guide",
  meta: {
    icon: "components",
    name: "组件",
    title: "assembly.root",
    isLink: "",
    isHide: false,
    isFull: false,
    isAffix: false,
    isKeepAlive: true
  },
  children: [
    {
      path: "/assembly/guide",
      name: "guide",
      component: "/assembly/guide/index",
      meta: {
        icon: "guide-component",
        title: "assembly.guide",
        name: "引导页",
        isLink: "",
        isHide: false,
        isFull: false,
        isAffix: false,
        isKeepAlive: true
      }
    },
    {
      path: "/assembly/selectIcon",
      name: "selectIcon",
      component: "/assembly/selectIcon/index",
      meta: {
        icon: "icon-selector",
        name: "图标选择器",
        title: "assembly.icon",
        isLink: "",
        isHide: false,
        isFull: false,
        isAffix: false,
        isKeepAlive: true
      }
    },
    {
      path: "/assembly/selectFilter",
      name: "selectFilter",
      component: "/assembly/selectFilter/index",
      meta: {
        icon: "class-component",
        name: "分类筛选器",
        title: "assembly.class",
        isLink: "",
        isHide: false,
        isFull: false,
        isAffix: false,
        isKeepAlive: true
      }
    },
    {
      path: "/assembly/treeFilter",
      name: "treeFilter",
      component: "/assembly/treeFilter/index",
      meta: {
        icon: "tree-component",
        name: "树形筛选器",
        title: "assembly.tree",
        isLink: "",
        isHide: false,
        isFull: false,
        isAffix: false,
        isKeepAlive: true
      }
    },
    {
      path: "/assembly/svgIcon",
      name: "svgIcon",
      component: "/assembly/svgIcon/index",
      meta: {
        icon: "svg-icon",
        name: "SVG 图标",
        title: "assembly.svgIcon",
        isLink: "",
        isHide: false,
        isFull: false,
        isAffix: false,
        isKeepAlive: true
      }
    },
    {
      path: "/assembly/uploadFile",
      name: "uploadFile",
      component: "/assembly/uploadFile/index",
      meta: {
        icon: "upload",
        name: "文件上传",
        title: "assembly.upload",
        isLink: "",
        isHide: false,
        isFull: false,
        isAffix: false,
        isKeepAlive: true
      }
    },
    {
      path: "/assembly/batchImport",
      name: "batchImport",
      component: "/assembly/batchImport/index",
      meta: {
        icon: "batch-add",
        name: "批量添加数据",
        title: "assembly.batch",
        isLink: "",
        isHide: false,
        isFull: false,
        isAffix: false,
        isKeepAlive: true
      }
    },
    {
      path: "/assembly/wangEditor",
      name: "wangEditor",
      component: "/assembly/wangEditor/index",
      meta: {
        icon: "rich-text",
        name: "富文本编辑器",
        title: "assembly.richText",
        isLink: "",
        isHide: false,
        isFull: false,
        isAffix: false,
        isKeepAlive: true
      }
    },
    {
      path: "/assembly/draggable",
      name: "draggable",
      component: "/assembly/draggable/index",
      meta: {
        icon: "drag-component",
        name: "拖拽组件",
        title: "assembly.drag",
        isLink: "",
        isHide: false,
        isFull: false,
        isAffix: false,
        isKeepAlive: true
      }
    }
  ]
}

/**
 * 表单路由
 */
// const formRouter = {
//   path: "/form",
//   name: "form",
//   redirect: "/form/proForm",
//   meta: {
//     icon: "Tickets",
//     name: "表单 Form",
//     isLink: "",
//     isHide: false,
//     isFull: false,
//     isAffix: false,
//     isKeepAlive: true
//   },
//   children: [
//     {
//       path: "/form/proForm",
//       name: "proForm",
//       component: "/form/proForm/index",
//       meta: {
//         icon: "Menu",
//         name: "超级 Form",
//         isLink: "",
//         isHide: false,
//         isFull: false,
//         isAffix: false,
//         isKeepAlive: true
//       }
//     },
//     {
//       path: "/form/basicForm",
//       name: "basicForm",
//       component: "/form/basicForm/index",
//       meta: {
//         icon: "Menu",
//         name: "基础 Form",
//         isLink: "",
//         isHide: false,
//         isFull: false,
//         isAffix: false,
//         isKeepAlive: true
//       }
//     },
//     {
//       path: "/form/validateForm",
//       name: "validateForm",
//       component: "/form/validateForm/index",
//       meta: {
//         icon: "Menu",
//         name: "校验 Form",
//         isLink: "",
//         isHide: false,
//         isFull: false,
//         isAffix: false,
//         isKeepAlive: true
//       }
//     },
//     {
//       path: "/form/dynamicForm",
//       name: "dynamicForm",
//       component: "/form/dynamicForm/index",
//       meta: {
//         icon: "Menu",
//         name: "动态 Form",
//         isLink: "",
//         isHide: false,
//         isFull: false,
//         isAffix: false,
//         isKeepAlive: true
//       }
//     }
//   ]
// }

/**
 * echarts路由
 */
const echartsRouter = {
  path: "/echarts",
  name: "echarts",
  redirect: "/echarts/waterChart",
  meta: {
    icon: "echarts",
    name: "Echarts",
    title: "echarts.root",
    isLink: "",
    isHide: false,
    isFull: false,
    isAffix: false,
    isKeepAlive: true
  },
  children: [
    {
      path: "/echarts/waterChart",
      name: "waterChart",
      component: "/echarts/waterChart/index",
      meta: {
        icon: "water-chart",
        name: "水型图",
        title: "echarts.water",
        isLink: "",
        isHide: false,
        isFull: false,
        isAffix: false,
        isKeepAlive: true
      }
    },
    {
      path: "/echarts/columnChart",
      name: "columnChart",
      component: "/echarts/columnChart/index",
      meta: {
        icon: "columnar",
        name: "柱状图",
        title: "echarts.columnar",
        isLink: "",
        isHide: false,
        isFull: false,
        isAffix: false,
        isKeepAlive: true
      }
    },
    {
      path: "/echarts/lineChart",
      name: "lineChart",
      component: "/echarts/lineChart/index",
      meta: {
        icon: "polyline",
        name: "折线图",
        title: "echarts.polyline",
        isLink: "",
        isHide: false,
        isFull: false,
        isAffix: false,
        isKeepAlive: true
      }
    },
    {
      path: "/echarts/pieChart",
      name: "pieChart",
      component: "/echarts/pieChart/index",
      meta: {
        icon: "pie",
        name: "饼图",
        title: "echarts.pie",
        isLink: "",
        isHide: false,
        isFull: false,
        isAffix: false,
        isKeepAlive: true
      }
    },
    {
      path: "/echarts/radarChart",
      name: "radarChart",
      component: "/echarts/radarChart/index",
      meta: {
        icon: "radar",
        name: "雷达图",
        title: "echarts.radar",
        isLink: "",
        isHide: false,
        isFull: false,
        isAffix: false,
        isKeepAlive: true
      }
    },
    {
      path: "/echarts/nestedChart",
      name: "nestedChart",
      component: "/echarts/nestedChart/index",
      meta: {
        icon: "inline-circular",
        name: "嵌套环形图",
        title: "echarts.nested",
        isLink: "",
        isHide: false,
        isFull: false,
        isAffix: false,
        isKeepAlive: true
      }
    }
  ]
}

/**
 * 指令路由
 */
const directivesRouter = {
  path: "/directives",
  name: "directives",
  redirect: "/directives/copyDirect",
  meta: {
    icon: "custom-command",
    name: "自定义指令",
    title: "directives.root",
    isLink: "",
    isHide: false,
    isFull: false,
    isAffix: false,
    isKeepAlive: true
  },
  children: [
    {
      path: "/directives/copyDirect",
      name: "copyDirect",
      component: "/directives/copyDirect/index",
      meta: {
        icon: "copy",
        name: "复制指令",
        title: "directives.copy",
        isLink: "",
        isHide: false,
        isFull: false,
        isAffix: false,
        isKeepAlive: true
      }
    },
    {
      path: "/directives/watermarkDirect",
      name: "watermarkDirect",
      component: "/directives/watermarkDirect/index",
      meta: {
        icon: "watermark",
        name: "水印指令",
        title: "directives.watermark",
        isLink: "",
        isHide: false,
        isFull: false,
        isAffix: false,
        isKeepAlive: true
      }
    },
    {
      path: "/directives/dragDirect",
      name: "dragDirect",
      component: "/directives/dragDirect/index",
      meta: {
        icon: "drag-component",
        title: "directives.drag",
        name: "拖拽指令",
        isLink: "",
        isHide: false,
        isFull: false,
        isAffix: false,
        isKeepAlive: true
      }
    },
    {
      path: "/directives/debounceDirect",
      name: "debounceDirect",
      component: "/directives/debounceDirect/index",
      meta: {
        icon: "debounce",
        name: "防抖指令",
        title: "directives.debounce",
        isLink: "",
        isHide: false,
        isFull: false,
        isAffix: false,
        isKeepAlive: true
      }
    },
    {
      path: "/directives/throttleDirect",
      name: "throttleDirect",
      component: "/directives/throttleDirect/index",
      meta: {
        icon: "throttle",
        name: "节流指令",
        title: "directives.throttle",
        isLink: "",
        isHide: false,
        isFull: false,
        isAffix: false,
        isKeepAlive: true
      }
    },
    {
      path: "/directives/longpressDirect",
      name: "longpressDirect",
      component: "/directives/longpressDirect/index",
      meta: {
        icon: "long-press",
        name: "长按指令",
        title: "directives.longPress",
        isLink: "",
        isHide: false,
        isFull: false,
        isAffix: false,
        isKeepAlive: true
      }
    }
  ]
}

/**
 * 菜单路由
 */
const menuRouter = {
  path: "/menu",
  name: "menu",
  redirect: "/menu/menu1",
  meta: {
    icon: "menu-manage",
    name: "菜单嵌套",
    title: "menu.root",
    isLink: "",
    isHide: false,
    isFull: false,
    isAffix: false,
    isKeepAlive: true
  },
  children: [
    {
      path: "/menu/menu1",
      name: "menu1",
      component: "/menu/menu1/index",
      meta: {
        icon: "menu-root",
        name: "菜单1",
        title: "menu.menu1",
        isLink: "",
        isHide: false,
        isFull: false,
        isAffix: false,
        isKeepAlive: true
      }
    },
    {
      path: "/menu/menu2",
      name: "menu2",
      redirect: "/menu/menu2/menu21",
      meta: {
        icon: "menu-root",
        name: "菜单2",
        title: "menu.menu2",
        isLink: "",
        isHide: false,
        isFull: false,
        isAffix: false,
        isKeepAlive: true
      },
      children: [
        {
          path: "/menu/menu2/menu21",
          name: "menu21",
          component: "/menu/menu2/menu21/index",
          meta: {
            icon: "menu-root",
            name: "菜单2-1",
            title: "menu.menu21",
            isLink: "",
            isHide: false,
            isFull: false,
            isAffix: false,
            isKeepAlive: true
          }
        },
        {
          path: "/menu/menu2/menu22",
          name: "menu22",
          redirect: "/menu/menu2/menu22/menu221",
          meta: {
            icon: "menu-root",
            name: "菜单2-2",
            title: "menu.menu22",
            isLink: "",
            isHide: false,
            isFull: false,
            isAffix: false,
            isKeepAlive: true
          },
          children: [
            {
              path: "/menu/menu2/menu22/menu221",
              name: "menu221",
              component: "/menu/menu2/menu22/menu221/index",
              meta: {
                icon: "menu-root",
                name: "菜单2-2-1",
                title: "menu.menu221",
                isLink: "",
                isHide: false,
                isFull: false,
                isAffix: false,
                isKeepAlive: true
              }
            },
            {
              path: "/menu/menu2/menu22/menu222",
              name: "menu222",
              component: "/menu/menu2/menu22/menu222/index",
              meta: {
                icon: "menu-root",
                name: "菜单2-2-2",
                title: "menu.menu222",
                isLink: "",
                isHide: false,
                isFull: false,
                isAffix: false,
                isKeepAlive: true
              }
            }
          ]
        },
        {
          path: "/menu/menu2/menu23",
          name: "menu23",
          component: "/menu/menu2/menu23/index",
          meta: {
            icon: "menu-root",
            name: "菜单2-3",
            title: "menu.menu23",
            isLink: "",
            isHide: false,
            isFull: false,
            isAffix: false,
            isKeepAlive: true
          }
        }
      ]
    },
    {
      path: "/menu/menu3",
      name: "menu3",
      component: "/menu/menu3/index",
      meta: {
        icon: "menu-root",
        name: "菜单3",
        title: "menu.menu3",
        isLink: "",
        isHide: false,
        isFull: false,
        isAffix: false,
        isKeepAlive: true
      }
    }
  ]
}

/**
 * 系统路由
 */
const systemRouter = {
  path: "/system",
  name: "system",
  redirect: "/system/accountManage",
  meta: {
    icon: "system-manage",
    name: "系统管理",
    title: "system.root",
    isLink: "",
    isHide: false,
    isFull: false,
    isAffix: false,
    isKeepAlive: true
  },
  children: [
    {
      path: "/system/accountManage",
      name: "accountManage",
      component: "/system/accountManage/index",
      meta: {
        icon: "account-manage",
        name: "账号管理",
        title: "system.account",
        isLink: "",
        isHide: false,
        isFull: false,
        isAffix: false,
        isKeepAlive: true
      }
    },
    {
      path: "/system/roleManage",
      name: "roleManage",
      component: "/system/roleManage/index",
      meta: {
        icon: "user-manage",
        name: "角色管理",
        title: "system.user",
        isLink: "",
        isHide: false,
        isFull: false,
        isAffix: false,
        isKeepAlive: true
      }
    },
    {
      path: "/system/menuMange",
      name: "menuMange",
      component: "/system/menuMange/index",
      meta: {
        icon: "menu-manage",
        name: "菜单管理",
        title: "system.menu",
        isLink: "",
        isHide: false,
        isFull: false,
        isAffix: false,
        isKeepAlive: true
      }
    },
    {
      path: "/system/departmentManage",
      name: "departmentManage",
      component: "/system/departmentManage/index",
      meta: {
        icon: "department-manage",
        name: "部门管理",
        title: "system.department",
        isLink: "",
        isHide: false,
        isFull: false,
        isAffix: false,
        isKeepAlive: true
      }
    },
    {
      path: "/system/dictManage",
      name: "dictManage",
      component: "/system/dictManage/index",
      meta: {
        icon: "dictionary-manage",
        name: "字典管理",
        title: "system.dictionary",
        isLink: "",
        isHide: false,
        isFull: false,
        isAffix: false,
        isKeepAlive: true
      }
    },
    {
      path: "/system/timingTask",
      name: "timingTask",
      component: "/system/timingTask/index",
      meta: {
        icon: "timed-task",
        name: "定时任务",
        title: "system.timingTask",
        isLink: "",
        isHide: false,
        isFull: false,
        isAffix: false,
        isKeepAlive: true
      }
    },
    {
      path: "/system/systemLog",
      name: "systemLog",
      component: "/system/systemLog/index",
      meta: {
        icon: "system-log",
        name: "系统日志",
        title: "system.systemLog",
        isLink: "",
        isHide: false,
        isFull: false,
        isAffix: false,
        isKeepAlive: true
      }
    }
  ]
}

/**
 * 外链路由
 */
// const linkRouter = {
//   path: "/link",
//   name: "link",
//   redirect: "/link/gitee",
//   meta: {
//     icon: "Paperclip",
//     name: "外部链接",
//     isLink: "",
//     isHide: false,
//     isFull: false,
//     isAffix: false,
//     isKeepAlive: true
//   },
//   children: [
//     {
//       path: "/link/gitee",
//       name: "gitee",
//       component: "/link/gitee/index",
//       meta: {
//         icon: "Menu",
//         name: "Gitee 仓库",
//         isLink: "https://gitee.com/laramie/Geeker-Admin",
//         isHide: false,
//         isFull: false,
//         isAffix: false,
//         isKeepAlive: true
//       }
//     },
//     {
//       path: "/link/github",
//       name: "github",
//       component: "/link/github/index",
//       meta: {
//         icon: "Menu",
//         name: "GitHub 仓库",
//         isLink: "https://github.com/HalseySpicy/Geeker-Admin",
//         isHide: false,
//         isFull: false,
//         isAffix: false,
//         isKeepAlive: true
//       }
//     },
//     {
//       path: "/link/geekerDocs",
//       name: "geekerDocs",
//       component: "/link/geekerDocs/index",
//       meta: {
//         icon: "Menu",
//         name: "项目文档",
//         isLink: "https://docs.spicyboy.cn",
//         isHide: false,
//         isFull: false,
//         isAffix: false,
//         isKeepAlive: true
//       }
//     },
//     {
//       path: "/link/juejin",
//       name: "juejin",
//       component: "/link/juejin/index",
//       meta: {
//         icon: "Menu",
//         name: "掘金主页",
//         isLink: "https://juejin.cn/user/3263814531551816/posts",
//         isHide: false,
//         isFull: false,
//         isAffix: false,
//         isKeepAlive: true
//       }
//     }
//   ]
// }

const abnormalRouter = {
  path: "/abnormal",
  name: "abnormal",
  redirect: "/abnormal/403",
  meta: {
    icon: "abnormal",
    name: "异常页面",
    title: "abnormal.root",
    isLink: "",
    isHide: false,
    isFull: false,
    isAffix: false,
    isKeepAlive: true
  },
  children: [
    {
      path: "/abnormal/403",
      name: "403",
      component: "/abnormal/403",
      meta: {
        icon: "fourZeroThree",
        name: "403",
        title: "abnormal.403",
        isLink: "",
        isHide: false,
        isFull: false,
        isAffix: false,
        isKeepAlive: true
      }
    },
    {
      path: "/abnormal/404",
      name: "404",
      component: "/abnormal/404",
      meta: {
        icon: "fourZeroFour",
        name: "404",
        title: "abnormal.404",
        isLink: "",
        isHide: false,
        isFull: false,
        isAffix: false,
        isKeepAlive: true
      }
    },
    {
      path: "/abnormal/500",
      name: "500",
      component: "/abnormal/500",
      meta: {
        icon: "fiveZeroZero",
        name: "500",
        title: "abnormal.500",
        isLink: "",
        isHide: false,
        isFull: false,
        isAffix: false,
        isKeepAlive: true
      }
    }
  ]
}

export default [
  {
    url: "/interface/menu/list",
    method: "post",
    response: ({ headers }: any) => {
      if (headers["x-access-token"] === "bqddxxwqmfncffacvbpkuxvwvqrhln") {
        return {
          success: true,
          title: 200,
          msg: "请求成功",
          data: [
            homeRouter,
            // bigDataRouter,
            // tableRouter,
            dashboardRouter,
            permissionRouter,
            // formRouter,
            componentRouter,
            echartsRouter,
            directivesRouter,
            menuRouter,
            systemRouter,
            // linkRouter
            abnormalRouter
          ]
        }
      } else if (headers["x-access-token"] === "unufvdotdqxuzfbdygovfmsbftlvbn") {
        return {
          success: true,
          title: 200,
          msg: "请求成功",
          data: [
            homeRouter,
            // bigDataRouter,
            // tableRouter,
            permissionRouter,
            componentRouter,
            dashboardRouter,
            menuRouter,
            // linkRouter
            abnormalRouter
          ]
        }
      }
    }
  }
] as MockMethod[]
