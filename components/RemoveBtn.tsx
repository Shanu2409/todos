"use client";

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";
import toast, { Toaster } from 'react-hot-toast';

export default function RemoveBtn({ id } : any) {
  const router = useRouter();
  const removeTopic = async () => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      const res = await fetch(`http://0.0.0.0:80/api/topics?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        toast.success('Successfully Deleted!');
        router.refresh();
      }
    }
  };

  return (
    <button onClick={removeTopic} className="text-red-400">
      <HiOutlineTrash size={24} />
      <Toaster />
    </button>
  );
}