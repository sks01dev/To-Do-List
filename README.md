# 📝 To-Do List App (New Version)

## 🚀 Overview

This branch introduces a **new version** of the To-Do List app built with **React**. It allows users to interact with a list of tasks: **add new tasks** and **delete tasks** by clicking on them.

---

### 🎯 **Key Features**:
- **Add New Tasks**: Type in a task and click the **Add** button to add it to the list.
- **Delete Tasks**: Click on a task to remove it from the list.

---

## 🔧 **Components**

### `App.jsx`
- **Main component** responsible for managing the state of the app.
- Handles **adding** new tasks and **deleting** tasks.
- Passes the necessary functions (`handleChange` and `addItem`) and input value to the `InputArea` component.

---

### `InputArea.jsx`
- A **form** for entering new tasks.
- Includes an **input field** for typing and an **Add** button to trigger adding the task.
- Accepts props to handle the text change and task addition.

---

### `ToDoItem.jsx`
- Represents **individual tasks** in the list.
- Each task can be clicked to trigger the deletion of that specific task.
- Accepts props to handle task deletion (`onChecked`) and displays the task (`text`).

---

## ⚙️ **How It Works**

1. **User Input**:
   - Type a task in the input field and click the **Add** button.
   - The task is added to the list through the `addItem` function.

2. **Deleting Tasks**:
   - Click on a task in the list to **delete** it.
   - The task is removed by filtering it out using the `id` in the `deleteItem` function.

3. **State Management**:
   - **React state** (`useState`) is used to manage:
     - The value of the input field (`inputText`).
     - The list of tasks (`items`).

---

## 📈 **Next Steps**

- **Persistent Storage**: Add local storage support to keep tasks even after page reloads.
- **Styling**: Improve UI with custom CSS or styling libraries (e.g., Bootstrap, Material UI).
- **New Features**: Add task completion status, sorting options, or categorization.

---

## 🎨 **Conclusion**

This new version of the To-Do List app demonstrates essential **React concepts** like state management, props, and event handling. It provides a solid foundation for further **feature expansion** and **UI improvements**.
