import api from "./api";
import AsyncStorage from "@react-native-async-storage/async-storage";

const getAuthToken = async () => {
  const token = await AsyncStorage.getItem("token");
  if (!token) throw new Error("Usuário não autenticado.");
  return token;
};

export const getTasksApi = async () => {
  const token = await getAuthToken();
  return api.get("/task", {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const addTaskApi = async (title) => {
  const token = await getAuthToken();
  return api.post(
    "/task",
    { title },
    { headers: { Authorization: `Bearer ${token}` } }
  );
};

export const updateTaskApi = async (id, data) => {
  const token = await getAuthToken();
  return api.put(`/task/${id}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const toggleTaskApi = async (id, data) => {
  const token = await getAuthToken();
  return api.put(`/task/${id}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const deleteTaskApi = async (id) => {
  const token = await getAuthToken();
  return api.delete(`/task/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
