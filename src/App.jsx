import React from 'react'
import Counter from './components/Counter/Counter'
import ToggleVisibility from './components/Toggle/Toggle'
import InputMirror from './components/InputMirror/InputMirror'
import SimpleForm from './components/SimpleForm/SimpleForm'
import BackgroundColorChanger from './components/BackgroundColorChanger/BackgroundColorChanger'
import TodoList from './components/TodoList/Todolist'
import LightDarkMode from './components/LightDarkMode/LightDarkMode'
import Stopwatch from './components/Stopwatch/Stopwatch'
import CharacterCounter from './components/CharacterCounter/CharacterCounter'
import RandomNumberGenerator from './components/RandomNumberGenerator/RandomNumberGenerator'

const App = () => {
  return (
<>
<div className='w-full md:max-w-2xl mx-auto'>
<Counter/>
<ToggleVisibility/>
<InputMirror/>
<SimpleForm/>
<BackgroundColorChanger/>
<TodoList/>
<LightDarkMode/>
<Stopwatch/>
<CharacterCounter/>
<RandomNumberGenerator/>
</div>
</>
  )
}

export default App