"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from 'react-hot-toast';

export default function EditTopicForm({ id, title, description } : any) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();

  const handleSubmit = async (e : any) => {
    e.preventDefault();

    try {
      const res = await fetch(`todos-g0ik9zo28-shanu2409.vercel.app/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (res.ok) {
        toast.success('Successfully updated!');
      }
      else if (!res.ok) {
        toast.error('Something went wrong!');
        throw new Error("Failed to update topic");
      }

      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 bg-black text-white p-8 rounded-lg border border-slate-300 mt-5"
    >
      <input
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        className="border border-slate-500 px-8 py-2 bg-gray-900 placeholder-slate-400"
        type="text"
        placeholder="Topic Title"
      />

      <input
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
        className="border border-slate-500 px-8 py-2 bg-gray-900 placeholder-slate-400"
        type="text"
        placeholder="Topic Description"
      />

      <button
        type="submit"
        className="bg-green-600 font-bold py-3 px-6 w-fit rounded-lg text-white hover:bg-green-700 transition-colors"
      >
        Update Topic
      </button>
      <Toaster />
    </form>
  );
}