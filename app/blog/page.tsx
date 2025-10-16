
import { getImagePath } from '../utils/imagePath'


export default function BlogPage() {
  return (
    <div className="blog-page">
      <div className="blog-header-container">
        <h1 className="blog-title">Блог</h1>
      </div>

      <div className="blog-grid">
        {/* Blog Card 1 */}
        <div className="blog-card">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/2867e1a1545efb00bb085707846825b3102f0a0d?width=760" 
            alt="Blog post"
            className="blog-card-image"
          />
          <div className="blog-card-content">
            <div className="blog-card-category">12-ти юни</div>
            <h3 className="blog-card-title"> </h3>
          </div>
        </div>

        {/* Blog Card 2 */}
        <div className="blog-card">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/91b930012d1125605c3c7bf2c83f7334ef0f2bcd?width=760" 
            alt="Българският пазар на недвижими имоти в текущата динамична среда"
            className="blog-card-image"
          />
          <div className="blog-card-content">
            <div className="blog-card-category">12-ти юни</div>
            <h3 className="blog-card-title">Българският пазар на недвижими имоти в текущата динамична среда</h3>
          </div>
        </div>

        {/* Blog Card 3 */}
        <div className="blog-card">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/9cae5fd44d49f33e3ddbaa7a18a62577829fc64d?width=760" 
            alt="Инвестиция в морски имот"
            className="blog-card-image"
          />
          <div className="blog-card-content">
            <div className="blog-card-category">12-ти юни</div>
            <h3 className="blog-card-title">Инвестиция в морски имот</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
