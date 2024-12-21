import { readdirSync, statSync } from 'fs';
import { join, basename } from 'path';
import { DefaultTheme } from 'vitepress';

interface SidebarItem extends DefaultTheme.SidebarItem {
    items?: SidebarItem[];
    collapsed?: boolean;
}

export function generateSidebar(path: string): SidebarItem[] {
    const baseDir = process.cwd();
    const fullPath = join(baseDir, 'src', path);

    // 获取目录名（去掉路径前缀）
    const dirName = basename(path.replace(/\/$/, ''));

    // 读取目录内容
    const files = readdirSync(fullPath)
        .filter(file => !file.startsWith('.') && !file.includes('index.md')) // 排除隐藏文件和 `index.md`
        .sort((a, b) => {
            // 按文件名前缀数字排序
            const numA = parseInt(a.match(/^\d+/)?.[0] || '0');
            const numB = parseInt(b.match(/^\d+/)?.[0] || '0');
            return numA - numB;
        });

    const items: SidebarItem[] = [];
    const mainSection: SidebarItem = {
        text: dirName, // 保持目录名原样
        collapsed: false,
        items: [],
    };

    for (const file of files) {
        const filePath = join(fullPath, file);
        const stat = statSync(filePath);

        if (stat.isDirectory()) {
            // 递归处理子目录
            const subItems = generateSidebar(join(path, file));
            if (subItems.length > 0) {
                mainSection.items?.push({
                    text: file, // 保持子目录名原样
                    collapsed: false,
                    items: subItems[0].items, // 获取递归生成的子项
                });
            }
        } else if (file.endsWith('.md')) {
            // 处理 Markdown 文件
            const link = join(path, file.replace(/\.md$/, ''));
            const title = formatFileName(file);

            mainSection.items?.push({
                text: title, // 使用文件名作为标题
                link,
            });
        }
    }
    // 如果主要部分没有子项，返回空数组
    if (mainSection.items?.length === 0) {
        return [];
    }
    // 返回生成的侧边栏的数据结构
    return [mainSection];
}

/**
 * 格式化文件名为标题
 * @param fileName 文件名，例如 `01-文件操作.md`
 * @returns 格式化后的标题，例如 `文件操作`
 */
function formatFileName(fileName: string): string {
    return fileName
        .replace(/\.md$/, '') // 去掉 `.md` 后缀
        .replace(/^\d+-/, '') // 去掉数字前缀
        .replace(/-/g, ' '); // 将 `-` 替换为空格
}