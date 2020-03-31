import request from "@/util/request";
export default {
  // 创建模型规格
  createModel: ({ name = "", model = "", brand = "" }) =>
    request({
      url: "/stock/createModel",
      method: "post",
      data: {
        name,
        model,
        brand
      }
    }),
  // 更新模型
  updateModel: ({ _id = "", name = "", model = "", brand = "" }) =>
    request({
      url: "/stock/updateModel",
      method: "post",
      data: { _id, name, model, brand }
    }),
  // 查询商品模型
  getModel: ({ name = "", model = "", brand = "" }) =>
    request({
      url: "/stock/getModel",
      params: { name, model, brand }
    }),
  // 更新某一个出库表
  updateSell: ({ _id, surplusNumber, retail, totalRetail }) =>
    request({
      url: "/stock/updateSell",
      method: "post",
      data: { _id, retail, totalRetail, surplusNumber }
    }),
  // 修改某一个入库
  updateStock: ({ _id, price, totalPrice, totalNumber, surplusNumber }) =>
    request({
      url: "/stock/updateStock",
      method: "post",
      data: { _id, price, totalPrice, totalNumber, surplusNumber }
    }),
  // 搜索某一个
  searchOne: _id =>
    request({
      url: "/stock/searchOne",
      params: { _id }
    }),
  // 根据条件获取所有商品
  queryCondition: ({ name = "", model = "", brand = "", currentPage = 1 }) => {
    return request({
      url: "/stock/queryCondition",
      params: {
        name,
        model,
        brand,
        currentPage
      }
    });
  },

  // 库存采购
  purchase: ({
    importer_id = "",
    name = "",
    model = "",
    brand = "",
    surplusNumber = 0,
    totalNumber = 0,
    price = 0,
    totalPrice = 0
  }) =>
    request({
      url: "/stock/purchase",
      method: "post",
      data: {
        importer_id,
        name,
        model,
        brand,
        surplusNumber,
        totalNumber,
        price,
        totalPrice
      }
    }),
  // 出售
  sell: ({
    exporter_id = "",
    stock_id = "",
    sellNumber = "",
    surplusNumber = "",
    retail = "",
    totalRetail = ""
  }) =>
    request({
      url: "/stock/sell",
      method: "post",
      data: {
        exporter_id,
        stock_id,
        sellNumber,
        surplusNumber,
        retail,
        totalRetail
      }
    }),
  // 获取出售信息
  getSell: stock_id =>
    request({
      url: "/stock/getSell",
      params: { stock_id }
    })
};
