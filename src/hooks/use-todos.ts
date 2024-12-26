"use client"

import { useState, useEffect } from 'react'

interface Todo {
  id: string
  text: string
  completed: boolean
  priority: "low" | "medium" | "high"
  category: "personal" | "work" | "shopping" | "all"
}

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([])

  // Load todos from localStorage on mount
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos')
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos))
    }
  }, [])

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (todo: Omit<Todo, 'id'>) => {
    setTodos(prev => [{
      ...todo,
      id: Date.now().toString()
    }, ...prev])
  }

  const toggleTodo = (id: string) => {
    setTodos(prev => 
      prev.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const deleteTodo = (id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  const updateTodo = (id: string, updates: Partial<Todo>) => {
    setTodos(prev => 
      prev.map(todo => 
        todo.id === id ? { ...todo, ...updates } : todo
      )
    )
  }

  return {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    updateTodo
  }
}

