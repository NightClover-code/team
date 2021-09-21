import Image from 'next/image';
import Author from '../Author';

const ArticleDetail = () => {
  const author = {
    avatar: {
      url: 'https://media.graphcms.com/zIPyLMdGTPuEfmMQfEbC',
    },
    description:
      'Travel evangelist. Coffee fanatic. Subtly charming introvert. Troublemaker. Writer.',
    name: 'Theresa Webb',
    publishDate: '9 january 2021',
  };

  return (
    <section className="article__detail">
      <div className="article__detail__header">
        <h1>10 secrets for managing a remote team</h1>
        <Author author={author} />
      </div>
      <div className="article__detail__body">
        <div className="img__container">
          <Image
            src="https://media.graphcms.com/C5mAVqJRnWMCT336RzsC"
            layout="fill"
            alt="random"
          />
        </div>
        <div className="article__body__container">
          <div className="content">
            <p>
              The “Doherty Report” is being sold as an economic & health model
              “created by experts” to move Australia from suppression to opening
              up and “living with Covid”.
            </p>
            <p>
              On the 19th of August, Premier Gladys Berejiklian said in the NSW
              daily update “as the Doherty Report says once you get to 80%
              double doses and you have to open up”. (9 mins 40 seconds).
            </p>
            <p>
              On the 23rd of August Prime Minister Morrison said in Parliament
              “The plan as we set out very clearly about…that when we reach 70%,
              and we reach 80%, we can move through to phase B of that plan,
              those marks have been set by the Doherty analysis that was
              undertaken Mr Speaker”.
            </p>
            <p>I spent a late evening reading it.</p>
            <p>
              Neither of these statements are true and the report is being
              misrepresented. The report is neither an economic model nor does
              it set any targets.
            </p>
            <p>
              It is a report commissioned by the National Cabinet to model
              health scenarios going from Phase A (where we are now- suppressing
              Covid) to Phase B (reducing lockdowns, ramping up flights into the
              country and reducing quarantine) of the National Plan with various
              levels of vaccination targets. Note that there is also Phase C and
              Phase D of opening up. The Doherty Report doesn’t look at these
              phases.
            </p>
            <p>
              Specifically, based on a set of assumptions, it models what daily
              new infections, workplace absenteeism from sickness, occupied ward
              beds, occupied ICU beds and daily deaths would look like under
              scenarios of 50%, 60%, 70% and 80% vaccination rates, for those
              aged 16 and above and based on two doses of vaccination for each
              person. About 80% of the Australian population are aged 16 and
              over, so these targets are actually 40%, 48%, 56% and 64% of the
              total population.
            </p>
            <p>It doesn’t look like anyone has actually read the report.</p>
            <p>They only run the simulation for 180 days.</p>
          </div>
          <div className="author__container">
            <div className="avatar__container">
              <Image
                src="https://media.graphcms.com/zIPyLMdGTPuEfmMQfEbC"
                alt="testimonial-avatar"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="author__content">
              <span>Written By</span>
              <h4>Robert Fox</h4>
              <p>
                CEO at Team. Author of the upcoming book on Team Management and
                Leadership.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleDetail;
