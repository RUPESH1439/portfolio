import { FunctionComponent } from 'react';
import { SecondaryText } from '../UI';
import text from '@/text/en';
import { SectionTitle } from '../SectionTitle';

interface AboutMeProps {}

const AboutMe: FunctionComponent<AboutMeProps> = () => {
    return (
        <div>
            <SectionTitle index={1} title="About Me" />
            <SecondaryText text={text.about.intro} />
        </div>
    );
};

export default AboutMe;
