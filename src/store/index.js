import Vuex from "vuex";

const modules = require.context(
    // 其组件目录的相对路径
    './modules',
    // 是否查询其子目录
    true,
    // 匹配基础组件文件名的正则表达式
    /[a-zA-Z]\w+\.(js)$/
)
const moduleStores = {};

modules.keys().forEach(file => {
    const fileName = file.slice(file.lastIndexOf('/')+1,-3)

    const fileModule = modules(file).default

    console.log(file, fileModule)

    moduleStores[fileName] = {
        fileModule,
        namespaced:true
    }
});

const store = Vuex.createStore({
    state:{
        
    },
    mutations:{
        ...moduleStores
    },
    actions:{},
    getters:{},
    modules:{}
})

export default store
