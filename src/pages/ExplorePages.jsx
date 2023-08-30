import SectionPlaylist from "../section/SectionPlaylist";
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Filter from "../FilterInExp";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import GenresItems from "../GenreItems";
import Label from "../Label";
import TrendingItems from "../TrendingItems";
import SectionVideos from "../section/SectionVideos";
//content
function ExplorePages() {
  return (

    <div>
      <div className="flex mt-24 gap-6">
        <Filter icon={<MusicNoteIcon />} label="New Release" />
        <Filter icon={<TrendingUpIcon />} label="Charts" />
        <Filter icon={<SentimentSatisfiedAltIcon />} label="Moods & genres" />
      </div>
      <div>
        <div className="mt-24">
          <Label title="New albums & singles" text="More" />
          <SectionPlaylist
            data={[
              {
                image: 'https://yt3.googleusercontent.com/QieF-BxjOtbYrJB8Ib6Mjyj7hvw7hhj-Zl7reSysEdhXmlIhK0dOuDR8g815Ecmg1JEl89hezWu3=s576',
                title: 'terbaru',
                desc: 'Gusti Dani Mauriska •',
                view: '193K Views',
                onClick: () => { }
              },
              {
                image: 'https://yt3.ggpht.com/kWunhzgkeZgo1ShuUN-zEzF2nUMx_gq1d_WPBHcDg5hwLjQQa31uXZqQeWedIdQ0XDDRr3EDZqoi=s576',
                title: 'gatau lagi galau',
                desc: 'Dhevita Wardani •',
                view: '290K Views',
                onClick: () => { }
              },
              {
                image: 'https://yt3.googleusercontent.com/3EA7jTsoVOlVlB_PGVCVsQWPXrEkNhgPtd2JPkDMycAX3rvbOClhv2rR292teE_of3J2YwFb1A=s576',
                title: 'Musik Masakini',
                desc: 'Randy Yudha •',
                view: '166K Views',
                onClick: () => { }
              },
              {
                image: 'https://yt3.ggpht.com/FqEW-vyHBdDrKVY8Q4xVo9cmsmFDtHAvWtIFDq505O2bRO4-OlGZxMnEl9PbkiIKFuB09m98vOAQ=s576',
                title: 'Indonesia',
                desc: 'Farkhan Liandra •',
                view: '359K Views',
                onClick: () => { }
              },
              {
                image: 'https://yt3.googleusercontent.com/9wl0TvsSi_v9ZPFC6Bs2bPLmkmMdNrlOPk8Su31lTujE2WyicfVKfYsCZ84rrQ0SvKcuSMoSOUV2=s576',
                title: 'Chill/Relax',
                desc: 'RexxLmaoo •',
                view: '143K Views',
                onClick: () => { }
              },
              {
                image: 'https://yt3.ggpht.com/Vu1yIWLY9zWPTbeZ-Pjv70NCVIEutZ2zY9dIdxjmmMxPB5kYfGyIPen-PWl52g9jVg4rq4gOjHY=s576',
                title: 'best Indo Song',
                desc: 'Sandy Winarto •',
                view: '216K Views',
                onClick: () => { }
              },
            ]}
          />
        </div>
        <div className="mt-24">
          <Label title="Moods & genres" text="More" />
          <div className="grid grid-cols-6 gap-5 mt-4 ">
            <GenresItems title="Chill " />
            <GenresItems title="Focus" />
            <GenresItems title="Sleep" />
            <GenresItems title="Blues" />
            <GenresItems title="Dance & Electonic" />
            <GenresItems title="Folk & Acoustic" />
            <GenresItems title="Indonesian Pop" />
            <GenresItems title="K-Pop" />
            <GenresItems title=" Commute" />
            <GenresItems title="Energy Boostres" />
            <GenresItems title="Feel Good" />
            <GenresItems title="Party" />
            <GenresItems title="Romance" />
            <GenresItems title="Sad" />
            <GenresItems title="Workout" />
            <GenresItems title="African" />
            <GenresItems title="Arabic" />
            <GenresItems title="Bollywood & Indian" />
            <GenresItems title="Classical" />
            <GenresItems title="Country & Americana" />
            <GenresItems title="Dangdut" />
            <GenresItems title="Decades" />
            <GenresItems title="Family" />
            <GenresItems title=" Hip-Hop" />
          </div>
        </div>
        <div className=" mt-24 h-80">
          <Label title="Moods & genres" text="More" />
          <div className="grid grid-cols-3">
            <TrendingItems
              image='https://images.unsplash.com/photo-1692607431186-e8d7837ad65b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80'
              number='1'
              title='BLACKPINK'
              subtitle='BLACKPINK'
            />
            <TrendingItems
              image='https://images.unsplash.com/photo-1692607431186-e8d7837ad65b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80'
              number='1'
              title='BLACKPINK'
              subtitle='BLACKPINK'
            />
            <TrendingItems
              image='https://images.unsplash.com/photo-1692607431186-e8d7837ad65b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80'
              number='1'
              title='BLACKPINK'
              subtitle='BLACKPINK'
            />
            <TrendingItems
              image='https://images.unsplash.com/photo-1692607431186-e8d7837ad65b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80'
              number='1'
              title='BLACKPINK'
              subtitle='BLACKPINK'
            />
            <TrendingItems
              image='https://images.unsplash.com/photo-1692607431186-e8d7837ad65b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80'
              number='1'
              title='BLACKPINK'
              subtitle='BLACKPINK'
            />
            <TrendingItems
              image='https://images.unsplash.com/photo-1692607431186-e8d7837ad65b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80'
              number='1'
              title='BLACKPINK'
              subtitle='BLACKPINK'
            />
            <TrendingItems
              image='https://images.unsplash.com/photo-1692607431186-e8d7837ad65b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80'
              number='1'
              title='BLACKPINK'
              subtitle='BLACKPINK'
            />
            <TrendingItems
              image='https://images.unsplash.com/photo-1692607431186-e8d7837ad65b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80'
              number='1'
              title='BLACKPINK'
              subtitle='BLACKPINK'
            />
            <TrendingItems
              image='https://images.unsplash.com/photo-1692607431186-e8d7837ad65b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80'
              number='1'
              title='BLACKPINK'
              subtitle='BLACKPINK'
            />
            <TrendingItems
              image='https://images.unsplash.com/photo-1692607431186-e8d7837ad65b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80'
              number='1'
              title='BLACKPINK'
              subtitle='BLACKPINK'
            />
            <TrendingItems
              image='https://images.unsplash.com/photo-1692607431186-e8d7837ad65b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80'
              number='1'
              title='BLACKPINK'
              subtitle='BLACKPINK'
            />
            <TrendingItems
              image='https://images.unsplash.com/photo-1692607431186-e8d7837ad65b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80'
              number='1'
              title='BLACKPINK'
              subtitle='BLACKPINK'
            />
          </div>
        </div>
        <div className="mt-24 mb-24">
          <Label title="New Music Videos" text="More" />
          <div className="grid grid-cols-3 gap-7 mt-3">
            <SectionVideos
            image='https://images.unsplash.com/photo-1692607431186-e8d7837ad65b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80'
            title='SENANDUNG RINDU - 3 NAHLA ( Official Music Video )'
            subtitle='Aishwa Nahla Karnadi • 206K views'
            />
            <SectionVideos
            image='https://images.unsplash.com/photo-1692607431186-e8d7837ad65b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80'
            title='SENANDUNG RINDU - 3 NAHLA ( Official Music Video )'
            subtitle='Aishwa Nahla Karnadi • 206K views'
            />
            <SectionVideos
            image='https://images.unsplash.com/photo-1692607431186-e8d7837ad65b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80'
            title='SENANDUNG RINDU - 3 NAHLA ( Official Music Video )'
            subtitle='Aishwa Nahla Karnadi • 206K views'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExplorePages