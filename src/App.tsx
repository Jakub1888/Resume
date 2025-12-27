import './App.css';
import { Card } from './components/Card';
import photo from './assets/photo.jpg';
import githubSvg from './assets/github.svg';
import linkedinSvg from './assets/linkedin.svg';
import { Anchor } from './components/Anchor';
import { ReactComponent as AngularLogo } from './assets/angular.svg';
import { ReactComponent as TypescriptLogo } from './assets/typescript.svg';
import { ReactComponent as NgrxLogo } from './assets/ngrx.svg';
import { ReactComponent as JestLogo } from './assets/jest.svg';
import { ReactComponent as NxLogo } from './assets/nx.svg';
import { ReactComponent as TailwindLogo } from './assets/tailwind.svg';
import { ReactComponent as RxjsLogo } from './assets/rxjs.svg';
import { ReactComponent as ReactLogo } from './assets/react.svg';

function App() {
  return (
    <main className="background-gradient min-h-screen overflow-x-hidden text-text-body">
      <section className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 gap-4 px-2 py-2 md:grid-cols-2 md:px-8 md:py-12">
        <div className="grid grid-cols-2 grid-rows-3 gap-4">
          <div className="col-span-2 row-span-2">
            <Card>
              <img
                src={photo}
                alt="Jakub Krasňan"
                className="mt-2 w-40 rounded-full"
              />
              <h1 className="pt-5 text-3xl font-bold">Jakub Krasňan</h1>
              <p className="text-lg">Frontend Developer</p>
              <a className="pt-1 text-sm" href="mailto:krasnan.jk@gmail.com">
                krasnan.jk@gmail.com
              </a>
              <p className="mb-2 text-sm">+421 911 640 039</p>
            </Card>
          </div>
          <Card>
            <Anchor
              link={{ src: 'https://github.com/Jakub1888', text: 'GitHub' }}
              image={{ src: githubSvg, alt: 'GitHub logo' }}
            />
          </Card>
          <Card>
            <Anchor
              link={{
                src: 'https://www.linkedin.com/in/jakub-kras%C5%88an-802a04248/',
                text: 'LinkedIn',
              }}
              image={{ src: linkedinSvg, alt: 'LinkedIn logo' }}
            />
          </Card>
        </div>

        <div className="grid grid-cols-2 grid-rows-3 gap-4">
          <div className="col-span-2">
            <Card>
              <div className="mx-2">
                <div className="flex flex-wrap gap-3 rounded-3xl border border-white/40 bg-white/20 p-4 backdrop-blur-md">
                  <AngularLogo width={50} height={50} />
                  <TypescriptLogo width={50} height={50} />
                  <NgrxLogo width={50} height={50} />
                  <JestLogo width={50} height={50} />
                  <NxLogo width={50} height={50} />
                  <TailwindLogo width={50} height={50} />
                  <RxjsLogo width={50} height={50} />
                  <ReactLogo width={50} height={50} />
                </div>
              </div>
            </Card>
          </div>

          <div className="col-span-2 row-span-2">
            <Card>
              <div className="w-full p-8">
                <h3 className="text-xl font-bold">Work Experience</h3>

                <ul>
                  <li className="mb-2">
                    <h4 className="text-md">
                      Frontend Developer, Solargis s. r. o. - Bratislava, Slovak
                      Republic
                    </h4>
                    <span className="font-light">July 2023 - Currently</span>
                  </li>
                  <li className="mb-2">
                    <h4 className="text-md">
                      Frontend Developer, Solargis s. r. o. - Bratislava, Slovak
                      Republic
                    </h4>
                    <span className="font-light">April 2022 - June 2023</span>
                  </li>
                  <li className="mb-2">
                    <h4 className="text-md">
                      Programmer, DATALAN, a.s. - Bratislava, Slovak Republic
                    </h4>
                    <span className="font-light">April 2021 - March 2022</span>
                  </li>
                </ul>

                <h3 className="pt-8 text-xl font-bold">Education</h3>
                <p>
                  English Language and Culture in Professional Communication,
                  University of Ss. Cyril and Methodius in Trnava
                </p>
                <span className="font-light">
                  2015 - 2020, Trnava, Slovak Republic
                </span>

                <p className="w-full pt-8">
                  <Anchor
                    link={{
                      src: 'https://drive.google.com/file/d/11o8hyd-Ge9PEH3prcfJpVcXIAekb5llf/view?usp=sharing',
                      text: 'Full Resumé in PDF format',
                    }}
                  />
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
