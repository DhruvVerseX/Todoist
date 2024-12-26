"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Plus, Star, Calendar, Tag, MoreVertical } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function TodoList() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 p-4"
    >
      <motion.div 
        className="max-w-2xl mx-auto space-y-8"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Header */}
        <motion.div 
          className="text-center space-y-2"
          variants={item}
        >
          <motion.h1 
            className="text-4xl font-bold tracking-tight"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            My Tasks
          </motion.h1>
          <motion.p 
            className="text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Stay organized, stay productive
          </motion.p>
        </motion.div>

        {/* Add Task Input */}
        <motion.div variants={item}>
          <Card>
            <CardContent className="pt-6">
              <motion.div 
                className="flex gap-2"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <Input 
                  placeholder="Add a new task..." 
                  className="flex-1"
                />
                <motion.div whileTap={{ scale: 0.95 }}>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Task
                  </Button>
                </motion.div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Task Categories */}
        <motion.div 
          className="flex gap-2 overflow-x-auto pb-2"
          variants={item}
        >
          {["All Tasks", "Important", "Today", "Personal"].map((category, i) => (
            <motion.div
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="outline" className="rounded-full">
                {i === 1 && <Star className="h-4 w-4 mr-2 text-yellow-500" />}
                {i === 2 && <Calendar className="h-4 w-4 mr-2 text-blue-500" />}
                {i === 3 && <Tag className="h-4 w-4 mr-2 text-green-500" />}
                {category}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Tasks List */}
        <motion.div variants={item}>
          <Card>
            <CardHeader>
              <CardTitle>Tasks</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <AnimatePresence>
                {/* Completed Task */}
                <motion.div 
                  className="flex items-center space-x-4 p-4 bg-muted/50 rounded-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  layout
                >
                  <Checkbox checked />
                  <span className="flex-1 line-through text-muted-foreground">
                    Complete project presentation
                  </span>
                  <Badge variant="secondary">Done</Badge>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </motion.div>

                {/* High Priority Task */}
                <motion.div 
                  className="flex items-center space-x-4 p-4 rounded-lg border border-red-200 bg-red-50/50 dark:border-red-900/50 dark:bg-red-900/10"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  layout
                >
                  <Checkbox />
                  <div className="flex-1 space-y-1">
                    <div>Prepare for client meeting</div>
                    <div className="text-sm text-muted-foreground">Tomorrow at 10:00 AM</div>
                  </div>
                  <Badge variant="destructive">High Priority</Badge>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </motion.div>

                {/* Normal Task */}
                <motion.div 
                  className="flex items-center space-x-4 p-4 rounded-lg border"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  layout
                >
                  <Checkbox />
                  <div className="flex-1 space-y-1">
                    <div>Review weekly progress</div>
                    <div className="text-sm text-muted-foreground">Friday</div>
                  </div>
                  <Badge>Medium</Badge>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </motion.div>

                {/* Personal Task */}
                <motion.div 
                  className="flex items-center space-x-4 p-4 rounded-lg border border-green-200 bg-green-50/50 dark:border-green-900/50 dark:bg-green-900/10"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  layout
                >
                  <Checkbox />
                  <div className="flex-1 space-y-1">
                    <div>Gym workout</div>
                    <div className="text-sm text-muted-foreground">Today at 6:00 PM</div>
                  </div>
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    Personal
                  </Badge>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </motion.div>

                {/* Low Priority Task */}
                <motion.div 
                  className="flex items-center space-x-4 p-4 rounded-lg border"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  layout
                >
                  <Checkbox />
                  <div className="flex-1">Read new project documentation</div>
                  <Badge variant="secondary">Low Priority</Badge>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </motion.div>
              </AnimatePresence>
            </CardContent>
          </Card>
        </motion.div>

        {/* Summary */}
        <motion.div 
          className="text-center text-sm text-muted-foreground"
          variants={item}
        >
          <p>5 total tasks • 1 completed • 4 remaining</p>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

