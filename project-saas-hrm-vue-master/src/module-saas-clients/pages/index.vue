<template>
 <div>

   kone-saas-clients
 </div>
</template>

<script>
import {list} from '@/api/example/table'
export default {
  name: 'saas-clients-table-index',
  data() {
    return {
      dataList: []
    }
  },
  methods: {
  },
  // 创建完毕状态
  created() {
  },
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.alert {
  margin: 10px 0px 0px 0px;
}
.pagination {
  margin-top: 10px;
  text-align: right;
}
</style>
