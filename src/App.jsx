import './normalize.css';
import Layout from './components/layout';
import Details from './components/Details';
import WorkExperience from './components/WorkExperience';
import ProfileImage from './components/ProfileImage';
import Education from './components/Education';
import Skills from './components/Skills';
import Hobby from './components/Hobby';
import styled from 'styled-components';

export default function App() {
  return (
    <Layout 
      left = {
        <div>
          <Details />
          <WorkExperience/>
          <Hobby/>
        </div>
      }
      right = {
        <div>
          <ProfileImage/>
          <Education/>
          <Skills/>
        </div>
      }
      />
  )
}


