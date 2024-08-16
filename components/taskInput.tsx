"use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import arrowRight from "../assets/icons/arrow-right.svg";
import { useState } from "react";
import axios from "axios";

export default function TaskInput() {
  const [title, setTitle] = useState("");

  const submitTask = async () => {
    const response = await axios.post("http://localhost:3000/api/post-task", {
      title,
    });
    if (response.status === 201) {
      setTitle("");
    }
    window.location.href = "/";
  };

  return (
    <div className="flex justify-center items-center gap-5">
      <Input
        placeholder="What needs to be done?"
        className="w-96 bg-gray-700 border-none"
        autoFocus
        onChange={(e) => setTitle(e.target.value)}
      />

      <Image
        src={arrowRight}
        alt="submit"
        width={30}
        height={30}
        className="cursor-pointer hover:scale-110 transition-all"
        onClick={submitTask}
      />
    </div>
  );
}
