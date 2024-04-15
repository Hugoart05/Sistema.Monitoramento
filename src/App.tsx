import { ThemeProvider } from './context/ThemeContext/ThemeContext'
import AuthProvider from './context/AuthContext/AuthProvider'
import RoutesDefine from './routes'
import './App.css'
import IsAuthenticated from './components/Authentication/IsAuthenticated'
import Header from './components/Header'
function App() {

  return (
    <AuthProvider>
      <ThemeProvider>
        <IsAuthenticated >
            <Header/>
        </IsAuthenticated>
        <RoutesDefine />
      </ThemeProvider>
    </AuthProvider>
  )
}

export default App
