import React, { Component } from 'react';
import './style/news.css';

class News extends Component{
    state = {
        stories: [],
        topStories: []
    };

    componentDidMount(){
        let xhr = new XMLHttpRequest();

        //TODO 禁用浏览器跨域限制
        xhr.open('GET', 'http://news-at.zhihu.com/api/4/news/latest', true);
        xhr.send(null);
        xhr.onreadystatechange = () => {
            if(xhr.readyState == 4){
                if(xhr.status >= 200 && xhr.status <= 300 || xhr.status == 302){
                    let resp = JSON.parse(xhr.responseText);
                    this.setState({
                        stories: resp.stories,
                        topStories: resp.top_stories
                    });
                }
            }
        }
    }

    render() {
        const {topStories, stories} = this.state;
        return (
            <div className="latest-news">
                <section className="part1">
                    <div className="title">最热</div>
                    <div className="container">
                        {
                            topStories.map((item, i) => (
                                <div className="item-box" key={i}>
                                    <img src={ item.image } alt=""/>
                                    <div className="sub-title">{ item.title }</div>
                                </div>
                            ))
                        }
                    </div>
                </section>
                <section className="part2">
                    <div className="title">热门</div>
                    <div className="container">
                        {
                            stories.map((item, i) => (
                                <div className="item-box" key={i}>
                                    <img src={ item.images[0] } alt=""/>
                                    <div className="sub-title">{ item.title }</div>
                                </div>
                            ))
                        }
                    </div>
                </section>
            </div>
        );
    }
}

export default News;