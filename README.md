
## 📋 **To-Do List Application**

### 🖥️ **Project Overview**
The **To-Do List Application** is a simple and interactive tool that allows users to organize their tasks efficiently. Designed with React.js, this project features a dynamic interface styled using CSS, offering a visually appealing and user-friendly experience.

---

### ✨ **Features**
1. **Add Tasks**: Users can type tasks into the input box and add them to their to-do list with a single click.
2. **Dynamic List Rendering**: Tasks are displayed instantly on the list after being added.
3. **Clear Input Field**: The input field resets after a task is added, ensuring a smooth user experience.
4. **Aesthetic Design**: The app incorporates radial gradients, playful fonts, and interactive elements for an engaging interface.

---

### 🛠️ **Technologies Used**
- **Frontend**: React.js
- **Styling**: CSS (custom and responsive design)
- **Font**: *Architect's Daughter* (Google Fonts)
- **Package Management**: NPM (via `package.json`)

---

### 📂 **Project Structure**
```
📦 To-Do List App
├── 📄 index.html         # The main HTML structure
├── 📄 index.js           # Entry point for the React application
├── 📄 styles.css         # Custom CSS for styling the app
├── 📄 App.jsx            # Main React component handling UI and logic
```

---

### 🎨 **Design Highlights**
#### **CSS Styles (styles.css):**
- **Container**: A centered, card-like structure with rounded corners and subtle shadows.
- **Heading**: A fun, tilted heading with bold colors to attract attention.
- **Input Field**: A styled input box with dashed underline and smooth border-radius transitions.
- **Button**: A minimalistic, soft-colored button with hover effects.
- **List Items**: Neatly aligned list items for tasks.

---

### 🚀 **How to Run**
1. Clone the repository or download the project files.
   ```bash
   git clone <https://github.com/sks01dev/To-Do-List>
   cd to-do-list-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm start
   ```
4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---


### 📜 **Code Highlights**
#### **App.jsx**
Handles the logic for dynamically adding and displaying tasks:
```jsx
const [items, setItems] = useState([]); 
const handleItem = () => {
  setItems((prevItems) => [...prevItems, tempItem]); 
};
<ul>{items.map((item, index) => <li key={index}>{item}</li>)}</ul>
```

#### **styles.css**
Defines the card-style design and radial gradients:
```css
body {
  background-color: #ffeaa7;
  font-family: "Architects Daughter", cursive;
}

.container {
  background: radial-gradient(#bfc0c1 7.2%, transparent 0);
  border-radius: 20px;
}
```

---

### 🙌 **Acknowledgements**
- Inspired by modern minimalist UI principles.
- Thanks to **React** for simplifying frontend development and **Google Fonts** for enhancing typography.

