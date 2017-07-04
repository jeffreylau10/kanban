import React, { Component } from 'react';
import moment from 'moment';

class CardDetails extends Component {
    render() {
        return (
        <section className="card-details js-card-details js-perfect-scrollbar ps-container">
            <div className="card-details-canvas">
                <div className="card-details-header">
                    <a className="fa fa-times-thin close-card-details js-close-card-details" href="#"></a>
                    <h2 className="card-details-title js-card-title">Standalone version / Docker: Always up-to-date, automatic trusted builds triggered when there is new commit.</h2>
                </div>
                <div className="card-details-items">
                    <div className="card-details-item card-details-item-members">
                        <h3 className="card-details-item-title">Members</h3>
                    </div>
                    <div className="card-details-item card-details-item-labels">
                        <h3 className="card-details-item-title">Labels</h3>
                        <a className="is-disabled" title="Change the labels for the card." href="#" aria-label="Change the labels for the card."><span className="card-label card-label-purple" title="Platforms">Platforms</span><span className="card-label card-label-black" title="Has newest Wekan">Has newest Wekan</span></a>
                    </div>

                </div>
                <h3 className="card-details-item-title">Description</h3>
                <div className="viewer">
                    <p><strong>Features only in Standalone version</strong></p>
                    <ul>
                    <li>Import from Trello</li>
                    </ul>
                    <hr />
                    <p><strong>Features only at Sandstorm</strong></p>
                    <ul>
                    <li>SSO logins like LDAP, passwordless email, SAML, GitHub and Google Auth</li>
                    <li>User admin</li>
                    <li>Boards in separate grains, only shared one or more users, no global access.</li>
                    <li>App Market</li>
                    <li>Clustering of servers</li>
                    </ul>
                </div>
                <hr />
                <h2>Checklists</h2><div className="card-checklist-items"></div>
                <hr />
                <h2>Activity</h2>
                <div className="activities js-sidebar-activities">
                    <div className="activity">
                        <a className="member js-member" title=" (xet7)" href="#" aria-label=" (xet7)">
                            <img className="avatar avatar-image" src="/cfs/files/avatars/RaoR77F6XrkXxWNmt/xet7.jpg" />
                        </a>
                        <p className="activity-desc">xet7 added this card to Platforms status now.
                            <span title="Wed Feb 08 2017 14:26:46 GMT+0800 (Malay Peninsula Standard Time)" className="activity-meta">5 months ago</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="ps-scrollbar-x-rail" style={{width: 40 + 'px', left: 0 + 'px', bottom: 3 + 'px'}}>
                <div className="ps-scrollbar-x" style={{left: 0 + 'px', width: 0 + 'px'}}></div>
            </div>
            <div className="ps-scrollbar-y-rail" style={{top: 0 + 'px', right: 3 + 'px'}}>
                <div className="ps-scrollbar-y" style={{left: 0 + 'px', height: 0 + 'px'}}></div>
            </div>
        </section>);

    }
}

export default CardDetails;