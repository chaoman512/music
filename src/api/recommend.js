import jsonp from "common/js/jsonp"
import {commonParams,options} from "./config"

export function getRecommend(){
	const url="https://u.y.qq.com/cgi-bin/musicu.fcg"
	const data=Object.assign({},commonParams,{
       cmd: 'shoubo'
       lan: 'all'
	})
}
return jsonp(url,data,options)