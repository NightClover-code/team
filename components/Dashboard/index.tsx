import { ArrowRightIcon, Mockup } from '../Icons';

const DashBoard = () => (
  <section className="dashboard__section">
    <div className="container">
      <div className="content">
        <h1>Your hub for teamwork</h1>
        <p>
          Project discussions, important documents, free food anoucements; they
          all live tidely together in Team. With your team and information in
          one easily searchable place, collaborating online is as easy as
          collaborating in person.
        </p>
        <div className="learn__more">
          <span>Learn more</span>
          <ArrowRightIcon />
        </div>
      </div>
      <div className="mockup__container">
        <Mockup />
      </div>
    </div>
  </section>
);

export default DashBoard;
