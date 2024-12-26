import TodoList from './todo-list'
import { Confetti } from './confetti'
import { useState } from 'react'

export default function Page() {
  const [showConfetti, setShowConfetti] = useState(false)
  
  return (
    <>
      <Confetti isActive={showConfetti} />
      <TodoList onComplete={() => setShowConfetti(true)} />
    </>
  )
}

