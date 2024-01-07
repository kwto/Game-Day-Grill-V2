// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Home from "@/app/home/page";

const App: React.FC = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      {/* Add more routes if needed */}
      <Redirect to={{ pathname: 'http://localhost:3000/home' }} />
    </Router>
  );
};

export default App;
