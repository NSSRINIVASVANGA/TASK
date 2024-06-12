import React from 'react'

const TextContext = React.createContext({
  taskList: [],
  optionsList: [],
  activeOption: '',
  activeValue: '',
  addTask: () => {},
  takeTask: () => {},
  chageOption: () => {},
  buttonClicked: () => {},
})

export default TextContext
