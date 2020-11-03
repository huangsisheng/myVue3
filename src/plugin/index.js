import mitt from "mitt"
import storage from "@/utils/localStorage"


export default class Plugins {
    constructor(app){
        // 接收app实例
        this.app = app
        
        this.setPropertiesFn()
    }
    setPropertiesFn(){
        // eventBus
        this.app.config.globalProperties.$mitt = mitt()
        // localStorage
        this.app.config.globalProperties.$storage = storage
    }
}