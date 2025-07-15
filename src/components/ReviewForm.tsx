import { useState } from 'react';
import { FiStar, FiUser, FiMessageSquare, FiArrowRight } from 'react-icons/fi';
import Header from "../UI/Header";

const ReviewForm = () => {
  const [reviewData, setReviewData] = useState({
    name: '',
    rating: 5,
    comment: '',
  });

  const handleSubmit = () => {
    const reviews = JSON.parse(localStorage.getItem('fixmyhome_reviews') || '[]');
    reviews.push(reviewData);
    localStorage.setItem('fixmyhome_reviews', JSON.stringify(reviews));
    setReviewData({ name: '', rating: 5, comment: '' });
    alert('Thanks for your review!');
  };



  return (
    <section id="reviews" className="py-16 px-4 sm:px-6 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Header
            icon={<FiStar />}
            label="Customer Feedback"
            title="Share Your"
            highlight="Experience"
            description="We value your opinion to help us improve our services"
          />
        </div>

        {/* Review Form */}
        <div className="max-w-2xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-8">
          <div className="space-y-6">
            {/* Name Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                <FiUser />
              </div>
              <input
                placeholder="Your Name"
                className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg pl-10 p-3 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                value={reviewData.name}
                onChange={(e) => setReviewData({ ...reviewData, name: e.target.value })}
              />
            </div>

            {/* Rating Select */}
         <div className="flex items-center gap-2">
  {[1, 2, 3, 4, 5].map((star) => (
    <button
      key={star}
      type="button"
      onClick={() => setReviewData({ ...reviewData, rating: star })}
      className="focus:outline-none"
    >
      <FiStar
        className={`w-6 h-6 transition-colors duration-200 ${
          star <= reviewData.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-500'
        }`}
      />
    </button>
  ))}
  <span className="ml-2 text-sm text-gray-300">
    {reviewData.rating} {reviewData.rating === 1 ? 'Star' : 'Stars'}
  </span>
</div>

            {/* Comment Textarea */}
            <div className="relative">
              <div className="absolute top-3 left-3 text-gray-400">
                <FiMessageSquare />
              </div>
              <textarea
                placeholder="Write your review here..."
                rows={5}
                className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg pl-10 p-3 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                value={reviewData.comment}
                onChange={(e) => setReviewData({ ...reviewData, comment: e.target.value })}
              />
            </div>

            {/* Submit Button */}
            <button
              className="w-full py-3 px-6 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center group"
              onClick={handleSubmit}
            >
              Submit Review
              <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>


      </div>
    </section>
  );
};

export default ReviewForm;