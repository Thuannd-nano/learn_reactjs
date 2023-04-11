import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function LearnEffect() {

  const [fullName, setFullName] = useState({ name: 'name', familyName: 'family' });
  const [title, setTitle] = useState('Test React');

  useEffect(() => {
    console.log('useEffect call');
    setFullName({ name: 'Thuan', familyName: 'Nano' });
  
  }, []);

  return (
    <div className="App">
        <h1>Title: {title}</h1>
            <h3>Name: {fullName.name}</h3>
            <h3>Family Name: {fullName.familyName}</h3>
    </div>
  );
}



export default LearnEffect;
