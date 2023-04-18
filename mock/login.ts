// 根据角色动态生成路由
import { MockMethod } from "vite-plugin-mock"

export default [
  {
    url: "/interface/login",
    method: "post",
    response: ({ body }: any) => {
      if (body.username === "admin") {
        return {
          success: true,
          code: 200,
          data: {
            access_token: "bqddxxwqmfncffacvbpkuxvwvqrhln"
          },
          msg: "成功"
        }
      } else {
        return {
          success: true,
          code: 200,
          data: {
            access_token: "unufvdotdqxuzfbdygovfmsbftlvbn"
          },
          msg: "成功"
        }
      }
    }
  },
  {
    url: "/interface/logout",
    method: "post",
    response: () => {
      return {
        success: true,
        code: 200,
        msg: "成功"
      }
    }
  }
] as MockMethod[]
