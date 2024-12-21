import { DefaultTheme } from 'vitepress';
import { SidebarConstants } from '../utils/constants';
import { generateSidebar } from '../utils/sidebar-generator';

// 中文侧边栏配置
export const zhSidebar: DefaultTheme.Config['sidebar'] = {
    // 侧边栏 Go专题（Go基础）
    [SidebarConstants.GolangBase]: generateSidebar(SidebarConstants.GolangBase),
    // 侧边栏 Java专题（Java基础）
    [SidebarConstants.JavaBase]: generateSidebar(SidebarConstants.JavaBase),
    // 侧边栏 DevOps（Docker）
    [SidebarConstants.Docker]: generateSidebar(SidebarConstants.Docker),
    // 侧边栏 DevOps（Kubernetes）
    [SidebarConstants.Kubernetes]: generateSidebar(SidebarConstants.Kubernetes),
    // 侧边栏 常用工具
    [SidebarConstants.Tools]: generateSidebar(SidebarConstants.Tools),
}