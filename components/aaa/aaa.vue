<template>
	<view>
	        <div v-clickoutside="hideReplyBtn" @click="inputFocus" class="my-reply">
	            <el-avatar class="header-img" :size="40" :src="myHeader"></el-avatar>
	            <div class="reply-info" >
	                <div 
	                tabindex="0" 
	                contenteditable="true" 
	                id="replyInput" 
	                spellcheck="false" 
	                placeholder="输入评论..." 
	                class="reply-input" 
	                @focus="showReplyBtn"  
	                @input="onDivInput($event)"
	                >
	                </div>
	            </div>
	            <div class="reply-btn-box" v-show="btnShow">
	                <el-button class="reply-btn" size="medium" @click="sendComment" type="primary">发表评论</el-button>
	            </div>
	        </div>
	        <div v-for="(item,i) in comments" :key="i" class="author-title reply-father">
	            <el-avatar class="header-img" :size="40" :src="item.headImg"></el-avatar>
	            <div class="author-info">
	                <span class="author-name">{{item.name}}</span>
	                <span class="author-time">{{item.time}}</span>
	            </div>
	            <div class="icon-btn">
	                <span @click="showReplyInput(i,item.name,item.id)"><i class="iconfont el-icon-s-comment"></i>{{item.commentNum}}</span>
	                <i class="iconfont el-icon-caret-top"></i>{{item.like}}
	            </div>
	            <div class="talk-box">
	                <p>
	                    <span class="reply">{{item.comment}}</span>
	                </p>
	            </div>
	            <div class="reply-box">
	                <div v-for="(reply,j) in item.reply" :key="j" class="author-title">
	                    <el-avatar class="header-img" :size="40" :src="reply.fromHeadImg"></el-avatar>
	                    <div class="author-info">
	                        <span class="author-name">{{reply.from}}</span>
	                        <span class="author-time">{{reply.time}}</span>
	                    </div>
	                    <div class="icon-btn">
	                        <span @click="showReplyInput(i,reply.from,reply.id)"><i class="iconfont el-icon-s-comment"></i>{{reply.commentNum}}</span>
	                        <i class="iconfont el-icon-caret-top"></i>{{reply.like}}
	                    </div>
	                    <div class="talk-box">
	                        <p>
	                            <span>回复 {{reply.to}}:</span>
	                            <span class="reply">{{reply.comment}}</span>
	                        </p>
	                    </div>
	                    <div class="reply-box">
	
	                    </div>
	                </div>
	            </div>
	            <div  v-show="_inputShow(i)" class="my-reply my-comment-reply">
	                <el-avatar class="header-img" :size="40" :src="myHeader"></el-avatar>
	                <div class="reply-info" >
	                    <div tabindex="0" contenteditable="true" spellcheck="false" placeholder="输入评论..."   @input="onDivInput($event)"  class="reply-input reply-comment-input"></div>
	                </div>
	                <div class=" reply-btn-box">
	                    <el-button class="reply-btn" size="medium" @click="sendCommentReply(i,j)" type="primary">发表评论</el-button>
	            </div>
	        </div>
	        </div>
	    </div>
	
</template>

<script>
</script>

<style>
</style>
