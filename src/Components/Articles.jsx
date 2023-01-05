import React from 'react'
import Article from './Article'
import img1 from '../images/article-1.jpg'
import img2 from '../images/article-2.jpg'
import img3 from '../images/article-3.jpg'

export default function Articles() {
  
    return (
    <div className='article'>
        <div className="article-title">
            <h2>Articles & News</h2>
            <a href='https://medium.com/front-end-weekly' className="article-btn"><button className='getInTouch'>Browse Articles</button></a>
        </div>
        <div className="article-wrapper">
            <Article 
                img={img1}
                title="How to settle the React memoization debate"
                link="https://medium.com/front-end-weekly/how-to-use-memoization-in-react-6ac93c00418c"
                date="Nov 4, 2022"
            />
            <Article 
                img={img2}
                title="How does React Native work? Understanding the architecture"
                link="https://medium.com/front-end-weekly/how-does-react-native-work-understanding-the-architecture-d9d714e402e0"
                date="Nov 11, 2022"
            />
            <Article 
                img={img3}
                title="How to write a simple JSON visualizer using JointJS+"
                link="https://medium.com/front-end-weekly/how-to-write-a-simple-json-visualizer-using-jointjs-fb40b89d4e7"
                date="Nov 1, 2022"
            />
        </div>
    </div>
  )
}
