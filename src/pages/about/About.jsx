import './about.css'


export const About = () => {


    return (
        <div  className="about">
            <h3> Is Band Still Alive is a place where you can see statistic about "Acive Years" of music bands and artists</h3>
            <h4>Main idea is to visualise on a timeline chart activity years of Heavy Metal and Rock bands  </h4>
            <p> Bands names list taken from last.fm API </p>
            <p> Dates parsed from <a href="https://www.last.fm/"> last.fm  </a>  <a href="https://www.metal-archives.com/">  metal-archives </a> and  <a href="https://en.wikipedia.org/">  wikipedia </a>  </p>
            <p> Users can search and compare data on <a href='/search' >Search Page</a> </p>
            <p> Users have ability to modify and add new data in <a href='/admin' >Admin Page</a>  </p>

            <p>firebase realtime database , react google charts,  React ,axios and cheerio </p>
             </div>
    );
}