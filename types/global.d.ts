type MyGlobalDataType = {[key:string]:any}
declare module NodeJS {
    interface Global {
      myGlobalData: MyGlobalDataType
    }
}
// declare let myGlobalData: MyGlobalDataType;