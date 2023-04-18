// 根据角色动态生成路由
import { MockMethod } from "vite-plugin-mock"

export default [
  {
    url: "/interface/auth/button",
    method: "post",
    response: ({ headers }: any) => {
      if (headers["x-access-token"] === "bqddxxwqmfncffacvbpkuxvwvqrhln") {
        return {
          code: 200,
          msg: "成功",
          data: {
            useProTable: ["add", "batchAdd", "export", "batchDelete", "status"],
            authButton: ["add", "edit", "delete", "import", "export"]
          }
        }
      } else if (headers["x-access-token"] === "unufvdotdqxuzfbdygovfmsbftlvbn") {
        return {
          code: 200,
          msg: "成功",
          data: {
            useProTable: ["add", "batchDelete"],
            authButton: ["add", "edit", "delete", "import", "export"]
          }
        }
      }
    }
  }
] as MockMethod[]
