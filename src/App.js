import logo from './logo.svg';
import './App.css';
import CardList from './CardList'
import { useState } from 'react'
import Form from './Form'
import Activities from './Activities'


const App = () => {
  const [cards, setCards] = useState([])
  const addNewCard = cardInfo => {
    setCards(cards.concat(cardInfo))
  }
  return (
    <div>
      <Form onSubmit={addNewCard} />
      <CardList cards={cards} />
      <Activities />
    </div>
  )
}

export default App;
