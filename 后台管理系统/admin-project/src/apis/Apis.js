
import {goodsAboutUrl} from "../commons/URLSchema.js"
import {hotUrlUrl} from "../commons/URLSchema.js"

export default  {
  /**
   * 获取carts数据
   * @param cb
   */
  goodsAboutData(cb){
    fetch(goodsAboutUrl).then(res=>{
      res.json().then(data=>{
        cb(data)
      })
    })
  },
  hotData(cb){
    fetch(hotUrlUrl).then(res=>{
      res.json().then(data=>{
        cb(data)
      })
    })
  }
}



























