<template>
  <div style="border: 1px solid #ccc">
      <Toolbar
        style="border-bottom: 1px solid #ccc"
        :editor="editorRef"
        :defaultConfig="toolbarConfig"
        mode="default"
      />
      <Editor
        style="height: 500px; overflow-y: hidden;"
        v-model="valueHtml"
        :defaultConfig="editorConfig"
        mode="default"
        @onCreated="handleCreated"
      />
    </div>
</template>

<script setup>
  import { shallowRef,ref } from 'vue'
  import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
  const editorRef = shallowRef()
  const editorConfig = {}
  const toolbarConfig = {}
  const valueHtml = ref('')

  function handleCreated(editor) {
      editorRef.value = editor
  }
</script>

<style>

</style>
