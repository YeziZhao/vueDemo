<template>
	<div>
         <el-form ref="formUpload"  :model="uploadForm" label-position="left" label-width="120px">
        <div class="container">
            <div class="title">New Version Upload</div>
            <div class="pl-10 pt-10">
                <el-form-item label="get Service">
                <el-select v-model="uploadForm.select" placeholder="please enter service" class="w-300">
                        <el-option
                            v-for="item in serviceData"
                            :key="item.id"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select> 
                </el-form-item>
                <el-form-item label="get Version">
                    <el-input v-model="uploadForm.version" placeholder="please enter version" class="w-300"></el-input>
                </el-form-item>
            </div>
        </div>
        <el-form-item class="position-btn"> 
        <el-button  @click.native.prevent="upload">Upload</el-button>
        </el-form-item>
        </el-form>
    </div>
      
</template>
<script>
import {serviceData} from 'api/service';
export default {
    name:"dashboard",
    data() {
        return {
        serviceData: undefined,
        uploadForm: {
            select: 'web service',
            version: "v 1.0.0"
        },
        
        }
    },
    beforeCreate() {
        serviceData().then(responese => {
            this.serviceData = responese.data;
        });
    },
    methods:{
    upload(){
        this.$message({
            message: `service name : ${this.uploadForm.select},version : ${this.uploadForm.version}`,
            type: 'success'
        });
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
	.container {
		height:200px;
		width: 100%;
		border: 1px solid #E5E5E5;
		border-radius: 10px;
	}
	.title{
		line-height: 20px;
		padding: 10px;
		border-bottom: 1px solid #e5e5e5;
		font-weight: bold;
	}
	.position-btn{
		text-align: center;
        padding-top: 10px;
	}
    .enter-width{
        margin-left: 20px;
        margin-top:20px;
        width: 300px;
        height: 40px;
    }
</style>


