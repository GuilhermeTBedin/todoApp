import React from "react";
import { View, Text, FlatList } from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";
import TaskItem from "../components/TaskItem";
import useTasks from "../hooks/useTasks";
import styles from "../styles/styles";

export default function TaskScreen() {
  const {
    tasks,
    newTask,
    setNewTask,
    editingTask,
    inputRef,
    addTask,
    updateTask,
    toggleTask,
    deleteTask,
    startEditTask,
  } = useTasks();

  return (
    <View style={styles.containerTask}>
      <Text style={styles.text}>TODO APP</Text>
      <Input
        ref={inputRef}
        placeholder="Informe sua tarefa"
        value={newTask}
        onChangeText={setNewTask}
        placeholderTextColor="#B4B4B4"
        style={styles.inputTask}
      />
      <Button
        text={editingTask ? "Atualizar Tarefa" : "Adicionar Tarefa"}
        onPress={editingTask ? updateTask : addTask}
        textColor="#FFFFFF"
      />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            toggleTask={toggleTask}
            startEditTask={startEditTask}
            deleteTask={deleteTask}
          />
        )}
      />
    </View>
  );
}
