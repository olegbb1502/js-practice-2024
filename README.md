
# 📚 Library App with Tailwind, Webpack, and JSON Server

This is a **Library App** project that allows users to manage a list of books, search for books, and rate them. The project demonstrates modern **frontend development techniques** using **Webpack**, **TailwindCSS**, and **JSON Server** to handle CRUD operations.

## 🚀 **Features**
- 📚 **Add, Edit, and Delete Books** 
- 🔍 **Search books by title or author**
- ⭐ **Rate books from 1 to 5 stars**
- 📂 **Data persistence** via **JSON Server**
- 🎉 **Fully responsive design** using **TailwindCSS**
- ⚡ **Live reload** with **Webpack Dev Server**

---

## 📂 **Project Structure**
```
📦 library-app
├── 📁 dist (Production build files)
│   ├── index.html
│   ├── style.css
│   └── bundle.js
├── 📁 src (Source files)
│   ├── 📁 css
│   │   └── style.css (Tailwind base styles)
│   ├── 📁 js
│   │   ├── book.js (Class for Book objects)
│   │   ├── library.js (Handles API requests for books)
│   │   ├── ui.js (Handles UI interactions and DOM updates)
│   │   └── index.js (Main entry point)
│   └── index.html (HTML structure)
├── 📄 package.json (Project dependencies and scripts)
├── 📄 webpack.config.js (Webpack configuration)
├── 📄 postcss.config.js (PostCSS configuration for Tailwind)
├── 📄 tailwind.config.js (Tailwind configuration file)
└── 📄 db.json (Mock database for JSON Server)
```

---

## 🛠️ **Technologies Used**
- **Webpack** - Module bundler for JS, CSS, and images
- **TailwindCSS** - Utility-first CSS framework
- **JSON Server** - Fake REST API for CRUD operations
- **PostCSS** - CSS transformations for Tailwind
- **MiniCssExtractPlugin** - Extracts CSS into separate files

---

## 📋 **Installation and Setup**

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/library-app.git
   cd library-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run JSON Server** (for API backend):
   ```bash
   npm run server
   ```

4. **Run development server**:
   ```bash
   npm start
   ```

---

## 🚀 **Available Scripts**

- **`npm start`** - Starts the development server with **live reload** on `http://localhost:3000/`
- **`npm run server`** - Starts the JSON Server on `http://localhost:5000/`
- **`npm run build`** - Creates a production-ready build in the **dist/** folder

---

## 📜 **Configuration Files**

### **webpack.config.js**
Handles the bundling of JavaScript, CSS, and HTML files.

```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    static: './dist',
    port: 3000,
    open: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
};
```

### **tailwind.config.js**
Tailwind configuration file that specifies the content paths for PurgeCSS.

```javascript
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### **postcss.config.js**
PostCSS configuration file used to run Tailwind transformations.

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
```

---

## 📋 **Usage**

1. **Add a Book**:
   - Fill in the form for **title**, **author**, and **rating**.
   - Click the **Add Book** button to add the book to the list.
   - The book will be saved in the **JSON Server** database.

2. **Search for Books**:
   - Type the title or author in the **search bar** to filter the book list.

3. **Rate a Book**:
   - Click the rating input to set the rating from **1 to 5 stars**.

4. **Delete a Book**:
   - Click the **delete button** next to a book to remove it.

---

## 🛠️ **Customization**

If you'd like to customize Tailwind, modify the **tailwind.config.js** file.

```javascript
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        customBlue: '#1da1f2',
      },
    },
  },
  plugins: [],
}
```

After changes, rebuild the project:

```bash
npm run build
```

---

## 🤝 **Contributing**

1. **Fork the project**.
2. **Create a feature branch** (`git checkout -b feature/AmazingFeature`).
3. **Commit your changes** (`git commit -m 'Add some AmazingFeature'`).
4. **Push to the branch** (`git push origin feature/AmazingFeature`).
5. **Open a pull request**.

---

## 📜 **License**

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

---

## 📝 **Contact**

If you have any questions or suggestions, please feel free to open an issue or reach out to the developer.

Happy Coding! 🚀
