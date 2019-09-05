<template>
  <div class="appointmentHouse">
    <a-form class="appointmentHouseForm" layout="horizontal">
      <a-form-item style="text-align:center">
        <article>包裹入库</article>
      </a-form-item>
      <a-form-item label="运单号：">
        <a-input placeholder="运单号" v-model="formObj.billNo">
          <a-icon slot="prefix" type="smile" style="color:rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item label="收件人">
        <a-input placeholder="收件人" v-model="formObj.addressee">
          <a-icon slot="prefix" type="meh" style="color:rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item label="电话">
        <a-input placeholder="电话" v-model="formObj.photo">
          <a-icon slot="prefix" type="frown" style="color:rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item label="重量">
        <a-input placeholder="重量" v-model="formObj.weight">
          <a-icon slot="prefix" type="frown" style="color:rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" style="width:100%" @click="commit">Primary</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      formObj: {
        billNo: "",
        addressee: "",
        photo: "",
        weight: "",
        status:1
      },
      getGoodTime: "",
      formLayout: "horizontal"
    };
  },
  components: {},
  methods: {
    commit() {
      http.post(data.url,this.formObj)
        .then((response)=>{
          console.log(response);
        })
        .catch((error)=>{

        })
      // http.get(data.url)
      //   .then((response)=>{
      //     console.log(response);
      //   })
      //   .catch((error)=>{

      //   })
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/css/main.css";
.appointmentHouse {
  display: flex;
  justify-content: center;
  .appointmentHouseForm {
    width: 200px;
    margin-top: 50px;
  }
}
</style>
