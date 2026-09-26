import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import './assets/main.css';
import CodeHighlighter from './components/CodeHighlighter.vue';
import CustomLayout from './CustomLayout.vue';

export default {
  extends: DefaultTheme,
  Layout: CustomLayout,
  enhanceApp({ app }) {
    // register your custom global components
    app.component('CodeHighlighter', CodeHighlighter);
  },
} satisfies Theme;
