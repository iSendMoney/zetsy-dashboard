import axios from "axios";

export async function getStore(token) {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    const response = await axios.get(
      `${import.meta.env.VITE_PRODUCT_MANAGEMENT_URI}/api/v1/store/user/${
        user._id
      }`
      // @note authorization for products are disabled on test
      // {
      //   headers: {
      //     // @note authorization token must include bearer
      //     // e.g. Authorization: `bearer ${token}`,
      //     Authorization: `${token}`,
      //   },
      // }
    );
    const { stores } = response.data;
    return stores;
  } catch (error) {
    throw error.response.data || "Failed to fetch";
  }
}
