import './about.css'


export const About = () => {


    return (
        <div  className="about">
            <h3> Is Band Still Alive is a place where you can see statistic about "Acive Years" of music bands and artists</h3>
            <h4>Main idea is to visualise on a timeline chart activity years of Heavy Metal bands   </h4>
            <p> bands names list taken from last.fm API </p>
            <p> dates parsed from <a href="https://www.last.fm/search?q=heavy+metal"> last.fm </a> <a href="https://www.metal-archives.com/"> metal-archives </a> and 
             <a href="https://en.wikipedia.org/wiki/Heavy_metal_music"> wikipedia </a>  </p>
             </div>
    );
}