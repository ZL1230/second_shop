<template>
	 <div class="tab-control">
	      <div v-for="(item,index) in titles" :key="index" class="tab-control-item" :class="{active:index===currentIndex}" @click="itemclick(index)">
	          <span>{{item}}</span>
	      </div>
	  </div>
</template>

<script>
	export default{
		data(){
		      return {
		          currentIndex:0
		      }
		  },
		  methods:{
		      itemclick(index){
		          this.currentIndex=index
		          this.$emit('tabClick',index)
		      }
		  },
		  props:{
		      titles:{
		          type:Array,
		          default(){
		              return []
		          }
		      }
		  }
	}
	 
</script>

<style>
	.tab-control{
	    display: flex;
	    text-align: center;
	    font-size: 15px;
	    background-color: #ffff;
	    z-index: 9;
	}
	.tab-control-item{
	    flex: 1;
	    height: 40px;
	    line-height: 40px;
	}
	.active{
	    color: pink;
	}
	.active span{
	    padding: 5px;
	 border-bottom: 2px solid var(--color-high-text);
	}
</style>
