import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1B41",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  containerTask: {
    flex: 1,
    backgroundColor: "#1A1B1D",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    marginVertical: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 40,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#2C2D5E",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    color: "#FFFFFF",
  },
  inputTask: {
    backgroundColor: "#212121",
  },
  task: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#212121",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  taskText: {
    flex: 1,
    color: "#FFFFFF",
    marginLeft: 10,
    fontSize: 16,
  },
  taskTextCompleted: {
    flex: 1,
    color: "#34C759",
    marginLeft: 10,
    fontSize: 16,
    textDecorationLine: "line-through",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 60,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#34C759",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },
  footerText: {
    color: "#FFFFFF",
    marginTop: 20,
    fontSize: 14,
  },
  linkText: {
    color: "#34C759",
    fontWeight: "bold",
  },
});

export default styles;
