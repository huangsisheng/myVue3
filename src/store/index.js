import { createStore} from "vuex";

const modules = require.context(
    // 其组件目录的相对路径
    './modules',
    // 是否查询其子目录
    false,
    // 匹配基础组件文件名的正则表达式
    /[a-zA-Z]\w+\.(js)$/
)
const moduleStores = {};

modules.keys().forEach(file => {
    const fileName = file.slice(2,-3)

    const fileModule = modules(file).default

    moduleStores[fileName] = {
        ...fileModule,
        namespaced:true
    }
});

const store = createStore({
    state:{},
    mutations:{},
    actions:{},
    getters:{},
    modules:{
        ...moduleStores
    }
})

export default store
