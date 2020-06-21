import React from 'react';
import PublicLayout from '../../../layouts/public';
import Banner from '../../components/banner';
import VideoSection from '../../components/videoSection';
import { eventsList, newsList } from '../../variables/blogList';
import BlogCard from '../../components/blogCard';
import bg_image_1 from '../../../images/big_image_1.jpg';

function Blog({ history }) {
  const heading = 'News and Events';
  const introText = 'Read our daily news and events of our luxury suites.';
  return (
    <PublicLayout history={history}>
      <Banner bg_media={bg_image_1} heading={heading} introText={introText} />

      <section className='padding' id='blog-news'>
        <div className='container'>
          <div className='row '>
            <div className='col-12 text-center'>
              <h2 className='heading'>News</h2>
            </div>

            {newsList.map((news) => (
              <div key={news.key} className='col-sm-12 col-md-6 col-lg-4'>
                <BlogCard
                  media={news.media}
                  category={news.category}
                  title={news.title}
                  text={news.text}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='padding' id='blog-events'>
        <div className='container'>
          <div className='row '>
            <div className='col-12 text-center'>
              <h2 className='heading'>Events</h2>
            </div>

            {eventsList.map((news) => (
              <div key={news.key} className='col-sm-12 col-md-6 col-lg-4'>
                <BlogCard
                  media={news.media}
                  category={news.category}
                  title={news.title}
                  text={news.text}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <VideoSection />
    </PublicLayout>
  );
}

export default Blog;
