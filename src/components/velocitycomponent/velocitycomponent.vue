<template>
    <div :class="componentClass" @click="click" @complete="completeCallback">
        <slot></slot>
    </div>
</template>

<script>
    import Velocity from './lib/velocity-animate-shim'
    export default {
        name: 'VelocityComponent',
        props: {
            visible: {
                type: Boolean,
                default: true
            },
            animationType: {
                type: String,
                default: ''
            },
            animationStyle: {
                type: Object,
                default: null
            },
            animation: {
                type: Object,
                defult: null
            }
        },
        data() {
            return {
                executionTime: 0,
            }
        },
        created() {
            let delayTime = 0;
            let durationTime = 0;
            if(this.animation.delay) {
                delayTime = parseFloat(this.animation.delay);
            }
            if(this.animation.duration) {
                durationTime = parseFloat(this.animation.duration);
            }
            this.executionTime = delayTime + durationTime;
            
        },
        mounted() {
            this.runAnimation();
        },
        updated() {
            let delayTime = 0;
            let durationTime = 0;
            if(this.animation.delay) {
                delayTime = parseFloat(this.animation.delay);
            }
            if(this.animation.duration) {
                durationTime = parseFloat(this.animation.duration);
            }
            this.executionTime = delayTime + durationTime;
        },
        computed: {
            componentClass: function() {
                return this.visible ? 'velocity-component-show' : 'velocity-component-hidden';
            }
        },
        watch: {
            animationType: function(newVal, oldVal) {
                if(newVal != oldVal) {
                    this.runAnimation();
                }
            }
        },
        methods: {
            runAnimation() {
                if(this.animation == null || !this.animationType) {
                    return
                }
                if(this.animationType == 'custom' && this.animationStyle != null) {
                    // 执行自定义动画
                     Velocity(this.$el, this.animationStyle, this.animation);
                }else if(this.animationType) {
                    // 执行UI Pack里面的动画
                    Velocity(this.$el, this.animationType, this.animation); 
                }else {
                    return;
                }
                // 总持续时间之后将执行时间置为0
                var _this = this;
                if(_this.executionTime) {
                    setTimeout(function() {
                        _this.executionTime = 0;
                        _this.completeCallback();
                    }, _this.executionTime);
                }
            },
            completeCallback() {
                // 动画执行完成之后，触发回调事件
                this.$emit('complete');
            },
            click() {
                this.$emit('click');
            }
        }
    }
</script>

<style scoped>
    .velocity-component-show {
        display: block;
    }
    .velocity-component-hidden {
        display: none;
    }
</style>