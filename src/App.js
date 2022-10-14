import 'bootstrap/dist/css/bootstrap.min.css';
import React,{ useState } from "react";
import Data from './data';
import List from './list';
import './App.css';

function App() {
    const [people,setPeople] = useState(Data);
  return (
    <main>
      <section className="container col-sm-6 mt-5 bg-danger">
        <div className="card">
            <div className="card-body text-center mx-auto">
                <h3> {people.length} birthdays today </h3>
                <List people={people} />
                <button onClick={() => setPeople([]) } className="btn btn-dark" > clear all</button>
            </div>
        </div>
      </section>
    </main>
  );
}

export default App;
