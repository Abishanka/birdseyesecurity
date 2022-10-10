import logo from './logo.svg';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import { CSVLink } from "react-csv";

const data = [
  {alarmPoint: "something", alarmTag: "something", tagNotes: "something"},
  {alarmPoint: "something", alarmTag: "something", tagNotes: "something"},
  {alarmPoint: "something", alarmTag: "something", tagNotes: "something"},
  {alarmPoint: "something", alarmTag: "something", tagNotes: "something"},
  {alarmPoint: "something", alarmTag: "something", tagNotes: "something"}
];

const headers = [
  {label: 'Alarm Point: ', key: 'alarmPoint'},
  {label: 'Alarm Tag: ', key: 'alarmTag'},
  {label: 'Tag Notes: ', key: 'tagNotes'}
]

const csvReport = {
  filename: 'Report.csv',
  headers: headers,
  data: data
}

function App() {
  return (
    <div className="App">
      <CSVLink {...csvReport}>Export to CSV</CSVLink>
      <Header></Header>
      <Body></Body>
    </div>
  );
}

export default App;
