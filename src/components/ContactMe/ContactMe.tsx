import { FunctionComponent, useRef, useState } from 'react';
import TextArea from '../UI/TextArea';
import TextInput from '../UI/TextInput';
import emailjs from '@emailjs/browser';

interface ContactMeProps {
    NEXT_PUBLIC_EMAIL_SERVICE_ID?: string;
    NEXT_PUBLIC_EMAIL_TEMPLATE_ID?: string;
    NEXT_PUBLIC_EMAIL_KEY?: string;
}

export async function getStaticProps() {
    const {
        NEXT_PUBLIC_EMAIL_SERVICE_ID,
        NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
        NEXT_PUBLIC_EMAIL_KEY,
    } = process.env;
    return {
        props: {
            NEXT_PUBLIC_EMAIL_SERVICE_ID,
            NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
            NEXT_PUBLIC_EMAIL_KEY,
        },
    };
    // ...
}

const isInvalidString = (str?: string) => (str ?? '')?.length < 1;
const ContactMe: FunctionComponent<ContactMeProps> = (props) => {
    const nameRef = useRef<HTMLInputElement | null>(null);
    const emailRef = useRef<HTMLInputElement | null>(null);
    const messageRef = useRef<HTMLTextAreaElement | null>(null);
    const [loading, setLoading] = useState(false);

    const sendMessage = async () => {
        const {
            NEXT_PUBLIC_EMAIL_SERVICE_ID,
            NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
            NEXT_PUBLIC_EMAIL_KEY,
        } = props;

        try {
            setLoading(true);
            const from_email = emailRef?.current?.value;
            const from_name = nameRef?.current?.value;
            const message = messageRef?.current?.value;
            await emailjs.send(
                NEXT_PUBLIC_EMAIL_SERVICE_ID as string,
                NEXT_PUBLIC_EMAIL_TEMPLATE_ID as string,
                {
                    from_email,
                    from_name,
                    message,
                },
                NEXT_PUBLIC_EMAIL_KEY as string,
            );
        } catch (err) {
            console.log('err', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-1 flex-col px-8 overflow-y-hidden">
            <div className="mb-5 font-semibold text-2xl text-gray">
                {"Let's "}
                <span className="text-primary">talk</span>
            </div>
            <div className="w-[100%] md:w-[40%] mb-10">
                <span className="text-gray text-opacity-70 text-sm">
                    To request a quote or want to meet up for coffee, contact me
                    directly or fill out the form and I will get back to you
                    soon.
                </span>
            </div>
            <div className="flex flex-col gap-3">
                <TextInput label="Your Name" _ref={nameRef} />
                <TextInput label="Your Email" type="email" _ref={emailRef} />
                <TextArea label="Your Message" _ref={messageRef} />
            </div>
            <button
                className={`bg-primary max-w-[140px] mt-6 py-1.5 rounded-lg text-background hover:bg-opacity-80 text-xs font-medium `}
                onClick={sendMessage}
                disabled={loading}
            >
                SEND MESSAGE
            </button>
        </div>
    );
};

export default ContactMe;
