import { Mockup } from '../Icons';
import Content from '../Content';

const DashBoard = () => {
  const config = {
    title: 'Your hub for teamwork',
    description:
      'Project discussions, important documents, free food anoucements; they all live tidely together in Team. With your team and information in one easily searchable place, collaborating online is as easy as collaborating in person.',
  };

  return (
    <section className="dashboard__section">
      <div className="container">
        <Content {...config} />
        <div className="mockup__container">
          <Mockup />
        </div>
      </div>
    </section>
  );
};

export default DashBoard;
