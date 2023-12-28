// App.js or your root component
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AidataPage from './pages/Aidata'; // Import your Aidata page component
import CourseListPage from './pages/CourseList'; // Create a page for displaying the list of courses

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/Aidata" component={AidataPage} />
        <Route path="/courses" component={CourseListPage} />
      </Switch>
    </Router>
  );
};

export default App;
