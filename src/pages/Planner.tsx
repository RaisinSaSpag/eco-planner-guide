import React, { useState } from 'react';
import { Calendar, Plus, CheckCircle, Circle, Trash2, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface Task {
  id: string;
  title: string;
  description: string;
  category: string;
  dueDate: string;
  completed: boolean;
  priority: 'Low' | 'Medium' | 'High';
}

interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  type: 'disposal' | 'collection' | 'reminder';
  location?: string;
}

const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Take old laptop to recycling center',
    description: 'Dell laptop from 2018 needs data wiping and proper disposal',
    category: 'Computers',
    dueDate: '2024-09-15',
    completed: false,
    priority: 'High'
  },
  {
    id: '2',
    title: 'Collect old phone chargers',
    description: 'Gather all unused phone chargers from drawers and desk',
    category: 'Components',
    dueDate: '2024-09-10',
    completed: true,
    priority: 'Medium'
  },
  {
    id: '3',
    title: 'Research tablet donation options',
    description: 'Find local schools that accept tablet donations',
    category: 'Mobile Devices',
    dueDate: '2024-09-20',
    completed: false,
    priority: 'Low'
  }
];

const mockEvents: CalendarEvent[] = [
  {
    id: '1',
    title: 'Electronics Collection Day',
    date: '2024-09-15',
    time: '10:00 AM',
    type: 'collection',
    location: 'Community Center'
  },
  {
    id: '2',
    title: 'Drop off at GreenTech Recycling',
    date: '2024-09-18',
    time: '2:00 PM',
    type: 'disposal',
    location: '123 Eco Street'
  },
  {
    id: '3',
    title: 'Battery disposal reminder',
    date: '2024-09-25',
    time: '9:00 AM',
    type: 'reminder'
  }
];

