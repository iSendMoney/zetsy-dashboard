export const ACTIONS = {
  BIZINFO: "biz-info",
  CUSINFO: "customer-info",
  SOCINFO: "social-info",
  SHOP: "shop",
  ACTIVESHOP: "active-shop",
};

export const initialShopState = {
  businessInfo: {},
  customerInfo: {},
  socialInfo: {},
  shop: localStorage.getItem("shop")
    ? JSON.parse(localStorage.getItem("shop"))
    : {},
  activeShop: {},
};

export const ShopReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.BIZINFO:
      state.businessInfo = action.payload;
      return state;

    case ACTIONS.CUSINFO:
      state.customerInfo = action.payload;
      return state;

    case ACTIONS.SOCINFO:
      state.socialInfo = action.payload;
      return state;

    case ACTIONS.ACTIVESHOP:
      state.activeShop = action.payload;
      return state;

    case ACTIONS.SHOP:
      localStorage.setItem("shop", JSON.stringify(action.payload));
      state.shop = action.payload;
      return state;
  }
};
