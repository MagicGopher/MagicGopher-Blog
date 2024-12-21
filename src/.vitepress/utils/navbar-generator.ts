import * as fs from 'fs';
import * as path from 'path';
import { DefaultTheme } from 'vitepress';
import { SpecialItems } from './constants';

export function generateNavbar(navPath: string): DefaultTheme.NavItem {
    // 移除开头的斜杠
    const normalizedPath = navPath.replace(/^\//, '')
    const fullPath = path.join(process.cwd(), 'src', normalizedPath)

    // 获取目录名称作为 text
    const text = path.basename(navPath.replace(/\/$/, ''))

    // 检查是否是特殊导航项
    if (SpecialItems.includes(navPath)) {
        return {
            text,
            link: `/${normalizedPath}`
        }
    }

    // 读取目录内容
    const files = fs.readdirSync(fullPath, { withFileTypes: true })

    const hasIndexMd = files.some(file => file.isFile() && file.name === 'index.md')
    const directories = files.filter(file => file.isDirectory())
    const markdownFiles = files.filter(file => file.isFile() && file.name.endsWith('.md') && file.name !== 'index.md')

    // 如果目录下只有 markdown 文件（没有子目录），生成文件列表类型的导航
    if (markdownFiles.length > 0 && directories.length === 0) {
        const items = markdownFiles.map(file => ({
            text: file.name.replace(/\.md$/, ''),
            link: `/${normalizedPath}${file.name.replace(/\.md$/, '')}`
        }))
        return { text, items }
    }

    // 如果有子目录，生成目录列表类型的导航
    if (directories.length > 0) {
        const items = directories.map(dir => ({
            text: dir.name,
            link: `/${normalizedPath}${dir.name}/`
        }))
        return { text, items }
    }

    // 默认返回简单链接类型
    return {
        text,
        link: `/${normalizedPath}`
    }
}