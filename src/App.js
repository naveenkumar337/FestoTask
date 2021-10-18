import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import CourseIndex from './Components/pages/Index';
import { GlobalProvider } from './Components/globalContext/GlobalState';
function App() {
	return (
		<div className="App">
			<GlobalProvider>
				<CourseIndex />
			</GlobalProvider>
		</div>
	);
}

export default App;
