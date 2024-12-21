// GitHub相关常量配置
export const GitHubConfigConstants = {
    // 项目名称
    ProjectName: "magicgopher-blog",
    // GitHub用户名
    UserName: "magicgopher",
}

// 特殊的导航栏处理数组常量，
export const SpecialItems: string[] = [
    // 例如 /docs/zh/常用工具/ 这样就导航栏的常用工具就不会显示下拉框了
    '/docs/zh/常用工具/',
]

// 导航栏常量枚举
export const NavbarConstants = {
    // 首页
    Home: '/',
    // 导航栏（Go专题）
    Go: '/docs/zh/Go专题/',
    // 导航栏（Java专题）
    Java: '/docs/zh/Java专题/',
    // 导航栏（DevOps）
    DevOps: '/docs/zh/DevOps/',
    // 导航栏（常用工具）
    Tools: '/docs/zh/常用工具/',
    // 导航栏（关于我）
    About: '/docs/zh/关于我/',
}

// 侧边栏常量枚举
export const SidebarConstants = {
    // 侧边栏 Go基础
    GolangBase: '/docs/zh/Go专题/Go基础/',
    // 侧边栏 Java基础
    JavaBase: '/docs/zh/Java专题/Java基础/',
    // 侧边栏 Docker
    Docker: '/docs/zh/DevOps/Docker/',
    // 侧边栏 Kubernetes
    Kubernetes: '/docs/zh/DevOps/Kubernetes/',
    // 常用工具侧边栏
    Tools: '/docs/zh/常用工具/',
}

// 侧边栏不显示的文件常量
export const SidebarBlacklist: string[] = [
    // index.md文件在侧边栏不显示
    'index.md',
];

// 要插入 <BackTop /> 组件的路径数组
export const specificPaths = [
    // 格式：'/src/docs/zh/编程语言/'
    '/src/docs/zh/后端/',
    '/src/docs/zh/前端/',
    '/src/docs/zh/DevOps/',
    '/src/docs/zh/常用工具/',
    '/src/docs/zh/关于我/',
];

// 不需要插入 <BackTop /> 组件的文件路径黑名单
export const blacklistPaths: string[] = [
    // 格式：'docs/zh/program/go/01-Go语言基础/08-字符串处理.md'
    // 'docs/zh/program/go/01-Go语言基础/08-字符串处理.md'
];

// Live2D模型配置
export const live2dModels = [
    {
        path: '/live2d/abeikelongbi_3/abeikelongbi_3.model3.json',
        scale: 0.05,
        stageStyle: {
            height: 350
        }
    }
]