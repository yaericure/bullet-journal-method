// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://yaericure.github.io',
  base: '/bullet-journal-method',
  integrations: [
    starlight({
      title: '子彈思考整理術',
      description: '用一本筆記本安頓所有待辦、目標與思緒——子彈筆記的完整系統與心法。',
      defaultLocale: 'root',
      locales: { root: { label: '正體中文', lang: 'zh-TW' } },
      customCss: ['./src/styles/theme.css'],
      lastUpdated: false,
      pagination: true,
      sidebar: [
        {
          label: '第一部 準備',
          items: [
            { label: '第1課 前言、承諾與指南', slug: 'unit00' },
            { label: '第2課 為什麼與清整思緒', slug: 'unit01' },
            { label: '第3課 筆記本與手寫的力量', slug: 'unit02' },
          ],
        },
        {
          label: '第二部 系統',
          items: [
            { label: '第4課 系統總覽與快速記錄', slug: 'unit03' },
            { label: '第5課 主題頁碼與列點', slug: 'unit04' },
            { label: '第6課 任務、事件與註記', slug: 'unit05' },
            { label: '第7課 標記符號與群組', slug: 'unit06' },
            { label: '第8課 四大核心群組', slug: 'unit07' },
            { label: '第9課 轉移與一封信', slug: 'unit08' },
          ],
        },
        {
          label: '第三部 實作',
          items: [
            { label: '第10課 實作與開始', slug: 'unit09' },
            { label: '第11課 反思與意義', slug: 'unit10' },
            { label: '第12課 目標與小步驟', slug: 'unit11' },
            { label: '第13課 時間與感恩', slug: 'unit12' },
            { label: '第14課 控制與放射', slug: 'unit13' },
            { label: '第15課 忍耐力與解構', slug: 'unit14' },
            { label: '第16課 惰性與不完美', slug: 'unit15' },
          ],
        },
        {
          label: '第四部 技巧',
          items: [
            { label: '第17課 技巧與客製化群組', slug: 'unit16' },
            { label: '第18課 設計、計畫與清單', slug: 'unit17' },
            { label: '第19課 行程、紀錄表與社群', slug: 'unit18' },
          ],
        },
        {
          label: '第五部 尾聲',
          items: [
            { label: '第20課 正確的子彈筆記法', slug: 'unit19' },
          ],
        },
      ],
    }),
    react(),
  ],
  vite: { plugins: [tailwindcss()] },
});
