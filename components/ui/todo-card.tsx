import X from "@/assets/icons/x.svg";
import Image from "next/image";
import axios from "axios";

type TodoCardProps = {
  _id: string;
  title: string;
};

export default function TodoCard({ _id, title }: TodoCardProps) {
  const deleteTask = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/delete-task`,
        {
          data: { id: _id },
        }
      );
      console.log(response.data);
      window.location.href = "/";
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-[40%] h-12 flex items-center justify-between px-5 bg-gray-700 rounded-md">
      <h1 className="text-center text-2xl font-bold text-white">{title}</h1>
      <div className="flex items-center gap-2">
        <Image
          src={X}
          alt="x"
          width={20}
          height={20}
          className="cursor-pointer hover:scale-110 transition-all"
          onClick={deleteTask}
        />
      </div>
    </div>
  );
}
