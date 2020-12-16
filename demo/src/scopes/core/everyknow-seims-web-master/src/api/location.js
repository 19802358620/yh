import {myrequest} from "@/utils/myrequest";
import {getCurrentTime} from "@/utils";

/**
 * 获取全部省份
 * @param request
 * @returns {AxiosPromise}
 */
export function getProvinces(request) {
  return myrequest({
    url: '/location/getProvinces',
    method: 'post',
    data: {
      "eKnowRequest": {
        "organId": "NCU",
        "requestDate": getCurrentTime()
      },
      "request": {
      }
    }
  })
}

/*
根据 省份代码获取城市
 */
export function getCitysByProvinceCode(request) {
  return myrequest({
    url: '/location/getCitys',
    method: 'post',
    data: {
      "eKnowRequest": {
        "organId": "NCU",
        "requestDate": getCurrentTime()
      },
      "request": {
        provinceCode: request.provinceCode
      }
    }
  })
}
