<template>
  <el-dialog title="编辑部门" :visible.sync="dialogFormVisible">
    <el-form ref="dataForm" :model="formData" label-width="120px">
      <el-form-item label="部门名称">
        <el-input v-model="formData.name" placeholder="请输入部门名称"></el-input>
      </el-form-item>
      <el-form-item label="部门编码">
        <el-input v-model="formData.code" placeholder="请输入部门编码"></el-input>
      </el-form-item>
      <el-form-item label="部门负责人">
        <el-input v-model="formData.manager" placeholder="请输入部门负责人"></el-input>
      </el-form-item>
      <el-form-item label="部门介绍">
        <el-input v-model="formData.introduce" placeholder="请输入部门介绍"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="createData">确定</el-button>
      <el-button @click="dialogFormVisible=false">取消</el-button>
    </div>
  </el-dialog>
</template>
<script>
import { saveOrUpdate } from "@/api/base/departments";
export default {
  name: "dept-add",
  data() {
    return {
      dialogFormVisible: false,
      formData: {},
      pid: ""
    };
  },
  methods: {
    createData: function() {
      this.formData.pid = this.pid;
      saveOrUpdate(this.formData).then(res => {
        this.$message({
          message: res.data.message,
          type: res.data.success ? "success" : "error"
        });
        location.reload();
        this.dialogFormVisible = false;
      });
    }
  }
};
</script>
