import React,{useState} from 'react';
import "./Resource.css";
import Learningcard from './Learningcard';
import PlaylistCard from './PlaylistCard';
import Contests from './Contests';

const allfreecourses = [
  {imgUrl: "https://www.discudemy.com/image/promo.jpg",name: "DiscUdemy", url: "https://www.discudemy.com/"},
  {imgUrl: "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/ikqra03zdnggljdu5vv0",name: "Freecodecamp", url: "https://www.freecodecamp.org/"},
  {imgUrl: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_200x200-min.png",name: "GeeksforGeeks",url: "https://www.geeksforgeeks.org/"}
 
]
const allCompetitive = [
  {imgUrl: "https://i.pinimg.com/originals/c5/d9/fc/c5d9fc1e18bcf039f464c2ab6cfb3eb6.jpg",name: "CodeChef", url: "https://www.codechef.com/"},
  {imgUrl: "https://leetcode.com/static/images/LeetCode_Sharing.png",name: "LeetCode", url: "https://leetcode.com/"},
  {imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr1OYEuiIWgmnxoLpGoNF-SdX8GhxjgJF29q_Im7BH-Qab1PG43nffEWgoWkPtICTPtxo&usqp=CAU",name: "CodeForces", url: "https://codeforces.com/"},
  {imgUrl: "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png",name: "HackerRank",url: "https://www.hackerrank.com/"},
]

const Resource = () => {
  const [freeCourses,setFreeCourses] = useState(allfreecourses);

    return(
        <div className="resource">
          <div className="resource_heading">
              <h1>Great Learning Stuff</h1>
          </div>
          <Contests/>
          <div className="freeLearing">
              <div className="freeLearning_heading">
            <h1>Free Courses</h1>
              </div>
            <div className="learningcards">
             {freeCourses.map((course) => (
                <Learningcard url={course.url} name={course.name} imgUrl={course.imgUrl}/>
             ))}
            </div>
          </div>
          <div className="freeLearing">
              <div className="freeLearning_heading">
            <h1>Competitive Coding Platform</h1>
              </div>
            <div className="learningcards">
            {allCompetitive.map((course) => (
              <Learningcard url={course.url} name={course.name} imgUrl={course.imgUrl}/>
            ))}
            </div>
          </div>


          <div className="freeLearing">
              <div className="youtube_heading">
            <img className="youtube_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/502px-Logo_of_YouTube_%282015-2017%29.svg.png" alt="" /> <span>Playlist</span>
              </div>
              <div className="learningcards">
            <PlaylistCard name="java"/>
            <PlaylistCard name="DATA STRUCTURE AND ALGORITHM"/>
            <PlaylistCard name="java"/>
            <PlaylistCard name="java"/>

              </div>
          </div>
        </div>
    )
}

export default Resource;
