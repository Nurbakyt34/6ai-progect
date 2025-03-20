import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";



const LessonCard = ({ data }) => {
    const { t } = useTranslation();
    const { level, level_name, image, name } = data
    const navigate = useNavigate() // Замыкание
    return (
        <div className="border rounded-sm p-4 shadow-md flex flex-col items-center relative w-full max-w-sm sm:w-100 h-auto">
            <span className="absolute top-2 right-2 bg-[#7FA4CA] text-[#FFFFFF] text-xs px-2 py-1">
                {name}
            </span>
            <img className="w-full max-w-[300px] sm:w-[300px]" src={image} alt="" />
            <h2 className="text-lg font-semibold mt-2 text-center">{level_name}</h2>
            <p className="text-gray-600 text-center">{level}</p>
            <button
                className="bg-[#0561A3] text-white px-4 py-2 rounded mt-4 w-full sm:w-auto"
                onClick={() => {
                    navigate(`/videos`)
                }}
            >
                {t("go_to_lesson")}
            </button>
        </div>
    );
};

export default LessonCard;
