// frontend/src/pages/Dashboard.js
import React, { useEffect, useState } from "react";
import { PlusIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import axios from "axios";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: "", description: "" });
  const [editingTask, setEditingTask] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const userEmail = "gokulpubg007@gmail.com";

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/tasks/${userEmail}`)
      .then((res) => setTasks(res.data))
      .catch((err) => console.error("Error loading tasks", err));
  }, []);

  const handleCreateOrUpdate = () => {
    if (!newTask.title) return;

    if (editingTask) {
      axios
        .put(`http://localhost:5000/api/tasks/${editingTask._id}`, newTask)
        .then((res) => {
          setTasks(tasks.map((task) => (task._id === res.data._id ? res.data : task)));
          resetModal();
        })
        .catch((err) => alert("Failed to update task"));
    } else {
      axios
        .post("http://localhost:5000/api/tasks", {
          ...newTask,
          createdBy: userEmail,
        })
        .then((res) => {
          setTasks([...tasks, res.data]);
          resetModal();
        })
        .catch((err) => alert("Failed to create task"));
    }
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/api/tasks/${id}`)
      .then(() => setTasks(tasks.filter((task) => task._id !== id)))
      .catch((err) => alert("Failed to delete task"));
  };

  const openEditModal = (task) => {
    setEditingTask(task);
    setNewTask({ title: task.title, description: task.description });
    setShowModal(true);
  };

  const resetModal = () => {
    setNewTask({ title: "", description: "" });
    setEditingTask(null);
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-sky-50 p-6">
      <header className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-sm text-gray-500">Welcome back 👋</p>
        </div>
      </header>

      {/* Tasks */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tasks.map((task) => (
          <div key={task._id} className="bg-white rounded-xl shadow p-4 relative">
            <h3 className="font-semibold text-blue-800">{task.title}</h3>
            <p className="text-sm text-gray-600 mb-2">{task.description}</p>
            <div className="absolute top-2 right-2 flex gap-2">
              <PencilIcon
                className="h-5 w-5 text-blue-500 cursor-pointer"
                onClick={() => openEditModal(task)}
              />
              <TrashIcon
                className="h-5 w-5 text-red-500 cursor-pointer"
                onClick={() => handleDelete(task._id)}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Floating Add Button */}
      <button
        onClick={() => setShowModal(true)}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg"
      >
        <PlusIcon className="h-6 w-6" />
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              {editingTask ? "Edit Task" : "Add New Task"}
            </h2>
            <input
              type="text"
              placeholder="Title"
              value={newTask.title}
              onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
              className="w-full border rounded p-2 mb-3 focus:outline-none"
            />
            <textarea
              placeholder="Description"
              value={newTask.description}
              onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
              className="w-full border rounded p-2 mb-4 focus:outline-none"
            />
            <div className="flex justify-end gap-2">
              <button onClick={resetModal} className="px-4 py-2 bg-gray-200 rounded">
                Cancel
              </button>
              <button
                onClick={handleCreateOrUpdate}
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                {editingTask ? "Update" : "Create"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
