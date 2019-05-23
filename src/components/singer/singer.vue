<template>
      <div class="singer"></div>
</template>


<script type="text/ecmascript-6">
import {getSingerList} from "api/singer"
import {ERR_OK} from "api/config"
export default {
    data(){
    	return{
    		singers:[]
    	}
    },
    created(){
      this._getSingerList()
    },
    methods:{
     _getSingerList(){
     	getSingerList().then((res)=>{
     		if(res.code==ERR_OK){
     			this.singers=res.data.list
     		}
     	})
     },
    }
}
</script>


<style scoped lang="stylus" rel="stylesheet/stylus">
.singer
  position:fixed
  top:80px
  width:100%
  bottom:0px

</style>