// Libs
import React, { Component } from 'react'

class Profile extends Component {

    render() {
        return (
            <React.Fragment>
                <section className="nes-container is-dark member-card" style={{
                    marginTop: '30px',
                    marginBottom: '30px',
                    marginLeft: '70px',
                    marginRight: '70px'
                }}>
                    <div className="avatar">
                        <img data-src="https://github.com/Tivakorn.png?size=80" alt="Core Member B.C.Rikko" className="" src="https://github.com/Tivakorn.png?size=80" />
                    </div>
                    <div className="profile">
                        <br />
                        <h4 className="name">Tivakorn Lubkim</h4>
                        <div>
                            <a href="https://github.com/tivakorn" target="_blank" rel="noopener" aria-label="github">
                                <i className="nes-icon github is-large"></i>
                            </a>
                            <a href="https://www.facebook.com/tivakorn.lubkim" target="_blank" rel="noopener" aria-label="facebook">
                                <i className="nes-icon facebook is-large"></i>
                            </a>
                            <a href="https://www.instagram.com/not_tivakorn" target="_blank" rel="noopener" aria-label="instagram">
                                <i className="nes-icon instagram is-large"></i>
                            </a>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Profile