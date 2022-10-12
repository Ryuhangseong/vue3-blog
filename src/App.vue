<!--
 * @Author: ryuhangseong liuhangcheng2002@gmail.com
 * @Date: 2022-09-25 15:50:13
 * @LastEditors: ryuhangseong liuhangcheng2002@gmail.com
 * @LastEditTime: 2022-10-12 20:22:16
 * @FilePath: \vue3-blog\src\App.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by ryuhangseong liuhangcheng2002@gmail.com, All Rights Reserved. 
-->
<template>
  <div>
    {{ state.data }}
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const state = reactive({
  data: "1",
});
</script>

<style lang="scss" scoped></style>
