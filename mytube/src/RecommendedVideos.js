import React from 'react';
import VideoCard from './VideoCard';
import "./RecommendedVideos.css";

function RecommendedVideos() {
    return (
        <div className = "recommendedVideos">
            <h2>Recommended</h2>
            <div className="recommendedVideos_video">
                <VideoCard
                title = "NYCE goes VIRAL !!!"
                views = "3.1M views"
                timestamp = "1 day ago"
                channelImage = "https://www.mcgilltribune.com/wp-content/uploads/2018/02/groupwork_amandafiore_2018-3_LI.jpg"
                channel = "NYCE NYCE BABY"
                image = "https://www.mcgilltribune.com/wp-content/uploads/2018/02/groupwork_amandafiore_2018-3_LI.jpg"
                />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />


            </div>
        </div>
    )
}

export default RecommendedVideos