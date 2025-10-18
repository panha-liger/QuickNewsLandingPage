import ContentSection from './ContentSection';

export default function Content() {
    return (
        <div className="max-w-6xl mx-auto mt-36">
            <ContentSection
                text="Why stop now?"
                src="/videos/qnmockupvids/scrollfeed9.mp4"
                order={1}
            />

            <ContentSection
                text="Don't stop exploring."
                src="/videos/qnmockupvids/explore.mp4"
                order={2}
            />

            <ContentSection
                text="Don't stop learning"
                src="/videos/qnmockupvids/article.mp4"
                order={1}
            />
            <ContentSection
                text="Know your interests."
                src="/videos/qnmockupvids/findyourfavtopics.mp4"
                order={2}
            />
            <ContentSection
                text={<><p>Afraid to speak?</p><p className='mt-6'>Afraid to share?</p><p className='mt-6'>Don&apos;t be.</p></>}
                src="/videos/qnmockupvids/shareyourthoughts.mp4"
                order={1}
            />
            <ContentSection
                text="Go follow the trusted."
                src="/videos/qnmockupvids/followcreatorsyoutrust.mp4"
                order={2}
            />
        </div>
    );
}