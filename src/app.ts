// import Hello from './lib/helloLib'
import moo from './moo/m.o.o'
import whatIsMyType from './typeMaybe'
import 'reflect-metadata/Reflect'
//#region 注释
// // ====引入配置
// const NODE_ENV = process.env.NODE_ENV || 'default'
// let config:Config = require(`../config/${NODE_ENV}.config.json`)
// console.warn(config.baseUrl)

// // ====测试编译
// let t:string = 'hello'
// // just a comment
// let a:string[] = ['1','4']
// let b:string[] = []
// b = [...a]
// let c:number = 1
// console.warn(JSON.stringify(b))

// global.myGlobalData = {
//   test:1
// }

// // ====引入lib
// console.warn(Hello.helloLib)
// Hello.sayHello('世界')

// console.log(global.myGlobalData.test)
//#endregion

// const boy = new moo.TCBoy('jim')
// boy.boySayHello('well done')

// const girl = new moo.TCGirl('lily')
// console.log(girl.rdPro)
// girl.girlSayHello('good job')

// let  t = whatIsMyType("DD")
// console.log(t)

// let emoji:{[key:string]:any} = {}


function classDecorator(): ClassDecorator {
  return target => {
    // 在类上定义元数据，key 为 `classMetaData`，value 为 `a`
    Reflect.defineMetadata('classMetaData', 'a', target);
  }
}

function methodDecorator(): MethodDecorator {
  return (target, key, descriptor) => {
    // 在类的原型属性 'someMethod' 上定义元数据，key 为 `methodMetaData`，value 为 `b`
    Reflect.defineMetadata('methodMetaData', 'b', target, key);
  }
}

@classDecorator()
class SomeClass {

  @methodDecorator()
  someMethod() {}
};

Reflect.getMetadata('classMetaData', SomeClass);                         // 'a'
Reflect.getMetadata('methodMetaData', new SomeClass(), 'someMethod');    // 'b'


