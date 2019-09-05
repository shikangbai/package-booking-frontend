<template>
  <div class="warehouse">
    <a-form class="wareHouseForm" layout="horizontal">
      <a-form-item style="text-align:center">
        <article>预约取件</article>
      </a-form-item>
      <a-form-item label="运单号：">
        <a-input placeholder="运单号" v-model="billNo">
          <a-icon slot="prefix" type="smile" style="color:rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item label="取件时间" has-feedback>
        <a-date-picker style="width: 100%" v-model="getGoodTime" format="YYYY-MM-DD HH:mm:ss"/>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" style="width:100%">Primary</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      billNo: "",
      getGoodTime: "",
      formLayout: "horizontal"
    };
  },
  components: {}
};
</script>

<style scoped lang="scss">
@import "../../assets/css/main.css";
.warehouse {
  display: flex;
  justify-content: center;
  .wareHouseForm {
    width: 200px;
    margin-top: 100px;
  }
}
</style>
