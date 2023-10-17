import './normalize.css';
import Layout from './components/layout';
import styled from 'styled-components';
export default function App() {
  return (
    <Layout 
      left = {
        <div>left side</div>
      }
      right = {
        <div>right side</div>
      }
      />
  )
}


