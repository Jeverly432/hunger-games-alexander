import getMetadata from 'utils/get-metadata';
import Hero from 'components/pages/home/hero';
import About from 'components/pages/home/about';
import Solutions from 'components/pages/home/solutions';
import Action from 'components/pages/home/action';
import Feedback from 'components/pages/home/feedback';

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Solutions />
      <Feedback/>
      <Action />
    </>
  );
}

export default Home;

export async function generateMetadata() {
  return getMetadata({
    title: 'DevOptima - Revolutionize Your DevOps Journey',
    description: 'Empower teams to innovate faster through streamlined development, efficient automated workflows, and reliable scaling. Transform your DevOps practices with DevOptima.',
    pathname: '/'
  });
}
