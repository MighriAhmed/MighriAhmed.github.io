import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Send, AlertCircle } from 'lucide-react';
import { siteConfig } from '../../content/site';
import { useLocale } from '../../i18n/useLocale';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const { t, locale } = useLocale();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === 'sending') return;

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const subject = String(data.get('subject') || '').trim();
    const message = String(data.get('message') || '').trim();

    if (!name || !email || !message) {
      setStatus('error');
      return;
    }

    setStatus('sending');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${siteConfig.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: subject
            ? `Portfolio — ${subject}`
            : `Portfolio contact — ${name}`,
          _template: 'table',
          _captcha: 'false',
          _replyto: email,
        }),
      });

      if (!response.ok) throw new Error(`FormSubmit failed: ${response.status}`);

      setStatus('sent');
      form.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate key={locale}>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm text-[var(--color-muted)]">{t('contact.name')}</span>
          <input
            required
            name="name"
            type="text"
            autoComplete="name"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-[var(--color-accent)]"
            placeholder={t('contact.namePh')}
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm text-[var(--color-muted)]">{t('contact.email')}</span>
          <input
            required
            name="email"
            type="email"
            autoComplete="email"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-[var(--color-accent)]"
            placeholder={t('contact.emailPh')}
          />
        </label>
      </div>
      <label className="block">
        <span className="mb-2 block text-sm text-[var(--color-muted)]">{t('contact.subject')}</span>
        <input
          name="subject"
          type="text"
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-[var(--color-accent)]"
          placeholder={t('contact.subjectPh')}
        />
      </label>
      <label className="block">
        <span className="mb-2 block text-sm text-[var(--color-muted)]">{t('contact.message')}</span>
        <textarea
          required
          name="message"
          rows={5}
          className="w-full resize-y rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-[var(--color-accent)]"
          placeholder={t('contact.messagePh')}
        />
      </label>

      {/* Honeypot anti-spam (hidden from users) */}
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <button type="submit" disabled={status === 'sending'} className="btn-primary" data-magnetic>
        <Send className="h-4 w-4" />
        {status === 'sending' ? t('contact.sending') : t('contact.send')}
      </button>

      <AnimatePresence>
        {status === 'sent' && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="inline-flex items-center gap-2 text-sm text-[var(--color-success)]"
          >
            <CheckCircle2 className="h-4 w-4" />
            {t('contact.sent')}
          </motion.p>
        )}
        {status === 'error' && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="inline-flex items-center gap-2 text-sm text-red-400"
          >
            <AlertCircle className="h-4 w-4" />
            {t('contact.error')}
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
