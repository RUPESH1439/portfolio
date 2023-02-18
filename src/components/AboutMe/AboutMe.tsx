import { FunctionComponent } from 'react';
import { SecondaryText } from '../UI';
import text from '@/text/en';
import { SectionTitle } from '../SectionTitle';

interface AboutMeProps {}

const AboutMe: FunctionComponent<AboutMeProps> = () => {
    return (
        <div>
            <SectionTitle title="About Me" />
            <SecondaryText text={text.about.intro} styleClass="mt-5" />
        </div>
    );
};

export default AboutMe;
