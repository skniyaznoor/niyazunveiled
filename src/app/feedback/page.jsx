import FeedbackClient from './FeedbackClient';

export const metadata = {
  title: 'Reader Feedback',
  description: 'Share your thoughts about Coffee? and the stories of Sk Niyaz Noor.',
  alternates: { canonical: '/feedback' },
};

export default function FeedbackPage() {
  return <FeedbackClient />;
}
