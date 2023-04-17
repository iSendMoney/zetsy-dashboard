export const ACTIONS = {
    BIZINFO:"biz-info",
    CUSINFO:"customer-info",
    SOCINFO:"social-info",
    SHOP:"shop"
  };
  
  export const initialShopState = {
    businessInfo:{},
    customerInfo:{},
    socialInfo:{},
    shop:{}
 };
  
  export const ShopReducer = (state, action) => {
    switch (action.type) {
      case ACTIONS.BIZINFO:
       
        return {
            ...state,
            businessInfo: action.payload
        };
      case ACTIONS.CUSINFO:
        return {
            ...state,
            customerInfo: action.payload
        };
      case ACTIONS.SOCINFO:
        return {
            ...state,
            socialInfo: action.payload
        };

      case ACTIONS.SHOP:
        return {
          ...state,
          shop: action.payload
        }
        }
  };
  