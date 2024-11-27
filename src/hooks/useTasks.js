import { useState, useEffect, useRef } from "react";
import { Alert, Keyboard } from "react-native";
import {
  getTasksApi,
  addTaskApi,
  updateTaskApi,
  toggleTaskApi,
  deleteTaskApi,
} from "../services/taskApi";

const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editingTask, setEditingTask] = useState(null);
  const inputRef = useRef(null);

  // Função para buscar tarefas
  const fetchTasks = async () => {
    try {
      const response = await getTasksApi();
      setTasks(response.data);
    } catch (error) {
      console.error("Erro ao carregar tarefas:", error.message);
      Alert.alert("Erro", "Não foi possível carregar as tarefas.");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [tasks]);

  // Adicionar uma nova tarefa
  const addTask = async () => {
    if (newTask.trim() === "") return;

    try {
      const response = await addTaskApi(newTask);
      setTasks([...tasks, response.data]);
      setNewTask("");
      Keyboard.dismiss();
    } catch (error) {
      console.error("Erro ao adicionar tarefa:", error.message);
      Alert.alert("Erro", "Não foi possível adicionar a tarefa.");
    }
  };

  // Atualizar o texto da tarefa
  const updateTask = async () => {
    if (!editingTask || newTask.trim() === "") return;

    try {
      await updateTaskApi(editingTask._id, { title: newTask });
      setTasks(
        tasks.map((task) =>
          task._id === editingTask._id ? { ...task, title: newTask } : task
        )
      );
      setEditingTask(null);
      setNewTask("");
      Keyboard.dismiss();
    } catch (error) {
      console.error("Erro ao atualizar tarefa:", error.message);
      Alert.alert("Erro", "Não foi possível atualizar a tarefa.");
    }
  };

  // Alternar o estado de completada da tarefa
  const toggleTask = async (id, currentStatus) => {
    try {
      const response = await toggleTaskApi(id, { completed: !currentStatus });
      setTasks(
        tasks.map((task) =>
          task._id === id
            ? { ...task, completed: response.data.completed }
            : task
        )
      );
    } catch (error) {
      console.error("Erro ao alternar tarefa:", error.message);
      Alert.alert("Erro", "Não foi possível atualizar o status da tarefa.");
    }
  };

  // Deletar a tarefa
  const deleteTask = async (id) => {
    try {
      await deleteTaskApi(id);
      setTasks(tasks.filter((task) => task._id !== id));
    } catch (error) {
      console.error("Erro ao deletar tarefa:", error.message);
      Alert.alert("Erro", "Não foi possível deletar a tarefa.");
    }
  };

  // Iniciar edição de uma tarefa
  const startEditTask = (task) => {
    setEditingTask(task);
    setNewTask(task.title);
    inputRef.current.focus();
  };

  return {
    tasks,
    newTask,
    setNewTask,
    editingTask,
    inputRef,
    fetchTasks,
    addTask,
    updateTask,
    toggleTask,
    deleteTask,
    startEditTask,
  };
};

export default useTasks;
