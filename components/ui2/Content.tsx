import ContentSection from './ContentSection';

export default function Content() {
    return (
        <div className="max-w-6xl mx-auto mt-36">
            <ContentSection
                text="Why stop now?"
                src="/videos/qnmockupvids/scrollfeed9.webm"
                poster=''
                order={1}
            />

            <ContentSection
                text="Don't stop exploring."
                poster='/thumbnails/explore.png'
                src="/videos/qnmockupvids/explore.webm"
                order={2}
            />

            <ContentSection
                text="Don't stop learning"
                poster='/thumbnails/articles.png'
                src="/videos/qnmockupvids/article.webm"
                order={1}
            />
            <ContentSection
                text="Know your interests."
                poster='/thumbnails/categories.png'
                src="/videos/qnmockupvids/findyourfavtopics.webm"
                order={2}
            />
            <ContentSection
                text={<><p>Afraid to speak?</p><p className='mt-6'>Afraid to share?</p><p className='mt-6'>Don&apos;t be.</p></>}
                poster='/thumbnails/share.png'
                src="/videos/qnmockupvids/shareyourthoughts.webm"
                order={1}
            />
            <ContentSection
                text="Go follow the trusted."
                poster='/thumbnails/follow.png'
                src="/videos/qnmockupvids/followcreatorsyoutrust.webm"
                order={2}
            />
        </div>
    );
}