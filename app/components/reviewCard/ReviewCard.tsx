import { FaStar } from "react-icons/fa"
import './style.scss'

const ReviewCard = () => {
  return (
    <div className="reviewCard">
           <div className="reviw">
                    <div className="rating">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <div className="reviwer">
                      <h3>Reviewer Name</h3>
                      <span>Posted on {new Date().toLocaleDateString()}</span>
                    </div>
                    <div className="content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                        consectetur, risus at elementum faucibus, mauris lacus
                        consectetur velit, id dignissim neque nunc vitae velit.
                      </p>
                    </div>
                  </div>
    </div>
  )
}

export default ReviewCard