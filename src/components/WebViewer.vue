<template>
  <div id="webviewer" ref="viewer"></div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount, onBeforeUpdate } from 'vue';
import WebViewer from '@pdftron/webviewer';

export default {
  name: 'WebViewer',
  props: {
    initialDoc: { type: String, default: '' },
    docName: { type: String },
  },
  setup(props) {
    const viewer = ref(null);
    const docHref = `https://clearlywind.com/pdf/${props.initialDoc}`;
    const appInstance = ref(null);
    const handleSave = (e) => {
      if (!(e.keyCode === 83 && (e.ctrlKey || e.metaKey))) {
        return;
      }

      e.preventDefault();

      let page = appInstance.value.getCurrentPageNumber();
      let data = {
        docName: props.docName,
        page,
      };
      console.log(data);
    };

    const setDocCurrentPage = (currentPage) => {
      if (currentPage) {
        appInstance.value.setCurrentPage(currentPage);
      }
    };

    onMounted(() => {
      const path = `${process.env.BASE_URL}webviewer`;
      WebViewer({ path, initialDoc: docHref }, viewer.value).then(
        (instance) => {
          appInstance.value = instance;
          const { iframeWindow } = instance;
          instance.setLanguage('zh_cn');
          instance.enableElements(['bookmarksPanel', 'bookmarksPanelButton']);
          iframeWindow.addEventListener('userBookmarksChanged', (e) => {
            const bookmarks = e.detail;
            const bookmarksString = JSON.stringify(bookmarks);
            console.log(`添加书签::${JSON.stringify(bookmarksString)}`);
          });
          window.addEventListener('keydown', handleSave);

          setDocCurrentPage();
        }
      );
    });
    onBeforeUpdate(() => {
      const docHref = `https://clearlywind.com/pdf/${props.initialDoc}`;
      if (appInstance.value) {
        appInstance.value.loadDocument(docHref);
      }
    });

    onBeforeUnmount(() => {
      window.removeEventListener('keydown', handleSave);
    });

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
  display: inline-block;
  width: calc(100% - 300px);
  margin-left: 300px;
  box-shadow: 1px 1px 10px #999;
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
