import React from 'react';
import MyForm from './components/MyForm';

function App() {
  const onSubmit = (form: {name: string, description: string}) => {
    console.log(form);
  }
  return (
    <div>
      <MyForm onSubmit={onSubmit}/>;
    </div>
  );
}

export default App;
