import { Login } from "@/api/interface/index"
import { PORT1 } from "@/api/config/servicePort"
import http from "@/api"

/**
 * @name 登录模块
 */
// * 用户登录
export const loginApi = (params: Login.ReqLoginForm) => {
  console.log(process.env.NODE_ENV)
  if (process.env.NODE_ENV === "production") {
    return http.post<Login.ResLogin>(PORT1 + `/login`, params, { headers: { noLoading: true } }) // 正常 post json 请求  ==>  application/json
  } else {
    return http.post<Login.ResLogin>("/login", params, { headers: { noLoading: true } }) // 正常 post json 请求  ==>  application/json
  }
}

// * 获取按钮权限
export const getAuthButtonListApi = () => {
  if (process.env.NODE_ENV === "production") {
    return http.get<Login.ResAuthButtons>(PORT1 + `/auth/buttons`, {}, { headers: { noLoading: true } })
  } else {
    return http.post<Login.ResAuthButtons>("/auth/button", {}, { headers: { noLoading: true } })
  }
}

// * 获取菜单列表
export const getAuthMenuListApi = () => {
  if (process.env.NODE_ENV === "production") {
    return http.get<Menu.MenuOptions[]>(PORT1 + `/menu/list`, {}, { headers: { noLoading: true } })
  } else {
    return http.post<Menu.MenuOptions[]>("/menu/list", {}, { headers: { noLoading: true } })
  }
}

// * 用户退出登录
export const logoutApi = () => {
  if (process.env.NODE_ENV === "production") {
    return http.post(PORT1 + `/logout`)
  } else {
    return http.post("/logout")
  }
}
