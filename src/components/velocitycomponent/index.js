import VelocityComponent from './velocitycomponent'

const velocityPlugin = {

    install(Vue, options) {
        Vue.component('VelocityComponent', VelocityComponent)
    }
}

export default velocityPlugin;