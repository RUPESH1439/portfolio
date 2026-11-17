import { FunctionComponent, useRef, useState } from 'react';
import TextArea from '../UI/TextArea';
import TextInput from '../UI/TextInput';
import emailjs from '@emailjs/browser';

const ContactMe: FunctionComponent = () => {
    const nameRef = useRef<HTMLInputElement | null>(null);
    const emailRef = useRef<HTMLInputElement | null>(null);
    const messageRef = useRef<HTMLTextAreaElement | null>(null);
    const [loading, setLoading] = useState(false);

    const sendMessage = async () => {
        try {
            setLoading(true);
            const from_email = emailRef?.current?.value;
            const from_name = nameRef?.current?.value;
            const message = messageRef?.current?.value;
            await emailjs.send(
                'service_y8arfp9',
                'template_tkgx2mk',
                {
                    from_email,
                    from_name,
                    message,
                },
                'sBnNJI9IfkMv-7al6',
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
            <div className="w-full md:w-[40%] mb-10">
                <span className="text-gray/70 text-sm">
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
                className={`bg-primary max-w-[140px] mt-6 py-1.5 rounded-lg text-background hover:bg-primary/80 text-xs font-medium `}
                onClick={sendMessage}
                disabled={loading}
            >
                SEND MESSAGE
            </button>
        </div>
    );
};

export default ContactMe;
