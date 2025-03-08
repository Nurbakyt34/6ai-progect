
import Star from "../../assets/star.svg"


const ReviewCard = ({review}) => {
    return (
        <div  className="p-4 bg-white rounded-lg shadow">
            <div className="flex items-center space-x-4">
                <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full" />
                <div>
                    <h3 className="font-semibold">{review.name}</h3>
                    <p className="text-gray-500 text-sm">{review.date}</p>
                </div>
            </div>
            <p className="mt-2 text-gray-700">{review.text}</p>
            <div className="mt-2 text-yellow-500 text-lg flex">
                {new Array(review.rating).fill(Star).map( (svg, i) => (<img key={i} src={svg} alt="star" />))}
            </div>
        </div>
    )
}

export default ReviewCard;