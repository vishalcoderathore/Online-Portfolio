import React from 'react';

class GithubList extends React.Component {

    componentDidMount() {
        GitHubActivity.feed({
            username: "vishalcoderathore",
            selector: "#feed",
            limit: 20
        });
    }
    render() {
        return (
            <div id="feed">
            </div>
        );
    }
};

export default GithubList;