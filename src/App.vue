<template>
  <aside class="aside-menu">
    <a-select
      style="width:100%;"
      v-model:value="currentDoc"
      @change="handleChange"
    >
      <a-select-option
        v-for="item in docList"
        :key="item.name"
        :value="item.name"
        >{{ item.name }}</a-select-option
      >
    </a-select>
  </aside>
  <WebViewer :initialDoc="currentDoc" />
</template>

<script>
import { ref, reactive } from 'vue';
import WebViewer from './components/WebViewer.vue';

export default {
  name: 'App',
  components: {
    WebViewer,
  },
  setup() {
    const docList = reactive([
      {
        name: 'CSS世界-张鑫旭.pdf',
      },
      {
        name: 'JavaScript正则表达式迷你书.pdf',
      },
      {
        name: '你不知道的JavaScript(下卷).pdf',
      },
      {
        name: '浪潮之巅-吴军.pdf',
      },
      {
        name: 'CSS揭秘.pdf',
      },
      {
        name: 'JavaScript设计模式与开发实践.pdf',
      },
      {
        name: '你不知道的JavaScript(中卷).pdf',
      },
      {
        name: '深入浅出Nodejs.pdf',
      },
      {
        name: 'CSS权威指南-第三版.pdf',
      },
      {
        name: 'JavaScript高级程序设计.pdf',
      },
      {
        name: '大前端面试小册（第二版本）.pdf',
      },
      {
        name: '深入理解ES6.pdf',
      },
      {
        name: 'JavaScript+DOM编程艺术.pdf',
      },
      {
        name: 'JavaScript高级程序设计（第4版）.pdf',
      },
      {
        name: ' 学习js数据结构与算法.pdf ',
      },
      {
        name: '算法图解.pdf',
      },
      {
        name: '数据结构与算法JavaScript描述.pdf',
      },
      {
        name: 'JavaScript权威指南.第六版.pdf',
      },
      {
        name: 'WebKit技术内幕.朱永盛.pdf',
      },
      {
        name: '遥远的救世主-豆豆.pdf',
      },
      {
        name: 'JavaScript模式.Stoyan.Stefanov.pdf',
      },
      {
        name: '你不知道的JavaScript(上卷).pdf',
      },
      {
        name: '正则表达式必知必会(修订版).pdf ',
      },
      {
        name: '颠覆者-周鸿祎自传.pdf',
      },
    ]);
    const currentDoc = ref('CSS世界-张鑫旭.pdf');

    const handleChange = (value) => {
      currentDoc.value = value;
    };

    return {
      docList,
      currentDoc,
      handleChange,
    };
  },
};
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
}

.aside-menu {
  display: block;
  position: fixed;
  padding: 16px 16px 0 16px;
  width: 300px;
  box-sizing: border-box;
  font-size: 0.9em;
  overflow-y: auto;
}
</style>
