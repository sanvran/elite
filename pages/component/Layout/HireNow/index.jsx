import React from 'react'

function HireNow({ hireBtn, p1, p2, p3, p4, sub1, sub2, sub3, sub4, imgPath }) {
    return (
        <>
            <section className="contact-us-section ptb-100">
                <div className="container">
                    <div className="row justify-content-around">
                        <div className="col-md-7">
                            <div className="contact-us-content">
                                <h2>Why {hireBtn}?</h2> <hr className="hr__line" />
                                <ul className="list-unstyled tech-feature-list">
                                    <li className="py-1"><span className="ti-check-box mr-2 color-secondary" /><strong>{p1}</strong>
                                    <p style={{marginLeft: '23px'}}>{sub1}</p>
                                    </li>
                                    <li className="py-1"><span className="ti-check-box mr-2 color-secondary" /><strong>{p2}</strong>
                                    <p style={{marginLeft: '23px'}}>{sub2}</p>
                                    </li>
                                    <li className="py-1"><span className="ti-check-box mr-2 color-secondary" /><strong>{p3}</strong>
                                    <p style={{marginLeft: '23px'}}>{sub3}</p>
                                    </li>
                                    <li className="py-1"><span className="ti-check-box mr-2 color-secondary" /><strong>{p4}</strong>
                                    <p style={{marginLeft: '23px'}}>{sub4}</p>
                                    </li>
                                </ul><p></p>
                                <a href="contact" className="btn outline-btn align-items-center">{hireBtn} <span className="ti-arrow-right pl-2" /></a>

                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="contact-us-form gray-light-bg rounded p-4">
                                <img src={imgPath} alt={hireBtn} style={{ width: '100%' }} />
                            </div>
                        </div>

                    </div>
                </div>
            </section>


        </>
    )
}

export default HireNow
