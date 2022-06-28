import Head from 'next/head'
import Hero from './component/Layout/Hero'
import Testimonial from './component/Layout/Testimonial'
const testimonials = () => {
    return (
        <>
            <Head>
                <title>Client Testimonials Elite Virtual Employee.</title>
                <meta name="description" content="Client Testimonial Elite Virtual Employee." />
            </Head>
            <Hero title="Client Testimonial" />
            <div className="main">
                <div className="container cleint__testimonial">
                    <div className="row">
                    <div class="col-md-12"><div class="section-heading text-center mb-4"><h3> Testimonials Straight From the Heart!</h3><p class="lead">The Most by any Offshore Outsourcing Company in the World</p></div></div>
                    </div>
                </div>
                <div className="container testimonial__card">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card border-0 shadow-sm text-white">
                                <img
                                    src="/assets/images/clientpics/rob.jpeg"
                                    alt="video"
                                    className="img-fluid rounded shadow-sm"
                                />
                                <div className="card-img-overlay text-center">
                                    <a
                                        href="https://www.youtube.com/watch?v=bLUzAiFzwDw"
                                        className="popup-youtube video-play-icon color-bip shadow play__icon"
                                    >
                                        <span
                                            className="ti-control-play video__paly"
                                            style={{ background: "rgb(237 131 81 / 62%)" }}
                                        ></span>{" "}
                                    </a>
                                </div>
                            </div>
                            <div class="single-promo-block promo-hover-bg-1 shadow-lg mytabb">
                                <div class="promo-block-content">
                                    <h5>Rob Mandel &mdash; CEO, Team Before Self </h5><p>Thanks for sharing his experience with Elite Virtual Employee.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card border-0 shadow-sm text-white">
                                <img
                                    src="/assets/images/clientpics/namita.jpg"
                                    alt="video"
                                    className="img-fluid rounded shadow-sm"
                                />
                                <div className="card-img-overlay text-center">
                                    <a
                                        href="https://www.youtube.com/watch?v=edXQBShvl4g"
                                        className="popup-youtube video-play-icon color-bip shadow play__icon"
                                    >
                                        <span
                                            className="ti-control-play video__paly"
                                            style={{ background: "rgb(237 131 81 / 62%)" }}
                                        ></span>{" "}
                                    </a>
                                </div>
                            </div>
                            <div class="single-promo-block promo-hover-bg-1 shadow-lg mytabb">
                                <div class="promo-block-content">
                                    <h5>Namita Sarna &mdash; CEO (Fitness Group)</h5><p>Thanks for sharing her experience with Elite Virtual Employee.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card border-0 shadow-sm text-white">
                                <img
                                    src="/assets/images/clientpics/michel.jpeg"
                                    alt="video"
                                    className="img-fluid rounded shadow-sm"
                                />
                                <div className="card-img-overlay text-center">
                                    <a
                                        href="https://www.youtube.com/watch?v=Qy04dxIrCek"
                                        className="popup-youtube video-play-icon color-bip shadow play__icon"
                                    >
                                        <span
                                            className="ti-control-play video__paly"
                                            style={{ background: "rgb(237 131 81 / 62%)" }}
                                        ></span>{" "}
                                    </a>
                                </div>
                            </div>
                            <div class="single-promo-block promo-hover-bg-1 shadow-lg mytabb">
                                <div class="promo-block-content">
                                    <h5>Michael Gregory &mdash; CEO, 777Creditrepair </h5><p>Thanks for sharing his experience with Elite Virtual Employee.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Testimonial />
        </>
    )
}

export default testimonials
