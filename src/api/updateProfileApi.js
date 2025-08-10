import axiosInstance from "./axiosInstance";

export const updateProfileApi = async (profileData) => {
  try {
    const response = await axiosInstance.put("/user/profile", profileData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};
