import Items from './Items';
import SectionPlaylist from './SectionPlaylist';
import SectionSongs from './SectionSongs';
import Sidebar from './header/Sidebar';


function App() {
  return (
    <>
      <div className="w-screen h-screen overflow-y-scroll">
        <div className="flex flex-row">
          <div className="w-1/6">
            <div>
              <Sidebar />
            </div>
          </div>
          <div className="w-5/6 flex justify-center">
            <div className="w-5/6 mt-12">
              <Main />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}





//content
function Main() {
  return (
    <div className=" mt-2">
      <div className="flex gap-3"><Items /></div>
      <div>
        <SectionSongs
          title="START RADIO FROM A SONG"
          header="Quick picks"
          data={[
            {
              image: 'https://lh3.googleusercontent.com/j63oZF7bfObninPjN5xcZemMDVazwOcm2wfxBVVNCYqQuCW7cAVLhz_0z7gHu_cBeVV_ZzGaMVOW9dg=w544-h544-l90-rj',
              title: 'Ojo Dibandingke',
              desc: 'Farel Prayoga',
              onclick: () => { }

            },
            {
              image: 'https://lh3.googleusercontent.com/nAvx70XurAum4GVE681qBfXbwx8EVteM9kr747gTRvgfsnSWw96NoD9mBbp7cR9KGehyR_jBsTxFBiy1=w544-h544-l90-rj',
              title: 'Aiiya Susanti Perempuan...',
              desc: 'Risad Remix',
              onclick: () => { }

            },
            {
              image: 'https://lh3.googleusercontent.com/BxrY3GMzZ7142e2RMSU9mbGQzs71DX_JdIPUzFQRvVKotiXVISWOi_XBMzkV_KZnHwoBrWiybT72-cKM=w544-h544-l90-rj',
              title: 'Telolet Bus 2023',
              desc: 'jhonpy',
              onclick: () => { }

            },
            {
              image: 'https://lh3.googleusercontent.com/fHeULuPKUbxJpZnv6C2l6gFrV-FRPYIXUk446M_DAarfCuV5FXeqvTX2PUcjXUuiXk43ogeEjkfPZX8=w544-h544-l90-rj',
              title: 'Lagu Untuk Kamu',
              desc: 'alyssa dez..',
              onclick: () => { }

            },
            {
              image: 'https://lh3.googleusercontent.com/GIJ6TMt-6mjtTAza2IQDkefxjAtMnRo3hs9HFlyIH2NXiF9zWHmO_D-Z6BYvg-C4VJ7eRn4tyXTv9Js=w544-h544-l90-rj',
              title: 'Goyang Upin & Ipin',
              desc: 'sound Upin...',
              onclick: () => { }

            },
            {
              image: 'https://lh3.googleusercontent.com/PX6ggj-YQVAbRF9NaJIGNd-i6gJqwQsDh4P-DuCjx-4Ntf-7MtBf2liXGz2J6U40bhNvZL_wbP68FLTUFg=w544-h544-l90-rj',
              title: 'BANANA CHACHA',
              desc: ' 뽀로로',
              onclick: () => { }

            },
            {
              image: 'https://lh3.googleusercontent.com/2PEKttvUGbQ8z75b__E7kS0d3WH3Q4nxfbjchRwcpWkhHBgP2Vv6Fmmnh9zkqbDfCz8cUQ35Gu9MhbLvfg=w544-h544-l90-rj',
              title: 'Cicak Cicak di Dinding',
              desc: 'Lagu Anak',
              onclick: () => { }

            },
            {
              image: 'https://lh3.googleusercontent.com/D2n-GVIDpkoaUFaffO51zrZ5qM_FDEoi4o__v2dXJ21MT3H6AllTBQVa7OFyT1a8AAjkxUJlFXqapNkO_g=w544-h544-l90-rj',
              title: 'Marhaban Ya Ramadhan',
              desc: 'Keluarga Nahla',
              onclick: () => { }

            },
            {
              image: 'https://lh3.googleusercontent.com/D2n-GVIDpkoaUFaffO51zrZ5qM_FDEoi4o__v2dXJ21MT3H6AllTBQVa7OFyT1a8AAjkxUJlFXqapNkO_g=w544-h544-l90-rj',
              title: 'Marhaban Ya Ramadhan',
              desc: 'Keluarga Nahla',
              onclick: () => { }

            },
            {
              image: 'https://lh3.googleusercontent.com/D2n-GVIDpkoaUFaffO51zrZ5qM_FDEoi4o__v2dXJ21MT3H6AllTBQVa7OFyT1a8AAjkxUJlFXqapNkO_g=w544-h544-l90-rj',
              title: 'Marhaban Ya Ramadhan',
              desc: 'Keluarga Nahla',
              onclick: () => { }

            },
            {
              image: 'https://lh3.googleusercontent.com/D2n-GVIDpkoaUFaffO51zrZ5qM_FDEoi4o__v2dXJ21MT3H6AllTBQVa7OFyT1a8AAjkxUJlFXqapNkO_g=w544-h544-l90-rj',
              title: 'Marhaban Ya Ramadhan',
              desc: 'Keluarga Nahla',
              onclick: () => { }

            },
            {
              image: 'https://lh3.googleusercontent.com/D2n-GVIDpkoaUFaffO51zrZ5qM_FDEoi4o__v2dXJ21MT3H6AllTBQVa7OFyT1a8AAjkxUJlFXqapNkO_g=w544-h544-l90-rj',
              title: 'Marhaban Ya Ramadhan',
              desc: 'Keluarga Nahla',
              onclick: () => { }

            },
          ]}


        />
        <SectionPlaylist
          title="FOR YOU"
          header="Trending community playlists"
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
        <SectionPlaylist
          title="THE BEST INTERNATIONAL HITS RIGHT NOW"
          header="Today's International hits"
          data={[
            {
              image: 'https://lh3.googleusercontent.com/BCKtQMIeJNAVxSo6yEOX1YVH500wI-Ug3dXtaK1CiPWTGJmR5cJPOqLLqWO0ptz9WzR1EGJrxiGY0lY=w544-h544-l90-rj',
              title: 'RELEASED',
              desc: 'Swedish House Mafia,..',
              onClick: () => { }
            },
            {
              image: 'https://lh3.googleusercontent.com/kkQXiJPlLRZl1GuKdP-aVjp73ESs6YWo5XQwscVmdGhNIEnokxTgcQLb_n37Go-BGCNeYBSZNr2kcDo=w544-h544-l90-rj',
              title: 'Trending and viral',
              desc: 'Ziva magnolya',
              onClick: () => { }
            },
            {
              image: 'https://lh3.googleusercontent.com/yvnwrU2vN9GMzFd7uLICbgIMlO_20J0ePfXtyoeTMTbQk8YHAaZIqS5z4j8BnWkzC4wx62hp67JqcA=w544-h544-l90-rj',
              title: 'BEAT ON',
              desc: 'aespa, NewJeans, IVE, NMIXX',
              onClick: () => { }
            },
            {
              image: 'https://lh3.googleusercontent.com/jxk4ylciVafS1jV8gSs5kmKNMi_92KSNnTSZUo5BzmlbFYjkz81Uncikk7m_kAmHuBPqO7RX7SyAEQ=w544-h544-l90-rj',
              title: 'K-HITLIST',
              desc: 'NewJeans, IVE, IU, LE SSERAFIM',
              onClick: () => { }
            },
            {
              image: 'https://lh3.googleusercontent.com/D0SgMSzShvTcdvJUciiIwaWH2cXZxdZUA67XPyFQr9WWw4bYdfSR0dz9ZARwYeLmFBn2Ya5pqbbjgA=w544-h544-l90-rj',
              title: 'Animes Biggest Hits',
              desc: 'LISA, WANDS, TM NETWORK, BUM...',
              onClick: () => { }
            },
            {
              image: 'https://lh3.googleusercontent.com/YvccHBir70rkU7-ougquSFzn0EcOJWPSWm2ugOBKyt3bDMqAChrGYJMdNJ53bKMGpsR8C3ZyRA5WOBNT=w544-h544-l90-rj',
              title: 'Pop Certfied',
              desc: 'David Guetta, Ed Sheeran, Taylor...',
              onClick: () => { }
            },
          ]}
        />
      </div>
    </div>
  )
}


export default App