const Planner = () => {
  const [tasks, setTasks] = useState<Task[]>(mockTasks);
  const [events, setEvents] = useState<CalendarEvent[]>(mockEvents);
  const [isAddingTask, setIsAddingTask] = useState(false);
  const [isAddingEvent, setIsAddingEvent] = useState(false);
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    category: '',
    dueDate: '',
    priority: 'Medium' as Task['priority']
  });
  const [newEvent, setNewEvent] = useState({
    title: '',
    date: '',
    time: '',
    type: 'disposal' as CalendarEvent['type'],
    location: ''
  });

  const toggleTask = (taskId: string) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (taskId: string) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const addTask = () => {
    if (!newTask.title) return;
    
    const task: Task = {
      id: Date.now().toString(),
      title: newTask.title,
      description: newTask.description,
      category: newTask.category,
      dueDate: newTask.dueDate,
      completed: false,
      priority: newTask.priority
    };
    
    setTasks([...tasks, task]);
    setNewTask({ title: '', description: '', category: '', dueDate: '', priority: 'Medium' });
    setIsAddingTask(false);
  };

  const addEvent = () => {
    if (!newEvent.title || !newEvent.date) return;
    
    const event: CalendarEvent = {
      id: Date.now().toString(),
      title: newEvent.title,
      date: newEvent.date,
      time: newEvent.time,
      type: newEvent.type,
      location: newEvent.location || undefined
    };
    
    setEvents([...events, event]);
    setNewEvent({ title: '', date: '', time: '', type: 'disposal', location: '' });
    setIsAddingEvent(false);
  };

  const getPriorityColor = (priority: Task['priority']) => {
    switch (priority) {
      case 'High': return 'destructive';
      case 'Medium': return 'secondary';
      case 'Low': return 'default';
    }
  };

  const getEventTypeColor = (type: CalendarEvent['type']) => {
    switch (type) {
      case 'disposal': return 'secondary';
      case 'collection': return 'secondary';
      case 'reminder': return 'default';
    }
  };

  const completedTasks = tasks.filter(task => task.completed);
  const pendingTasks = tasks.filter(task => !task.completed);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">E-Waste Planner</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Organize your disposal activities and schedule e-waste management tasks
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">{pendingTasks.length}</div>
              <div className="text-sm text-muted-foreground">Pending Tasks</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-secondary">{completedTasks.length}</div>
              <div className="text-sm text-muted-foreground">Completed</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">{events.length}</div>
              <div className="text-sm text-muted-foreground">Scheduled Events</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-secondary">
                {Math.round((completedTasks.length / tasks.length) * 100) || 0}%
              </div>
              <div className="text-sm text-muted-foreground">Completion Rate</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* To-Do List */}
          <div>
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    To-Do List
                  </CardTitle>
                  <Dialog open={isAddingTask} onOpenChange={setIsAddingTask}>
                    <DialogTrigger asChild>
                      <Button size="sm">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Task
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Add New Task</DialogTitle>
                        <DialogDescription>
                          Create a new e-waste disposal task
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <Input
                          placeholder="Task title"
                          value={newTask.title}
                          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                        />
                        <Textarea
                          placeholder="Description (optional)"
                          value={newTask.description}
                          onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                        />
                        <div className="grid grid-cols-2 gap-4">
                          <Select value={newTask.category} onValueChange={(value) => setNewTask({ ...newTask, category: value })}>
                            <SelectTrigger>
                              <SelectValue placeholder="Category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Computers">Computers</SelectItem>
                              <SelectItem value="Mobile Devices">Mobile Devices</SelectItem>
                              <SelectItem value="Appliances">Appliances</SelectItem>
                              <SelectItem value="Components">Components</SelectItem>
                              <SelectItem value="Audio/Video">Audio/Video</SelectItem>
                            </SelectContent>
                          </Select>
                          <Select value={newTask.priority} onValueChange={(value) => setNewTask({ ...newTask, priority: value as Task['priority'] })}>
                            <SelectTrigger>
                              <SelectValue placeholder="Priority" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Low">Low</SelectItem>
                              <SelectItem value="Medium">Medium</SelectItem>
                              <SelectItem value="High">High</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <Input
                          type="date"
                          value={newTask.dueDate}
                          onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
                        />
                        <Button onClick={addTask} className="w-full">Add Task</Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
                <CardDescription>
                  Track your e-waste disposal activities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {tasks.map((task) => (
                    <div key={task.id} className={`p-4 rounded-lg border ${task.completed ? 'bg-muted/50' : 'bg-background'}`}>
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3 flex-1">
                          <button
                            onClick={() => toggleTask(task.id)}
                            className="mt-1"
                          >
                            {task.completed ? (
                              <CheckCircle className="h-5 w-5 text-primary" />
                            ) : (
                              <Circle className="h-5 w-5 text-muted-foreground" />
                            )}
                          </button>
                          <div className="flex-1">
                            <h4 className={`font-medium ${task.completed ? 'line-through text-muted-foreground' : ''}`}>
                              {task.title}
                            </h4>
                            {task.description && (
                              <p className="text-sm text-muted-foreground mt-1">
                                {task.description}
                              </p>
                            )}
                            <div className="flex items-center gap-2 mt-2">
                              <Badge variant={getPriorityColor(task.priority)} className="text-xs">
                                {task.priority}
                              </Badge>
                              {task.category && (
                                <Badge variant="outline" className="text-xs">
                                  {task.category}
                                </Badge>
                              )}
                              {task.dueDate && (
                                <div className="text-xs text-muted-foreground">
                                  Due: {new Date(task.dueDate).toLocaleDateString()}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => deleteTask(task.id)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Calendar */}
          <div>
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-secondary" />
                    Calendar Events
                  </CardTitle>
                  <Dialog open={isAddingEvent} onOpenChange={setIsAddingEvent}>
                    <DialogTrigger asChild>
                      <Button size="sm" variant="outline">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Event
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Schedule Event</DialogTitle>
                        <DialogDescription>
                          Add a disposal or collection event to your calendar
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <Input
                          placeholder="Event title"
                          value={newEvent.title}
                          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                        />
                        <div className="grid grid-cols-2 gap-4">
                          <Input
                            type="date"
                            value={newEvent.date}
                            onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                          />
                          <Input
                            type="time"
                            value={newEvent.time}
                            onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
                          />
                        </div>
                        <Select value={newEvent.type} onValueChange={(value) => setNewEvent({ ...newEvent, type: value as CalendarEvent['type'] })}>
                          <SelectTrigger>
                            <SelectValue placeholder="Event Type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="disposal">Disposal Drop-off</SelectItem>
                            <SelectItem value="collection">Collection Event</SelectItem>
                            <SelectItem value="reminder">Reminder</SelectItem>
                          </SelectContent>
                        </Select>
                        <Input
                          placeholder="Location (optional)"
                          value={newEvent.location}
                          onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
                        />
                        <Button onClick={addEvent} className="w-full">Schedule Event</Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
                <CardDescription>
                  Schedule disposal and collection activities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {events.map((event) => (
                    <div key={event.id} className="p-4 rounded-lg border bg-gradient-card">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-medium">{event.title}</h4>
                          <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {new Date(event.date).toLocaleDateString()}
                            </div>
                            {event.time && (
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                {event.time}
                              </div>
                            )}
                            {event.location && (
                              <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                {event.location}
                              </div>
                            )}
                          </div>
                          <Badge variant={getEventTypeColor(event.type)} className="text-xs mt-2">
                            {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planner;