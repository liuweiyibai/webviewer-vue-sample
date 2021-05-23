<template>
  <div id="webviewer" ref="viewer">
    <a href="javascript:void(0);" class="save-btn" @click="handleSave"
      >保存阅读进度</a
    >
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import WebViewer from '@pdftron/webviewer';

export default {
  name: 'WebViewer',
  props: { initialDoc: { type: String } },
  setup(props) {
    const viewer = ref(null);
    const appInstance = ref(null);
    onMounted(() => {
      const path = `${process.env.BASE_URL}webviewer`;
      WebViewer({ path, initialDoc: props.initialDoc }, viewer.value).then(
        (instance) => {
          appInstance.value = instance;
          const { docViewer, iframeWindow } = instance;
          instance.setLanguage('zh_cn');
          instance.enableElements(['bookmarksPanel', 'bookmarksPanelButton']);
          iframeWindow.addEventListener('userBookmarksChanged', (e) => {
            const bookmarks = e.detail;
            const bookmarksString = JSON.stringify(bookmarks);
            console.log(`添加书签::${JSON.stringify(bookmarksString)}`);
          });

          setTimeout(() => {
            docViewer.setCurrentPage(20);
          }, 2000);
        }
      );
    });

    const handleSave = () => {
      console.log(appInstance.value.getCurrentPageNumber());
    };
    return {
      viewer,
      handleSave,
    };
  },
};
</script>

<style>
#webviewer {
  height: 100vh;
}
.save-btn {
  z-index: 10000;
  color: coral;
  position: fixed;
  bottom: 10px;
  left: 20px;
  text-decoration: none;
}
</style>
