
import Book from "../../assets/book.png"

const LessonCard = ({ level }) => {
  return (
    <div className="border rounded-sm p-4 shadow-md flex flex-col items-center relative w-100 h-110">
      <span className="absolute top-2 right-2 bg-[#7FA4CA] text-[#FFFFFF] text-xs px-2 py-1 ">
        Grammar
      </span>

    <img src={Book} alt="" />

      <h2 className="text-lg font-semibold mt-2">Грамматический урок</h2>
      <p className="text-gray-600">{level}</p>

      <button 
        className="bg-[#0561A3] text-white px-4 py-2 rounded mt-4"
        onClick={() => alert(`Переход к уроку ${level}`)}
      >
        Перейти к уроку
      </button>
    </div>
  );
};

export default LessonCard;
