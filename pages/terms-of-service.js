import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

function TermofServices() {
    return (
        <>
            <Head>
                <title>Term of Services</title>
            </Head>
            {/*header section start*/}
            <section className="hero-section ptb-100 gradient-overlay" style={{ background: 'url("/assets/images/contact_bg.jpg")no-repeat center center / cover' }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-7">
                            <div className="page-header-content text-white text-center pt-sm-5 pt-md-5 pt-lg-0">
                                <h1 className="text-white mb-0">Term of Services</h1>
                                <div className="custom-breadcrumb">
                                    <ol className="breadcrumb d-inline-block bg-transparent list-inline py-0">
                                        <li className="list-inline-item breadcrumb-item"><Link href="/">Home</Link></li>
                                        <li className="list-inline-item breadcrumb-item active">Term of Services</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*header section end*/}
            <section style={{ padding: '80px 0px' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h4>Website Terms and Conditions of Use</h4>

                            <h4>1. Terms</h4>

                            <p>By accessing this Website, accessible from https://skyhawkkinetic.com, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site. The materials contained in this Website are protected by copyright and trade mark law.</p>

                            <h4>2. Use License</h4>

                            <p>Permission is granted to temporarily download one copy of the materials on Elite Virtual Employee India Pvt. Ltd.'s Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>

                            <ul>
                                <li>modify or copy the materials;</li>
                                <li>use the materials for any commercial purpose or for any public display;</li>
                                <li>attempt to reverse engineer any software contained on Elite Virtual Employee India Pvt. Ltd.'s Website;</li>
                                <li>remove any copyright or other proprietary notations from the materials; or</li>
                                <li>transferring the materials to another person or "mirror" the materials on any other server.</li>
                            </ul>

                            <p>This will let Elite Virtual Employee India Pvt. Ltd. to terminate upon violations of any of these restrictions. Upon termination, your viewing right will also be terminated and you should destroy any downloaded materials in your possession whether it is printed or electronic format. </p>

                            <h4>3. Disclaimer</h4>

                            <p>All the materials on Elite Virtual Employee India Pvt. Ltd.’s Website are provided "as is". Elite Virtual Employee India Pvt. Ltd. makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, Elite Virtual Employee India Pvt. Ltd. does not make any representations concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked to this Website.</p>

                            <h4>4. Limitations</h4>

                            <p>Elite Virtual Employee India Pvt. Ltd. or its suppliers will not be hold accountable for any damages that will arise with the use or inability to use the materials on Elite Virtual Employee India Pvt. Ltd.’s Website, even if Elite Virtual Employee India Pvt. Ltd. or an authorize representative of this Website has been notified, orally or written, of the possibility of such damage. Some jurisdiction does not allow limitations on implied warranties or limitations of liability for incidental damages, these limitations may not apply to you.</p>

                            <h4>5. Revisions and Errata</h4>

                            <p>The materials appearing on Elite Virtual Employee India Pvt. Ltd.’s Website may include technical, typographical, or photographic errors. Elite Virtual Employee India Pvt. Ltd. will not promise that any of the materials in this Website are accurate, complete, or current. Elite Virtual Employee India Pvt. Ltd. may change the materials contained on its Website at any time without notice. Elite Virtual Employee India Pvt. Ltd. does not make any commitment to update the materials.</p>

                            <h4>6. Links</h4>

                            <p>Elite Virtual Employee India Pvt. Ltd. has not reviewed all of the sites linked to its Website and is not responsible for the contents of any such linked site. The presence of any link does not imply endorsement by Elite Virtual Employee India Pvt. Ltd. of the site. The use of any linked website is at the user’s own risk.</p>

                            <h4>7. Site Terms of Use Modifications</h4>

                            <p>Elite Virtual Employee India Pvt. Ltd. may revise these Terms of Use for its Website at any time without prior notice. By using this Website, you are agreeing to be bound by the current version of these Terms and Conditions of Use.</p>

                            <h4>8. Your Privacy</h4>

                            <p>Please read our Privacy Policy.</p>

                            <h4>9. Governing Law</h4>

                            <p>Any claim related to Elite Virtual Employee India Pvt. Ltd.'s Website shall be governed by the laws of in without regards to its conflict of law provisions.</p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default TermofServices
