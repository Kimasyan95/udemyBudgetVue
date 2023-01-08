<template>
  <ElCard class="form-card">
    <ElForm v-bind:model="formData" ref="addItemForm" v-bind:rules="rules" label-position="top">
      <ElFormItem label="Type" prop="type">
        <ElSelect class="type-select" v-model="formData.type" placeholder="Choose type...">
          <ElOption label="Income" value="INCOME" />
          <ElOption label="Outcome" value="OUTCOME"/>
        </ElSelect>
      </ElFormItem>
      <ElFormItem label="Comments" prop="comment">
        <ElInput v-model="formData.comment" />
      </ElFormItem>
      <ElFormItem label="Value" prop="value">
        <ElInput v-model.number="formData.value" />
      </ElFormItem>
      <ElButton v-on:click="onSubmit" type="primary">Submit</ElButton>
    </ElForm>
  </ElCard>
</template>

<script>
export default {
  name: "FormBlock",
  data: () => ({
    formData: {
      type: "INCOME",
      comment: "",
      value: 0,
    },
    rules: {
      type: [
        { required: true, message: 'Plese select type', trigger: 'blur' }
      ],
      comment: [
        { required: true, message: 'Plese type comment', trigger: 'change' }
      ],
      value: [
        { required: true, message: 'Plese type a value', trigger: 'input' },
        { type: 'number', message: 'Value must be a number', trigger: 'change' },
      ],
    }
  }),
  methods: {
    onSubmit() {
      this.$refs.addItemForm.validate(valid => {
        if (valid) {
          if (this.formData.type === 'OUTCOME') {
            this.formData.value = -this.formData.value;
          }
          this.$emit('submitForm', {...this.formData});
          this.$refs.addItemForm.resetFields()
        }
      })
    },
  }
};
</script>

<style scoped>
.form-card {
  max-width: 500px;
  margin: auto;
  text-align: left;
}

.type-select {
  width: 100%;
}
</style>
