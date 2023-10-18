import './normalize.css';
import Layout from './components/layout';
import Details from './components/Details';
import WorkExperience from './components/WorkExperience';
import styled from 'styled-components';
export default function App() {
  return (
    <Layout 
      left = {
        <div>
          <Details />
          <WorkExperience/>
          
        </div>
      }
      right = {
        <div>right side</div>
      }
      />
  )
}


