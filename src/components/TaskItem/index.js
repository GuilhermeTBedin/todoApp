import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import styles from "../../styles/styles";

const TaskItem = ({ task, toggleTask, startEditTask, deleteTask }) => (
  <View style={styles.task}>
    <TouchableOpacity onPress={() => toggleTask(task._id, task.completed)}>
      <Feather
        name={task.completed ? "check-circle" : "circle"}
        size={24}
        color={task.completed ? "#34C759" : "#B0B0B0"}
      />
    </TouchableOpacity>
    <Text style={task.completed ? styles.taskTextCompleted : styles.taskText}>
      {task.title}
    </Text>
    <View style={styles.actions}>
      <TouchableOpacity onPress={() => startEditTask(task)}>
        <Feather name="edit" size={20} color="#B0B0B0" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => deleteTask(task._id)}>
        <Feather name="trash" size={20} color="#B0B0B0" />
      </TouchableOpacity>
    </View>
  </View>
);

export default TaskItem;
