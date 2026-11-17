import { ChangeEvent, FormEvent, FunctionComponent, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import TextArea from '../UI/TextArea';
import TextInput from '../UI/TextInput';
import { Button } from '../UI';
import { SectionTitle } from '../SectionTitle';
import SocialMediaLinks from '../SocialMediaLinks/SocialMediaLinks';

type Field = 'name' | 'email' | 'message';
type Values = Record<Field, string>;
type Errors = Partial<Record<Field, string>>;
type Status =
    | { kind: 'idle' }
    | { kind: 'sending' }
    | { kind: 'sent'; email: string }
    | { kind: 'failed' };

const emptyValues: Values = { name: '', email: '', message: '' };
const fieldOrder: Field[] = ['name', 'email', 'message'];
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validateField = (field: Field, value: string): string | undefined => {
    const trimmed = value.trim();
    switch (field) {
        case 'name':
            return trimmed ? undefined : 'Enter your name.';
        case 'email':
            if (!trimmed) return 'Enter your email address.';
            return emailPattern.test(trimmed)
                ? undefined
                : 'Enter an email address like name@example.com.';
        case 'message':
            return trimmed ? undefined : 'Write a message.';
    }
};

const validate = (values: Values): Errors => {
    const errors: Errors = {};
    for (const field of fieldOrder) {
        const error = validateField(field, values[field]);
        if (error) errors[field] = error;
    }
    return errors;
};

const ContactMe: FunctionComponent = () => {
    const [values, setValues] = useState<Values>(emptyValues);
    const [errors, setErrors] = useState<Errors>({});
    const [status, setStatus] = useState<Status>({ kind: 'idle' });
    const sending = status.kind === 'sending';

    const onChange =
        (field: Field) =>
        (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            const { value } = event.target;
            setValues((prev) => ({ ...prev, [field]: value }));
            // Once a field has an error, clear it as soon as it's fixed.
            if (errors[field]) {
                setErrors((prev) => ({
                    ...prev,
                    [field]: validateField(field, value),
                }));
            }
        };

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const nextErrors = validate(values);
        setErrors(nextErrors);
        const firstInvalid = fieldOrder.find((field) => nextErrors[field]);
        if (firstInvalid) {
            document.getElementById(`contact-${firstInvalid}`)?.focus();
            return;
        }

        setStatus({ kind: 'sending' });
        try {
            await emailjs.send(
                'service_y8arfp9',
                'template_tkgx2mk',
                {
                    from_email: values.email.trim(),
                    from_name: values.name.trim(),
                    message: values.message.trim(),
                },
                'sBnNJI9IfkMv-7al6',
            );
            setStatus({ kind: 'sent', email: values.email.trim() });
            setValues(emptyValues);
        } catch (err) {
            console.error('Contact form failed to send', err);
            setStatus({ kind: 'failed' });
        }
    };

    return (
        <section
            aria-labelledby="contact-title"
            className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16"
        >
            <div className="lg:col-span-5">
                <SectionTitle id="contact-title" title="Let’s work together" />
                <p className="mt-6 max-w-[44ch] type-lede text-slate">
                    Have a project in mind, or want to talk about a role? Send
                    me a message and I’ll get back to you soon.
                </p>
                <div className="mt-10">
                    <p className="mb-4 type-small text-muted">
                        You can also find me on
                    </p>
                    <SocialMediaLinks variant="list" />
                </div>
            </div>

            <form
                noValidate
                onSubmit={onSubmit}
                className="flex flex-col gap-5 lg:col-span-7 lg:max-w-xl"
            >
                <div className="grid gap-5 md:grid-cols-2">
                    <TextInput
                        id="contact-name"
                        name="name"
                        label="Name"
                        placeholder="Jane Cooper"
                        autoComplete="name"
                        value={values.name}
                        onChange={onChange('name')}
                        error={errors.name}
                    />
                    <TextInput
                        id="contact-email"
                        name="email"
                        type="email"
                        label="Email"
                        placeholder="jane@company.com"
                        autoComplete="email"
                        value={values.email}
                        onChange={onChange('email')}
                        error={errors.email}
                    />
                </div>
                <TextArea
                    id="contact-message"
                    name="message"
                    label="Message"
                    placeholder="Tell me about your project, or the role you’re hiring for."
                    value={values.message}
                    onChange={onChange('message')}
                    error={errors.message}
                />

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <Button type="submit" disabled={sending}>
                        {sending ? 'Sending…' : 'Send message'}
                    </Button>
                    <div
                        role="status"
                        aria-live="polite"
                        className="type-small"
                    >
                        {status.kind === 'sent' ? (
                            <p className="flex items-center gap-2 text-green">
                                <FiCheckCircle aria-hidden />
                                Message sent. I’ll reply to {status.email}.
                            </p>
                        ) : null}
                        {status.kind === 'failed' ? (
                            <p className="flex items-center gap-2 text-red">
                                <FiAlertCircle aria-hidden />
                                Your message didn’t send. Check your connection
                                and try again.
                            </p>
                        ) : null}
                    </div>
                </div>
            </form>
        </section>
    );
};

export default ContactMe;
