import Header from '../components/header'

const Home = () => (
  <>
    <Header />
   
  
    <div className="appHeader" style={{borderBottom: '0px solid #DCDCE9'}}>
    <div className="left">
      <div className="chip chip-danger ms-05 mb-05" style={{marginTop: '2px'}}>
        <span className="chip-label">Happy</span>
      </div>
    </div>
    <div className="pageTitle"><h1 alt="logo" className="logo" style={{fontSize: '28.5px', color: '#6236ffd4', maxHeight: '27.01px', cursor: 'pointer'}}>Alpha</h1></div>
    <div className="right">
    </div>
  </div>
  
  
  </>
)

export default Home
