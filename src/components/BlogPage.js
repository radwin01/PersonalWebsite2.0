import React from 'react';
import '../styling/scss/BlogPage.scss';

export default function BlogPage() {
    return (
        <div className="minihub">
            <h1>Yara's Hub</h1>
            <h3>Learn a little more about me here!</h3>

            <div className="favourites">
                <h2>My Favourite...</h2>

                <div className="quote-gallery">
                </div>
            </div>

            <div className="latests">
                <h2>The Latest...</h2>

            </div>

            <div className="blog-posts">
                <h2>Blog Posts</h2>
                coming soon...
            </div>
        </div>
    )
}