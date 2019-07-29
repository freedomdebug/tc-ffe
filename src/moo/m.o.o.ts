/**
 * More Object Oriented
 */
namespace m.o.o {
  const oo:string = 'just more oo'
  class Person {
    /** Person name */
    protected name: string
    protected constructor(theName: string) { this.name = theName; }
  }

  export class TCGirl extends Person {
    private status = "tommy"
    readonly rdPro : string
    constructor(name: string){
      super(name);
      this.rdPro = 'i am a girl'
    }
    protected appendHelloWords = (words:string):string => {
      return `${this.name} say:${words}`
    }
    public girlSayHello = (words:string):void =>{
      //console.log(this.status)
      console.log(this.appendHelloWords(words))
    }
  }

  export class TCBoy extends Person {
    private pPro : string
    constructor(name: string){
      super(name);
      this.pPro = 'i am a boy'
    }
    public boySayHello = (words:string):void =>{
      console.log(`${this.name} say:${words}`)
    }
  }
}
export = m.o.o