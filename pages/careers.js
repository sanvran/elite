import Head from 'next/head'
import Hero from './component/Layout/Hero'
const Careers = () => {
    return (
        <>
            <Head>
                <title>Careers - Elite Virtual Employee | Top Recruitment Agency | Cloud Technologies</title>
                <meta name="description" content="Elite Virtual Employee has reached such heights because of the trust our clients have shown and continue to show. Remote Staffing solutions, vendor management and many more services for your business to choose from. Experience excellence. Experience Elite Virtual Employee."/>
            </Head>
            <div className="main">
                <Hero title="Careers" imgPath="/assets/images/careers.jpg" />

                <section className="full__stack__whyHiring">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <h3 style={{ fontWeight: '100' }}><b>Prospects at Elite Virtual Employee.</b></h3>
                                <hr className="hr__line" />
                                <p>Being one of the leading remote staffing agencies has it owns perks. Our clients love us only because we’re just that good at delivering what we promise. But it is our remote employees who make it all happen and deserve the credit. Thus, not only do employees at Elite Virtual Employee get to be a part of revolutionizing projects with some of the top global organizations but also directly learn from business leaders and contribute to better products and services for everyone. Certain employees also get a chance to work with global clients in person and hence get an enticing chance of international travel. As we said, perks are real indeed. Become a proactive, skilled resource at Elite Virtual Employee and open yourself up to new, bigger opportunities. We make sure your work matters.</p><br />
                            </div>
                            <div className="col-lg-5 why__hiringRighImg">
                                <img src="/assets/images/career1.jpg" className="full__stackImg" alt="hire mobile app developer" />
                            </div>
                        </div>
                    </div>

                </section>
                <section className="full__stack__whyHiring" style={{ background: 'white' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 why__hiringRighImg">
                                <img src="/assets/images/career.jpg" className="full__stackImg" alt="hire mobile app developer" />
                            </div>
                            <div className="col-lg-7">
                                <h3 style={{ fontWeight: '100' }}><b>We are what we repeatedly do. Excellence is not an act, but a habit.</b></h3>
                                <hr className="hr__line" />
                                <p>Elite Virtual Employee has worked with clients across the globe on projects involving multidisciplinary requirements. With such important stakes, it’s natural that we hire only the best professionals. Talented individuals functioning as remote employees uphold our standards of excellence and deliver services that keep making our clients smile wider. Be a part of something bigger, something that’s worth striving towards. Achieve your goals, make an impact and experience excellence. Experience Elite Virtual Employee.</p><br />
                                <a href="mailto:info@skyhawkkinetic.com"><button className='services__button card__effect'>Join Now &nbsp;&nbsp; <i className="fa fa-arrow-right"></i> </button></a>
                            </div>

                        </div>
                    </div>

                </section>
            </div>




        </>
    );



}

export default Careers;