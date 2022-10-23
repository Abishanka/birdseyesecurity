import Navbar from "./Navbar"
import EditAlarmData from "./pages/EditAlarmData"
import ChangePassword from "./pages/ChangePassword"
import SignIn from "./pages/SignIn"
import AlarmLog from "./pages/AlarmLog"
import Tutorial from "./pages/Tutorial"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<AlarmLog/>} />
          <Route path="/alarmlog" element={<AlarmLog/>} /> 
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/editalarmdata" element={<EditAlarmData/>} />
          <Route path="/changepassword" element={<ChangePassword/>} />
          <Route path="/tutorial" element={<Tutorial/>} />
        </Routes>
      </div>
    </>
  )
}

export default App

