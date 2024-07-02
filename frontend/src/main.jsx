import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout.jsx";
import { ThemeProvider } from "./Context/ThemeContext.jsx";
import { SearchProvider } from "./Context/SearchContext.jsx";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./Context/AuthContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <AuthProvider>
      <SearchProvider>
        <BrowserRouter>
          <Layout>
            <App />
            <Toaster position="bottom-right" reverseOrder={false} />
          </Layout>
        </BrowserRouter>
      </SearchProvider>
    </AuthProvider>
  </ThemeProvider>
);
