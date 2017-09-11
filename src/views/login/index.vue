<template>
    <div class="login-container">
        <el-form ref="formLogin" autoComplete="on" :model="loginForm" :rules="loginRule" label-width='180px' label-position="right">
            <el-form-item :label="placeholderusername" prop='username'>
                <el-input v-model='loginForm.username' :placeholder='placeholderusername'></el-input>
            </el-form-item>
              <el-form-item :label="placeholderpassword" prop='password'>
                <el-input v-model='loginForm.password' :placeholder='placeholderpassword'></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type='primary' :loading='loading' @click.native.prevent="loginHandle">{{btnText}}</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<<script>
import {mapGetters} from 'vuex';
import {validator} from '../../utils';
import ext from '../../utils/ext';
export default {
    
  data(){
      let lang =$i18n.messages[$i18n.locale].pages.login;
      const validateName = (rule,value,callback)=>{
          //用户名正则 ，4到16位（字母，数字，下划线，减号）
          validator(ext.username,value,lang.placeholderUsername+lang.validate,callback)
      };
      const validatePassword = (rule,value,callback) =>{
          validator(ext.password,value,lang.placeholderPassword+lang.validate,callback)
          //密码强度正则，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
      }
      return {
          title:lang.title,
          placeholderusername:lang.placeholderUsername,
          placeholderpassword:lang.placeholderPassword,
          btnText:lang.btnText,

          loginForm:{
                username:"admin",
                password:"Aa123456!"
          },
          loginRule:{
              username:[{
                  required:true,
                  trigger:'blur',
                  validator:validateName
              }],
              password:[{
                  required:true,
                  trigger:'blur',
                  validator:validatePassword
              }]
          },
          loading:false

      }

  },
  computed:{
       ...mapGetters([
        'auth_type'
      ])
  },
  methods:{
      loginHandle(){
          this.$refs.formLogin.validate(valid =>{
                if(valid){
                    this.loading = true;
                    this.$store.dispatch('login',this.loginForm).then(()=>{
                        this.loading = false;
                        this.$router.push({
                            path:'/'
                        });
                    }).catch(err =>{
                       this.$message.error(err);
                       this.loading = false;
                    });
                }else{
                     console.log('error submit!!');
                    return false;
                }
          });
      }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss">
  .login-container{
    width:700px;
    margin:10% auto;
  }
</style>
