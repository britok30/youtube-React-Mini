import React from "react";

const VideoDetail = ({ video }) => {
    if (!video) {
        return <div>Loading...</div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <div>
            <div className="ui embed">
                <iframe title= "video vlayer" src={videoSrc} frameBorder="0" />
            </div>
            <div
                className="ui segment"
                style={{ background: "#000", border: "1px solid #fff" }}
            >
                <h4 className="ui header" style={{ color: "#fff" }}>
                    {video.snippet.title}
                </h4>
                <p style={{ color: "#fff" }}>{video.snippet.description}</p>
            </div>
        </div>
    );
};

export default VideoDetail;
